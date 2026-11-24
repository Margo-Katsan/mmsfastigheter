export const siteConfig = {
  name: "MMS Fastigheter",

  title:
    "MMS Fastigheter – Fastigheter i Skåne sedan 1984",

  description:
    "Vi äger, förvaltar och utvecklar bostäder och kommersiella fastigheter i Skåne. Utforska våra aktuella fastigheter och utvecklingsprojekt.",

  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://mmsfastigheter.se"
  ).replace(/\/+$/, ""),

  locale: "sv_SE",

  language: "sv",

  ogImage: "/social-image",

  indexable:
    process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",

  keywords: [
    "MMS Fastigheter",
    "Fastigheter Skåne",
    "Lediga lokaler",
    "Fastigheter till salu",
    "Fastigheter till uthyrning",
    "Fastighetsutveckling",
    "Kommersiella fastigheter",
    "Industrifastigheter",
    "Ystad",
    "Landskrona",
    "Ängelholm",
    "Skurup",
  ],
} as const;