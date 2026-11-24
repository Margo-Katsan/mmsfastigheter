import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/components/layout/Logo";
import { Navigation } from "@/components/layout/Navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/95 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <Navigation />

        <div className="flex items-center gap-4">
          <Link
            href="/kontakt"
            className={buttonStyles({
              className: "hidden lg:inline-flex",
            })}
          >
            Kontakta oss

            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}