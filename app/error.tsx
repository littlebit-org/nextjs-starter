"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-background">
      <div className="container flex min-h-screen flex-col justify-center py-16">
        <div className="grid gap-8 border-y border-rule py-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="text-label text-text-subtle">littlebit</p>
            <p className="text-body-sm text-text-muted">This view stopped working.</p>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl font-display text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.04] text-text-strong">
              Reload the page, then check the last change.
            </h1>
            <p className="max-w-2xl text-lg text-pretty text-text-muted">
              If the problem keeps showing up, inspect the logs and the most recent deploy before
              trying again.
            </p>
            <Button onClick={() => reset()}>Try again</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
