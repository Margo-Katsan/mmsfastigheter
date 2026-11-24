import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { formatArea } from "@/lib/formatters";

export function CompanyStory() {
  return (
    <section
      aria-labelledby="company-story-heading"
      className="bg-background py-16 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Company image */}
          <div className="relative pb-8 pr-6 sm:pr-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface">
              <Image
                src="/images/commercial-street.jpg"
                alt="Traditionella bostads- och kommersiella fastigheter i Skåne"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-0 rounded-card bg-primary px-8 py-6 text-white shadow-elevated sm:px-10 sm:py-8">
              <p className="font-display text-5xl tracking-tight sm:text-6xl">
                {company.established}
              </p>

              <div className="my-4 h-px w-10 bg-accent" />

              <p className="text-xs uppercase tracking-widest text-white/80">
                Vår historia börjar
              </p>
            </div>
          </div>

          {/* Company story */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Vår historia
            </p>

            <h2
              id="company-story-heading"
              className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              En långsiktig fastighetsägare i Skåne.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              MMS Fastigheter etablerades {company.established}
              {" "}och är en enskild firma med verksamhet
              i Skåne.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted">
              Vi äger och förvaltar i egen regi cirka{" "}
              {formatArea(company.propertyArea)} fastighetsarea.
              I vårt bestånd finns både bostadsfastigheter
              och kommersiella fastigheter.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted">
              {company.development}
            </p>

            <div className="mt-8 border-l-2 border-accent pl-6">
              <p className="font-display text-xl leading-relaxed text-primary sm:text-2xl">
                Fastigheter med värde idag och i morgon.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}