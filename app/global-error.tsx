"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { fontVariables } from "@/lib/fonts";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={fontVariables}>
      <body className="bg-background text-foreground antialiased">
        <main className="bg-background">
          <div className="container flex min-h-screen flex-col justify-center py-16">
            <div className="grid gap-8 border-y border-rule py-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
              <div className="space-y-3">
                <p className="text-label text-text-subtle">littlebit</p>
                <p className="text-body-sm text-text-muted">The app failed before it could recover.</p>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-2xl font-display text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.04] text-text-strong">
                  Reload the application and inspect the break.
                </h1>
                <p className="max-w-2xl text-lg text-pretty text-text-muted">
                  This error reached the root of the app. Try again, then check the logs and the
                  last deployment if it happens twice.
                </p>
                <Button onClick={() => reset()}>Reload application</Button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
