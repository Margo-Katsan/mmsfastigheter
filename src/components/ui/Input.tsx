import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
};

export function Input({
  label,
  error,
  id,
  name,
  required,
  className,
  ...props
}: InputProps) {
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

      <input
        {...props}
        id={inputId}
        name={name}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${inputId}-error` : undefined
        }
        className={cn(
          "h-12 w-full rounded-button border border-border",
          "bg-background px-4 text-sm text-foreground",
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