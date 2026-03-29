import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Calendar, CreditCard, Landmark } from "lucide-react";
import type { ProgrammaticBlogAreaListingGuide } from "@/types/programmatic";
import { useAreaBlogListings } from "@/hooks/useAreaBlogListings";
import { cn } from "@/lib/utils";
import {
  formatAedPrice,
  formatHandoverLine,
  paymentPlanHint,
  projectDeveloperLabel,
} from "@/lib/blog/listingFormatters";
import type { Project } from "@/types/project";

export function BlogDynamicListingStrip({
  guide,
  className,
}: {
  guide: ProgrammaticBlogAreaListingGuide;
  className?: string;
}) {
  const limit = guide.listingLimit ?? 5;
  const { listings, isLoading } = useAreaBlogListings(guide.areaName, guide.areaHubSlug, limit);

  return (
    <section
      className={cn("not-prose", className)}
      aria-labelledby="blog-area-listings-heading"
    >
      <h2 id="blog-area-listings-heading" className="text-2xl font-display font-semibold text-foreground mb-2">
        Featured off-plan listings in {guide.areaName}
      </h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
        Inventory updates as developers publish new phases. Snapshot below merges our directory with the latest rows
        tagged to {guide.areaName}—tap through for full payment matrices and brochures.
      </p>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2" aria-busy="true">
          {Array.from({ length: Math.min(limit, 4) }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border bg-muted/30 p-5 h-48 animate-pulse" />
          ))}
        </div>
      ) : listings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-8 text-center text-muted-foreground">
          <Building2 className="h-10 w-10 mx-auto mb-3 opacity-40" />
          <p className="text-sm">
            No live rows matched this area filter yet. Browse the{" "}
            <Link to={`/off-plan-projects/${guide.areaHubSlug}`} className="text-primary underline-offset-4 hover:underline">
              {guide.areaName} off-plan hub
            </Link>{" "}
            or the full{" "}
            <Link to="/projects" className="text-primary underline-offset-4 hover:underline">
              projects directory
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 list-none m-0 p-0">
          {listings.map((raw) => {
            const p = raw as Project & { route: string };
            const developer = projectDeveloperLabel(p);
            return (
              <li key={p.id}>
                <article className="h-full rounded-2xl border border-border bg-card/50 p-5 flex flex-col gap-3 shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      <Link
                        to={p.route}
                        className="hover:text-primary inline-flex items-start gap-1 group"
                      >
                        {p.project_name}
                        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100 mt-0.5" />
                      </Link>
                    </h3>
                  </div>
                  <dl className="grid gap-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground shrink-0 w-28 flex items-center gap-1.5">
                        <Landmark className="h-3.5 w-3.5" /> Developer
                      </dt>
                      <dd className="text-foreground">{developer}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground shrink-0 w-28 flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" /> From price
                      </dt>
                      <dd className="text-foreground font-medium">{formatAedPrice(p.starting_price)}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground shrink-0 w-28 flex items-center gap-1.5">
                        <CreditCard className="h-3.5 w-3.5" /> Payment
                      </dt>
                      <dd className="text-foreground">{paymentPlanHint(p)}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted-foreground shrink-0 w-28 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> Handover
                      </dt>
                      <dd className="text-foreground">{formatHandoverLine(p)}</dd>
                    </div>
                  </dl>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
