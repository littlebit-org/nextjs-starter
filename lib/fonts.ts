import { IBM_Plex_Mono, Instrument_Sans, Newsreader } from "next/font/google";

export const displayFont = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand-display",
  display: "swap"
});

export const sansFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand-sans",
  display: "swap"
});

export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-brand-mono",
  display: "swap"
});

export const fontVariables = `${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`;
