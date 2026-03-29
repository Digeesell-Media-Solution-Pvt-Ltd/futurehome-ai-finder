/** Public site origin for canonicals, OG URLs, JSON-LD. Override in env for staging. */
export const SITE_ORIGIN =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://off-plan-projects.com";

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) return `${SITE_ORIGIN}/${path}`;
  return `${SITE_ORIGIN}${path}`;
}
