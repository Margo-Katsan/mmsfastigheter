import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type TextareaProps =
  ComponentPropsWithoutRef<"textarea"> & {
    label: string;
    error?: string;
  };

export function Textarea({
  label,
  error,
  id,
  name,
  required,
  className,
  ...props
}: TextareaProps) {
  const inputId = id ?? name;

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-foreground"
      >
        {label}

        {required && (
          <span className="ml-1 text-primary">*</span>
        )}
      </label>

      <textarea
        {...props}
        id={inputId}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${inputId}-error` : undefined
        }
        className={cn(
          "min-h-36 w-full resize-y rounded-button",
          "border border-border bg-background px-4 py-3",
          "text-sm leading-relaxed text-foreground",
          "placeholder:text-muted/70",
          "transition-colors hover:border-primary/40",
          "focus:border-primary focus:ring-2 focus:ring-primary/10",
          "focus:outline-none disabled:opacity-50",
          error && "border-red-500 focus:border-red-500",
          className
        )}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}