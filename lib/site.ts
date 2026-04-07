/**
 * Üretim alan adı — metadata ve mutlak URL'ler için.
 * Sunucuda `.env.production` içinde NEXT_PUBLIC_SITE_URL=https://oakacorn.site
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oakacorn.site"
).replace(/\/$/, "");

/** Next.js metadataBase (köken + son slash) */
export const siteOrigin = new URL(`${siteUrl}/`);
