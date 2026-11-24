import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ContactCard } from "@/components/ui/ContactCard";
import { buttonStyles } from "@/components/ui/Button";
import { company } from "@/data/company";

export function About() {
  return (
    <section
      id="om-oss"
      aria-labelledby="about-heading"
      className="bg-background py-16 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative pb-8 pr-6 sm:pr-10">
            <div className="relative aspect-[5/4] overflow-hidden rounded-card bg-primary/10 lg:aspect-[4/5]">
              <Image
                src="/images/commercial-street.jpg"
                alt="Traditionella fastigheter längs en gata i Skåne"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
              />
            </div>

            {/* Floating company year */}
            <div className="absolute right-0 bottom-0 rounded-card bg-primary px-8 py-6 text-white shadow-elevated sm:px-12 sm:py-8">
              <p className="font-display text-5xl tracking-tight sm:text-6xl">
                {company.established}
              </p>

              <div className="my-4 h-px w-10 bg-accent" />

              <p className="text-xs font-medium uppercase tracking-widest text-white/80">
                Etablerat i Skåne
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Om MMS Fastigheter
            </p>

            <h2
              id="about-heading"
              className="font-display text-4xl leading-[1.15] tracking-tight text-foreground sm:text-5xl"
            >
              Fastigheter med ett långsiktigt perspektiv.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {company.description}
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted">
              {company.development}
            </p>

            {/* Company values */}
            <ul className="mt-8 space-y-4">
              {company.values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-medium text-foreground">
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/om-oss"
                className={buttonStyles({ size: "lg" })}
              >
                Lär känna oss

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Contact */}
            <div className="mt-10 border-t border-border pt-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Din kontakt för projekt
              </p>

              <ContactCard
                {...company.contacts.projects}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}