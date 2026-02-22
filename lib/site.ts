const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (siteUrl && URL.canParse(siteUrl)) {
    return siteUrl;
  }

  return FALLBACK_SITE_URL;
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
