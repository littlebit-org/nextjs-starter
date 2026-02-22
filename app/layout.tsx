import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { getMetadataBase } from "@/lib/site";

import "./globals.css";

const metadataBase = getMetadataBase();

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Next.js Starter Template",
    template: "%s | Next.js Starter Template"
  },
  description: "A production-ready Next.js 16 + shadcn/ui starter for fast project setup.",
  applicationName: "Next.js Starter Template",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Next.js Starter Template",
    title: "Next.js Starter Template",
    description: "A production-ready Next.js 16 + shadcn/ui starter for fast project setup."
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter Template",
    description: "A production-ready Next.js 16 + shadcn/ui starter for fast project setup."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d13" }
  ]
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-primary antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
