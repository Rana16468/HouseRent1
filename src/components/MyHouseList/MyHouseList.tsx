import { useEffect, useState } from "react";
import {
  AlertCircle,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Clock,
  Eye,
  EyeOff,
  ExternalLink,
  Home,
  Loader2,
  MapPin,
  MessageCircle,
  RefreshCw,
  Send,
  Trash2,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { ContactActions } from "@/components/ContactActions";
import { CostBreakdown } from "@/components/CostBreakdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { locationLabel } from "@/data/locations";
import {
  CATEGORY_LABEL,
  TENANT_LABEL,
  totalMonthlyCost,
  type ContactChannels,
  type UtilityBreakdown,
} from "@/types/rental";
import { cn, formatBdt, formatLongDate } from "@/lib/utils";
import { getDeviceVisitorId } from "@/utility/getDeviceVisitorId";
import {
  useDeleteHouseListingMutation,
  useGetMyHouseListingQuery,
} from "@/lib/redux/features/postApi";
import { Header } from "../Header";

// ---------------------------------------------------------------------------
// Types mirroring the API response shape (see the sample payload: data.data
// is { meta: {...}, data: Listing[] }).
// ---------------------------------------------------------------------------

interface HouseLocation {
  division: string;
  district: string;
  thana: string;
  area: string;
}

interface HouseContact {
  phone: string;
  whatsapp: boolean;
  telegram: boolean;
  imo: boolean;
  teams: boolean;
  telegramHandle: string | null;
  teamsLink: string | null;
}

interface HouseListing {
  id: string;
  title: string;
  description: string;
  category: string;
  location: HouseLocation;
  utilities: UtilityBreakdown;
  contact: HouseContact;
  tenantType: string;
  parking: string;
  address: string;
  liveLocationUrl: string | null;
  images: string[];
  availableFrom: string;
  createdAt: string;
  updatedAt: string;
}

interface ListMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

const PAGE_SIZE_OPTIONS = [6, 10, 20, 50];

function formatDateTime(value?: string) {
  if (!value) return "—";
  try {
    return new Date(value).toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return value;
  }
}

function capitalize(value?: string) {
  if (!value) return "—";
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, " ");
}

/**
 * Masks a phone number like a password field.
 * Keeps the first 3 and last 2 characters visible as a hint.
 * e.g. "01712345678" -> "017••••••78"
 */
function maskPhone(phone?: string) {
  if (!phone) return "—";
  const trimmed = phone.trim();
  if (trimmed.length <= 5) return "•".repeat(trimmed.length);
  const head = trimmed.slice(0, 3);
  const tail = trimmed.slice(-2);
  return `${head}${"•".repeat(trimmed.length - 5)}${tail}`;
}

/** Builds a compact page-number list with ellipses, e.g. 1 … 4 5 [6] 7 8 … 12 */
function buildPageWindow(current: number, totalPage: number): (number | "…")[] {
  if (totalPage <= 7) {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }
  const pages = new Set<number>([1, totalPage, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPage).sort((a, b) => a - b);

  const result: (number | "…")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - (sorted[i - 1] as number) > 1) result.push("…");
    result.push(p);
  });
  return result;
}

export function MyHouseList() {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function fetchDeviceId() {
      try {
        const id = await getDeviceVisitorId();
        setDeviceId(id);
      } catch (err) {
        console.error("Error getting device ID:", err);
      }
    }
    fetchDeviceId();
  }, []);

  // Jump back to page 1 whenever the device id resolves or the page size changes,
  // so we never end up requesting an out-of-range page.
  useEffect(() => {
    setPage(1);
  }, [deviceId, limit]);

  const { data, isLoading, isFetching, isError, error, refetch } = useGetMyHouseListingQuery(
    { deviceId: deviceId ?? "", page, limit },
    { skip: !deviceId },
  );

  const meta: ListMeta | undefined = data?.data?.meta;
  const listings: HouseListing[] = data?.data?.data ?? [];

  const showInitialLoading = isLoading || !deviceId;

  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-4 sm:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-fg">My House List</h1>
            {deviceId ? (
              <p className="mt-1 text-xs text-muted"></p>
            ) : (
              <p className="mt-1 text-xs text-muted">Resolving device…</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="page-size" className="text-xs text-muted">
              Rows per page
            </label>
            <select
              id="page-size"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="h-9 rounded-md border border-border bg-bg-elevated px-2 text-sm text-fg"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => refetch()}
              aria-label="Refresh"
              disabled={!deviceId || isFetching}
            >
              <RefreshCw className={cn("size-4", isFetching && "animate-spin")} />
            </Button>
          </div>
        </header>

        {showInitialLoading ? (
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-bg-elevated p-16 text-sm text-muted">
            <Loader2 className="size-4 animate-spin" />
            Loading your listings…
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-10 text-center">
            <AlertCircle className="size-6 text-destructive" />
            <p className="text-sm text-destructive">
              Couldn&apos;t load your listings
              {error && "status" in error ? ` (${(error as any).status})` : ""}.
            </p>
            <Button variant="outline" size="sm" onClick={() => refetch()}>
              Try again
            </Button>
          </div>
        ) : listings.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border p-16 text-center">
            <Home className="size-6 text-muted" />
            <p className="text-sm text-muted">You haven&apos;t posted any listings yet.</p>
          </div>
        ) : (
          <>
            <div
              className={cn("flex flex-col gap-8", isFetching && "opacity-60 transition-opacity")}
            >
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} deviceId={deviceId} />
              ))}
            </div>

            {meta ? <PaginationBar meta={meta} page={page} onPageChange={setPage} /> : null}
          </>
        )}
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Listing card — this is PostDetailsModal's content, unchanged, just laid
// out inline (no Dialog wrapper, since Dialog/DialogTitle/DialogDescription
// are Radix primitives that require an actual <Dialog> to mount inside).
// Everything else — classNames, section order, image carousel, cost
// breakdown, detail grid, live-location button, contact section — is the
// same markup as the modal, plus a delete button at the end.
// The phone number starts hidden and is revealed on click, password-style.
// ---------------------------------------------------------------------------

function ListingCard({ listing, deviceId }: { listing: HouseListing; deviceId: string | null }) {
  const [index, setIndex] = useState(0);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [deleteListing, { isLoading: isDeleting }] = useDeleteHouseListingMutation();

  const images = listing.images ?? [];
  const current = images[index] ?? images[0];
  const total = totalMonthlyCost(listing.utilities);

  const contactForActions: ContactChannels = {
    ...listing.contact,
    telegramHandle: listing.contact.telegramHandle ?? undefined,
    teamsLink: listing.contact.teamsLink ?? undefined,
  };

  // Re-hide the number if this card ever gets re-used for a different listing.
  useEffect(() => {
    setPhoneVisible(false);
  }, [listing.id]);

  function step(delta: number) {
    if (images.length === 0) return;
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  function openLiveLocation() {
    if (!listing.liveLocationUrl) return;
    window.open(listing.liveLocationUrl, "_blank", "noopener,noreferrer");
  }

  async function onDelete() {
    if (!deviceId) return;

    const result = await Swal.fire({
      title: "Delete this listing?",
      html: `<b>${listing.title}</b> will be permanently removed. This can't be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
      focusCancel: true,
    });
    if (!result.isConfirmed) return;

    try {
      await deleteListing({ id: listing.id, deviceId }).unwrap();
      toast.success("Listing removed.");
      Swal.fire({
        title: "Deleted",
        text: "Your listing has been removed.",
        icon: "success",
        timer: 1800,
        showConfirmButton: false,
      });
    } catch {
      toast.error("Couldn't delete the listing. Please try again.");
      Swal.fire({
        title: "Delete failed",
        text: "Couldn't delete the listing. Please try again.",
        icon: "error",
      });
    }
  }

  return (
    <div className="flex max-h-[min(92vh,920px)] flex-col gap-0 overflow-hidden rounded-lg border border-border bg-bg-elevated">
      <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="relative h-56 bg-fg sm:h-80 lg:h-full lg:min-h-[28rem]">
          {current ? (
            <img src={current} alt="" className="absolute inset-0 size-full object-cover" />
          ) : (
            <div className="flex size-full items-center justify-center bg-secondary">
              <span className="text-sm text-muted">No photos</span>
            </div>
          )}
          {images.length > 1 ? (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 left-3 -translate-y-1/2"
                onClick={() => step(-1)}
                aria-label="Previous photo"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 right-3 -translate-y-1/2"
                onClick={() => step(1)}
                aria-label="Next photo"
              >
                <ChevronRight />
              </Button>
              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    aria-label={`Photo ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === index ? "w-6 bg-primary-foreground" : "w-1.5 bg-primary-foreground/45",
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="max-h-[min(70vh,720px)] overflow-y-auto">
          <div className="flex flex-col gap-5 px-5 py-5 sm:px-6">
            <div className="p-0 pr-10">
              <div className="mb-2 flex flex-wrap gap-1.5">
                <Badge variant="default">
                  {CATEGORY_LABEL[listing.category as keyof typeof CATEGORY_LABEL] ??
                    capitalize(listing.category)}
                </Badge>
                <Badge variant="muted">
                  {TENANT_LABEL[listing.tenantType as keyof typeof TENANT_LABEL] ??
                    capitalize(listing.tenantType)}
                </Badge>
              </div>
              <h2 className="text-lg leading-none font-semibold tracking-tight text-fg">
                {listing.title}
              </h2>
              <p className="mt-1.5 flex items-start gap-1.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-3.5 shrink-0" />
                {locationLabel({
                  area: listing.location.area,
                  thana: listing.location.thana,
                  district: listing.location.district,
                })}
                <span className="text-subtle">· {listing.location.division}</span>
              </p>
            </div>

            <div>
              <p className="font-display text-3xl font-medium tracking-tight tabular-nums text-primary">
                {formatBdt(total)}
                <span className="ml-1 font-sans text-sm font-medium text-muted">/ month</span>
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                <CalendarDays className="size-3.5" />
                Available {formatLongDate(listing.availableFrom)}
              </p>
            </div>

            {listing.description ? (
              // API description may contain basic HTML markup (e.g. <b>).
              <p
                className="text-sm leading-relaxed text-fg"
                dangerouslySetInnerHTML={{ __html: listing.description }}
              />
            ) : null}

            {images.length > 1 ? (
              <div className="grid grid-cols-5 gap-1.5">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cn(
                      "aspect-square overflow-hidden rounded-sm",
                      i === index ? "ring-2 ring-primary" : "opacity-80",
                    )}
                  >
                    <img src={src} alt="" className="size-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}

            <CostBreakdown utilities={listing.utilities} />
            <div className="-mt-3 flex flex-wrap gap-1.5">
              <Badge variant="muted">
                Electricity: {capitalize(listing.utilities.electricityType)}
              </Badge>
              <Badge variant="muted">Gas: {capitalize(listing.utilities.gasType)}</Badge>
            </div>

            <section className="grid grid-cols-2 gap-3 rounded-lg border border-border bg-bg-elevated p-4 text-sm">
              <div className="flex items-start gap-2">
                <Car className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-xs text-muted">Parking</p>
                  <p className="font-medium text-fg">{capitalize(listing.parking)}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Home className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-xs text-muted">Address</p>
                  <p className="font-medium text-fg">{listing.address || "—"}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-xs text-muted">Posted</p>
                  <p className="font-medium text-fg">{formatDateTime(listing.createdAt)}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <p className="text-xs text-muted">Last updated</p>
                  <p className="font-medium text-fg">{formatDateTime(listing.updatedAt)}</p>
                </div>
              </div>
            </section>

            {listing.liveLocationUrl ? (
              <Button type="button" variant="outline" className="gap-2" onClick={openLiveLocation}>
                <MapPin className="size-4" />
                View live location
                <ExternalLink className="size-3.5" />
              </Button>
            ) : null}

            <section className="flex flex-col gap-3">
              <h3 className="font-display text-base font-medium">Contact landlord</h3>

              {/* Phone number is hidden by default, like a password field. */}
              <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-bg-elevated px-3 py-2">
                <p
                  className={cn(
                    "font-medium tabular-nums text-fg",
                    !phoneVisible && "tracking-[0.18em] select-none",
                  )}
                  aria-label={phoneVisible ? "Phone number" : "Phone number hidden"}
                >
                  {phoneVisible ? listing.contact.phone : maskPhone(listing.contact.phone)}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="shrink-0 gap-1.5"
                  onClick={() => setPhoneVisible((v) => !v)}
                  aria-pressed={phoneVisible}
                  aria-label={phoneVisible ? "Hide phone number" : "Show phone number"}
                >
                  {phoneVisible ? (
                    <>
                      <EyeOff className="size-4" />
                      Hide
                    </>
                  ) : (
                    <>
                      <Eye className="size-4" />
                      Show number
                    </>
                  )}
                </Button>
              </div>

              {phoneVisible ? (
                <ContactActions contact={contactForActions} />
              ) : (
                <p className="text-xs text-muted">
                  Tap “Show number” to reveal the contact details.
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {listing.contact.whatsapp ? <Badge variant="muted">WhatsApp</Badge> : null}
                {listing.contact.telegram ? (
                  <Badge variant="muted" className="inline-flex items-center gap-1">
                    <Send className="size-3" />
                    Telegram
                    {phoneVisible && listing.contact.telegramHandle
                      ? ` · ${listing.contact.telegramHandle}`
                      : ""}
                  </Badge>
                ) : null}
                {listing.contact.imo ? (
                  <Badge variant="muted" className="inline-flex items-center gap-1">
                    <MessageCircle className="size-3" />
                    imo
                  </Badge>
                ) : null}
                {listing.contact.teams ? (
                  <Badge variant="muted" className="inline-flex items-center gap-1">
                    <Video className="size-3" />
                    Teams
                  </Badge>
                ) : null}
              </div>

              {phoneVisible && listing.contact.teams && listing.contact.teamsLink ? (
                <a
                  href={listing.contact.teamsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm text-primary underline underline-offset-2"
                >
                  Join Teams meeting
                  <ExternalLink className="size-3.5" />
                </a>
              ) : null}
            </section>

            <div className="mb-4 rounded-lg border border-border/50 bg-primary/5 p-4">
              <p className="text-center text-xs text-muted-foreground italic">
                "বাসা তো কেবল চারটে দেয়াল নয়, বাসা হলো দিনের শেষে ফিরে আসার এক নিরাপদ আশ্রয়।"
              </p>
            </div>

            <section className="rounded-lg border border-border bg-bg-elevated p-4">
              <h3 className="flex items-center gap-2 text-sm font-medium">
                <Trash2 className="size-4" />
                Manage listing
              </h3>
              <p className="mt-1 text-xs text-muted">
                Remove this listing from your list. This can&apos;t be undone.
              </p>
              <Button
                variant="destructive"
                type="button"
                className="mt-3 gap-2"
                onClick={onDelete}
                disabled={isDeleting}
              >
                <Trash2 className="size-4" />
                {isDeleting ? "Deleting…" : "Delete listing"}
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

function PaginationBar({
  meta,
  page,
  onPageChange,
}: {
  meta: ListMeta;
  page: number;
  onPageChange: (page: number) => void;
}) {
  const { total, totalPage, limit } = meta;
  if (totalPage <= 1) return null;

  const from = total === 0 ? 0 : (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);
  const pages = buildPageWindow(page, totalPage);

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-col items-center gap-4 rounded-lg border border-border bg-bg-elevated p-4 sm:flex-row sm:justify-between"
    >
      <p className="text-sm text-muted">
        Showing <span className="font-medium text-fg">{from}</span>–
        <span className="font-medium text-fg">{to}</span> of{" "}
        <span className="font-medium text-fg">{total}</span> listings
      </p>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-full"
          disabled={page <= 1}
          onClick={() => onPageChange(1)}
          aria-label="First page"
        >
          <ChevronsLeft className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-full"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </Button>

        <div className="hidden items-center gap-1 sm:flex">
          {pages.map((p, i) =>
            p === "…" ? (
              <span key={`ellipsis-${i}`} className="px-1 text-sm text-muted">
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => onPageChange(p)}
                aria-current={p === page ? "page" : undefined}
                className={cn(
                  "flex size-9 items-center justify-center rounded-full text-sm font-medium tabular-nums transition-all",
                  p === page
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-fg hover:bg-secondary",
                )}
              >
                {p}
              </button>
            ),
          )}
        </div>
        <p className="px-2 text-sm font-medium tabular-nums text-fg sm:hidden">
          Page {page} of {totalPage}
        </p>

        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-full"
          disabled={page >= totalPage}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-full"
          disabled={page >= totalPage}
          onClick={() => onPageChange(totalPage)}
          aria-label="Last page"
        >
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </nav>
  );
}