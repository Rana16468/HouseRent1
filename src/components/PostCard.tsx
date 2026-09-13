import { CalendarDays, MapPin, Phone } from "lucide-react";
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
  type Post,
} from "@/types/rental";
import { formatBdt, formatLongDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  const dispatch = useAppDispatch();
  const cover = post.images[0];
  const total = totalMonthlyCost(post.utilities);

  function open() {
    dispatch(selectPost(post.id));
    dispatch(openDetails());
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[var(--shadow-border-hover)]">
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
            className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <ImageFallback />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fg/55 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="default">{CATEGORY_LABEL[post.category]}</Badge>
          <Badge variant="outline" className="border-transparent bg-surface/90">
            {TENANT_LABEL[post.tenantType]}
          </Badge>
        </div>
        {post.featured ? (
          <Badge
            variant="muted"
            className="absolute top-3 right-3 bg-surface/90"
          >
            Featured
          </Badge>
        ) : null}
      </button>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-lg leading-snug font-medium tracking-tight text-fg">
            <button type="button" onClick={open} className="text-left">
              {post.title}
            </button>
          </h3>
          <p className="flex items-start gap-1.5 text-sm text-muted">
            <MapPin className="mt-0.5 size-3.5 shrink-0" />
            <span>
              {locationLabel({
                area: post.location.area,
                thana: post.location.thana,
                district: post.location.district,
              })}
            </span>
          </p>
        </div>

        <div>
          <p className="font-display text-2xl font-medium tracking-tight tabular-nums text-primary">
            {formatBdt(total)}
            <span className="ml-1 font-sans text-xs font-medium text-muted">
              / month
            </span>
          </p>
          <CostBreakdown utilities={post.utilities} compact />
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            From {formatLongDate(post.availableFrom)}
          </span>
          <ChannelDots contact={post.contact} />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button variant="outline" onClick={open}>
            Details
          </Button>
          <Button onClick={open}>
            <Phone />
            Contact
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
