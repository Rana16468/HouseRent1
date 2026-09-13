import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path
          d="M8 18.5 16 11l8 7.5V24a1 1 0 0 1-1 1h-4.5v-5h-5v5H9a1 1 0 0 1-1-1z"
          className="fill-primary-foreground"
        />
        <path
          d="M11 11.5h3.2V9.2H11z"
          className="fill-primary-foreground"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-medium tracking-tight text-fg">
          Thikana
        </span>
        <span className="mt-0.5 text-[10px] tracking-[0.18em] text-muted uppercase">
          ঠিকানা
        </span>
      </span>
    </span>
  );
}
