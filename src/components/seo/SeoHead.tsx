import { Helmet } from "react-helmet-async";
import { absoluteUrl } from "@/lib/seo/site";
import { clampDescription, clampTitle } from "@/lib/seo/metadata";

interface SeoHeadProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  noindex?: boolean;
  ogType?: "website" | "article";
}

export function SeoHead({
  title,
  description,
  canonicalPath,
  noindex = false,
  ogType = "website",
}: SeoHeadProps) {
  const safeTitle = clampTitle(title);
  const safeDescription = description ? clampDescription(description) : undefined;
  const canonical = canonicalPath ? absoluteUrl(canonicalPath) : undefined;

  return (
    <Helmet prioritizeSeoTags>
      <title>{safeTitle}</title>
      {safeDescription ? <meta name="description" content={safeDescription} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {safeDescription ? <meta property="og:description" content={safeDescription} /> : null}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:type" content={ogType} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
    </Helmet>
  );
}
