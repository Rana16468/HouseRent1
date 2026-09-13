import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type={type} className={cn("field", className)} {...props} />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "field min-h-28 resize-y py-2.5 leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export function NativeSelect({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn("field appearance-none pr-8", className)} {...props}>
      {children}
    </select>
  );
}
