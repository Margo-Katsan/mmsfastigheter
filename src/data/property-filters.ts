export const propertyLocations = [
  { label: "Alla områden", value: "" },
  { label: "Landskrona", value: "landskrona" },
  { label: "Skurup", value: "skurup" },
  { label: "Ängelholm", value: "angelholm" },
] as const;

export const propertyTypes = [
  { label: "Alla typer", value: "" },
  { label: "Bostadsfastighet", value: "residential" },
  { label: "Kommersiell fastighet", value: "commercial" },
  { label: "Industrifastighet", value: "industrial" },
  { label: "Utvecklingsfastighet", value: "development" },
] as const;

export const propertyAreas = [
  { label: "Alla storlekar", value: "" },
  { label: "Under 500 m²", value: "0-500" },
  { label: "500–1 999 m²", value: "500-2000" },
  { label: "2 000–9 999 m²", value: "2000-10000" },
  { label: "10 000 m² eller mer", value: "10000+" },
] as const;

export const propertyStatuses = [
  { label: "Alla objekt", value: "" },
  { label: "Till salu", value: "sale" },
  { label: "Till uthyrning", value: "rent" },
] as const;

export const propertySortOptions = [
  { label: "Standard", value: "" },
  { label: "Yta – störst först", value: "area-desc" },
  { label: "Yta – minst först", value: "area-asc" },
  { label: "Namn – A till Ö", value: "name-asc" },
  { label: "Namn – Ö till A", value: "name-desc" },
] as const;