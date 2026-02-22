export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 py-16">
      <p className="text-label text-muted-foreground">Loading</p>
      <div className="h-3 w-48 animate-pulse rounded-full bg-muted" />
    </main>
  );
}
