// components/PostCard.tsx
import { CalendarDays, MapPin } from "lucide-react";
import { ChannelDots } from "@/components/ContactActions";
import { CostBreakdown } from "@/components/CostBreakdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { locationLabel } from "@/data/locations";
import { useAppDispatch } from "@/lib/redux/hooks";
import { selectPost } from "@/lib/redux/postSlice";
import { openDetails } from "@/lib/redux/uiSlice";
import {
  CATEGORY_LABEL,
  TENANT_LABEL,
  totalMonthlyCost,
  digitsPhone,
  type Post,
} from "@/types/rental";
import { formatBdt, formatLongDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();
  const cover = post.images[0];
  const total = totalMonthlyCost(post.utilities);

  const digits = digitsPhone(post.contact.phone || "");
  const tel = digits.startsWith("880") ? `+${digits}` : post.contact.phone;

  function open() {
    dispatch(selectPost(post.id as string));
    dispatch(openDetails());
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-[var(--shadow-border)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]">
      <button
        type="button"
        onClick={open}
        className="relative aspect-[4/3] overflow-hidden bg-secondary text-left"
        aria-label={`View ${post.title}`}
      >
        {cover ? (
          <img
            src={cover}
            alt=""
            className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
        ) : (
          <ImageFallback />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-fg/70 via-fg/10 to-transparent opacity-90" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="default" className="shadow-sm backdrop-blur-sm">
            {CATEGORY_LABEL[post.category]}
          </Badge>
          <Badge
            variant="outline"
            className="border-transparent bg-surface/90 shadow-sm backdrop-blur-sm"
          >
            {TENANT_LABEL[post.tenantType]}
          </Badge>
        </div>

        {post.featured ? (
          <Badge
            variant="muted"
            className="absolute top-3 right-3 bg-amber-400/95 text-amber-950 shadow-sm backdrop-blur-sm"
          >
            ⭐ Featured
          </Badge>
        ) : null}

        <div className="absolute inset-x-3 bottom-3 flex items-center gap-1.5 text-xs font-medium text-white/90">
          <MapPin className="size-3.5 shrink-0 drop-shadow" />
          <span className="truncate drop-shadow">
            {locationLabel({
              area: post.location.area,
              thana: post.location.thana,
              district: post.location.district,
            })}
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-lg leading-snug font-semibold tracking-tight text-fg">
            <button type="button" onClick={open} className="text-left transition-colors hover:text-primary">
              {post.title}
            </button>
          </h3>
          {post.address ? (
            <p className="truncate text-xs text-muted">
              <span className="font-medium text-fg/70">Address:</span> {post.address}
            </p>
          ) : null}
          {post?.liveLocationUrl ? (
            <a
              href={post.liveLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex w-fit items-center gap-1 text-xs font-medium text-primary underline-offset-2 hover:underline"
            >
              <MapPin className="size-3.5" />
              Live Location
            </a>
          ) : null}
        </div>

        <div className="rounded-lg bg-secondary/40 p-2.5">
          <p className="font-display text-2xl font-semibold tracking-tight tabular-nums text-primary">
            {formatBdt(total)}
            <span className="ml-1 font-sans text-xs font-medium text-muted">
              / month
            </span>
          </p>
          <CostBreakdown utilities={post.utilities} compact />
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-2.5 py-1">
            <CalendarDays className="size-3.5 text-primary" />
            <b className="font-medium text-fg">From {formatLongDate(post.availableFrom)}</b>
          </span>
          <ChannelDots contact={post.contact} />
        </div>

        <div className="grid grid-cols-1 bg-green-500 gap-2 pt-1">
          <Button variant="outline" onClick={open} className="w-full">
            Details
          </Button>
         
        </div>
      </div>
    </article>
  );
}

function ImageFallback() {
  return (
    <div className="relative flex size-full items-center justify-center bg-secondary">
      <svg
        viewBox="0 0 160 120"
        className="h-3/5 w-3/5 text-primary/25"
        aria-hidden="true"
      >
        <path
          d="M20 72 80 28l60 44v32a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z"
          fill="currentColor"
        />
        <path d="M64 28h16v-10H64z" fill="currentColor" />
        <rect x="68" y="78" width="24" height="30" fill="var(--color-secondary)" />
      </svg>
    </div>
  );
}