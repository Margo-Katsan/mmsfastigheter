import "server-only";

import { siteConfig } from "@/config/site";

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export async function verifyTurnstile(
  token: string,
  action: "contact" | "fault-report"
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret || !token || token.length > 2048) {
    return false;
  }

  const production = process.env.NODE_ENV === "production";

  const testSecret =
    "1x0000000000000000000000000000000AA";

  if (
    production &&
    (secret === testSecret ||
      process.env.FORM_SECURITY_MODE !== "production")
  ) {
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret,
          response: token,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!response.ok) {
      return false;
    }

    const result: TurnstileResponse =
      await response.json();

    if (!result.success) {
      return false;
    }

    if (production) {
      const hostname = new URL(siteConfig.url).hostname;

      return (
        result.hostname === hostname &&
        result.action === action
      );
    }

    return true;
  } catch {
    console.error("Turnstile verification failed.");

    return false;
  }
}