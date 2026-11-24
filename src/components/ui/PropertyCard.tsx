import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/property";

type PropertyCardProps = {
  property: Property;
  className?: string;
};

function getBadgeVariant(status: Property["status"]) {
  if (status === "Projekt") return "warning";
  if (status === "Till salu / uthyrning") return "success";
  return "default";
}

export function PropertyCard({
  property,
  className,
}: PropertyCardProps) {
  const {
    title,
    location,
    status,
    description,
    image,
    contactText,
    ctaLabel = "Läs mer",
    href = "#",
    area,
  } = property;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-card border border-border bg-surface shadow-card transition-shadow hover:shadow-elevated",
        className
      )}
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 flex flex-col p-6 lg:order-1 lg:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant={getBadgeVariant(status)}>{status}</Badge>

            <span className="inline-flex items-center gap-1 text-sm text-muted">
              <MapPin size={16} strokeWidth={1.75} />
              {location}
            </span>
          </div>

          <h3 className="text-2xl leading-tight text-foreground">
            {title}
          </h3>

          {area && (
            <p className="mt-2 text-sm font-medium text-primary">
              {area}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>

          {contactText && (
            <p className="mt-5 text-sm leading-relaxed text-foreground">
              {contactText}
            </p>
          )}

          <div className="mt-6">
            <Link href={href}>
              <Button>
                {ctaLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="order-1 min-h-[260px] lg:order-2">
          {image ? (
            <div className="relative h-full min-h-[260px] w-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      </div>
    </article>
  );
}