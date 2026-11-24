import { ContactForm } from "./ContactForm";
import { properties } from "@/data/properties";

type ContactFormSectionProps = {
  searchParams: Promise<{
    objekt?: string | string[];
  }>;
};

export async function ContactFormSection({
  searchParams,
}: ContactFormSectionProps) {
  const params = await searchParams;

  const objectId = Array.isArray(params.objekt)
    ? params.objekt[0]
    : params.objekt;

  const selectedObject = properties.some(
    (property) => property.id === objectId
  )
    ? objectId
    : "";

  return (
    <ContactForm
      key={selectedObject}
      selectedObject={selectedObject}
    />
  );
}