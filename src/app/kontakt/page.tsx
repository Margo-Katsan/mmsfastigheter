import { createMetadata } from "@/lib/seo";
import { Suspense } from "react";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { ContactInformation } from "@/components/contact/ContactInformation";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export const metadata = createMetadata({
  title: "Kontakt",
  description:
    "Kontakta MMS Fastigheter för frågor om fastigheter, uthyrning, försäljning och utvecklingsprojekt i Skåne.",
  path: "/kontakt",
});

type ContactPageProps = {
  searchParams: Promise<{
    objekt?: string | string[];
  }>;
};

function ContactFormSkeleton() {
  return (
    <div
      role="status"
      aria-label="Laddar kontaktformulär"
      className="rounded-card border border-border bg-surface p-8 shadow-card motion-safe:animate-pulse"
    >
      <div className="size-12 rounded-full bg-border" />

      <div className="mt-6 h-8 w-3/4 rounded bg-border" />

      <div className="mt-4 h-4 w-full rounded bg-border" />

      <div className="mt-8 space-y-6">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index}>
            <div className="mb-2 h-3 w-24 rounded bg-border" />

            <div className="h-12 rounded-button bg-background" />
          </div>
        ))}

        <div className="h-36 rounded-button bg-background" />

        <div className="h-5 w-3/4 rounded bg-border" />

        <div className="h-13 rounded-button bg-primary/15" />
      </div>

      <span className="sr-only">
        Laddar kontaktformulär...
      </span>
    </div>
  );
}

export default function ContactPage({
  searchParams,
}: ContactPageProps) {
  return (
    <main className="flex-1 bg-background">
      {/* Page heading */}
      <section className="border-b border-border bg-surface py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Kontakt" }]}
          />

          <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Personlig kontakt
          </p>

          <h1 className="max-w-4xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Låt oss prata fastigheter.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Har du frågor om våra fastigheter,
            lediga lokaler eller utvecklingsprojekt?
            Kontakta oss så hjälper vi dig vidare.
          </p>
        </Container>
      </section>

      {/* Contact content */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <ContactInformation />

            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactFormSection
                searchParams={searchParams}
              />
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}