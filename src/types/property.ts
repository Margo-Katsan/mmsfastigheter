export type PropertyStatus =
  | "Till salu"
  | "Till salu / uthyrning"
  | "Projekt";

export type Property = {
  id: string;
  title: string;
  location: string;
  status: PropertyStatus;
  description: string;
  area?: string;
  image?: string | null;
  contactText?: string;
  ctaLabel?: string;
  href?: string;
};