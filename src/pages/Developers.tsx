import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Building2 } from "lucide-react";
import { projects, filterProjectsByFilters } from "@/data/projects";
import { useFilteredProjects } from "@/hooks/useProjects";
import { normalizeSlug } from "@/lib/normalize";
import type { ProjectFilters } from "@/types/project";

interface SimpleDeveloper {
  name: string;
  slug: string;
}

export default function DevelopersPage() {
  const { data: apiProjects = [], isLoading } = useFilteredProjects({} as ProjectFilters);

  const developers = useMemo<SimpleDeveloper[]>(() => {
    const normalizedApiProjects = apiProjects.map((project) => {
      const developerName = project.developerName || project.developers?.name || "Unknown Developer";
      const developerSlug = project.developerSlug || project.developers?.slug || normalizeSlug(developerName);

      return {
        ...project,
        developerName,
        developerSlug,
      };
    });

    const additionalProjects = filterProjectsByFilters(
      projects.filter(
        (manualProject) =>
          !normalizedApiProjects.some((apiProject) => apiProject.slug === manualProject.slug),
      ),
      {},
    );

    const allProjects = [...additionalProjects, ...normalizedApiProjects];

    const bySlug = new Map<string, SimpleDeveloper>();
    allProjects.forEach((project) => {
      const name = project.developerName || project.developers?.name;
      const slug = project.developerSlug || project.developers?.slug;
      if (!name || !slug) return;
      if (!bySlug.has(slug)) {
        bySlug.set(slug, { name, slug });
      }
    });

    return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [apiProjects]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxury pt-24 pb-20">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-display text-foreground mb-2">Developers</h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Browse developers with active listings on this platform. Select a developer to view
            their current projects.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-muted animate-pulse h-32" />
            ))}
          </div>
        ) : developers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {developers.map((developer) => (
              <Link
                key={developer.slug}
                to={`/developers/${encodeURIComponent(developer.slug)}`}
                className="group block rounded-2xl border border-border bg-card/60 hover:border-primary/60 hover:shadow-luxury transition-all p-6"
              >
                <h2 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {developer.name}
                </h2>
                <button className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  View Projects
                </button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Building2 className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-1">No listing found</h3>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
