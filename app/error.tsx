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
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-16 text-center">
      <p className="text-label text-muted-foreground">Something went wrong</p>
      <h1 className="text-h1">Unexpected Error</h1>
      <p className="max-w-xl text-pretty text-muted-foreground">
        Please try reloading the page. If this keeps happening, check the server logs for details.
      </p>
      <Button onClick={() => reset()}>Try Again</Button>
    </main>
  );
}
