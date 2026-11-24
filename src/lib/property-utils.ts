import {
  propertyLocations,
  propertyTypes,
  propertyAreas,
  propertyStatuses,
  propertySortOptions,
} from "@/data/property-filters";

import type {
  Property,
  PropertyFilters,
  PropertySearchParams,
} from "@/types/property";

type FilterOption = {
  label: string;
  value: string;
};

function getValidParam(
  value: string | string[] | undefined,
  options: readonly FilterOption[]
): string {
  const param = Array.isArray(value) ? value[0] : value;

  return options.some((option) => option.value === param)
    ? param ?? ""
    : "";
}

export function parsePropertyFilters(
  params: PropertySearchParams
): PropertyFilters {
  return {
    location: getValidParam(params.location, propertyLocations),
    type: getValidParam(params.type, propertyTypes),
    area: getValidParam(params.area, propertyAreas),
    status: getValidParam(params.status, propertyStatuses),
    sort: getValidParam(params.sort, propertySortOptions),
  };
}

function matchesArea(
  area: number | undefined,
  filter: string
): boolean {
  if (!filter) return true;

  if (area === undefined) return false;

  switch (filter) {
    case "0-500":
      return area >= 0 && area < 500;

    case "500-2000":
      return area >= 500 && area < 2000;

    case "2000-10000":
      return area >= 2000 && area < 10000;

    case "10000+":
      return area >= 10000;

    default:
      return true;
  }
}

function matchesStatus(
  status: Property["status"],
  filter: string
): boolean {
  switch (filter) {
    case "sale":
      return (
        status === "Till salu" ||
        status === "Till salu / uthyrning"
      );

    case "rent":
      return (
        status === "Till uthyrning" ||
        status === "Till salu / uthyrning"
      );

    default:
      return true;
  }
}

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters
): Property[] {
  const filtered = properties.filter((property) => {
    if (property.status === "Projekt") {
      return false;
    }

    const locationMatches =
      !filters.location ||
      property.locationSlug === filters.location;

    const typeMatches =
      !filters.type ||
      property.type === filters.type;

    const areaMatches = matchesArea(
      property.area,
      filters.area
    );

    const statusMatches = matchesStatus(
      property.status,
      filters.status
    );

    return (
      locationMatches &&
      typeMatches &&
      areaMatches &&
      statusMatches
    );
  });

  switch (filters.sort) {
    case "area-desc":
      return filtered.sort(
        (a, b) =>
          (b.area ?? -Infinity) - (a.area ?? -Infinity)
      );

    case "area-asc":
      return filtered.sort(
        (a, b) =>
          (a.area ?? Infinity) - (b.area ?? Infinity)
      );

    case "name-asc":
      return filtered.sort((a, b) =>
        a.title.localeCompare(b.title, "sv-SE")
      );

    case "name-desc":
      return filtered.sort((a, b) =>
        b.title.localeCompare(a.title, "sv-SE")
      );

    default:
      return filtered;
  }
}