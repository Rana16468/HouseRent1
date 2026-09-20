import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bold,
  Check,
  Eraser,
  Heading1,
  Heading2,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  MapPin,
  Navigation,
  PenLine,
  Quote,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { CostBreakdown } from "@/components/CostBreakdown";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input, NativeSelect, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DIVISIONS, findDistrict, findDivision, findThana } from "@/data/locations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addPost } from "@/lib/redux/postSlice";
import { closeCreatePost } from "@/lib/redux/uiSlice";
import {
  TENANT_LABEL,
  totalMonthlyCost,
  type ContactChannels,
  type ElectricityType,
  type GasType,
  type Post,
  type TenantType,
  type UtilityBreakdown,
} from "@/types/rental";
import { formatBdt } from "@/lib/utils";
import DeviceDetector from "device-detector-js";
import { getDeviceVisitorId } from "@/utility/getDeviceVisitorId";
import { useHouseListingMutation } from "@/lib/redux/features/postApi";
import { usePreferences } from "@/lib/i18n/preferences";

/**
 * NOTE: `address`, `liveLocationUrl` and `parking` are not part of the
 * `Post` type in your current types/rental.ts. This component works fine
 * at runtime, but for full type-safety add these to that file:
 *
 *   export type ParkingType =
 *     | "none" | "car" | "bike" | "car_and_bike" | "garage" | "street" | "not_available";
 *
 *   // on Post:
 *   address?: string;
 *   liveLocationUrl?: string;
 *   parking?: ParkingType;
 */
export type ParkingType =
  | "none"
  | "car"
  | "bike"
  | "car_and_bike"
  | "garage"
  | "street"
  | "not_available";

const PARKING_LABEL: Record<ParkingType, string> = {
  none: "No parking",
  car: "Car parking",
  bike: "Bike / motorcycle parking",
  car_and_bike: "Car & bike parking",
  garage: "Private garage",
  street: "Street parking",
  not_available: "Not available",
};

type ExtendedPost = Post & {
  address?: string;
  liveLocationUrl?: string;
  parking?: ParkingType;
};

const EMPTY_UTILITIES: UtilityBreakdown = {
  baseRent: 15000,
  gas: 800,
  gasType: "line",
  electricity: 1500,
  electricityType: "prepaid",
  water: 400,
  serviceCharge: 500,
};

const MAX_IMAGES = 5;
const CREATE_CATEGORIES = ["house_flat", "sublet_room"] as const;
type CreateCategory = (typeof CREATE_CATEGORIES)[number];

type FormState = {
  division: string;
  district: string;
  thana: string;
  area: string;
  useLiveLocation: boolean;
  address: string;
  liveLocationUrl: string;
  title: string;
  description: string; // stores HTML from the rich text editor
  category: CreateCategory;
  tenantType: TenantType;
  parking: ParkingType;
  utilities: UtilityBreakdown;
  images: File[]; // raw files, uploaded as multipart "photo" fields on submit
  phone: string;
  whatsapp: boolean;
  telegram: boolean;
  teams: boolean;
  imo: boolean;
  telegramHandle: string;
  teamsLink: string;
  availableFrom: string;
  pin: string;
};

const INITIAL: FormState = {
  division: "",
  district: "",
  thana: "",
  area: "",
  useLiveLocation: false,
  address: "",
  liveLocationUrl: "",
  title: "",
  description: "",
  category: "house_flat",
  tenantType: "family",
  parking: "none",
  utilities: EMPTY_UTILITIES,
  images: [],
  phone: "",
  whatsapp: true,
  telegram: false,
  teams: false,
  imo: true,
  telegramHandle: "",
  teamsLink: "",
  availableFrom: "",
  pin: "",
};

const STEPS = [
  { key: "location", label: "Location" },
  { key: "listing", label: "Listing" },
  { key: "costs", label: "Costs" },
  { key: "photos", label: "Photos" },
  { key: "contact", label: "Contact" },
] as const;

type StepKey = (typeof STEPS)[number]["key"];

/** Minimum length required for the secret PIN. Any character type is allowed. */
const MIN_PIN_LENGTH = 6;

/** Metadata captured about the submitting device/network. */
type SubmissionMeta = {
  os: string;
  browser: string;
  device: string;
  ipAddress: string;
};

const UNKNOWN_META: SubmissionMeta = {
  os: "Unknown",
  browser: "Unknown",
  device: "Unknown",
  ipAddress: "0.0.0.0",
};

/** Shape returned by houseListingIntoDb on the backend. */
type HouseListingResponse = {
  status: boolean;
  message: string;
  data?: {
    id: string;
    createdAt: string;
  };
};

export function CreatePostModal() {
  const { t } = usePreferences();
  const text = (key: Parameters<typeof t>[0], values: Record<string, string | number> = {}) =>
    Object.entries(values).reduce(
      (result, [name, value]) => result.replace(`{${name}}`, String(value)),
      t(key),
    );
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.createPostOpen);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [error, setError] = useState<string | null>(null);
  const [formVersion, setFormVersion] = useState(0); // bump to force-remount the editor on reset
  const [stepIndex, setStepIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const localizedSteps = STEPS.map((stepItem) => ({
    ...stepItem,
    label: t(stepItem.key === "location" ? "location" : stepItem.key === "listing" ? "title" : stepItem.key === "costs" ? "monthlyTotal" : stepItem.key === "photos" ? "addPhotos" : "phone"),
  }));

  const step = STEPS[stepIndex].key;
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === STEPS.length - 1;

  const division = findDivision(form.division || null);
  const district = findDistrict(form.division || null, form.district || null);
  const thana = findThana(
    form.division || null,
    form.district || null,
    form.thana || null,
  );

  const [houseListing] = useHouseListingMutation();

  const liveUtilities = useMemo(() => {
    const next = { ...form.utilities };
    if (next.gasType === "included") next.gas = 0;
    if (next.electricityType === "included") next.electricity = 0;
    return next;
  }, [form.utilities]);

  // Object-URL previews for the picked image files. Recomputed whenever the
  // files array changes, and always revoked on cleanup to avoid leaking
  // blob URLs.
  const imagePreviews = useMemo(
    () => form.images.map((file) => URL.createObjectURL(file)),
    [form.images],
  );
  useEffect(() => {
    return () => {
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);

  function patch(partial: Partial<FormState>) {
    setForm((prev) => ({ ...prev, ...partial }));
  }

  function patchUtilities(partial: Partial<UtilityBreakdown>) {
    setForm((prev) => ({
      ...prev,
      utilities: { ...prev.utilities, ...partial },
    }));
  }

  function resetWizard() {
    setForm(INITIAL);
    setFormVersion((v) => v + 1);
    setError(null);
    setStepIndex(0);
  }

  function close() {
    dispatch(closeCreatePost());
  }

  /**
   * Synchronous, never-throwing. Any failure inside DeviceDetector (e.g. an
   * unusual/unparseable user agent string) falls back to "Unknown" fields
   * instead of aborting the caller.
   */
  function getDeviceInfo(): Pick<SubmissionMeta, "os" | "browser" | "device"> {
    try {
      const detector = new DeviceDetector();
      const userAgent = navigator.userAgent;
      const result = detector.parse(userAgent);

      const os = result.os?.name ?? "Unknown";
      const browser = result.client?.name ?? "Unknown";

      // DeviceDetector gives type like "desktop", "smartphone", "tablet", etc.
      const rawType = result.device?.type ?? "desktop";
      const device = rawType.charAt(0).toUpperCase() + rawType.slice(1);

      return { os, browser, device };
    } catch (err) {
      console.error("Device detection failed, using fallback values:", err);
      return {
        os: UNKNOWN_META.os,
        browser: UNKNOWN_META.browser,
        device: UNKNOWN_META.device,
      };
    }
  }

  /**
   * Never-throwing. Applies a timeout so a slow/blocked network call can't
   * hang form submission indefinitely, and always resolves with a usable
   * fallback string on any failure.
   */
  async function getPublicIP(): Promise<string> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    try {
      const res = await fetch("https://api.ipify.org?format=json", {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`ipify responded with ${res.status}`);
      const ipData = await res.json();
      return typeof ipData?.ip === "string" ? ipData.ip : UNKNOWN_META.ipAddress;
    } catch (err) {
      console.error("Public IP lookup failed, using fallback value:", err);
      return UNKNOWN_META.ipAddress;
    } finally {
      clearTimeout(timeout);
    }
  }

  /** Combines both lookups with a shared safety net. */
  async function collectSubmissionMeta(): Promise<SubmissionMeta> {
    try {
      const deviceInfo = getDeviceInfo();
      const ipAddress = await getPublicIP();
      return { ...deviceInfo, ipAddress };
    } catch (err) {
      // Belt-and-suspenders: even if something unexpected throws above,
      // submission should never be blocked by metadata collection.
      console.error("Unexpected error collecting submission metadata:", err);
      return UNKNOWN_META;
    }
  }

  async function onFiles(files: FileList | null) {
    if (!files) return;
    const remaining = MAX_IMAGES - form.images.length;
    if (remaining <= 0) return;
    const picked = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, remaining);
    patch({ images: [...form.images, ...picked] });
  }

  function validateStep(key: StepKey): string | null {
    if (key === "location") {
      if (!form.division || !form.district || !form.thana) {
        return t("locationRequired");
      }
      if (form.useLiveLocation) {
        if (!form.liveLocationUrl.trim()) return t("liveLocationRequired");
      } else if (!form.address.trim()) {
        return t("addressRequired");
      }
      return null;
    }
    if (key === "listing") {
      if (!form.title.trim()) return t("titleRequired");
      if (!form.availableFrom) return t("dateRequired");
      return null;
    }
    if (key === "costs") {
      if (!form.utilities.baseRent || form.utilities.baseRent <= 0) {
        return t("rentRequired");
      }
      if (!form.utilities.gasType) return t("gasRequired");
      if (!form.utilities.electricityType) {
        return t("electricityRequired");
      }
      return null;
    }
    if (key === "photos") {
      return null; // optional
    }
    if (key === "contact") {
      if (!form.phone.trim()) return t("phoneRequired");
      if (form.pin.length < MIN_PIN_LENGTH) {
        return text("pinRequired", { count: MIN_PIN_LENGTH });
      }
      return null;
    }
    return null;
  }

  function goNext() {
    const message = validateStep(step);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }

  function goBack() {
    setError(null);
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function jumpToStep(index: number) {
    // Only allow jumping to a step you've already validated past,
    // or going backward freely.
    if (index <= stepIndex) {
      setError(null);
      setStepIndex(index);
    }
  }

  /**
   * Runs only after a confirmed successful create response. Committing the
   * new post, wiping the wizard's form state, and closing the dialog happen
   * together here as one unit — there's no path where the form is cleared
   * without the modal closing, or vice versa, and this is never reached on
   * a failed/soft-failed submit.
   */
  function finalizeSuccessfulSubmit(newPost: Post, message: string) {
    dispatch(addPost(newPost));
    resetWizard();
    close();
    toast.success(message);
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Validate every step before final submit, in case a jump skipped one.
    for (const s of STEPS) {
      const message = validateStep(s.key);
      if (message) {
        const idx = STEPS.findIndex((x) => x.key === s.key);
        setStepIndex(idx);
        setError(message);
        return;
      }
    }

    setSubmitting(true);
    setError(null);

    try {
      const contact: ContactChannels = {
        phone: form.phone.trim(),
        whatsapp: form.whatsapp,
        telegram: form.telegram,
        teams: form.teams,
        imo: form.imo,
        telegramHandle: form.telegramHandle.trim() || undefined,
        teamsLink: form.teamsLink.trim() || undefined,
      };

      // Collected via a single hardened helper so neither device parsing
      // nor the IP lookup can throw and block submission.
      const { os, browser, device, ipAddress } = await collectSubmissionMeta();
      const deviceId = await getDeviceVisitorId();

      // NOTE: images are intentionally NOT included here — they're sent as
      // separate "photo" parts on the FormData below, and Cloudinary URLs
      // are attached to the post server-side after upload.
      const postPayload: Omit<ExtendedPost, "images"> & SubmissionMeta = {
        title: form.title.trim(),
        description: form.description.trim(),
        category: CREATE_CATEGORIES.includes(form.category)
          ? form.category
          : CREATE_CATEGORIES[0],
        tenantType: form.tenantType,
        location: {
          division: form.division,
          district: form.district,
          thana: form.thana,
          area: form.area || form.thana,
        },
        address: form.useLiveLocation ? undefined : form.address.trim(),
        liveLocationUrl: form.useLiveLocation
          ? form.liveLocationUrl.trim()
          : undefined,
        parking: form.parking,
        utilities: liveUtilities,
        contact,
        availableFrom: form.availableFrom,
        pin: form.pin,
        source: "user",
        os,
        browser,
        device,
        ipAddress,
        deviceId,
      } as Omit<ExtendedPost, "images"> & SubmissionMeta;

      const formData = new FormData();
      formData.append("data", JSON.stringify(postPayload));
      form.images.forEach((file) => {
        formData.append("photo", file, file.name);
      });

      // Full payload, dumped right before submit (files aren't stringified
      // by console.log, but their names/sizes will show up on the entries).
      // console.log("New listing submitted:", postPayload, form.images);

      const response = (await houseListing(
        formData,
      ).unwrap()) as HouseListingResponse;

      if (!response?.status) {
        setError(response?.message || t("postFailed"));
        return;
      }

      // Optimistically reflect the new post locally. We don't get uploaded
      // image URLs back from this endpoint, so local previews are used
      // until the listing is refetched from the server.
      finalizeSuccessfulSubmit(
        {
          ...postPayload,
          id: response.data?.id,
          createdAt: response.data?.createdAt,
          images: imagePreviews,
        } as unknown as Post,
        response.message || t("postSuccess"),
      );
    } catch (err: any) {
      console.error("Failed to submit listing:", err);
      const apiData = err?.data;
      const validationMessage =
        apiData?.message ||
        apiData?.error ||
        (typeof apiData === "string" ? apiData : null) ||
        (apiData && typeof apiData === "object"
          ? Object.values(apiData).flat().filter(Boolean).join(", ")
          : null);
      const message = validationMessage || err?.error || err?.message || t("postTryAgain");
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent className="flex max-w-lg flex-col gap-0 p-0">
        <DialogHeader className="border-b border-border px-4 py-3 sm:px-5">
          <DialogTitle className="text-base">{t("postListingTitle")}</DialogTitle>
          <DialogDescription className="text-xs">
            {text("stepOf", { current: stepIndex + 1, total: STEPS.length })}
          </DialogDescription>
        </DialogHeader>

        {/* Step indicator */}
        <div className="flex items-center gap-1 border-b border-border bg-bg-elevated px-4 py-2 sm:px-5">
          {localizedSteps.map((s, i) => {
            const isDone = i < stepIndex;
            const isActive = i === stepIndex;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => jumpToStep(i)}
                disabled={i > stepIndex}
                title={s.label}
                className="flex flex-1 flex-col items-center gap-1 disabled:cursor-not-allowed"
              >
                <span
                  className={
                    "flex size-6 items-center justify-center rounded-full text-[11px] font-medium transition-colors " +
                    (isActive
                      ? "bg-primary text-primary-foreground"
                      : isDone
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted")
                  }
                >
                  {isDone ? <Check className="size-3" /> : i + 1}
                </span>
                <span
                  className={
                    "hidden text-[10px] sm:block " +
                    (isActive ? "font-medium text-fg" : "text-muted")
                  }
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        <form
          id="create-post-form"
          onSubmit={onSubmit}
          className="flex max-h-[65vh] flex-col gap-4 overflow-y-auto px-4 py-4 sm:px-5"
        >
          {step === "location" ? (
            <section className="grid gap-2.5 sm:grid-cols-2">
              <Field label={t("division")}>
                <NativeSelect
                  required
                  value={form.division}
                  onChange={(e) =>
                    patch({
                      division: e.target.value,
                      district: "",
                      thana: "",
                      area: "",
                    })
                  }
                >
                  <option value="">{t("selectDivision")}</option>
                  {DIVISIONS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
              <Field label={t("district")}>
                <NativeSelect
                  required
                  disabled={!division}
                  value={form.district}
                  onChange={(e) =>
                    patch({
                      district: e.target.value,
                      thana: "",
                      area: "",
                    })
                  }
                >
                  <option value="">{t("selectDistrict")}</option>
                  {division?.districts.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
              <Field label={t("thana")}>
                <NativeSelect
                  required
                  disabled={!district}
                  value={form.thana}
                  onChange={(e) => patch({ thana: e.target.value, area: "" })}
                >
                  <option value="">{t("selectThana")}</option>
                  {district?.thanas.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
              <Field label={t("area")}>
                <NativeSelect
                  disabled={!thana}
                  value={form.area}
                  onChange={(e) => patch({ area: e.target.value })}
                >
                  <option value="">{t("selectArea")}</option>
                  {thana?.areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </NativeSelect>
              </Field>

              <div className="col-span-full flex items-center gap-2 pt-1">
                <Checkbox
                  id="use-live-location"
                  checked={form.useLiveLocation}
                  onCheckedChange={(v) =>
                    patch({ useLiveLocation: v === true })
                  }
                />
                <Label htmlFor="use-live-location" className="text-xs">
                  {t("shareLiveLocation")}
                </Label>
              </div>

              {form.useLiveLocation ? (
                <div className="col-span-full">
                  <Field label={t("liveLocationUrl")}>
                    <div className="relative">
                      <Navigation className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
                      <Input
                        required
                        type="url"
                        className="pl-9"
                        placeholder="https://maps.google.com/..."
                        value={form.liveLocationUrl}
                        onChange={(e) =>
                          patch({ liveLocationUrl: e.target.value })
                        }
                      />
                    </div>
                  </Field>
                </div>
              ) : (
                <div className="col-span-full">
                  <Field label={t("fullAddress")}>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute top-3 left-3 size-4 text-muted" />
                      <Textarea
                        required
                        className="min-h-16 pl-9"
                        placeholder={t("addressPlaceholder")}
                        value={form.address}
                        onChange={(e) => patch({ address: e.target.value })}
                      />
                    </div>
                  </Field>
                </div>
              )}
            </section>
          ) : null}

          {step === "listing" ? (
            <section className="flex flex-col gap-2.5">
              <Field label={t("title")}>
                <Input
                  required
                  maxLength={90}
                  value={form.title}
                  onChange={(e) => patch({ title: e.target.value })}
                  placeholder={t("titlePlaceholder")}
                />
              </Field>

              <Field label={t("description")}>
                <DescriptionEditor
                  key={formVersion}
                  value={form.description}
                  onChange={(html) => patch({ description: html })}
                />
              </Field>

              <div className="grid gap-2.5 sm:grid-cols-2">
                <Field label={t("category")}>
                  <NativeSelect
                    value={form.category}
                    onChange={(e) =>
                      patch({ category: e.target.value as CreateCategory })
                    }
                  >
                    {CREATE_CATEGORIES.map(
                      (key) => (
                        <option key={key} value={key}>
                          {t(({ house_flat: "houseFlat", sublet_room: "subletRoom", mess: "mess", office: "office" } as const)[key])}
                        </option>
                      ),
                    )}
                  </NativeSelect>
                </Field>
                <Field label={t("tenant")}>
                  <NativeSelect
                    value={form.tenantType}
                    onChange={(e) =>
                      patch({ tenantType: e.target.value as TenantType })
                    }
                  >
                    {(Object.keys(TENANT_LABEL) as TenantType[]).map((key) => (
                      <option key={key} value={key}>
                        {t(({ family: "family", bachelor_male: "bachelorMale", bachelor_female: "bachelorFemale", office: "office" } as const)[key])}
                      </option>
                    ))}
                  </NativeSelect>
                </Field>
                <Field label={t("parkingSpace")}>
                  <NativeSelect
                    value={form.parking}
                    onChange={(e) =>
                      patch({ parking: e.target.value as ParkingType })
                    }
                  >
                    {(Object.keys(PARKING_LABEL) as ParkingType[]).map(
                      (key) => (
                        <option key={key} value={key}>
                          {t(({ none: "noParking", car: "carParking", bike: "bikeParking", car_and_bike: "carBikeParking", garage: "privateGarage", street: "streetParking", not_available: "notAvailable" } as const)[key])}
                        </option>
                      ),
                    )}
                  </NativeSelect>
                </Field>
                <Field label={t("availableFromLabel")}>
                  <input
                    type="date"
                    required
                    className="field"
                    value={form.availableFrom}
                    onChange={(e) => patch({ availableFrom: e.target.value })}
                  />
                </Field>
              </div>
            </section>
          ) : null}

          {step === "costs" ? (
            <section className="flex flex-col gap-2.5">
              <div className="grid gap-2.5 sm:grid-cols-2">
                <Field label={t("baseRentRequired")}>
                  <Input
                    required
                    type="number"
                    min={1}
                    step={100}
                    value={form.utilities.baseRent}
                    onChange={(e) =>
                      patchUtilities({ baseRent: Number(e.target.value) || 0 })
                    }
                  />
                </Field>
                <Field label={t("gasTypeRequired")}>
                  <NativeSelect
                    required
                    value={form.utilities.gasType}
                    onChange={(e) =>
                      patchUtilities({ gasType: e.target.value as GasType })
                    }
                  >
                    <option value="line">{t("lineGas")}</option>
                    <option value="lpg">{t("cylinderLpg")}</option>
                    <option value="included">{t("included")}</option>
                  </NativeSelect>
                </Field>
                <Field label={t("gasBillOptional")}>
                  <Input
                    type="number"
                    min={0}
                    disabled={form.utilities.gasType === "included"}
                    value={form.utilities.gas}
                    onChange={(e) =>
                      patchUtilities({ gas: Number(e.target.value) || 0 })
                    }
                  />
                </Field>
                <Field label={t("electricityTypeRequired")}>
                  <NativeSelect
                    required
                    value={form.utilities.electricityType}
                    onChange={(e) =>
                      patchUtilities({
                        electricityType: e.target.value as ElectricityType,
                      })
                    }
                  >
                    <option value="prepaid">{t("prepaid")}</option>
                    <option value="postpaid">{t("postpaid")}</option>
                    <option value="included">{t("included")}</option>
                  </NativeSelect>
                </Field>
                <Field label={t("electricityBillOptional")}>
                  <Input
                    type="number"
                    min={0}
                    disabled={form.utilities.electricityType === "included"}
                    value={form.utilities.electricity}
                    onChange={(e) =>
                      patchUtilities({
                        electricity: Number(e.target.value) || 0,
                      })
                    }
                  />
                </Field>
                <Field label={t("waterBillOptional")}>
                  <Input
                    type="number"
                    min={0}
                    value={form.utilities.water}
                    onChange={(e) =>
                      patchUtilities({ water: Number(e.target.value) || 0 })
                    }
                  />
                </Field>
                <Field label={t("serviceChargeOptional")}>
                  <Input
                    type="number"
                    min={0}
                    value={form.utilities.serviceCharge}
                    onChange={(e) =>
                      patchUtilities({
                        serviceCharge: Number(e.target.value) || 0,
                      })
                    }
                  />
                </Field>
              </div>
              <div className="rounded-lg border border-border bg-bg-elevated p-3">
                <CostBreakdown utilities={liveUtilities} />
                <p className="mt-2 flex items-center justify-between border-t border-border pt-2 text-xs text-muted">
                  <span>{t("totalMonthlyCost")}</span>
                  <span className="font-display text-sm font-medium tabular-nums text-primary">
                    {formatBdt(totalMonthlyCost(liveUtilities))}
                  </span>
                </p>
              </div>
            </section>
          ) : null}

          {step === "photos" ? (
            <section className="flex flex-col gap-2.5">
              <label
                className={
                  "flex h-20 items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-elevated text-sm text-muted transition-colors " +
                  (form.images.length >= MAX_IMAGES
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer hover:bg-secondary")
                }
              >
                <ImagePlus className="size-4" />
                {form.images.length >= MAX_IMAGES
                  ? text("maximumPhotos", { count: MAX_IMAGES })
                  : t("addPhotos")}
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  disabled={form.images.length >= MAX_IMAGES}
                  className="sr-only"
                  onChange={(e) => {
                    void onFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
              </label>
              {form.images.length > 0 ? (
                <div className="grid grid-cols-5 gap-2">
                  {form.images.map((file, index) => (
                    <div
                      key={`${file.name}-${file.lastModified}-${index}`}
                      className="relative aspect-square overflow-hidden rounded-md bg-secondary"
                    >
                      <img
                        src={imagePreviews[index]}
                        alt=""
                        className="size-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 inline-flex size-6 items-center justify-center rounded-full bg-fg/70 text-primary-foreground"
                        onClick={() =>
                          patch({
                            images: form.images.filter((_, i) => i !== index),
                          })
                        }
                        aria-label={t("removePhoto")}
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted">
                  {text("optionalPhotos", { count: MAX_IMAGES })}
                </p>
              )}
            </section>
          ) : null}

          {step === "contact" ? (
            <section className="flex flex-col gap-2.5">
              <Field label={t("phone")}>
                <Input
                  required
                  inputMode="tel"
                  placeholder="+88017XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => patch({ phone: e.target.value })}
                />
              </Field>
              <div className="grid gap-2 sm:grid-cols-2">
                <CheckRow
                  id="ch-wa"
                  label="WhatsApp"
                  checked={form.whatsapp}
                  onCheckedChange={(v) => patch({ whatsapp: v })}
                />
                <CheckRow
                  id="ch-tg"
                  label="Telegram"
                  checked={form.telegram}
                  onCheckedChange={(v) => patch({ telegram: v })}
                />
                <CheckRow
                  id="ch-imo"
                  label="IMO"
                  checked={form.imo}
                  onCheckedChange={(v) => patch({ imo: v })}
                />
                <CheckRow
                  id="ch-teams"
                  label="Microsoft Teams"
                  checked={form.teams}
                  onCheckedChange={(v) => patch({ teams: v })}
                />
              </div>
              {form.telegram ? (
                <Field label={t("telegramHandleOptional")}>
                  <Input
                    placeholder="@username"
                    value={form.telegramHandle}
                    onChange={(e) => patch({ telegramHandle: e.target.value })}
                  />
                </Field>
              ) : null}
              {form.teams ? (
                <Field label={t("teamsLinkOptional")}>
                  <Input
                    placeholder="https://teams.microsoft.com/..."
                    value={form.teamsLink}
                    onChange={(e) => patch({ teamsLink: e.target.value })}
                  />
                </Field>
              ) : null}
              <Field label={text("secretPin", { count: MIN_PIN_LENGTH })}>
                <Input
                  required
                  type="password"
                  minLength={MIN_PIN_LENGTH}
                  autoComplete="new-password"
                  placeholder={t("secretPinPlaceholder")}
                  value={form.pin}
                  onChange={(e) => patch({ pin: e.target.value })}
                />
                <p className="mt-1 text-[11px] text-muted">
                  {text("secretPinHelp", { count: MIN_PIN_LENGTH })}
                </p>
              </Field>
            </section>
          ) : null}

          {error ? (
            <p className="text-xs text-destructive" role="alert">
              {error}
            </p>
          ) : null}
        </form>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-bg-elevated px-4 py-2.5 sm:px-5">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={isFirstStep ? close : goBack}
            disabled={submitting}
          >
            {isFirstStep ? (
              t("cancel")
            ) : (
              <>
                <ArrowLeft className="size-4" /> {t("back")}
              </>
            )}
          </Button>

          {isLastStep ? (
            <Button
              type="submit"
              form="create-post-form"
              size="sm"
              disabled={submitting}
            >
              {submitting ? t("posting") : t("publishListing")}
            </Button>
          ) : (
            <Button type="button" size="sm" onClick={goNext}>
              {t("next")} <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1">
      <Label asChild>
        <span className="text-xs">{label}</span>
      </Label>
      {children}
    </label>
  );
}

function CheckRow({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex min-h-10 items-center gap-2.5 rounded-md border border-border bg-surface px-3"
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
      />
      <span className="text-xs">{label}</span>
    </label>
  );
}

/* ---------------- Rich text description editor ---------------- */

function DescriptionEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const { t } = usePreferences();
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<"editing" | "collapsed">("editing");

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function syncValue() {
    if (editorRef.current) onChange(editorRef.current.innerHTML);
  }

  function exec(command: string, arg?: string) {
    editorRef.current?.focus();
    document.execCommand(command, false, arg);
    syncValue();
  }

  function insertLink() {
    const url = window.prompt(t("enterUrl"));
    if (url) exec("createLink", url);
  }

  if (mode === "collapsed") {
    return (
      <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-2.5">
        <div
          className="prose prose-sm max-w-none text-xs [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:italic [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5"
          dangerouslySetInnerHTML={{
            __html: value || `<p class='text-muted'>${t("noDescription")}</p>`,
          }}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="w-fit"
          onClick={() => setMode("editing")}
        >
          <PenLine className="size-3.5" /> {t("editDescription")}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-bg-elevated px-1.5 py-1">
        <ToolbarBtn icon={Bold} label={t("bold")} onClick={() => exec("bold")} />
        <ToolbarBtn icon={Italic} label={t("italic")} onClick={() => exec("italic")} />
        <ToolbarBtn
          icon={Underline}
          label={t("underline")}
          onClick={() => exec("underline")}
        />
        <ToolbarBtn
          icon={Strikethrough}
          label={t("strikethrough")}
          onClick={() => exec("strikeThrough")}
        />
        <Divider />
        <ToolbarBtn
          icon={Heading1}
          label={t("headingOne")}
          onClick={() => exec("formatBlock", "H1")}
        />
        <ToolbarBtn
          icon={Heading2}
          label={t("headingTwo")}
          onClick={() => exec("formatBlock", "H2")}
        />
        <ToolbarBtn
          icon={Quote}
          label={t("quote")}
          onClick={() => exec("formatBlock", "BLOCKQUOTE")}
        />
        <Divider />
        <ToolbarBtn
          icon={List}
          label={t("bulletedList")}
          onClick={() => exec("insertUnorderedList")}
        />
        <ToolbarBtn
          icon={ListOrdered}
          label={t("numberedList")}
          onClick={() => exec("insertOrderedList")}
        />
        <ToolbarBtn icon={Link2} label={t("link")} onClick={insertLink} />
        <Divider />
        <ToolbarBtn icon={Undo2} label={t("undo")} onClick={() => exec("undo")} />
        <ToolbarBtn icon={Redo2} label={t("redo")} onClick={() => exec("redo")} />
        <ToolbarBtn
          icon={Eraser}
          label={t("clearFormatting")}
          onClick={() => exec("removeFormat")}
        />
        <div className="ml-auto">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              syncValue();
              setMode("collapsed");
            }}
          >
            <X className="size-3.5" /> {t("exitEditor")}
          </Button>
        </div>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={syncValue}
        onBlur={syncValue}
        className="min-h-24 max-h-48 overflow-y-auto px-3 py-2 text-sm outline-none [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-3 [&_blockquote]:italic [&_h1]:text-lg [&_h1]:font-semibold [&_h2]:text-base [&_h2]:font-semibold [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5"
        data-placeholder={t("descriptionPlaceholder")}
      />
    </div>
  );
}

function ToolbarBtn({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-secondary hover:text-fg"
    >
      <Icon className="size-3.5" />
    </button>
  );
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-border" />;
}