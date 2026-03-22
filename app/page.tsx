import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const frictionPoints = [
  {
    title: "Vague language",
    description: "The product knows what it means. The user does not. That gap is expensive."
  },
  {
    title: "Too many decisions",
    description: "The flow asks for certainty before it has earned enough context to ask for it."
  },
  {
    title: "Systems that outgrew their naming",
    description: "The product changed faster than the labels, the rules, and the team memory around it."
  }
];

const processSteps = [
  {
    index: "01",
    title: "See the friction",
    description: "We read the flow, the wording, and the product logic together so the real constraint shows up."
  },
  {
    index: "02",
    title: "Decide what changes",
    description: "We cut options, rewrite labels, and tighten the path until the next step is obvious."
  },
  {
    index: "03",
    title: "Ship the useful version",
    description: "The result should be easier to use, easier to explain, and easier to keep moving."
  }
];

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-background">
      <div className="container py-6 sm:py-8">
        <header className="flex items-start justify-between gap-6 border-b border-rule pb-6 sm:pb-8">
          <div className="max-w-xl">
            <Link
              href="/"
              className="text-[0.75rem] font-medium tracking-[0.01em] lowercase [font-variant-caps:normal] text-text-subtle transition-colors hover:text-foreground"
            >
              littlebit
            </Link>
            <p className="mt-3 max-w-md text-body-sm text-text-muted">
              Product clarity for teams that need cleaner flows, clearer wording, and less rework.
            </p>
          </div>
          <ModeToggle />
        </header>

        <section className="grid gap-10 border-b border-rule py-12 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-start">
          <div className="space-y-8 motion-safe:animate-rise-in">
            <div className="space-y-4">
              <h1 className="max-w-[10.5ch] font-display text-[clamp(3.25rem,7vw,5.75rem)] font-medium leading-[1.02] text-text-strong">
                Clearer products. Less rework.
              </h1>
              <p className="max-w-2xl text-lg text-pretty text-text-muted sm:text-xl">
                littlebit helps teams make digital products easier to understand and easier to keep
                moving.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">Bring the messy version</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-we-work">See how we work</a>
              </Button>
            </div>

            <p className="max-w-xl border-t border-rule pt-5 text-body-sm text-text-muted">
              Clearer flows, cleaner wording, fewer points where work gets stuck.
            </p>
          </div>

          <aside className="surface-panel p-5 sm:p-6 motion-safe:animate-fade-in motion-safe:[animation-delay:140ms] lg:mt-3">
            <p className="font-mono text-mono text-text-subtle">Case study draft</p>

            <p className="mt-5 max-w-lg text-base text-text-strong">
              Checkout completion was flat for three quarters. The form kept asking for certainty
              where users only had partial information.
            </p>

            <p className="mt-4 max-w-lg text-body-sm text-text-muted">
              We changed the sequence, rewrote the labels, and cut two decisions.
            </p>

            <p className="mt-6 border-t border-rule pt-4 text-body-sm text-text-muted">
              Most digital friction is not mysterious. It usually starts with a messy decision, a
              vague sentence, or a flow that keeps asking too much.
            </p>
          </aside>
        </section>

        <section className="border-b border-rule py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-h2">
              When a product feels complicated, the problem is usually not the user.
            </h2>
            <p className="max-w-2xl text-body-sm text-text-muted">
              It is the wording, the flow, or the system underneath it. We work on those.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {frictionPoints.map((item) => (
              <article key={item.title} className="border-t border-rule pt-4">
                <h3 className="text-h4">{item.title}</h3>
                <p className="mt-3 text-body-sm text-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-we-work" className="border-b border-rule py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-h2">How we work</h2>
            <p className="max-w-2xl text-body-sm text-text-muted">
              Lead with the point. Name the friction. Explain the consequence. Then make the next
              step easy to see.
            </p>
          </div>

          <div className="mt-10">
            {processSteps.map((step) => (
              <article
                key={step.index}
                className="grid gap-4 border-t border-rule py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
              >
                <p className="font-mono text-mono text-text-subtle">{step.index}</p>
                <div className="space-y-2">
                  <h3 className="text-h4">{step.title}</h3>
                  <p className="max-w-2xl text-body-sm text-text-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16">
          <div className="max-w-3xl space-y-5">
            <p className="max-w-xl text-body-sm text-text-muted">
              We stay small on purpose. Fewer layers. More judgment. Less theatre.
            </p>
            <h2 className="max-w-2xl text-h2">Bring the messy version.</h2>
            <p className="max-w-2xl text-lg text-pretty text-text-muted">
              littlebit will help you decide what stays, what goes, and what ships.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#top">Review the brief</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-we-work">Read how we work</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
