import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import { buttonStyles } from "@/components/ui/Button";
import { privacyPolicy } from "@/data/privacy-policy";

export function PrivacyContent() {
  return (
    <article className="min-w-0 rounded-card border border-border bg-surface p-6 shadow-card sm:p-8 lg:p-12">
      {privacyPolicy.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="scroll-mt-32 border-b border-border py-9 first:pt-0"
        >
          <h2
            id={`${section.id}-heading`}
            className="flex items-baseline gap-3 font-display text-2xl leading-tight text-foreground sm:text-3xl"
          >
            <span className="shrink-0 text-accent">
              {index + 1}.
            </span>

            <span>{section.title}</span>
          </h2>

          <div className="mt-5 space-y-4">
            {section.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-[1.9] text-muted sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {section.items && (
            <ul className="mt-5 list-disc space-y-3 pl-5 marker:text-accent">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="pl-1 text-sm leading-relaxed text-muted sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.id === "rattigheter" && (
            <a
              href="https://www.imy.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Läs mer hos Integritetsskyddsmyndigheten

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </a>
          )}
        </section>
      ))}

      {/* Contact section */}
      <section
        id="kontakt"
        aria-labelledby="privacy-contact-heading"
        className="scroll-mt-32 pt-9"
      >
        <h2
          id="privacy-contact-heading"
          className="font-display text-2xl text-foreground sm:text-3xl"
        >
          <span className="text-accent">
            {privacyPolicy.length + 1}.
          </span>{" "}
          Kontakt
        </h2>

        <p className="mt-5 text-sm leading-[1.9] text-muted sm:text-base">
          Om du har frågor om hur vi behandlar dina
          personuppgifter eller vill utöva dina
          rättigheter är du välkommen att kontakta
          MMS Fastigheter.
        </p>

        <div className="mt-8 rounded-card bg-primary p-6 text-white sm:p-8">
          <ShieldCheck
            size={32}
            strokeWidth={1.5}
            className="text-accent"
            aria-hidden="true"
          />

          <h3 className="mt-5 font-display text-2xl text-white">
            Har du frågor om din integritet?
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Kontakta oss om du har frågor om
            personuppgifter och dataskydd.
          </p>

          <Link
            href="/kontakt"
            className={buttonStyles({
              className:
                "mt-6 bg-white text-primary hover:bg-white/90",
            })}
          >
            Kontakta oss

            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}