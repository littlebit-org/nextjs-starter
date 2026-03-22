import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { fontVariables } from "@/lib/fonts";
import { getMetadataBase } from "@/lib/site";

import "./globals.css";

const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "littlebit",
    template: "%s | littlebit"
  },
  description:
    "littlebit helps teams make digital products easier to understand and easier to keep moving.",
  applicationName: "littlebit",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "littlebit",
    title: "littlebit",
    description:
      "littlebit helps teams make digital products easier to understand and easier to keep moving."
  },
  twitter: {
    card: "summary_large_image",
    title: "littlebit",
    description:
      "littlebit helps teams make digital products easier to understand and easier to keep moving."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efeee9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1316" }
  ]
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="antialiased">
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
