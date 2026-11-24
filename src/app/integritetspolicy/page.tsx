import { createMetadata } from "@/lib/seo";
import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { PrivacyNavigation } from "@/components/legal/PrivacyNavigation";

export const metadata = createMetadata({
  title: "Integritetspolicy",
  description:
    "Information om hur MMS Fastigheter behandlar personuppgifter och skyddar din integritet.",
  path: "/integritetspolicy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Page heading */}
      <section className="border-b border-border bg-surface py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Integritetspolicy" }]}
          />

          <div className="mt-10 flex items-start justify-between gap-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Personuppgifter & integritet
              </p>

              <h1 className="break-words font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Integritetspolicy
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Här beskriver vi hur MMS Fastigheter
                behandlar dina personuppgifter och
                vilka rättigheter du har.
              </p>
            </div>

            <div className="hidden size-24 shrink-0 items-center justify-center rounded-full bg-primary/8 sm:flex">
              <ShieldCheck
                size={46}
                strokeWidth={1.25}
                className="text-primary"
                aria-hidden="true"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Privacy content */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <PrivacyNavigation />

            <PrivacyContent />
          </div>
        </Container>
      </section>
    </main>
  );
}