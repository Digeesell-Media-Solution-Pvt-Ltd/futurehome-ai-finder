import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Developer, getInitials } from "@/data/developers";
import { cn } from "@/lib/utils";

interface DeveloperCardProps {
  developer: Developer;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

export function DeveloperCard({ developer, index = 0, variant = "default" }: DeveloperCardProps) {
  const initials = getInitials(developer.nameEn);
  
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        "glass-card hover:shadow-luxury",
        "hover:scale-[1.02] hover:border-primary/50",
        "animate-fade-in",
        variant === "featured" && "bg-gradient-to-br from-primary/5 to-transparent",
        variant === "compact" && "p-4"
      )}
      style={{ animationDelay: `${Math.min(index, 20) * 30}ms` }}
    >
      <Link 
        to={`/developers/${encodeURIComponent(developer.slug)}`}
        className="block p-6"
      >
        {/* Logo / Initials */}
        <div className="flex justify-center mb-4">
          <div className={cn(
            "w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300",
            "bg-gradient-to-br from-muted to-muted/50",
            "group-hover:from-primary/20 group-hover:to-primary/5",
            "shadow-inner"
          )}>
            {developer.logoUrl ? (
              <img 
                src={developer.logoUrl} 
                alt={developer.nameEn}
                className="w-14 h-14 object-contain"
              />
            ) : (
              <span className="font-display text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {initials}
              </span>
            )}
          </div>
        </div>

        {/* Developer Name */}
        <h3 className="font-display text-lg font-semibold text-center text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {developer.nameEn}
        </h3>

        {/* Arabic Name */}
        {developer.nameAr && (
          <p className="text-sm text-muted-foreground text-center mb-3 font-arabic opacity-70 group-hover:opacity-100 transition-opacity" dir="rtl">
            {developer.nameAr}
          </p>
        )}

        {/* View Projects Button */}
        <div className={cn(
          "mt-4 flex items-center justify-center gap-2 text-sm font-medium",
          "text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        )}>
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>

      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}
