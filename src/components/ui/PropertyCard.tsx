import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Maximize,
  Building2,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { PropertyImage } from "@/components/ui/PropertyImage";
import { formatArea } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/property";

type PropertyCardProps = {
  property: Property;
  className?: string;
};

export function PropertyCard({
  property,
  className,
}: PropertyCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card",
        "border border-border bg-surface shadow-card",
        "transition-all duration-300",
        "motion-safe:hover:-translate-y-1 hover:shadow-elevated",
        className
      )}
    >
      {/* Property image */}
      <Link
        href={property.href}
        aria-label={`Visa ${property.title} i ${property.location}`}
        className="relative block aspect-[4/3] overflow-hidden bg-background"
      >
        <PropertyImage
          src={property.image}
          alt={`${property.title} i ${property.location}`}
          contain={property.status === "Projekt"}
        />

        {/* Status */}
        <div className="absolute top-4 left-4">
          <Badge className="border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-sm backdrop-blur-sm">
            {property.status}
          </Badge>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <MapPin
            size={15}
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span>{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">
          <Link
            href={property.href}
            className="transition-colors hover:text-primary"
          >
            {property.title}
          </Link>
        </h3>

        {/* Property information */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {property.area !== undefined && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <Maximize
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <span>{formatArea(property.area)}</span>
            </div>
          )}

          {property.apartments !== undefined && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <Building2
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <span>
                Ca {property.apartments} lägenheter
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
          {property.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-border pt-5">
            <div>
              <p className="text-xs text-muted">
                {property.status === "Projekt"
                  ? "Projektinformation"
                  : "Mer information"}
              </p>

              <Link
                href={property.href}
                className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Läs mer
              </Link>
            </div>

            <Link
              href={property.href}
              aria-label={`Läs mer om ${property.title} i ${property.location}`}
              className="flex size-11 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
            >
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}