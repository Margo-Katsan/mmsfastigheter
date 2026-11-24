import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Wrench,
} from "lucide-react";
import { CurrentYear } from "@/components/ui/CurrentYear";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { BackToTop } from "@/components/ui/BackToTop";

import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export function Footer() {

  const { projects, finance, maintenance } =
    company.contacts;

  return (
    <footer className="bg-primary-dark text-white">
      <Container>
        {/* Main footer */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr_1.15fr] lg:gap-10 lg:py-16">

          {/* Company information */}
          <div>
            <Logo className="text-white" />

            <p className="mt-6 font-display text-xl leading-relaxed text-white">
              Fastigheter med värde idag och i morgon.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Vi äger, förvaltar och utvecklar fastigheter
              i Skåne sedan {company.established}.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/65">
              <MapPin
                size={17}
                strokeWidth={1.5}
                className="text-accent"
                aria-hidden="true"
              />

              <span>{company.region}, Sverige</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-sans text-sm font-semibold text-white">
              Genvägar
            </h2>

            <div className="mt-3 h-0.5 w-8 bg-accent" />

            <nav
              aria-label="Sidfotsnavigation"
              className="mt-6"
            >
              <ul className="space-y-3">
                {navigation.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="font-sans text-sm font-semibold text-white">
              Kontakta oss
            </h2>

            <div className="mt-3 h-0.5 w-8 bg-accent" />

            <div className="mt-6 space-y-6">
              {[projects, finance].map((contact) => (
                <div key={contact.name}>
                  <p className="text-sm font-medium text-white">
                    {contact.name}
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    {contact.role}
                  </p>

                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-white"
                  >
                    <Phone
                      size={15}
                      strokeWidth={1.5}
                      className="shrink-0 text-accent"
                      aria-hidden="true"
                    />

                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Tenant services */}
          <div>
            <h2 className="font-sans text-sm font-semibold text-white">
              För hyresgäster
            </h2>

            <div className="mt-3 h-0.5 w-8 bg-accent" />

            <p className="mt-6 text-sm leading-relaxed text-white/65">
              Behöver du hjälp med din bostad eller lokal?
              Gör en felanmälan så hjälper vi dig vidare.
            </p>

            <Link
              href="/felanmalan"
              className="mt-5 inline-flex w-full items-center justify-between gap-3 rounded-button border border-white/25 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-white"
            >
              <span className="flex items-center gap-2">
                <Wrench
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                Gör en felanmälan
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="shrink-0"
                aria-hidden="true"
              />
            </Link>

            <a
              href={`mailto:${maintenance.email}`}
              className="mt-5 flex min-w-0 items-start gap-2 text-xs leading-relaxed text-white/65 transition-colors hover:text-white focus-visible:outline-white"
            >
              <Mail
                size={15}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              />

              <span className="break-all">
                {maintenance.email}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
  © <CurrentYear /> {company.name}. Alla rättigheter
  förbehållna.
</p>

          <div className="flex items-center justify-between gap-6">
            <Link
              href="/integritetspolicy"
              className="text-xs text-white/60 transition-colors hover:text-white focus-visible:outline-white"
            >
              Integritetspolicy
            </Link>

            <BackToTop />
          </div>
        </div>
      </Container>
    </footer>
  );
}