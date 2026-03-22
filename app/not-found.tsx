import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="bg-background">
      <div className="container flex min-h-screen flex-col justify-center py-16">
        <div className="grid gap-8 border-y border-rule py-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="text-label text-text-subtle">404</p>
            <p className="text-body-sm text-text-muted">This page is missing or moved.</p>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl font-display text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.04] text-text-strong">
              The route is gone, but the rest of the work is still here.
            </h1>
            <p className="max-w-2xl text-lg text-pretty text-text-muted">
              Go back to the homepage and start from the section that still matters.
            </p>
            <Button asChild>
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
