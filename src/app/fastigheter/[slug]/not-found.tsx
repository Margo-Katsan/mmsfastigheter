import { NotFoundPage } from "@/components/errors/NotFoundPage";

export default function PropertyNotFound() {
  return (
    <NotFoundPage
      eyebrow="Fastigheten hittades inte"
      title="Vi hittar inte fastigheten."
      description="Fastigheten du söker finns inte eller är inte längre tillgänglig. Utforska gärna våra andra aktuella objekt."
      secondaryHref="/fastigheter"
      secondaryLabel="Alla fastigheter"
    />
  );
}