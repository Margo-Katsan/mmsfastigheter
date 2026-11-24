import Link from "next/link";
import {
  Building2,
  ArrowLeft,
  House,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";

export default function PropertyNotFound() {
  return (
    <main className="flex flex-1 items-center bg-background">
      <Container className="py-20 text-center lg:py-32">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary/8">
          <Building2
            size={42}
            strokeWidth={1.25}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Fel 404
        </p>

        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
          Fastigheten hittades inte
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
          Fastigheten du söker är inte längre
          tillgänglig eller så har adressen ändrats.
          Utforska gärna våra andra aktuella objekt.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/fastigheter"
            className={buttonStyles({
              size: "lg",
            })}
          >
            <ArrowLeft
              size={18}
              aria-hidden="true"
            />

            Alla fastigheter
          </Link>

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
      </Container>
    </main>
  );
}