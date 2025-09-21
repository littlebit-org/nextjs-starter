# Next.js Starter Template

This repository is a generic starter for building a Next.js 15 application with TypeScript, Tailwind CSS, and shadcn/ui. It keeps the default pages intentionally minimal so you can brand and extend it to fit any project.

## What's included
- Next.js App Router with TypeScript and ESLint already configured
- Tailwind CSS, global design tokens, and a light/dark theme provider
- shadcn/ui CLI (`npm run shadcn`) plus example `Button` + mode toggle components
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

> **Node version**: Next.js 15 requires Node.js 18.18 or newer. Node 20 LTS is recommended.

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
- `npm run lint` – Lint the project with ESLint
- `npm run shadcn` – Access the shadcn/ui CLI

## Deploy
When you're ready to deploy, connect the repository to Vercel (or your preferred host) and push your latest changes.

Vercel will detect the Next.js project automatically; other hosts should run the same build command before serving `.next/` via `npm run start`.

## Share as a GitHub template (optional)
1. Push the repository to GitHub.
2. Mark it as a template:
   - GitHub CLI:
     ```bash
     gh repo edit <owner>/<repo> --template true
     ```
   - Web UI: navigate to **Settings → Template repository → Enable Template repository**.
3. Optionally add a README badge, issues templates, or automation for consumers of your starter.

Happy shipping!
