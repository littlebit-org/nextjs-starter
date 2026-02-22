"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-16 text-center text-foreground">
        <p className="text-label text-muted-foreground">Application Error</p>
        <h1 className="text-h1">A Critical Error Occurred</h1>
        <p className="max-w-xl text-pretty text-muted-foreground">
          The app failed to recover automatically. Try again, then inspect logs if the issue
          persists.
        </p>
        <Button onClick={() => reset()}>Reload Application</Button>
      </body>
    </html>
  );
}
