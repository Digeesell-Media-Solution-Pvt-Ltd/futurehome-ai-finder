import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { programmaticBlogPosts } from "@/data/programmatic/blog.seed";
import type { ProgrammaticBlogPost } from "@/types/programmatic";
import { getBlogImage } from "@/lib/blogImages";

function getCategoryTag(post: ProgrammaticBlogPost): string {
  if (post.areaListingGuide) return "Area Guide";
  if (post.primaryKeyword.toLowerCase().includes("invest")) return "Investment";
  if (post.primaryKeyword.toLowerCase().includes("payment")) return "Payment Plans";
  return "Insights";
}

function getExcerpt(post: ProgrammaticBlogPost): string {
  const text = post.contentAngle || post.body;
  const clean = text.replace(/\*\*/g, "").replace(/\n+/g, " ").trim();
  return clean.length > 120 ? clean.slice(0, 117) + "…" : clean;
}

function getRelatedPosts(current: ProgrammaticBlogPost, limit = 3): ProgrammaticBlogPost[] {
  const others = programmaticBlogPosts.filter((p) => p.slug !== current.slug);

  // Score by overlapping areas and developer slugs
  const scored = others.map((p) => {
    let score = 0;
    for (const a of p.relatedAreaProgrammaticSlugs) {
      if (current.relatedAreaProgrammaticSlugs.includes(a)) score += 2;
    }
    for (const d of p.relatedDeveloperSlugs) {
      if (current.relatedDeveloperSlugs.includes(d)) score += 1;
    }
    if (getCategoryTag(p) === getCategoryTag(current)) score += 1;
    return { post: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

export function BlogRelatedArticles({ current }: { current: ProgrammaticBlogPost }) {
  const related = getRelatedPosts(current);
  if (related.length === 0) return null;

  return (
    <section className="my-14" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="text-2xl font-display font-semibold text-foreground mb-6">
        Related Articles
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => {
          const date = new Date(post.publishedAt).toLocaleDateString("en-AE", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          return (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={getBlogImage(post.slug)}
                  alt={`${post.title} — Dubai off-plan insights`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full shadow-sm">
                  {getCategoryTag(post)}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {getExcerpt(post)}
                </p>
                <span className="flex items-center gap-1 text-xs text-muted-foreground mt-auto">
                  <Calendar className="h-3 w-3" />
                  {date}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
