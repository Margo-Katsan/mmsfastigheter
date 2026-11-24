import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { PropertyImage } from "@/components/ui/PropertyImage";
import { ContactCard } from "@/components/ui/ContactCard";
import { buttonStyles } from "@/components/ui/Button";

import { company } from "@/data/company";
import { getPropertyTypeLabel } from "@/lib/property-utils";

import type { Property } from "@/types/property";

type ProjectDetailsProps = {
  project: Property;
};

export function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  const contact = company.contacts.projects;

  const contactHref = `/kontakt?objekt=${encodeURIComponent(
    project.id
  )}`;

  const apartmentCount =
    project.apartments !== undefined
      ? `${project.id === "borrby-1-borrby-2-ystad" ? "Ca " : ""}${project.apartments}`
      : "Ej angivet";

  const details = [
    {
      label: "Projekt",
      value: project.title,
    },
    {
      label: "Ort",
      value: project.location,
    },
    {
      label: "Region",
      value: company.region,
    },
    {
      label: "Fastighetstyp",
      value: getPropertyTypeLabel(project.type),
    },
    {
      label: "Antal lägenheter",
      value: apartmentCount,
    },
    {
      label: "Status",
      value: "Pågående projekt",
    },
  ];

  return (
    <section className="bg-background pt-8 pb-16 lg:pt-12 lg:pb-24">
      <Container>
        <Breadcrumbs
          items={[
            {
              label: "Projekt",
              href: "/projekt",
            },
            {
              label: `${project.title} – ${project.location}`,
            },
          ]}
        />

        {/* Main project section */}
        <div className="mt-8 grid items-start gap-10 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">

          {/* Project illustration */}
          <div className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-surface">
              <PropertyImage
                src={project.image}
                alt={`Planillustration för ${project.title} i ${project.location}`}
                sizes="(max-width: 1023px) 100vw, 680px"
                contain
              />
            </div>

            {project.image && (
              <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
                Planillustration – {project.title},{" "}
                {project.location}.
              </p>
            )}
          </div>

          {/* Project information */}
          <div className="min-w-0">
            <Badge
              variant="outline"
              className="mb-5 px-4 py-2"
            >
              Pågående projekt
            </Badge>

            <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl xl:text-5xl">
              {project.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-muted">
              <MapPin
                size={19}
                strokeWidth={1.5}
                className="text-primary"
                aria-hidden="true"
              />

              {project.location}, {company.region}
            </div>

            {/* Key facts */}
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-7">
              <div>
                <Building2
                  size={25}
                  strokeWidth={1.5}
                  className="mb-3 text-accent"
                  aria-hidden="true"
                />

                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Lägenheter
                </dt>

                <dd className="mt-2 font-display text-3xl text-primary">
                  {apartmentCount}
                </dd>
              </div>

              <div className="border-l border-border pl-6">
                <MapPin
                  size={25}
                  strokeWidth={1.5}
                  className="mb-3 text-accent"
                  aria-hidden="true"
                />

                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  Område
                </dt>

                <dd className="mt-2 font-display text-3xl text-primary">
                  {project.location}
                </dd>
              </div>
            </dl>

            {/* Contact */}
            <div className="mt-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Projektansvarig
              </p>

              <ContactCard {...contact} />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href={contactHref}
                className={buttonStyles({
                  size: "lg",
                  className: "w-full",
                })}
              >
                Kontakta oss
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
          </div>
        </div>

        {/* Description and facts */}
        <div className="mt-16 grid items-start gap-12 border-t border-border pt-12 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Fastighetsutveckling
            </p>

            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Om projektet
            </h2>

            <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted sm:text-lg">
              {project.description}
            </p>

            {project.contactText && (
              <p className="mt-5 text-base leading-relaxed text-muted">
                {project.contactText}
              </p>
            )}

            <Link
              href="/projekt"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />

              Tillbaka till alla projekt
            </Link>
          </div>

          {/* Detailed facts */}
          <div className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl text-foreground">
              Projektinformation
            </h2>

            <dl className="mt-6 divide-y divide-border">
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-2 gap-4 py-4"
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