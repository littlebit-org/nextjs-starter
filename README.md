# Next.js Starter Template

This repository is a generic starter for building a Next.js 16 application with TypeScript, Tailwind CSS, and shadcn/ui. It keeps the default pages intentionally minimal so you can brand and extend it to fit any project.

## What's included
- Next.js App Router with TypeScript and ESLint already configured
- Tailwind CSS, global design tokens, and a light/dark theme provider
- shadcn/ui CLI (`npm run shadcn`) plus example `Button` + mode toggle components
- Built-in App Router conventions: `loading.tsx`, `error.tsx`, `global-error.tsx`, `not-found.tsx`
- Metadata API defaults plus `robots.ts` and `sitemap.ts`
- Opinionated project structure using absolute imports via the `@/` alias

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local dev server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to confirm the starter boots without errors.

> **Node version**: Next.js 16 requires Node.js 20.9 or newer.

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

This value is used for metadata, robots, and sitemap URLs.

## Customize the template
- Update the application metadata in `app/layout.tsx` and homepage copy in `app/page.tsx`.
- Extend shadcn/ui components with the CLI:
  ```bash
  # List available components
  npm run shadcn list

  # Add a new component, e.g. accordion
  npm run shadcn add accordion
  ```
- Tailor global styles in `app/globals.css` and utility helpers in `lib/utils.ts`.
- Add environment variables via `.env.local` as you introduce data fetching or APIs.

## Useful scripts
- `npm run dev` – Run the Next.js dev server
- `npm run build` – Create an optimized production build
- `npm run start` – Serve the production build locally
- `npm run lint` – Lint with ESLint (zero warnings allowed)
- `npm run lint:fix` – Auto-fix lint issues where possible
- `npm run typecheck` – Run TypeScript type checking
- `npm run shadcn` – Access the shadcn/ui CLI

## Deploy
When you're ready to deploy, connect the repository to Vercel (or your preferred host) and push your latest changes.

Vercel will detect the Next.js project automatically; other hosts should run the same build command before serving `.next/` via `npm run start`.

Happy shipping!
