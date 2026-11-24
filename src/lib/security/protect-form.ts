import "server-only";

import { verifyTurnstile } from "./turnstile";
import { checkRateLimit } from "./rate-limit";

type ProtectFormOptions = {
  formData: FormData;
  type: "contact" | "fault-report";
  email: string;
};

type ProtectionResult =
  | { success: true }
  | { success: false; message: string };

export async function protectForm({
  formData,
  type,
  email,
}: ProtectFormOptions): Promise<ProtectionResult> {
  // Honeypot
  if (formData.get("website")) {
    return {
      success: false,
      message: "Formuläret kunde inte skickas.",
    };
  }

  const token = formData.get("turnstileToken");

  if (
    typeof token !== "string" ||
    !token ||
    !(await verifyTurnstile(token, type))
  ) {
    return {
      success: false,
      message:
        "Säkerhetsverifieringen misslyckades. Försök igen.",
    };
  }

  const allowed = await checkRateLimit(type, email);

  if (!allowed) {
    return {
      success: false,
      message:
        "Formuläret kan inte skickas just nu. Försök igen senare.",
    };
  }

  return { success: true };
}