import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Maximize,
  Building2,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { PropertyImage } from "@/components/ui/PropertyImage";
import { ContactCard } from "@/components/ui/ContactCard";
import { buttonStyles } from "@/components/ui/Button";

import { formatArea } from "@/lib/formatters";
import { getPropertyTypeLabel } from "@/lib/property-utils";
import { company } from "@/data/company";

import type { Property } from "@/types/property";

type PropertyDetailsProps = {
  property: Property;
};

export function PropertyDetails({
  property,
}: PropertyDetailsProps) {
  const contact = company.contacts.projects;

  const contactHref = `/kontakt?objekt=${encodeURIComponent(
    property.id
  )}`;

  const area =
    property.area !== undefined
      ? formatArea(property.area)
      : "Ej angivet";

  const propertyType = getPropertyTypeLabel(property.type);

  const details = [
    {
      label: "Fastighet",
      value: property.title,
    },
    {
      label: "Ort",
      value: property.location,
    },
    {
      label: "Region",
      value: company.region,
    },
    {
      label: "Fastighetstyp",
      value: propertyType,
    },
    {
      label: "Yta",
      value: area,
    },
    {
      label: "Status",
      value: property.status,
    },
  ];

  return (
    <section className="bg-background pt-8 pb-16 lg:pt-12 lg:pb-24">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            {
              label: "Fastigheter",
              href: "/fastigheter",
            },
            {
              label: `${property.title} – ${property.location}`,
            },
          ]}
        />

        {/* Main property section */}
        <div className="mt-8 grid items-start gap-10 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">

          {/* Left column: Property image */}
          <div className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-surface">
              <PropertyImage
                src={property.image}
                alt={`${property.title} i ${property.location}`}
                sizes="(max-width: 1023px) 100vw, 680px"
                contain
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs text-muted sm:text-sm">
                {property.title}, {property.location}
              </p>

              {property.image && (
                <span className="text-xs text-muted">
                  MMS Fastigheter
                </span>
              )}
            </div>
          </div>

          {/* Right column: Property information */}
          <div className="min-w-0">
            <Badge className="mb-5 px-4 py-2">
              {property.status}
            </Badge>

            <h1 className="break-words font-display text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl xl:text-5xl">
              {property.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-base text-muted">
              <MapPin
                size={19}
                strokeWidth={1.5}
                className="shrink-0 text-primary"
                aria-hidden="true"
              />

              {property.location}, {company.region}
            </div>

            {/* Key facts */}
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-7">
              <div>
                <Maximize
                  size={25}
                  strokeWidth={1.5}
                  className="mb-3 text-accent"
                  aria-hidden="true"
                />

                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Yta
                </dt>

                <dd className="mt-2 font-display text-2xl text-primary sm:text-3xl">
                  {area}
                </dd>
              </div>

              <div className="border-l border-border pl-6">
                <Building2
                  size={25}
                  strokeWidth={1.5}
                  className="mb-3 text-accent"
                  aria-hidden="true"
                />

                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Fastighetstyp
                </dt>

                <dd className="mt-2 text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                  {propertyType}
                </dd>
              </div>
            </dl>

            {/* Contact person */}
            <div className="mt-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Din kontakt
              </p>

              <ContactCard {...contact} />
            </div>

            {/* CTA buttons */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href={contactHref}
                className={buttonStyles({
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

              <a
                href={`tel:${contact.phoneHref}`}
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className: "w-full",
                })}
              >
                <Phone
                  size={17}
                  aria-hidden="true"
                />

                Ring oss
              </a>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              Kontakta oss gärna för mer information
              om fastigheten.
            </p>
          </div>
        </div>

        {/* Property description */}
        <div className="mt-16 grid items-start gap-12 border-t border-border pt-12 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Objektinformation
            </p>

            <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Om fastigheten
            </h2>

            <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted sm:text-lg">
              {property.description}
            </p>

            {property.contactText && (
              <p className="mt-4 text-base leading-relaxed text-muted">
                {property.contactText}
              </p>
            )}

            <Link
              href="/fastigheter"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark hover:underline"
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />

              Tillbaka till alla fastigheter
            </Link>
          </div>

          {/* Detailed information */}
          <div className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl text-foreground">
              Fastighetsinformation
            </h2>

            <dl className="mt-6 divide-y divide-border">
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_1fr] gap-4 py-4"
                >
                  <dt className="text-sm text-muted">
                    {label}
                  </dt>

                  <dd className="text-right text-sm font-medium text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}