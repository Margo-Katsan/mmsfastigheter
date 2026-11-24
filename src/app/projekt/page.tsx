import { createMetadata } from "@/lib/seo";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactCTA } from "@/components/sections/ContactCTA";

import { developmentProjects } from "@/data/properties";

export const metadata = createMetadata({
  title: "Våra projekt och fastighetsutveckling",
  description:
    "Upptäck MMS Fastigheters bostadsprojekt och utvecklingsmöjligheter i Skåne, inklusive Bong 1 och Borrby i Ystad.",
  path: "/projekt",
});

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Page heading */}
      <section className="border-b border-border bg-surface py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Projekt" }]}
          />

          <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Fastighetsutveckling
          </p>

          <h1 className="max-w-4xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Projekt och utvecklingsmöjligheter.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Vi utvecklar bostadsprojekt och arbetar
            löpande med detaljplansändringar för att
            skapa nya möjligheter i Skåne.
          </p>
        </Container>
      </section>

      {/* Project listings */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-3xl text-foreground">
              Pågående projekt
            </h2>

            <span className="text-sm text-muted">
              {developmentProjects.length} projekt
            </span>
          </div>

          <div className="mt-8 grid gap-6">
            {developmentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}