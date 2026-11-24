import { PropertyCard } from "@/components/ui/PropertyCard";
import { PropertyFilters } from "./PropertyFilters";
import { PropertyEmptyState } from "./PropertyEmptyState";

import { availableProperties } from "@/data/properties";

import {
  filterProperties,
  parsePropertyFilters,
} from "@/lib/property-utils";

import type {
  PropertySearchParams,
} from "@/types/property";

type PropertyCatalogProps = {
  searchParams: Promise<PropertySearchParams>;
};

export async function PropertyCatalog({
  searchParams,
}: PropertyCatalogProps) {
  const params = await searchParams;

  const filters = parsePropertyFilters(params);

  const results = filterProperties(
    availableProperties,
    filters
  );

  const hasActiveFilters = Boolean(
    filters.location ||
    filters.type ||
    filters.area ||
    filters.status
  );

  return (
    <div>
      <PropertyFilters
        key={JSON.stringify(filters)}
        filters={filters}
      />

      <div className="mt-8 mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Visar{" "}
          <span className="font-semibold text-foreground">
            {results.length}
          </span>{" "}
          {results.length === 1
            ? "fastighet"
            : "fastigheter"}
        </p>

        {hasActiveFilters && (
          <span className="rounded-full bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary">
            Filter aktiverade
          </span>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      ) : (
        <PropertyEmptyState />
      )}
    </div>
  );
}