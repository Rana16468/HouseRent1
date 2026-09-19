import { useEffect, useState } from "react";
import {
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  EyeOff,
  ExternalLink,
  Home,
  MapPin,
  MessageCircle,
  Send,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import { ContactActions } from "@/components/ContactActions";
import { CostBreakdown } from "@/components/CostBreakdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import { locationLabel } from "@/data/locations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removePost, selectPost } from "@/lib/redux/postSlice";
import { closeDetails } from "@/lib/redux/uiSlice";
import {
  CATEGORY_LABEL,
  TENANT_LABEL,
  totalMonthlyCost,
  type ContactChannels,
  type UtilityBreakdown,
} from "@/types/rental";
import { cn, formatBdt, formatLongDate } from "@/lib/utils";
import { useGetSpecificHouseListQuery } from "@/lib/redux/features/postApi";
import ErrorPage from "./ErrorPage/ErrorPage";

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
  pin?: string;
}

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
 * Keeps the first 3 and last 2 characters visible so the user
 * still gets a hint of which number it is.
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

export function PostDetailsModal() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.detailsOpen);
  const [index, setIndex] = useState(0);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState<string | null>(null);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const selectedPostId = useAppSelector((state) => state.posts.selectedPostId);

  const { data, isLoading, isError, error } = useGetSpecificHouseListQuery(
    selectedPostId ? selectedPostId : "6aabcf985b4575c82f5d92be",
    { skip: !open },
  );

  const listing = data?.data as HouseListing | undefined;

  // Always re-hide the phone number whenever a different listing is opened.
  useEffect(() => {
    setPhoneVisible(false);
  }, [selectedPostId, open]);

  function close() {
    dispatch(closeDetails());
    dispatch(selectPost(null));
    setIndex(0);
    setPin("");
    setPinError(null);
    setPhoneVisible(false);
  }

  const images = listing?.images ?? [];
  const current = images[index] ?? images[0];
  const total = listing ? totalMonthlyCost(listing.utilities) : 0;

  function step(delta: number) {
    if (images.length === 0) return;
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  function onRemove() {
    if (!listing) return;
    if (!listing.pin || pin !== listing.pin) {
      setPinError("PIN does not match.");
      return;
    }
    dispatch(removePost({ id: listing.id, pin }));
    toast.success("Listing removed.");
    close();
  }

  function openLiveLocation() {
    if (!listing?.liveLocationUrl) return;
    window.open(listing.liveLocationUrl, "_blank", "noopener,noreferrer");
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent className="flex max-h-[min(92vh,920px)] max-w-4xl flex-col gap-0 overflow-hidden p-0">
        {isLoading ? (
          <div className="flex items-center justify-center p-16 text-sm text-muted">
            Loading listing…
          </div>
        ) : isError || !listing ? (
          <div className="p-8 text-sm text-muted">Listing not found.</div>
        ) : (
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
                          i === index
                            ? "w-6 bg-primary-foreground"
                            : "w-1.5 bg-primary-foreground/45",
                        )}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <ScrollArea className="max-h-[min(70vh,720px)]">
              <div className="flex flex-col gap-5 px-5 py-5 sm:px-6">
                <DialogHeader className="p-0 pr-10">
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
                  <DialogTitle>{listing.title}</DialogTitle>
                  <DialogDescription className="flex items-start gap-1.5">
                    <MapPin className="mt-0.5 size-3.5 shrink-0" />
                    {locationLabel({
                      area: listing.location.area,
                      thana: listing.location.thana,
                      district: listing.location.district,
                    })}
                    <span className="text-subtle">· {listing.location.division}</span>
                  </DialogDescription>
                </DialogHeader>

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
                  <Button
                    type="button"
                    variant="outline"
                    className="gap-2"
                    onClick={openLiveLocation}
                  >
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
                      className="gap-1.5 shrink-0"
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
                    <ContactActions
                      contact={
                        {
                          ...listing.contact,
                          telegramHandle: listing.contact.telegramHandle ?? undefined,
                          teamsLink: listing.contact.teamsLink ?? undefined,
                        } satisfies ContactChannels
                      }
                    />
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
                  <p className="text-center text-xs italic text-muted-foreground">
                    "বাসা তো কেবল চারটে দেয়াল নয়, বাসা হলো দিনের শেষে ফিরে আসার এক নিরাপদ আশ্রয়।"
                  </p>
                </div>

                {pinError ? <p className="mt-2 text-xs text-destructive">{pinError}</p> : null}
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}