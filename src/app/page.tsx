import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main>
      <Container className="space-y-12 py-24">
        <SectionHeading
          eyebrow="MMS Fastigheter"
          title="Fastigheter med värde idag och i morgon."
          description="Vi äger, förvaltar och utvecklar fastigheter i Skåne sedan 1984."
        />

        <div className="flex flex-wrap gap-4">
          <Button>
            Se våra objekt
            <ArrowRight size={18} />
          </Button>

          <Button variant="outline">
            Kontakta oss
          </Button>

          <Button variant="ghost">
            Läs mer
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>Till salu</Badge>
          <Badge variant="success">Till uthyrning</Badge>
          <Badge variant="warning">Pågående projekt</Badge>
          <Badge variant="neutral">Såld</Badge>
          <Badge variant="outline">Kommande</Badge>
        </div>
      </Container>
    </main>
  );
}