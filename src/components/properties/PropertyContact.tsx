import Link from "next/link";
import {
  Phone,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

import { ContactCard } from "@/components/ui/ContactCard";
import { buttonStyles } from "@/components/ui/Button";
import { company } from "@/data/company";

import type { Property } from "@/types/property";

type PropertyContactProps = {
  property: Property;
};

export function PropertyContact({
  property,
}: PropertyContactProps) {
  const contact = company.contacts.projects;

  const contactHref = `/kontakt?objekt=${encodeURIComponent(
    property.id
  )}`;

  return (
    <aside
      aria-labelledby="property-contact-heading"
      className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/8">
        <MessageSquare
          size={23}
          strokeWidth={1.5}
          className="text-primary"
          aria-hidden="true"
        />
      </div>

      <h2
        id="property-contact-heading"
        className="mt-5 font-display text-2xl leading-tight text-foreground"
      >
        Intresserad av fastigheten?
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        Kontakta oss för mer information om{" "}
        {property.title.toLowerCase()} i{" "}
        {property.location}.
      </p>

      <div className="my-6 border-y border-border py-6">
        <ContactCard {...contact} />
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={`tel:${contact.phoneHref}`}
          className={buttonStyles({
            size: "lg",
            className: "w-full",
          })}
        >
          <Phone size={17} aria-hidden="true" />
          Ring oss
        </a>

        <Link
          href={contactHref}
          className={buttonStyles({
            variant: "outline",
            size: "lg",
            className: "w-full",
          })}
        >
          Skicka förfrågan

          <ArrowRight
            size={17}
            aria-hidden="true"
          />
        </Link>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-muted">
        Vi hjälper dig gärna med dina frågor.
      </p>
    </aside>
  );
}