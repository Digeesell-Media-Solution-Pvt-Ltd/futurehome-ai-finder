import { useState } from "react";
import { SlidersHorizontal, Grid, LayoutList, Building2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ProjectFilterSidebar } from "@/components/projects/ProjectFilterSidebar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AISearchBar } from "@/components/projects/AISearchBar";
import { useFilteredProjects, useAreas, useDevelopersList } from "@/hooks/useProjects";
import type { ProjectFilters } from "@/types/project";

export default function Projects() {
  const [filters, setFilters] = useState<ProjectFilters>({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { data: projects = [], isLoading } = useFilteredProjects(filters);
  const { data: areas = [] } = useAreas();
  const { data: developers = [] } = useDevelopersList();

  const activeFilterCount = [
    filters.areas?.length,
    filters.developers?.length,
    filters.property_types?.length,
    filters.bedroom_types?.length,
    filters.min_price || filters.max_price ? 1 : 0,
    filters.handover_year ? 1 : 0,
    filters.investment_tags?.length,
    filters.lifestyle_tags?.length,
  ].reduce((a, b) => a + (b || 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container-luxury pt-24 pb-20">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-display text-foreground mb-2">Discover Projects</h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            AI-powered discovery engine for UAE off-plan properties. Filter, search, and compare investment opportunities.
          </p>
        </div>

        {/* AI Search */}
        <div className="mb-8">
          <AISearchBar onFiltersApplied={setFilters} />
        </div>

        {/* Active Filters Summary */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs text-muted-foreground">Active filters:</span>
            {filters.areas?.map(a => (
              <Badge key={a} variant="secondary" className="text-xs gap-1">
                {a}
                <button onClick={() => setFilters({ ...filters, areas: filters.areas?.filter(x => x !== a) })} className="ml-0.5 hover:text-destructive">×</button>
              </Badge>
            ))}
            {filters.developers?.map(d => (
              <Badge key={d} variant="secondary" className="text-xs gap-1">
                {d}
                <button onClick={() => setFilters({ ...filters, developers: filters.developers?.filter(x => x !== d) })} className="ml-0.5 hover:text-destructive">×</button>
              </Badge>
            ))}
            {filters.property_types?.map(t => (
              <Badge key={t} variant="secondary" className="text-xs gap-1">{t}</Badge>
            ))}
            {filters.bedroom_types?.map(b => (
              <Badge key={b} variant="secondary" className="text-xs gap-1">{b}</Badge>
            ))}
            {filters.max_price && (
              <Badge variant="secondary" className="text-xs">Up to AED {(filters.max_price / 1000000).toFixed(1)}M</Badge>
            )}
            {filters.handover_year && (
              <Badge variant="secondary" className="text-xs">{filters.handover_year}</Badge>
            )}
            {filters.investment_tags?.map(t => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
            {filters.lifestyle_tags?.map(t => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
            <button onClick={() => setFilters({})} className="text-xs text-muted-foreground hover:text-destructive ml-2 underline">
              Clear all
            </button>
          </div>
        )}

        {/* Layout */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <ProjectFilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                areas={areas}
                developers={developers}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {isLoading ? "Loading..." : `${projects.length} project${projects.length !== 1 ? "s" : ""} found`}
              </p>

              {/* Mobile filter trigger */}
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 ml-1">{activeFilterCount}</Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-4">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Filters</SheetTitle>
                  </SheetHeader>
                  <ProjectFilterSidebar
                    filters={filters}
                    onFiltersChange={setFilters}
                    areas={areas}
                    developers={developers}
                    onClose={() => setMobileFiltersOpen(false)}
                  />
                </SheetContent>
              </Sheet>
            </div>

            {/* Results Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-2xl bg-muted animate-pulse aspect-[4/5]" />
                ))}
              </div>
            ) : projects.length > 0 ? (
              <div
                key={JSON.stringify(filters)}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {projects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Building2 className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-1">No projects found</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Try adjusting your filters or use AI search to find properties.
                </p>
                <Button variant="outline" size="sm" onClick={() => setFilters({})}>
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Legal Disclaimer */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
                This platform operates as a digital property discovery and marketing portal. We do not provide brokerage services. All information is sourced from official developer channels and is subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}
