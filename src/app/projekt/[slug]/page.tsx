import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { RelatedProjects } from "@/components/projects/RelatedProjects";

import { developmentProjects } from "@/data/properties";
import { getProjectBySlug } from "@/lib/project-utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return developmentProjects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return createMetadata({
    title: `${project.title} – Bostadsprojekt i ${project.location}`,
    description: project.description,
    path: project.href,
    image: project.image,
  });
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1">
      <ProjectDetails project={project} />

      <RelatedProjects projectId={project.id} />
    </main>
  );
}