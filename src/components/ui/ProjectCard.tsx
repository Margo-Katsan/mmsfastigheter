import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { PropertyImage } from "@/components/ui/PropertyImage";
import { Badge } from "@/components/ui/Badge";
import type { Property } from "@/types/property";

type ProjectCardProps = {
  project: Property;
};

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group grid h-full overflow-hidden rounded-card border border-border bg-surface shadow-card transition-shadow hover:shadow-elevated md:grid-cols-2">
      <Link
        href={project.href}
        aria-label={`Visa projektet ${project.title}`}
        className="relative min-h-56 overflow-hidden bg-background"
      >
        <PropertyImage
          src={project.image}
          alt={`Planillustration för ${project.title}`}
          sizes="(max-width: 767px) 100vw, 50vw"
          contain
        />
      </Link>

      <div className="flex flex-col items-start p-6">
        <Badge variant="outline">
          Pågående projekt
        </Badge>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
          <MapPin size={14} aria-hidden="true" />
          {project.location}
        </div>

        <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Läs mer

            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}