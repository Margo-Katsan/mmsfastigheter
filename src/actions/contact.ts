"use server";

import { contactSchema } from "@/lib/validations/contact";
import { sendMail } from "@/lib/mail";
import { properties } from "@/data/properties";

import type {
  ContactFormState,
  ContactFormValues,
} from "@/types/contact";

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot spam protection
  if (formData.get("website")) {
    return {
      status: "error",
      message: "Meddelandet kunde inte skickas.",
    };
  }

  const values: ContactFormValues = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    object: String(formData.get("object") ?? ""),
    message: String(formData.get("message") ?? ""),
    privacy: formData.get("privacy") === "on",
  };

  const validation = contactSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: "error",
      message: "Kontrollera uppgifterna i formuläret.",
      values,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const data = validation.data;

  const property = properties.find(
    (item) => item.id === data.object
  );

  const objectName = property
    ? `${property.title} – ${property.location}`
    : "Allmän förfrågan";

  try {
    const recipient = process.env.CONTACT_EMAIL;

    if (!recipient) {
      throw new Error("Contact email is missing.");
    }

    await sendMail({
      to: recipient,
      replyTo: data.email,

      subject: `Ny förfrågan – ${objectName}`,

      text: [
        "Ny förfrågan från MMS Fastigheters webbplats",
        "",
        `Namn: ${data.name}`,
        `E-post: ${data.email}`,
        `Telefon: ${data.phone || "Ej angivet"}`,
        `Objekt: ${objectName}`,
        "",
        "Meddelande:",
        data.message,
        "",
        "Skickat via kontaktformuläret.",
      ].join("\n"),
    });

    return {
      status: "success",
      message:
        "Tack för din förfrågan! Vi återkommer så snart vi kan.",
    };
  } catch {
    console.error("Contact form email delivery failed.");

    return {
      status: "error",
      values,
      message:
        "Meddelandet kunde inte skickas just nu. Försök igen eller kontakta oss via telefon.",
    };
  }
}