import {
  Wrench,
  Mail,
  Info,
  ClipboardList,
  Camera,
  Send,
} from "lucide-react";

import { company } from "@/data/company";

const steps = [
  {
    title: "Beskriv problemet",
    description:
      "Ange var felet finns och när du upptäckte det.",
    icon: ClipboardList,
  },
  {
    title: "Bifoga bilder",
    description:
      "Lägg gärna till bilder som visar problemet.",
    icon: Camera,
  },
  {
    title: "Skicka din anmälan",
    description:
      "Kontrollera uppgifterna och skicka formuläret.",
    icon: Send,
  },
];

export function FaultReportInformation() {
  const { maintenance } = company.contacts;

  return (
    <aside className="space-y-6">
      {/* Emergency information */}
      <div className="rounded-card border border-accent/30 bg-accent/10 p-6">
        <Info
          size={25}
          strokeWidth={1.5}
          className="text-primary"
          aria-hidden="true"
        />

        <h2 className="mt-4 font-display text-2xl text-foreground">
          Vid akut fara
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Vid brand, allvarlig olycka eller omedelbar
          fara för liv, ring{" "}
          <a
            href="tel:112"
            className="font-semibold text-primary underline"
          >
            112
          </a>
          .
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Använd inte formuläret vid situationer
          som kräver omedelbar hjälp.
        </p>
      </div>

      {/* Instructions */}
      <div className="rounded-card border border-border bg-surface p-6 sm:p-8">
        <h2 className="font-display text-2xl text-foreground">
          Så fungerar det
        </h2>

        <div className="mt-7 space-y-7">
          {steps.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start gap-4"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {title}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative contact */}
      <div className="rounded-card bg-primary p-6 text-white sm:p-8">
        <Wrench
          size={29}
          strokeWidth={1.5}
          className="text-accent"
          aria-hidden="true"
        />

        <h2 className="mt-5 font-display text-2xl text-white">
          Behöver du hjälp?
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Du kan även skicka din felanmälan
          direkt till oss via e-post.
        </p>

        <a
          href={`mailto:${maintenance.email}`}
          className="mt-6 flex items-start gap-3 rounded-button border border-white/20 p-4 text-sm transition-colors hover:bg-white/10"
        >
          <Mail
            size={18}
            className="shrink-0 text-accent"
            aria-hidden="true"
          />

          <span className="min-w-0 break-all">
            {maintenance.email}
          </span>
        </a>
      </div>
    </aside>
  );
}