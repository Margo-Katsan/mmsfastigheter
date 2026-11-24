import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "bong-1-ystad",
    title: "Bong 1 - Ystad",
    location: "Ystad",
    status: "Projekt",
    description:
      "Ett stenkast från havet planerar vi för tre stycken flerbostadshus med 100 st lägenheter. Utförligare information finns på Ystads kommuns hemsida via länken nedan.",
    image: "/images/properties/bong-1-ystad.png",
    ctaLabel: "Mer info",
    href: "/projekt/bong-1-ystad",
  },
  {
    id: "borrby-1-borrby-2-ystad",
    title: "Borrby 1 & Borrby 2 - Ystad",
    location: "Ystad",
    status: "Projekt",
    description:
      "Detaljplansändringen från industri till bostäder godkändes 2022 på det fd. Regementsområdet i Ystad. Med Ystads sandskog som närmsta granne finns det här möjlighet att utveckla ett 80-tal bostadslägenheter.",
    image: "/images/properties/borrby-1-borrby-2-ystad.png",
    contactText: "Kontakta Erika Walgreen för mer information.",
    ctaLabel: "Kontakt",
    href: "/projekt/borrby-1-borrby-2-ystad",
  },
  {
    id: "fastighet-angelholm",
    title: "Fastighet - Ängelholm",
    location: "Ängelholm",
    status: "Till salu",
    description:
      "Fastighet om 19.000 kvm i Ängelholm. Här finns det möjlighet att utveckla bostäder.",
    image: null,
    contactText: "Kontakta Erika Walgreen för mer information.",
    ctaLabel: "Kontakt",
    href: "/fastigheter/angelholm",
    area: "19 000 kvm",
  },
  {
    id: "livsmedelsfastighet-landskrona",
    title: "Livsmedelsfastighet - Landskrona",
    location: "Landskrona",
    status: "Till salu / uthyrning",
    description:
      "Fastighet om 14.000 kvm i Landskrona. Tidigare hyresgäster har varit Santa Maria (BRC-certifierade) och Anamma Foods (FSSC22000-certifierade).",
    image: "/images/properties/livsmedelsfastighet-landskrona.jpg",
    contactText: "Kontakta Erika Walgreen för mer information.",
    ctaLabel: "Kontakt",
    href: "/fastigheter/landskrona",
    area: "14 000 kvm",
  },
  {
    id: "livsmedelsfastighet-skurup",
    title: "Livsmedelsfastighet - Skurup",
    location: "Skurup",
    status: "Till salu / uthyrning",
    description:
      "Del av livsmedelsfastighet uthyres. Ca 350 kvm.",
    image: null,
    contactText: "Kontakta Erika Walgreen för mer information.",
    ctaLabel: "Kontakt",
    href: "/fastigheter/skurup",
    area: "350 kvm",
  },
];