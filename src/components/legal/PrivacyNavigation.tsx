import { List } from "lucide-react";

import { privacyPolicy } from "@/data/privacy-policy";

export function PrivacyNavigation() {
  const sections = [
    ...privacyPolicy.map(({ id, title }) => ({
      id,
      title,
    })),
    {
      id: "kontakt",
      title: "Kontakt",
    },
  ];

  return (
    <aside className="lg:sticky lg:top-28">
      <nav
        aria-label="Innehållsförteckning"
        className="rounded-card border border-border bg-surface p-6 shadow-card"
      >
        <div className="flex items-center gap-3">
          <List
            size={20}
            strokeWidth={1.5}
            className="text-primary"
            aria-hidden="true"
          />

          <h2 className="font-sans text-sm font-semibold text-foreground">
            Innehåll
          </h2>
        </div>

        <div className="my-5 h-px bg-border" />

        <ol className="space-y-1">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex items-start gap-3 rounded-button px-3 py-2.5 text-sm leading-relaxed text-muted transition-colors hover:bg-primary/5 hover:text-primary"
              >
                <span className="w-5 shrink-0 text-xs tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}