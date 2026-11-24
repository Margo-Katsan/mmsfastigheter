import { createMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { FaultReportForm } from "@/components/fault-report/FaultReportForm";

import { FaultReportInformation } from "@/components/fault-report/FaultReportInformation";

export const metadata = createMetadata({
  title: "Felanmälan för hyresgäster",
  description:
    "Gör en felanmälan för din bostad eller lokal hos MMS Fastigheter. Beskriv problemet och bifoga bilder.",
  path: "/felanmalan",
});

export default function FaultReportPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Page heading */}
      <section className="border-b border-border bg-surface py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Felanmälan" }]}
          />

          <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            För hyresgäster
          </p>

          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Gör en felanmälan.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Har du upptäckt ett fel i din bostad
            eller lokal? Fyll i formuläret nedan
            och beskriv problemet så tydligt
            som möjligt.
          </p>
        </Container>
      </section>

      {/* Fault report content */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
            <FaultReportForm />

            <FaultReportInformation />
          </div>
        </Container>
      </section>
    </main>
  );
}