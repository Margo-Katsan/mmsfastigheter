import { NotFoundPage } from "@/components/errors/NotFoundPage";

export default function ProjectNotFound() {
  return (
    <NotFoundPage
      eyebrow="Projektet hittades inte"
      title="Vi hittar inte projektet."
      description="Projektet du söker finns inte eller har flyttats. Läs gärna mer om våra andra utvecklingsprojekt."
      secondaryHref="/projekt"
      secondaryLabel="Alla projekt"
    />
  );
}