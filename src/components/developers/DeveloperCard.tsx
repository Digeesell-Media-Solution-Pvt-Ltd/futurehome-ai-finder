import { motion } from "framer-motion";
import { Building2, Star, Award, ArrowRight } from "lucide-react";
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        "glass-card hover:shadow-luxury",
        "hover:scale-[1.02] hover:border-primary/50",
        variant === "featured" && "bg-gradient-to-br from-primary/5 to-transparent",
        variant === "compact" && "p-4"
      )}
    >
      <Link 
        to={`/projects?developer=${encodeURIComponent(developer.nameEn)}`}
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

        {/* Description for featured */}
        {developer.featured && developer.description && variant !== "compact" && (
          <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
            {developer.description}
          </p>
        )}

        {/* Stats for featured developers */}
        {developer.featured && developer.projectCount && variant !== "compact" && (
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Award className="w-3 h-3 text-primary" />
                <span className="text-sm font-semibold text-foreground">{developer.projectCount}</span>
              </div>
              <span className="text-xs text-muted-foreground">Projects</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-primary text-primary" />
                <span className="text-sm font-semibold text-foreground">{developer.trustScore}</span>
              </div>
              <span className="text-xs text-muted-foreground">Rating</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-foreground">{developer.deliveryRate}</span>
              <span className="text-xs text-muted-foreground block">Delivery</span>
            </div>
          </div>
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
    </motion.article>
  );
}
