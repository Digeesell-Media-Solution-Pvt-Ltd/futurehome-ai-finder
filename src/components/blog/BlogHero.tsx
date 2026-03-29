import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProgrammaticBlogPost } from "@/types/programmatic";

function getReadingTime(post: ProgrammaticBlogPost): number {
  const guide = post.areaListingGuide;
  const text = [
    post.body,
    post.contentAngle,
    guide?.introduction,
    guide?.whyInvest,
    guide?.priceAndRoi,
    guide?.investmentTips,
  ]
    .filter(Boolean)
    .join(" ");
  const words = text.split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 220));
}

function getCategoryTag(post: ProgrammaticBlogPost): string {
  if (post.areaListingGuide) return "Area Guide";
  if (post.primaryKeyword.toLowerCase().includes("invest")) return "Investment";
  if (post.primaryKeyword.toLowerCase().includes("payment")) return "Payment Plans";
  return "Insights";
}

export function BlogHero({ post }: { post: ProgrammaticBlogPost }) {
  const category = getCategoryTag(post);
  const readTime = getReadingTime(post);
  const displayH1 = post.h1 ?? post.title;
  const date = new Date(post.publishedAt).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="relative bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D6C7A1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-luxury pt-28 pb-14 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-white/70 line-clamp-1">{post.title}</span>
        </nav>

        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary px-3 py-1.5 rounded-full border border-primary/30">
            <Tag className="h-3 w-3" />
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight max-w-4xl mb-6">
          {displayH1}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-6">
          {post.contentAngle}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {readTime} min read
          </span>
          {post.authorName && (
            <span className="text-white/60">
              By {post.authorName}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
