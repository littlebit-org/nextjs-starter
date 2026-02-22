import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-16 text-center">
      <p className="text-label text-muted-foreground">404</p>
      <h1 className="text-h1">Page Not Found</h1>
      <p className="max-w-xl text-pretty text-muted-foreground">
        The page you requested doesn&apos;t exist or may have moved.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  );
}
