import { z } from "zod";
import { faultCategories } from "@/data/fault-report";

export const faultReportSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ange ditt namn eller företag.")
    .max(100),

  email: z
    .string()
    .trim()
    .max(254)
    .email("Ange en giltig e-postadress."),

  phone: z
    .string()
    .trim()
    .min(5, "Ange ditt telefonnummer.")
    .max(30)
    .regex(
      /^[+\d\s().-]+$/,
      "Ange ett giltigt telefonnummer."
    )
    .refine(
      (value) => value.replace(/\D/g, "").length >= 5,
      "Ange ett giltigt telefonnummer."
    ),

  address: z
    .string()
    .trim()
    .min(5, "Ange fastighetens adress.")
    .max(200),

  unit: z.string().trim().max(50),

  category: z.string().refine(
    (value) =>
      value !== "" &&
      faultCategories.some(
        (category) => category.value === value
      ),
    "Välj typ av fel."
  ),

  serialNumber: z.string().trim().max(100),

  subject: z
    .string()
    .trim()
    .min(3, "Ange ett ämne.")
    .max(150),

  description: z
    .string()
    .trim()
    .min(10, "Beskriv felet med minst 10 tecken.")
    .max(5000),

  privacy: z.boolean().refine(
    (value) => value,
    "Bekräfta att du har läst integritetspolicyn."
  ),
});