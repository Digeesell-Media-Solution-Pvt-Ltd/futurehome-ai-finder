import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Building2 } from "lucide-react";
import { projects, filterProjectsByFilters } from "@/data/projects";
import { useFilteredProjects } from "@/hooks/useProjects";
import { normalizeDeveloperKey, normalizeSlug } from "@/lib/normalize";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { ProjectFilters } from "@/types/project";

export default function DeveloperProjectsPage() {
  const { developerSlug } = useParams<{ developerSlug: string }>();

  const { data: apiProjects = [], isLoading } = useFilteredProjects({} as ProjectFilters);

  const allProjects = useMemo(() => {
    const normalizedApiProjects = apiProjects.map((project) => {
      const developerName = project.developerName || project.developers?.name || "Unknown Developer";
      const derivedDeveloperSlug =
        project.developerSlug || project.developers?.slug || normalizeSlug(developerName);

      return {
        ...project,
        developerName,
        developerSlug: derivedDeveloperSlug,
      };
    });

    const additionalProjects = filterProjectsByFilters(
      projects.filter(
        (manualProject) =>
          !normalizedApiProjects.some((apiProject) => apiProject.slug === manualProject.slug),
      ),
      {},
    );

    return [...additionalProjects, ...normalizedApiProjects];
  }, [apiProjects]);

  const developerProjects = useMemo(() => {
    if (!developerSlug) return [];

    return allProjects.filter((project) => {
      const projectDeveloperSlug =
        project.developerSlug ||
        project.developers?.slug ||
        normalizeSlug(project.developerName || project.developers?.name || "");

      const matchBySlug = projectDeveloperSlug === developerSlug;

      const matchByName =
        normalizeDeveloperKey(project.developerName || project.developers?.name || "") ===
        normalizeDeveloperKey(
          developerSlug
            .split("-")
            .join(" "),
        );

      return matchBySlug || matchByName;
    });
  }, [allProjects, developerSlug]);

  const developerName = useMemo(() => {
    if (!developerSlug) return "Developer";
    const bySlug = allProjects.find(
      (project) =>
        project.developerSlug === developerSlug ||
        project.developers?.slug === developerSlug,
    );
    if (bySlug) {
      return bySlug.developerName || bySlug.developers?.name || "Developer";
    }
    // Fallback: prettify slug
    return developerSlug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }, [allProjects, developerSlug]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-luxury pt-24 pb-20">
        {/* Developer Header */}
        <div className="mb-10 text-center">
          <h1 className="text-display text-foreground mb-2">{developerName}</h1>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-muted animate-pulse aspect-[4/5]" />
            ))}
          </div>
        ) : developerProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {developerProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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
    </div>
  );
}

