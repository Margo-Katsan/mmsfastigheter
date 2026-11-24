import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";
import { company } from "@/data/company";

export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-background pb-16 lg:pb-24"
    >
      <Container>
        <div className="relative isolate overflow-hidden rounded-card bg-primary px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 -right-32 size-[500px] rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-16 size-[500px] rounded-full border border-white/10"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Låt oss prata fastigheter
              </p>

              <h2
                id="contact-cta-heading"
                className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Letar du efter en fastighet eller nya möjligheter?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Kontakta oss för mer information om våra
                fastigheter, lediga lokaler och pågående
                projekt.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:flex-col">
              <Link
                href="/kontakt"
                className={buttonStyles({
                  size: "lg",
                  className:
                    "bg-white text-primary hover:bg-white/90",
                })}
              >
                Kontakta oss
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href={`tel:${company.contacts.projects.phoneHref}`}
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-white/30 text-white hover:bg-white/10",
                })}
              >
                <Phone size={17} aria-hidden="true" />
                Ring oss
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}