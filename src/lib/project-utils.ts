import { developmentProjects } from "@/data/properties";

export function getProjectBySlug(slug: string) {
  return developmentProjects.find(
    (project) => project.id === slug
  );
}

export function getRelatedProjects(
  projectId: string,
  limit = 2
) {
  return developmentProjects
    .filter((project) => project.id !== projectId)
    .slice(0, limit);
}