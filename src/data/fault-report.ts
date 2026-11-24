export const faultCategories = [
  { label: "Välj typ av fel", value: "" },
  { label: "Vatten och avlopp", value: "water" },
  { label: "El och belysning", value: "electricity" },
  { label: "Värme och ventilation", value: "heating" },
  { label: "Vitvaror", value: "appliances" },
  { label: "Dörrar och fönster", value: "doors-windows" },
  { label: "Lås och nycklar", value: "locks" },
  { label: "Gemensamma utrymmen", value: "common-areas" },
  { label: "Skadedjur", value: "pests" },
  { label: "Övrigt", value: "other" },
] as const;

export const MAX_FILES = 3;
export const MAX_FILE_SIZE = 2 * 1024 * 1024;

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;