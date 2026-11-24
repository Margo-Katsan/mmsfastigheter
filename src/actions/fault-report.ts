"use server";

import { protectForm } from "@/lib/security/protect-form";

import { company } from "@/data/company";
import { sendMail } from "@/lib/mail";

import {
  faultCategories,
  MAX_FILES,
  MAX_FILE_SIZE,
  ALLOWED_IMAGE_TYPES,
  MAX_TOTAL_FILE_SIZE,
} from "@/data/fault-report";

import { faultReportSchema } from "@/lib/validations/fault-report";

import type {
  FaultReportState,
  FaultReportValues,
} from "@/types/fault-report";

function detectImageType(buffer: Buffer) {
  if (
    buffer.length >= 3 &&
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[2] === 0xff
  ) {
    return { type: "image/jpeg", extension: "jpg" };
  }

  if (
    buffer.length >= 8 &&
    buffer
      .subarray(0, 8)
      .equals(
        Buffer.from([
          137, 80, 78, 71, 13, 10, 26, 10,
        ])
      )
  ) {
    return { type: "image/png", extension: "png" };
  }

  if (
    buffer.length >= 12 &&
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    return { type: "image/webp", extension: "webp" };
  }

  return null;
}

export async function submitFaultReport(
  _previousState: FaultReportState,
  formData: FormData
): Promise<FaultReportState> {
  // Honeypot
  if (formData.get("website")) {
    return {
      status: "error",
      message: "Felanmälan kunde inte skickas.",
    };
  }

  const values: FaultReportValues = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    address: String(formData.get("address") ?? ""),
    unit: String(formData.get("unit") ?? ""),
    category: String(formData.get("category") ?? ""),
    serialNumber: String(
      formData.get("serialNumber") ?? ""
    ),
    subject: String(formData.get("subject") ?? ""),
    description: String(
      formData.get("description") ?? ""
    ),
    privacy: formData.get("privacy") === "on",
  };

  const validation = faultReportSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: "error",
      message: "Kontrollera uppgifterna i formuläret.",
      values,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const data = validation.data;

  const protection = await protectForm({
  formData,
  type: "fault-report",
  email: data.email,
});

if (!protection.success) {
  return {
    status: "error",
    message: protection.message,
    values,
  };
}

  const files = formData
    .getAll("images")
    .filter(
      (file): file is File =>
        file instanceof File && file.size > 0
    );

  if (files.length > MAX_FILES) {
    return {
      status: "error",
      message: "För många bifogade bilder.",
      values,
      errors: {
        images: ["Du kan bifoga högst 3 bilder."],
      },
    };
  }

  const totalSize = files.reduce(
  (total, file) => total + file.size,
  0
);

if (totalSize > MAX_TOTAL_FILE_SIZE) {
  return {
    status: "error",
    message: "De bifogade bilderna är för stora.",
    values,
    errors: {
      images: ["Den totala filstorleken får vara högst 3 MB."],
    },
  };
}

  const attachments: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[] = [];

  for (const [index, file] of files.entries()) {
    const allowedType = ALLOWED_IMAGE_TYPES.some(
      (type) => type === file.type
    );

    if (!allowedType || file.size > MAX_FILE_SIZE) {
      return {
        status: "error",
        message: "Kontrollera dina bifogade bilder.",
        values,
        errors: {
          images: ["Ogiltigt filformat eller filstorlek."],
        },
      };
    }

    const content = Buffer.from(await file.arrayBuffer());
    const detected = detectImageType(content);

    if (!detected || detected.type !== file.type) {
      return {
        status: "error",
        message: "Kontrollera dina bifogade bilder.",
        values,
        errors: {
          images: ["Bilden har ett ogiltigt filformat."],
        },
      };
    }

    attachments.push({
      filename: `felanmalan-${index + 1}.${detected.extension}`,
      content,
      contentType: detected.type,
    });
  }

  const category = faultCategories.find(
    (item) => item.value === data.category
  )?.label;

  try {
    await sendMail({
      to: company.contacts.maintenance.email,
      replyTo: data.email,

      subject: `Ny felanmälan – ${data.subject.replace(
        /[\r\n]+/g,
        " "
      )}`,

      text: [
        "Ny felanmälan från MMS Fastigheters webbplats",
        "",
        "KONTAKTUPPGIFTER",
        `Namn / Företag: ${data.name}`,
        `E-post: ${data.email}`,
        `Telefon: ${data.phone}`,
        `Adress: ${data.address}`,
        `Lägenhet / Lokal: ${data.unit || "Ej angivet"}`,
        "",
        "INFORMATION OM FELET",
        `Kategori: ${category}`,
        `Ämne: ${data.subject}`,
        `Serienummer: ${data.serialNumber || "Ej angivet"}`,
        "",
        "Beskrivning:",
        data.description,
        "",
        `Bifogade bilder: ${attachments.length}`,
      ].join("\n"),

      attachments,
    });

    return {
      status: "success",
      message:
        "Tack! Din felanmälan har skickats till oss.",
    };
  } catch {
    console.error("Fault report email delivery failed.");

    return {
      status: "error",
      values,
      message:
        "Felanmälan kunde inte skickas just nu. Försök igen eller kontakta oss via e-post.",
    };
  }
}