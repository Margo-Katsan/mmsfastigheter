"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
  unstable_retry?: () => void;
};

export default function GlobalError({
  error,
  reset,
  unstable_retry,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="sv">
      <body
        style={{
          margin: 0,
          backgroundColor: "#f7f6f2",
          color: "#1c2421",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <title>Ett fel har uppstått | MMS Fastigheter</title>

        <main
          style={{
            minHeight: "100dvh",
            display: "grid",
            placeItems: "center",
            padding: "32px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#193c2f",
                fontSize: "48px",
                fontWeight: 700,
                letterSpacing: "-3px",
              }}
            >
              MMS
            </div>

            <div
              style={{
                color: "#193c2f",
                fontSize: "10px",
                letterSpacing: "4px",
              }}
            >
              FASTIGHETER
            </div>

            <div
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "#b49a70",
                margin: "32px auto",
              }}
            />

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Något gick fel.
            </h1>

            <p
              style={{
                color: "#68716c",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Webbplatsen är tillfälligt otillgänglig.
              Försök igen om en stund.
            </p>

            <button
              type="button"
              onClick={() =>
                (unstable_retry ?? reset)()
              }
              style={{
                marginTop: "24px",
                padding: "16px 32px",
                border: 0,
                borderRadius: "8px",
                backgroundColor: "#193c2f",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Försök igen
            </button>

            <div style={{ marginTop: "24px" }}>
              <button
                type="button"
                onClick={() =>
                  window.location.assign("/")
                }
                style={{
                  border: 0,
                  background: "transparent",
                  color: "#193c2f",
                  fontSize: "14px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Till startsidan
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}