import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Calendar, CreditCard, Landmark } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProgrammaticBlogPost } from "@/types/programmatic";
import {
  formatAedPrice,
  formatHandoverLine,
  paymentPlanHint,
  projectDeveloperLabel,
} from "@/lib/blog/listingFormatters";

function getRelatedProjects(post: ProgrammaticBlogPost, limit = 4) {
  const isAreaBlog = !!post.areaListingGuide;
  const areaSlugs = post.relatedAreaProgrammaticSlugs;

  // 1. Try relatedProjectSlugs
  const bySlug = post.relatedProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  if (bySlug.length >= limit) return bySlug.slice(0, limit);

  // 2. Expand by area
  const byArea = projects.filter(
    (p) => areaSlugs.includes(p.areaSlug) && !bySlug.some((b) => b?.slug === p.slug)
  );

  const combined = [...bySlug, ...byArea];
  if (combined.length >= limit) return combined.slice(0, limit);

  // 3. For area-based blogs, do NOT fill with random global projects
  if (isAreaBlog) return combined.slice(0, limit);

  // 4. For non-area blogs, fill with featured
  const featured = projects
    .filter((p) => !combined.some((c) => c?.slug === p.slug))
    .slice(0, limit - combined.length);

  return [...combined, ...featured].slice(0, limit);
}

export function BlogRelatedProjects({ post }: { post: ProgrammaticBlogPost }) {
  const related = getRelatedProjects(post);
  if (related.length === 0) return null;

  return (
    <section className="my-14" aria-labelledby="related-projects-heading">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 id="related-projects-heading" className="text-2xl font-display font-semibold text-foreground">
            Featured Off-Plan Projects
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Handpicked listings relevant to this article
          </p>
        </div>
        <Link
          to="/projects"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          View all <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((p) => {
          if (!p) return null;
          const developer = projectDeveloperLabel(p);
          return (
            <Link
              key={p.slug}
              to={p.route}
              className="group rounded-2xl border border-border bg-card/50 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {p.project_name}
                  <ArrowUpRight className="inline h-4 w-4 ml-1 opacity-40 group-hover:opacity-100" />
                </h3>
              </div>
              <dl className="grid gap-2 text-sm">
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0 w-24 flex items-center gap-1.5">
                    <Landmark className="h-3.5 w-3.5" /> Developer
                  </dt>
                  <dd className="text-foreground">{developer}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0 w-24 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5" /> Price
                  </dt>
                  <dd className="text-foreground font-medium">{formatAedPrice(p.starting_price)}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0 w-24 flex items-center gap-1.5">
                    <CreditCard className="h-3.5 w-3.5" /> Payment
                  </dt>
                  <dd className="text-foreground">{paymentPlanHint(p)}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0 w-24 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> Handover
                  </dt>
                  <dd className="text-foreground">{formatHandoverLine(p)}</dd>
                </div>
              </dl>
            </Link>
          );
        })}
      </div>

      <div className="sm:hidden mt-4 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          View all projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
