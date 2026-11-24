import { Building2, CalendarDays, MapPin } from "lucide-react";

export const statistics = [
  {
    id: "property-area",
    value: "80 000 m²",
    label: "Fastigheter i egen förvaltning",
    icon: Building2,
  },
  {
    id: "established",
    value: "1984",
    label: "Etableringsår",
    icon: CalendarDays,
  },
  {
    id: "region",
    value: "Skåne",
    label: "Vårt verksamhetsområde",
    icon: MapPin,
  },
] as const;