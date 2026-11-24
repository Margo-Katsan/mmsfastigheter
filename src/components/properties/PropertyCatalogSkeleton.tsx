export function PropertyCatalogSkeleton() {
  return (
    <div
      role="status"
      aria-label="Laddar fastigheter"
      className="motion-safe:animate-pulse"
    >
      <div className="rounded-card border border-border bg-surface p-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <div className="mb-3 h-3 w-20 rounded bg-border" />

              <div className="h-12 rounded-button bg-background" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-4 border-t border-border pt-5">
          <div className="h-11 w-24 rounded-button bg-border" />

          <div className="h-11 w-40 rounded-button bg-primary/15" />
        </div>
      </div>

      <div className="mt-8 mb-6 h-4 w-36 rounded bg-border" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-card border border-border bg-surface"
          >
            <div className="aspect-[4/3] bg-border" />

            <div className="space-y-4 p-6">
              <div className="h-3 w-24 rounded bg-border" />

              <div className="h-6 w-3/4 rounded bg-border" />

              <div className="h-4 w-20 rounded bg-border" />

              <div className="h-3 w-full rounded bg-border" />

              <div className="h-3 w-4/5 rounded bg-border" />

              <div className="border-t border-border pt-5">
                <div className="h-8 w-24 rounded bg-border" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className="sr-only">
        Laddar fastigheter...
      </span>
    </div>
  );
}