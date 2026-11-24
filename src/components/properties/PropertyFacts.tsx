import {
  Building2,
  MapPin,
  Maximize,
  Tag,
} from "lucide-react";

import { formatArea } from "@/lib/formatters";
import { getPropertyTypeLabel } from "@/lib/property-utils";
import type { Property } from "@/types/property";

type PropertyFactsProps = {
  property: Property;
};

export function PropertyFacts({
  property,
}: PropertyFactsProps) {
  const facts = [
    {
      label: "Yta",
      value:
        property.area !== undefined
          ? formatArea(property.area)
          : "Ej angivet",
      icon: Maximize,
    },
    {
      label: "Fastighetstyp",
      value: getPropertyTypeLabel(property.type),
      icon: Building2,
    },
    {
      label: "Område",
      value: property.location,
      icon: MapPin,
    },
    {
      label: "Status",
      value: property.status,
      icon: Tag,
    },
  ];

  return (
    <dl className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-card border border-border bg-surface shadow-card lg:grid-cols-4 lg:divide-y-0">
      {facts.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7"
        >
          <Icon
            size={24}
            strokeWidth={1.5}
            className="text-accent"
            aria-hidden="true"
          />

          <dt className="text-xs font-medium uppercase tracking-wider text-muted">
            {label}
          </dt>

          <dd className="text-sm font-semibold text-foreground sm:text-base">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}