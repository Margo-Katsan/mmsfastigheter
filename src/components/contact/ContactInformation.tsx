import Link from "next/link";

import {
  ArrowRight,
  Wrench,
  Mail,
  MapPin,
} from "lucide-react";

import { ContactCard } from "@/components/ui/ContactCard";
import { buttonStyles } from "@/components/ui/Button";
import { company } from "@/data/company";

export function ContactInformation() {
  const { projects, finance, maintenance } =
    company.contacts;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-foreground">
          Våra kontakter
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Du är varmt välkommen att kontakta oss.
        </p>
      </div>

      {/* Project manager */}
      <article className="rounded-card border border-border bg-surface p-6 shadow-card">
        <ContactCard {...projects} />

        <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted">
          För frågor om fastigheter till salu,
          uthyrning och våra utvecklingsprojekt.
        </p>
      </article>

      {/* Finance */}
      <article className="rounded-card border border-border bg-surface p-6 shadow-card">
        <ContactCard {...finance} />

        <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted">
          För frågor som rör ekonomi.
        </p>
      </article>

      {/* Maintenance */}
      <article className="relative overflow-hidden rounded-card bg-primary p-6 text-white sm:p-8">
        <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
          <Wrench
            size={25}
            strokeWidth={1.5}
            className="text-accent"
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-5 font-display text-2xl text-white">
          Är du hyresgäst?
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Har du upptäckt ett fel i din bostad
          eller lokal? Använd vårt formulär
          för felanmälan.
        </p>

        <Link
          href="/felanmalan"
          className={buttonStyles({
            className:
              "mt-6 w-full bg-white text-primary hover:bg-white/90",
          })}
        >
          Gör en felanmälan
          <ArrowRight size={17} aria-hidden="true" />
        </Link>

        <a
          href={`mailto:${maintenance.email}`}
          className="mt-5 flex items-center gap-2 text-xs text-white/75 hover:text-white"
        >
          <Mail
            size={15}
            className="shrink-0"
            aria-hidden="true"
          />

          <span className="min-w-0 break-all">
            {maintenance.email}
          </span>
        </a>
      </article>

      {/* Location */}
      <div className="flex items-center gap-3 px-2 text-sm text-muted">
        <MapPin
          size={19}
          strokeWidth={1.5}
          className="text-accent"
          aria-hidden="true"
        />

        {company.region}, Sverige
      </div>
    </div>
  );
}