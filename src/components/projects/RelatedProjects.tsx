import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

import { getRelatedProjects } from "@/lib/project-utils";

type RelatedProjectsProps = {
  projectId: string;
};

export function RelatedProjects({
  projectId,
}: RelatedProjectsProps) {
  const projects = getRelatedProjects(projectId);

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border bg-surface py-16 lg:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Upptäck fler möjligheter"
            title="Andra projekt"
            description="Läs mer om våra övriga utvecklingsprojekt i Skåne."
          />

          <Link
            href="/projekt"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Se alla projekt
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}