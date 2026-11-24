import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "bong-1-ystad",
    title: "Bong 1",
    location: "Ystad",
    locationSlug: "ystad",
    type: "residential",
    status: "Projekt",
    description:
      "Ett stenkast från havet planerar vi för tre flerbostadshus med totalt 100 lägenheter.",
    apartments: 100,
    image: "/images/properties/bong-1-ystad.png",
    href: "/projekt/bong-1-ystad",
  },
  {
    id: "borrby-1-borrby-2-ystad",
    title: "Borrby 1 & Borrby 2",
    location: "Ystad",
    locationSlug: "ystad",
    type: "residential",
    status: "Projekt",
    description:
      "Detaljplansändringen från industri till bostäder godkändes 2022 på det tidigare Regementsområdet i Ystad. Här finns möjlighet att utveckla ett 80-tal bostadslägenheter.",
    apartments: 80,
    image: "/images/properties/borrby-1-borrby-2-ystad.png",
    contactText:
      "Kontakta Erika Walgreen för mer information.",
    href: "/projekt/borrby-1-borrby-2-ystad",
  },
  {
    id: "fastighet-angelholm",
    title: "Utvecklingsfastighet",
    location: "Ängelholm",
    locationSlug: "angelholm",
    type: "development",
    status: "Till salu",
    description:
      "Fastighet om 19 000 m² i Ängelholm med möjlighet att utveckla bostäder.",
    area: 19000,
    image: null,
    contactText:
      "Kontakta Erika Walgreen för mer information.",
    href: "/fastigheter/fastighet-angelholm",
  },
  {
    id: "livsmedelsfastighet-landskrona",
    title: "Livsmedelsfastighet",
    location: "Landskrona",
    locationSlug: "landskrona",
    type: "industrial",
    status: "Till salu / uthyrning",
    description:
      "Fastighet om 14 000 m² i Landskrona. Tidigare hyresgäster har varit Santa Maria (BRC-certifierade) och Anamma Foods (FSSC22000-certifierade).",
    area: 14000,
    image: "/images/properties/livsmedelsfastighet-landskrona.jpg",
    contactText:
      "Kontakta Erika Walgreen för mer information.",
    href: "/fastigheter/livsmedelsfastighet-landskrona",
  },
  {
    id: "livsmedelsfastighet-skurup",
    title: "Livsmedelsfastighet",
    location: "Skurup",
    locationSlug: "skurup",
    type: "industrial",
    status: "Till salu / uthyrning",
    description:
      "Del av livsmedelsfastighet uthyres. Cirka 350 m².",
    area: 350,
    image: null,
    contactText:
      "Kontakta Erika Walgreen för mer information.",
    href: "/fastigheter/livsmedelsfastighet-skurup",
  },
];

export const availableProperties = properties.filter(
  (property) => property.status !== "Projekt"
);

export const developmentProjects = properties.filter(
  (property) => property.status === "Projekt"
);