export type PropertyStatus =
  | "Till salu"
  | "Till salu / uthyrning"
  | "Till uthyrning"
  | "Projekt";

export type PropertyType =
  | "residential"
  | "commercial"
  | "industrial"
  | "development";

export type Property = {
  id: string;
  title: string;
  location: string;
  locationSlug: string;
  type: PropertyType;
  status: PropertyStatus;
  description: string;
  area?: number;
  apartments?: number;
  image?: string | null;
  contactText?: string;
  ctaLabel?: string;
  href: string;
};

export type PropertyFilters = {
  location: string;
  type: string;
  area: string;
  status: string;
  sort: string;
};

export type PropertySearchParams = Record<
  string,
  string | string[] | undefined
>;