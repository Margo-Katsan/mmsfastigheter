"use client";

import { Turnstile } from "@marsidev/react-turnstile";

type TurnstileWidgetProps = {
  action: "contact" | "fault-report";
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

export function TurnstileWidget({
  action,
  onVerify,
  onExpire,
  onError,
}: TurnstileWidgetProps) {
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <p role="alert" className="text-sm text-red-600">
        Säkerhetsverifieringen är inte tillgänglig.
      </p>
    );
  }

  return (
    <div className="min-w-0">
      <Turnstile
        siteKey={siteKey}
        onSuccess={onVerify}
        onExpire={onExpire}
        onError={onError}
        options={{
          theme: "light",
          language: "sv",
          size: "flexible",
          action,
          responseField: false,
          refreshExpired: "auto",
        }}
      />

      <p className="mt-2 text-xs leading-relaxed text-muted">
        Formuläret skyddas mot automatiserade
        förfrågningar med Cloudflare Turnstile.
      </p>
    </div>
  );
}