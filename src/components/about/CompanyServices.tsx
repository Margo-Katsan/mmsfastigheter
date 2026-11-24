import Link from "next/link";

import {
  Building2,
  KeyRound,
  Layers,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    id: "ownership",
    title: "Äga",
    description:
      "Vi äger bostadsfastigheter och kommersiella fastigheter i Skåne med ett långsiktigt perspektiv.",
    icon: Building2,
    href: "/fastigheter",
    linkLabel: "Våra fastigheter",
  },
  {
    id: "management",
    title: "Förvalta",
    description:
      "Vi förvaltar våra fastigheter i egen regi och erbjuder en direkt kontakt för våra hyresgäster.",
    icon: KeyRound,
    href: "/kontakt",
    linkLabel: "Kontakta oss",
  },
  {
    id: "development",
    title: "Utveckla",
    description:
      "Vi utvecklar bostadsprojekt och arbetar med detaljplansändringar för att skapa nya möjligheter.",
    icon: Layers,
    href: "/projekt",
    linkLabel: "Våra projekt",
  },
] as const;

export function CompanyServices() {
  return (
    <section
      aria-label="Vår verksamhet"
      className="border-y border-border bg-surface py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Vad vi gör"
          title="Vår verksamhet"
          description="Tre centrala delar av vårt arbete med fastigheter i Skåne."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-card border border-border bg-background p-6 transition-shadow hover:shadow-card sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-card bg-primary text-white">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="font-display text-3xl text-accent"
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-3xl text-foreground">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>

                <div className="mt-auto pt-8">
                  <Link
                    href={service.href}
                    className="flex items-center justify-between gap-3 border-t border-border pt-5 text-sm font-semibold text-primary hover:underline"
                  >
                    {service.linkLabel}

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}