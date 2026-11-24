import Link from "next/link";
import { House, ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";
import { ErrorIllustration } from "./ErrorIllustration";

type NotFoundPageProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function NotFoundPage({
  eyebrow = "Sidan hittades inte",
  title = "Här verkar det vara tomt.",
  description = "Sidan du söker finns inte eller har flyttats. Låt oss hjälpa dig att hitta rätt.",
  secondaryHref = "/fastigheter",
  secondaryLabel = "Se våra fastigheter",
}: NotFoundPageProps) {
  return (
    <main className="flex flex-1 items-center bg-background">
      <Container className="py-14 text-center sm:py-20 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <ErrorIllustration code="404" />

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>

          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>

          {/* Navigation buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className={buttonStyles({
                size: "lg",
              })}
            >
              <House
                size={18}
                aria-hidden="true"
              />

              Till startsidan
            </Link>

            <Link
              href={secondaryHref}
              className={buttonStyles({
                variant: "outline",
                size: "lg",
              })}
            >
              {secondaryLabel}

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Additional contact */}
          <div className="mt-10">
            <p className="text-sm text-muted">
              Behöver du hjälp?{" "}
              <Link
                href="/kontakt"
                className="font-medium text-primary underline underline-offset-4"
              >
                Kontakta oss
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}