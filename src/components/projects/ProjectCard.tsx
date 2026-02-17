import { Link } from "react-router-dom";
import { MapPin, Calendar, Building2, TrendingUp, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  const developerSlug = project.developers?.slug || "unknown";
  const projectUrl = `/projects/${developerSlug}/${project.slug}`;

  const formatPrice = (price: number | null) => {
    if (!price) return null;
    if (price >= 1000000) return `AED ${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `AED ${(price / 1000).toFixed(0)}K`;
    return `AED ${price}`;
  };

  const handover = project.handover_year
    ? project.handover_quarter
      ? `${project.handover_quarter} ${project.handover_year}`
      : `${project.handover_year}`
    : null;

  return (
    <article
      className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
      style={{
        animationDelay: `${Math.min(index, 15) * 50}ms`,
        animation: "fade-in 0.4s ease-out forwards",
        opacity: 0,
      }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.hero_image ? (
          <img
            src={project.hero_image}
            alt={project.project_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Building2 className="h-10 w-10 text-muted-foreground/40" />
          </div>
        )}

        {/* Overlay tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge className="bg-background/80 backdrop-blur-sm text-foreground text-[10px] border-0">
            {project.launch_status}
          </Badge>
        </div>

        {/* Price badge */}
        {project.starting_price && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-charcoal/80 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
              From {formatPrice(project.starting_price)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-medium text-foreground text-base leading-tight group-hover:text-primary transition-colors">
            {project.project_name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            by {project.developers?.name || "Developer"}
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {project.areas && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {project.areas.name}
            </span>
          )}
          {handover && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {handover}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.property_types.slice(0, 2).map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
          {project.bedroom_types.slice(0, 3).map((b) => (
            <span key={b} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {b}
            </span>
          ))}
          {project.investment_tags.slice(0, 1).map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary-foreground">
              {t}
            </span>
          ))}
        </div>

        {/* Scores */}
        {(project.investment_score || project.lifestyle_score) && (
          <div className="flex gap-3 text-xs">
            {project.investment_score && (
              <span className="flex items-center gap-1 text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                Investment: {project.investment_score}/5
              </span>
            )}
            {project.lifestyle_score && (
              <span className="flex items-center gap-1 text-muted-foreground">
                <Heart className="h-3 w-3" />
                Lifestyle: {project.lifestyle_score}/5
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          to={projectUrl}
          className="block w-full text-center text-sm font-medium py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
