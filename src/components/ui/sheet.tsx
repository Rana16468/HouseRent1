import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export function SheetContent({
  className,
  children,
  side = "left",
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: "left" | "right";
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 flex h-full w-[min(22rem,100%)] flex-col bg-bg-elevated shadow-[var(--shadow-lift)] outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
          side === "left"
            ? "inset-y-0 left-0 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
            : "inset-y-0 right-0 border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-secondary hover:text-fg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
          <X className="size-4" />
          <span className="sr-only">Close filters</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-b border-border px-5 py-4 pr-14", className)} {...props} />
  );
}

export function SheetTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("font-display text-lg font-medium text-fg", className)}
      {...props}
    />
  );
}
