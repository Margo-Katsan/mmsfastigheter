export const propertyLocations = [
  { label: "Alla områden", value: "" },
  { label: "Ystad", value: "ystad" },
  { label: "Landskrona", value: "landskrona" },
  { label: "Ängelholm", value: "angelholm" },
  { label: "Skurup", value: "skurup" },
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
  { label: "500–2 000 m²", value: "500-2000" },
  { label: "2 000–10 000 m²", value: "2000-10000" },
  { label: "Över 10 000 m²", value: "10000+" },
] as const;