import { useMemo, useState } from "react";
import { ImagePlus, X } from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { DIVISIONS, findDistrict, findDivision, findThana } from "@/data/locations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addPost } from "@/lib/redux/postSlice";
import { closeCreatePost } from "@/lib/redux/uiSlice";
import {
  CATEGORY_LABEL,
  TENANT_LABEL,
  totalMonthlyCost,
  type ContactChannels,
  type ElectricityType,
  type GasType,
  type Post,
  type RentalCategory,
  type TenantType,
  type UtilityBreakdown,
} from "@/types/rental";
import { formatBdt } from "@/lib/utils";

const EMPTY_UTILITIES: UtilityBreakdown = {
  baseRent: 15000,
  gas: 800,
  gasType: "line",
  electricity: 1500,
  electricityType: "prepaid",
  water: 400,
  serviceCharge: 500,
};

type FormState = {
  division: string;
  district: string;
  thana: string;
  area: string;
  title: string;
  description: string;
  category: RentalCategory;
  tenantType: TenantType;
  utilities: UtilityBreakdown;
  images: string[];
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
  title: "",
  description: "",
  category: "house_flat",
  tenantType: "family",
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

export function CreatePostModal() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.createPostOpen);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [error, setError] = useState<string | null>(null);

  const division = findDivision(form.division || null);
  const district = findDistrict(form.division || null, form.district || null);
  const thana = findThana(
    form.division || null,
    form.district || null,
    form.thana || null,
  );

  const liveUtilities = useMemo(() => {
    const next = { ...form.utilities };
    if (next.gasType === "included") next.gas = 0;
    if (next.electricityType === "included") next.electricity = 0;
    return next;
  }, [form.utilities]);

  function patch(partial: Partial<FormState>) {
    setForm((prev) => ({ ...prev, ...partial }));
  }

  function patchUtilities(partial: Partial<UtilityBreakdown>) {
    setForm((prev) => ({
      ...prev,
      utilities: { ...prev.utilities, ...partial },
    }));
  }

  function close() {
    dispatch(closeCreatePost());
  }

  async function onFiles(files: FileList | null) {
    if (!files) return;
    const remaining = 5 - form.images.length;
    const picked = Array.from(files).slice(0, remaining);
    const encoded = await Promise.all(picked.map(readAsDataUrl));
    patch({ images: [...form.images, ...encoded] });
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.title.trim()) return setError("Add a title.");
    if (!form.division || !form.district || !form.thana) {
      return setError("Select division, district, and thana.");
    }
    if (!form.phone.trim()) return setError("Add a phone number.");
    if (!/^\d{4}$/.test(form.pin)) {
      return setError("PIN must be exactly 4 digits.");
    }
    if (!form.availableFrom) return setError("Set an available-from date.");

    const contact: ContactChannels = {
      phone: form.phone.trim(),
      whatsapp: form.whatsapp,
      telegram: form.telegram,
      teams: form.teams,
      imo: form.imo,
      telegramHandle: form.telegramHandle.trim() || undefined,
      teamsLink: form.teamsLink.trim() || undefined,
    };

    const post: Post = {
      id: `post-${crypto.randomUUID()}`,
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category,
      tenantType: form.tenantType,
      location: {
        division: form.division,
        district: form.district,
        thana: form.thana,
        area: form.area || form.thana,
      },
      utilities: liveUtilities,
      images: form.images,
      contact,
      availableFrom: form.availableFrom,
      createdAt: new Date().toISOString(),
      pin: form.pin,
      source: "user",
    };

    dispatch(addPost(post));
    setForm(INITIAL);
    setError(null);
    close();
    toast.success("Listing posted. It is live on the board.");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent className="flex max-h-[min(92vh,880px)] max-w-3xl flex-col gap-0 p-0">
        <DialogHeader className="border-b border-border px-5 py-4 sm:px-6">
          <DialogTitle>Post a listing</DialogTitle>
          <DialogDescription>
            Totals update as you type. Images stay on this device.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <form
            id="create-post-form"
            onSubmit={onSubmit}
            className="flex flex-col gap-8 px-5 py-5 sm:px-6"
          >
            <section className="grid gap-3 sm:grid-cols-2">
              <SectionTitle>Location</SectionTitle>
              <Field label="Division">
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
                  <option value="">Select division</option>
                  {DIVISIONS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
              <Field label="District">
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
                  <option value="">Select district</option>
                  {division?.districts.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
              <Field label="Thana / Upazila">
                <NativeSelect
                  required
                  disabled={!district}
                  value={form.thana}
                  onChange={(e) =>
                    patch({ thana: e.target.value, area: "" })
                  }
                >
                  <option value="">Select thana</option>
                  {district?.thanas.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
              <Field label="Area">
                <NativeSelect
                  disabled={!thana}
                  value={form.area}
                  onChange={(e) => patch({ area: e.target.value })}
                >
                  <option value="">Select area</option>
                  {thana?.areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </NativeSelect>
              </Field>
            </section>

            <section className="flex flex-col gap-3">
              <SectionTitle>Listing</SectionTitle>
              <Field label="Title">
                <Input
                  required
                  maxLength={90}
                  value={form.title}
                  onChange={(e) => patch({ title: e.target.value })}
                  placeholder="e.g. 2-bed family flat near Medical College"
                />
              </Field>
              <Field label="Description">
                <Textarea
                  maxLength={600}
                  value={form.description}
                  onChange={(e) => patch({ description: e.target.value })}
                  placeholder="Access, nearby landmarks, house rules."
                />
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Category">
                  <NativeSelect
                    value={form.category}
                    onChange={(e) =>
                      patch({ category: e.target.value as RentalCategory })
                    }
                  >
                    {(Object.keys(CATEGORY_LABEL) as RentalCategory[]).map(
                      (key) => (
                        <option key={key} value={key}>
                          {CATEGORY_LABEL[key]}
                        </option>
                      ),
                    )}
                  </NativeSelect>
                </Field>
                <Field label="Tenant type">
                  <NativeSelect
                    value={form.tenantType}
                    onChange={(e) =>
                      patch({ tenantType: e.target.value as TenantType })
                    }
                  >
                    {(Object.keys(TENANT_LABEL) as TenantType[]).map((key) => (
                      <option key={key} value={key}>
                        {TENANT_LABEL[key]}
                      </option>
                    ))}
                  </NativeSelect>
                </Field>
              </div>
              <Field label="Available from">
                <input
                  type="date"
                  required
                  className="field"
                  value={form.availableFrom}
                  onChange={(e) => patch({ availableFrom: e.target.value })}
                />
              </Field>
            </section>

            <section className="flex flex-col gap-3">
              <SectionTitle>Monthly costs (BDT)</SectionTitle>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Base rent">
                  <Input
                    type="number"
                    min={0}
                    step={100}
                    value={form.utilities.baseRent}
                    onChange={(e) =>
                      patchUtilities({ baseRent: Number(e.target.value) || 0 })
                    }
                  />
                </Field>
                <Field label="Gas type">
                  <NativeSelect
                    value={form.utilities.gasType}
                    onChange={(e) =>
                      patchUtilities({ gasType: e.target.value as GasType })
                    }
                  >
                    <option value="line">Line gas</option>
                    <option value="lpg">LPG cylinder</option>
                    <option value="included">Included</option>
                  </NativeSelect>
                </Field>
                <Field label="Gas bill">
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
                <Field label="Electricity">
                  <NativeSelect
                    value={form.utilities.electricityType}
                    onChange={(e) =>
                      patchUtilities({
                        electricityType: e.target.value as ElectricityType,
                      })
                    }
                  >
                    <option value="prepaid">Prepaid</option>
                    <option value="postpaid">Postpaid</option>
                    <option value="included">Included</option>
                  </NativeSelect>
                </Field>
                <Field label="Electricity bill">
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
                <Field label="Water">
                  <Input
                    type="number"
                    min={0}
                    value={form.utilities.water}
                    onChange={(e) =>
                      patchUtilities({ water: Number(e.target.value) || 0 })
                    }
                  />
                </Field>
                <Field label="Service charge">
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
              <CostBreakdown utilities={liveUtilities} />
            </section>

            <section className="flex flex-col gap-3">
              <SectionTitle>Photos (up to 5)</SectionTitle>
              <label className="flex h-24 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-bg-elevated text-sm text-muted transition-colors hover:bg-secondary">
                <ImagePlus className="size-4" />
                Add photos
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => {
                    void onFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
              </label>
              {form.images.length > 0 ? (
                <div className="grid grid-cols-5 gap-2">
                  {form.images.map((src, index) => (
                    <div
                      key={src.slice(0, 32) + index}
                      className="relative aspect-square overflow-hidden rounded-md bg-secondary"
                    >
                      <img src={src} alt="" className="size-full object-cover" />
                      <button
                        type="button"
                        className="absolute top-1 right-1 inline-flex size-7 items-center justify-center rounded-full bg-fg/70 text-primary-foreground"
                        onClick={() =>
                          patch({
                            images: form.images.filter((_, i) => i !== index),
                          })
                        }
                        aria-label="Remove photo"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>

            <section className="flex flex-col gap-3">
              <SectionTitle>Contact</SectionTitle>
              <Field label="Phone">
                <Input
                  required
                  inputMode="tel"
                  placeholder="+88017XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => patch({ phone: e.target.value })}
                />
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
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
                <Field label="Telegram handle (optional)">
                  <Input
                    placeholder="@username"
                    value={form.telegramHandle}
                    onChange={(e) => patch({ telegramHandle: e.target.value })}
                  />
                </Field>
              ) : null}
              {form.teams ? (
                <Field label="Teams link (optional)">
                  <Input
                    placeholder="https://teams.microsoft.com/..."
                    value={form.teamsLink}
                    onChange={(e) => patch({ teamsLink: e.target.value })}
                  />
                </Field>
              ) : null}
              <Field label="Secret 4-digit PIN">
                <Input
                  required
                  inputMode="numeric"
                  maxLength={4}
                  pattern="\d{4}"
                  placeholder="For later edits"
                  value={form.pin}
                  onChange={(e) =>
                    patch({ pin: e.target.value.replace(/\D/g, "").slice(0, 4) })
                  }
                />
              </Field>
            </section>

            {error ? (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </ScrollArea>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-bg-elevated px-5 py-3 sm:px-6">
          <p className="hidden text-sm text-muted sm:block">
            Total{" "}
            <span className="font-display text-lg font-medium tabular-nums text-primary">
              {formatBdt(totalMonthlyCost(liveUtilities))}
            </span>
          </p>
          <div className="ml-auto flex items-center gap-2">
            <Button type="button" variant="ghost" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" form="create-post-form">
              Publish listing
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="col-span-full font-display text-base font-medium tracking-tight">
      {children}
    </h3>
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
    <label className="flex flex-col gap-1.5">
      <Label asChild>
        <span>{label}</span>
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
      className="flex min-h-11 items-center gap-3 rounded-md border border-border bg-surface px-3"
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
