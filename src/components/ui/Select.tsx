import type { ComponentPropsWithoutRef } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectProps =
  ComponentPropsWithoutRef<"select"> & {
    label: string;
    error?: string;
    options: readonly {
      label: string;
      value: string;
    }[];
  };

export function Select({
  label,
  options,
  error,
  id,
  name,
  required,
  className,
  ...props
}: SelectProps) {
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

      <div className="relative">
        <select
          {...props}
          id={inputId}
          name={name}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${inputId}-error` : undefined
          }
          className={cn(
            "h-12 w-full cursor-pointer appearance-none",
            "rounded-button border border-border bg-background",
            "pr-10 pl-4 text-sm text-foreground",
            "transition-colors hover:border-primary/40",
            "focus:border-primary focus:ring-2 focus:ring-primary/10",
            "focus:outline-none disabled:opacity-50",
            error && "border-red-500",
            className
          )}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
      </div>

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