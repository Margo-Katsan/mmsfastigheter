import Link from "next/link";

import {
  Phone,
  Mail,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCard } from "@/components/ui/ContactCard";
import { buttonStyles } from "@/components/ui/Button";

import { company } from "@/data/company";

export function CompanyTeam() {
  const { projects, finance, maintenance } =
    company.contacts;

  const team = [projects, finance];

  return (
    <section
      id="team"
      aria-label="Våra kontakter"
      className="bg-background py-16 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Personlig kontakt"
          title="Människorna bakom MMS"
          description="Kontakta oss gärna om du har frågor om våra fastigheter, projekt eller din hyreslokal."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Employees */}
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col rounded-card border border-border bg-surface p-6 shadow-card sm:p-8"
            >
              <ContactCard {...member} />

              <p className="mt-6 text-sm leading-relaxed text-muted">
                {member.role === "Projektansvarig"
                  ? "Kontakt för våra fastigheter, utvecklingsprojekt och objekt till salu eller uthyrning."
                  : "Kontakt för frågor som rör ekonomi."}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href={`tel:${member.phoneHref}`}
                  className={buttonStyles({
                    variant: "outline",
                    className: "w-full",
                  })}
                >
                  <Phone size={16} aria-hidden="true" />
                  Ring {member.name.split(" ")[0]}
                </a>
              </div>
            </article>
          ))}

          {/* Tenant services */}
          <article className="flex min-w-0 flex-col rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:size-20">
                <Wrench
                  size={30}
                  strokeWidth={1.25}
                  className="text-primary"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="font-sans font-semibold text-foreground">
                  Felanmälan
                </h3>

                <p className="mt-1 text-sm text-muted">
                  För hyresgäster
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              Har du upptäckt ett fel i din bostad
              eller lokal? Skicka en felanmälan
              till oss.
            </p>

            <a
              href={`mailto:${maintenance.email}`}
              className="mt-4 flex items-start gap-2 text-sm text-primary hover:underline"
            >
              <Mail
                size={16}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />

              <span className="min-w-0 break-all">
                {maintenance.email}
              </span>
            </a>

            <div className="mt-auto pt-6">
              <Link
                href="/felanmalan"
                className={buttonStyles({
                  className: "w-full",
                })}
              >
                Gör en felanmälan

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}