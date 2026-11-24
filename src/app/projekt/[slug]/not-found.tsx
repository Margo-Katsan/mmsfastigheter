import Link from "next/link";
import { HardHat, ArrowLeft, House } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";

export default function ProjectNotFound() {
  return (
    <main className="flex flex-1 items-center bg-background">
      <Container className="py-20 text-center lg:py-32">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary/8">
          <HardHat
            size={42}
            strokeWidth={1.25}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Fel 404
        </p>

        <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
          Projektet hittades inte
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted">
          Projektet du söker är inte tillgängligt
          eller så har adressen ändrats.
          Utforska gärna våra andra projekt.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projekt"
            className={buttonStyles({ size: "lg" })}
          >
            <ArrowLeft
              size={18}
              aria-hidden="true"
            />

            Alla projekt
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