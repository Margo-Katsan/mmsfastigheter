import {
  MapPin,
  Building2,
  Maximize,
  Search,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

import {
  propertyLocations,
  propertyTypes,
  propertyAreas,
} from "@/data/property-filters";

const filters = [
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
];

export function PropertySearch() {
  return (
    <form
      action="/fastigheter"
      method="get"
      aria-label="Sök fastigheter"
      className="grid gap-4 rounded-card border border-border bg-surface p-4 shadow-elevated sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center lg:gap-0 lg:p-5"
    >
      {filters.map(({ name, label, icon: Icon, options }) => (
        <div
          key={name}
          className="flex items-center gap-4 rounded-button bg-background p-4 lg:rounded-none lg:border-r lg:border-border lg:bg-transparent lg:px-6 lg:py-2"
        >
          <Icon
            size={23}
            strokeWidth={1.5}
            className="shrink-0 text-primary"
            aria-hidden="true"
          />

          <div className="min-w-0 flex-1">
            <label
              htmlFor={`property-${name}`}
              className="block text-sm font-semibold text-foreground"
            >
              {label}
            </label>

            <div className="relative mt-1">
              <select
                id={`property-${name}`}
                name={name}
                defaultValue=""
                className="w-full cursor-pointer appearance-none bg-transparent pr-7 text-sm text-muted"
              >
                {options.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="lg:pl-5">
        <Button
          type="submit"
          size="lg"
          className="w-full whitespace-nowrap"
        >
          <Search size={19} aria-hidden="true" />
          Sök objekt
        </Button>
      </div>
    </form>
  );
}