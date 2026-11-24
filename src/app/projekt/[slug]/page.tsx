import type { Metadata } from "next";
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

  const title = `${project.title} – ${project.location}`;

  return {
    title,
    description: project.description,

    openGraph: {
      title,
      description: project.description,
      type: "website",
      locale: "sv_SE",

      ...(project.image
        ? {
            images: [
              {
                url: project.image,
                alt: title,
              },
            ],
          }
        : {}),
    },
  };
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