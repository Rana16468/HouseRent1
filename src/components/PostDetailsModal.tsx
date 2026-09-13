import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Trash2,
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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { locationLabel } from "@/data/locations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removePost, selectPost } from "@/lib/redux/postSlice";
import { selectSelectedPost } from "@/lib/redux/selectors";
import { closeDetails } from "@/lib/redux/uiSlice";
import { CATEGORY_LABEL, TENANT_LABEL } from "@/types/rental";
import { cn, formatBdt, formatLongDate } from "@/lib/utils";
import { totalMonthlyCost } from "@/types/rental";

export function PostDetailsModal() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.detailsOpen);
  const post = useAppSelector(selectSelectedPost);
  const [index, setIndex] = useState(0);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState<string | null>(null);

  function close() {
    dispatch(closeDetails());
    dispatch(selectPost(null));
    setIndex(0);
    setPin("");
    setPinError(null);
  }

  const images = post?.images ?? [];
  const current = images[index] ?? images[0];
  const total = post ? totalMonthlyCost(post.utilities) : 0;

  function step(delta: number) {
    if (images.length === 0) return;
    setIndex((i) => (i + delta + images.length) % images.length);
  }

  function onRemove() {
    if (!post) return;
    if (pin !== post.pin) {
      setPinError("PIN does not match.");
      return;
    }
    dispatch(removePost({ id: post.id, pin }));
    toast.success("Listing removed.");
    close();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogContent className="flex max-h-[min(92vh,920px)] max-w-4xl flex-col gap-0 overflow-hidden p-0">
        {post ? (
          <>
            <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
              <div className="relative h-56 bg-fg sm:h-80 lg:h-full lg:min-h-[28rem]">
                {current ? (
                  <img
                    src={current}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                  />
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
                        {CATEGORY_LABEL[post.category]}
                      </Badge>
                      <Badge variant="muted">
                        {TENANT_LABEL[post.tenantType]}
                      </Badge>
                    </div>
                    <DialogTitle>{post.title}</DialogTitle>
                    <DialogDescription className="flex items-start gap-1.5">
                      <MapPin className="mt-0.5 size-3.5 shrink-0" />
                      {locationLabel({
                        area: post.location.area,
                        thana: post.location.thana,
                        district: post.location.district,
                      })}
                      <span className="text-subtle">
                        · {post.location.division}
                      </span>
                    </DialogDescription>
                  </DialogHeader>

                  <div>
                    <p className="font-display text-3xl font-medium tracking-tight tabular-nums text-primary">
                      {formatBdt(total)}
                      <span className="ml-1 font-sans text-sm font-medium text-muted">
                        / month
                      </span>
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                      <CalendarDays className="size-3.5" />
                      Available {formatLongDate(post.availableFrom)}
                    </p>
                  </div>

                  {post.description ? (
                    <p className="text-sm leading-relaxed text-fg">
                      {post.description}
                    </p>
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

                  <CostBreakdown utilities={post.utilities} />

                  <section className="flex flex-col gap-3">
                    <h3 className="font-display text-base font-medium">
                      Contact landlord
                    </h3>
                    <p className="font-medium tabular-nums text-fg">
                      {post.contact.phone}
                    </p>
                    <ContactActions contact={post.contact} />
                  </section>

                  <section className="rounded-lg border border-border bg-bg-elevated p-4">
                    <h3 className="flex items-center gap-2 text-sm font-medium">
                      <Trash2 className="size-4" />
                      Manage listing
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      Enter the 4-digit PIN to remove this post from the board.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Input
                        inputMode="numeric"
                        maxLength={4}
                        placeholder="PIN"
                        value={pin}
                        onChange={(e) => {
                          setPin(e.target.value.replace(/\D/g, "").slice(0, 4));
                          setPinError(null);
                        }}
                      />
                      <Button
                        variant="destructive"
                        type="button"
                        onClick={onRemove}
                      >
                        Remove
                      </Button>
                    </div>
                    {pinError ? (
                      <p className="mt-2 text-xs text-destructive">{pinError}</p>
                    ) : null}
                  </section>
                </div>
              </ScrollArea>
            </div>
          </>
        ) : (
          <div className="p-8 text-sm text-muted">Listing not found.</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
