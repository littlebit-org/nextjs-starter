export default function Loading() {
  return (
    <main className="bg-background">
      <div className="container flex min-h-screen flex-col justify-center py-16">
        <div className="grid gap-6 border-y border-rule py-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="text-label text-text-subtle">littlebit</p>
            <p className="text-body-sm text-text-muted">Loading the next screen.</p>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl font-display text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.05] text-text-strong">
              Pulling the useful parts into view.
            </h1>
            <div className="relative h-1.5 w-full max-w-md overflow-hidden rounded-full bg-border">
              <div className="h-full w-1/3 rounded-full bg-primary animate-loading-bar" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
