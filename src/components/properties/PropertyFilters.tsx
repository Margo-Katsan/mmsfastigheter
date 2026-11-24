import Link from "next/link";

import {
  MapPin,
  Building2,
  Maximize,
  ListFilter,
  Search,
  RotateCcw,
  ChevronDown,
  ArrowDownUp,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

import {
  propertyLocations,
  propertyTypes,
  propertyAreas,
  propertyStatuses,
  propertySortOptions,
} from "@/data/property-filters";

import type {
  PropertyFilters as Filters,
} from "@/types/property";

type PropertyFiltersProps = {
  filters: Filters;
};

const filterFields = [
  {
    name: "location",
    label: "Område",
    icon: MapPin,
    options: propertyLocations,
  },
  {
    name: "type",
    label: "Fastighetstyp",
    icon: Building2,
    options: propertyTypes,
  },
  {
    name: "area",
    label: "Yta (m²)",
    icon: Maximize,
    options: propertyAreas,
  },
  {
    name: "status",
    label: "Status",
    icon: ListFilter,
    options: propertyStatuses,
  },
  {
    name: "sort",
    label: "Sortera",
    icon: ArrowDownUp,
    options: propertySortOptions,
  },
] as const;

export function PropertyFilters({
  filters,
}: PropertyFiltersProps) {
  return (
    <form
      action="/fastigheter"
      method="get"
      aria-label="Filtrera fastigheter"
      className="rounded-card border border-border bg-surface p-5 shadow-card sm:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filterFields.map(
          ({ name, label, icon: Icon, options }) => (
            <div key={name}>
              <label
                htmlFor={`catalog-${name}`}
                className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="text-primary"
                  aria-hidden="true"
                />

                {label}
              </label>

              <div className="relative">
                <select
                  id={`catalog-${name}`}
                  name={name}
                  defaultValue={filters[name]}
                  className="h-12 w-full cursor-pointer appearance-none rounded-button border border-border bg-background py-2 pr-10 pl-4 text-sm text-foreground transition-colors hover:border-primary/40"
                >
                  {options.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted"
                  aria-hidden="true"
                />
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-end gap-4 border-t border-border pt-5">
        <Link
          href="/fastigheter"
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <RotateCcw size={16} aria-hidden="true" />

          Rensa filter
        </Link>

        <Button
          type="submit"
          className="w-full sm:w-auto"
        >
          <Search size={18} aria-hidden="true" />

          Sök fastigheter
        </Button>
      </div>
    </form>
  );
}