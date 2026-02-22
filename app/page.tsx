import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-label text-muted-foreground">Next.js + shadcn/ui</span>
        <h1 className="text-h1">Your Project Starts Here</h1>
        <p className="max-w-xl text-pretty text-muted-foreground">
          This minimal starter ships with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.
          Edit <code>app/page.tsx</code> to begin shaping your product and use the theme toggle to
          preview light and dark modes.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <a href="https://nextjs.org/docs" rel="noreferrer" target="_blank">
            Next.js Docs
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://ui.shadcn.com/" rel="noreferrer" target="_blank">
            shadcn/ui Docs
          </a>
        </Button>
        <ModeToggle />
      </div>
    </main>
  );
}
