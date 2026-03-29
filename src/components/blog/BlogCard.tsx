import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import type { ProgrammaticBlogPost } from "@/types/programmatic";

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
      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center relative overflow-hidden">
        <div className="text-center px-6">
          <span className="text-4xl font-display font-bold text-primary/20 leading-tight line-clamp-2">
            {post.title}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full">
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
