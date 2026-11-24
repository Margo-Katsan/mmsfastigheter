import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { developmentProjects } from "@/data/properties";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section
      id="projekt"
      className="border-y border-border bg-surface py-16 lg:py-24"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Pågående projekt"
            title="Projekt och utvecklingsmöjligheter"
            description="Vi utvecklar framtidens bostäder och fastigheter med ett långsiktigt perspektiv."
          />

          <Link
            href="/projekt"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary lg:self-auto"
          >
            Se alla projekt
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {developmentProjects.map((project) => (
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