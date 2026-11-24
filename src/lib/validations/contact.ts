import { z } from "zod";

import { properties } from "@/data/properties";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ange ditt namn.")
    .max(100, "Namnet är för långt."),

  email: z
    .string()
    .trim()
    .max(254, "E-postadressen är för lång.")
    .email("Ange en giltig e-postadress."),

  phone: z
    .string()
    .trim()
    .max(30, "Telefonnumret är för långt.")
    .refine(
      (value) =>
        value === "" ||
        /^[+\d\s().-]{5,30}$/.test(value),
      "Ange ett giltigt telefonnummer."
    ),

  object: z
    .string()
    .refine(
      (value) =>
        value === "" ||
        properties.some(
          (property) => property.id === value
        ),
      "Välj ett giltigt objekt."
    ),

  message: z
    .string()
    .trim()
    .min(10, "Meddelandet måste innehålla minst 10 tecken.")
    .max(3000, "Meddelandet får innehålla högst 3000 tecken."),

  privacy: z
    .boolean()
    .refine(
      (value) => value,
      "Bekräfta att du har läst integritetspolicyn."
    ),
});