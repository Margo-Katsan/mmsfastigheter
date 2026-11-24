"use client";

import { useEffect } from "react";
import Link from "next/link";

import {
  RotateCcw,
  House,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  Button,
  buttonStyles,
} from "@/components/ui/Button";

import { ErrorIllustration } from "@/components/errors/ErrorIllustration";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
  unstable_retry?: () => void;
};

export default function ErrorPage({
  error,
  reset,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center bg-background">
      <Container className="py-16 text-center lg:py-28">
        <div className="mx-auto max-w-2xl">
          <ErrorIllustration code="!" />

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Ett oväntat fel har uppstått
          </p>

          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Något gick fel.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Vi kunde inte visa sidan just nu.
            Försök igen eller återvänd till startsidan.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={() =>
                (unstable_retry ?? reset)()
              }
            >
              <RotateCcw
                size={18}
                aria-hidden="true"
              />

              Försök igen
            </Button>

            <Link
              href="/"
              className={buttonStyles({
                variant: "outline",
                size: "lg",
              })}
            >
              <House
                size={18}
                aria-hidden="true"
              />

              Till startsidan
            </Link>
          </div>

          {error.digest && (
            <p className="mt-8 break-all text-xs text-muted">
              Felreferens: {error.digest}
            </p>
          )}

          <p className="mt-4 text-sm text-muted">
            Kvarstår problemet?{" "}
            <Link
              href="/kontakt"
              className="font-medium text-primary underline"
            >
              Kontakta oss
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}