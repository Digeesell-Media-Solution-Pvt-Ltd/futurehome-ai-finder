import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import type { ProgrammaticBlogPost } from "@/types/programmatic";

const BLOG_IMAGES: Record<string, string> = {
  "best-off-plan-projects-dubai-marina":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  "dubai-off-plan-payment-plans-guide":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  "why-invest-off-plan-dubai-2026":
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
  "is-off-plan-worth-it-dubai":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "best-areas-invest-dubai":
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
  "off-plan-vs-ready-dubai":
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80";

function getExcerpt(post: ProgrammaticBlogPost): string {
  const text = post.contentAngle || post.body;
  if (!text) return "";
  const clean = text.replace(/\*\*/g, "").replace(/\n+/g, " ").trim();
  return clean.length > 160 ? clean.slice(0, 157) + "…" : clean;
}

function getCategoryTag(post: ProgrammaticBlogPost): string {
  if (post.areaListingGuide) return "Area Guide";
  if (post.primaryKeyword.toLowerCase().includes("invest")) return "Investment";
  if (post.primaryKeyword.toLowerCase().includes("payment")) return "Payment Plans";
  return "Insights";
}

export function BlogCard({ post }: { post: ProgrammaticBlogPost }) {
  const excerpt = getExcerpt(post);
  const category = getCategoryTag(post);
  const imgSrc = BLOG_IMAGES[post.slug] || DEFAULT_IMAGE;
  const date = new Date(post.publishedAt).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
    >
      {/* Featured image */}
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={imgSrc}
          alt={`${post.title} — Dubai off-plan property insights`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
          <span className="text-sm font-medium text-primary group-hover:underline underline-offset-4">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
