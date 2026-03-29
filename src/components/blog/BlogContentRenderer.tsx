/** 
 * Enhanced blog content renderer with proper H2/H3 parsing, 
 * automatic image injection, and inline CTAs.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Context-aware stock images from public folder or external
const AREA_IMAGES: Record<string, string[]> = {
  "dubai-marina": [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
  ],
  "downtown-dubai": [
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
    "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
  ],
  "palm-jumeirah": [
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
  ],
  "business-bay": [
    "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80",
  ],
  "jvc": [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  ],
};

const GENERIC_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
];

function getContextImages(areaSlugs: string[]): string[] {
  const images: string[] = [];
  for (const slug of areaSlugs) {
    const areaImgs = AREA_IMAGES[slug];
    if (areaImgs) images.push(...areaImgs);
  }
  if (images.length === 0) images.push(...GENERIC_IMAGES);
  return images;
}

interface ContentSection {
  type: "heading" | "paragraph" | "image" | "cta";
  level?: 2 | 3;
  text?: string;
  bold?: string;
  rest?: string;
  imgSrc?: string;
  imgAlt?: string;
}

function parseBodyToSections(text: string): ContentSection[] {
  const blocks = text.split(/\n\n+/).filter(Boolean);
  const sections: ContentSection[] = [];

  for (const block of blocks) {
    const lines = block.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      // Check for heading patterns
      if (trimmed.startsWith("### ")) {
        sections.push({ type: "heading", level: 3, text: trimmed.replace(/^###\s*/, "") });
      } else if (trimmed.startsWith("## ")) {
        sections.push({ type: "heading", level: 2, text: trimmed.replace(/^##\s*/, "") });
      } else {
        // Bold-lead paragraphs
        const boldMatch = trimmed.match(/^\*\*(.+?)\*\*\s*(.*)$/);
        if (boldMatch) {
          sections.push({ type: "paragraph", bold: boldMatch[1], rest: boldMatch[2] });
        } else {
          sections.push({ type: "paragraph", text: trimmed });
        }
      }
    }
  }
  return sections;
}

function InlineCta({ heading, buttonText, buttonTo }: { heading: string; buttonText: string; buttonTo: string }) {
  return (
    <div className="my-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-display font-semibold text-foreground mb-1">{heading}</h3>
          <p className="text-sm text-muted-foreground">Compare verified payment plans and handover timelines.</p>
        </div>
        <Button asChild variant="gold" size="lg" className="shrink-0">
          <Link to={buttonTo}>
            {buttonText}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function ContentImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8 rounded-2xl overflow-hidden shadow-md">
      <img
        src={src}
        alt={alt}
        className="w-full h-56 sm:h-72 object-cover"
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center py-2 px-4 bg-muted/30">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function BlogContentRenderer({
  text,
  areaSlugs = [],
}: {
  text: string;
  areaSlugs?: string[];
}) {
  const sections = parseBodyToSections(text);
  const images = getContextImages(areaSlugs);
  let imageIndex = 0;
  let sectionsSinceImage = 0;
  let ctaInserted = false;
  const ctaThreshold = Math.floor(sections.length * 0.3);

  const elements: React.ReactNode[] = [];

  sections.forEach((section, i) => {
    // Insert CTA after ~30% of content
    if (!ctaInserted && i >= ctaThreshold && i > 2) {
      elements.push(
        <InlineCta
          key={`cta-${i}`}
          heading="Explore available off-plan projects in Dubai"
          buttonText="Browse Projects"
          buttonTo="/projects"
        />
      );
      ctaInserted = true;
    }

    if (section.type === "heading") {
      const Tag = section.level === 3 ? "h3" : "h2";
      const cls = section.level === 3
        ? "text-xl font-display font-semibold text-foreground mt-8 mb-3"
        : "text-2xl font-display font-semibold text-foreground mt-10 mb-4";
      elements.push(<Tag key={i} className={cls}>{section.text}</Tag>);
      sectionsSinceImage++;
    } else if (section.type === "paragraph") {
      elements.push(
        <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">
          {section.bold ? (
            <>
              <strong className="text-foreground font-semibold">{section.bold}</strong>{" "}
              {section.rest}
            </>
          ) : (
            section.text
          )}
        </p>
      );
      sectionsSinceImage++;
    }

    // Insert image every 3 sections
    if (sectionsSinceImage >= 3 && images.length > 0) {
      const img = images[imageIndex % images.length];
      const altText = section.text || section.bold || "Dubai off-plan property";
      elements.push(
        <ContentImage
          key={`img-${i}`}
          src={img}
          alt={altText}
        />
      );
      imageIndex++;
      sectionsSinceImage = 0;
    }
  });

  return <div className="prose-custom">{elements}</div>;
}
