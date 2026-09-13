import * as SliderPrimitive from "@radix-ui/react-slider";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Slider({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof SliderPrimitive.Root>) {
  const thumbs = props.value?.length ?? props.defaultValue?.length ?? 1;

  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex w-full touch-none items-center select-none",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbs }).map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block size-5 rounded-full border border-border bg-surface shadow-[var(--shadow-border)] ring-offset-bg transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        />
      ))}
    </SliderPrimitive.Root>
  );
}
