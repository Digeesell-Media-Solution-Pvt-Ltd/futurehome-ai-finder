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
import { SeoHead } from "@/components/seo/SeoHead";
import { CrawlContentSection } from "@/components/seo/CrawlContentSection";

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
      <SeoHead
        title="Top Dubai Developers with Active Off-Plan Listings"
        description="Browse Dubai developers with active off-plan projects, then open each developer page to compare launches, areas, and live inventory."
        canonicalPath="/developers"
      />
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

        <CrawlContentSection
          title="Research developers before selecting a project"
          paragraphs={[
            "Developer comparison is one of the most important steps in off-plan research because delivery standards, handover consistency, and product positioning can vary significantly even within the same area. This page groups active developers so users can move from a broad market view into brand-specific inventories quickly.",
            "A useful evaluation method is to compare developers across three categories: launch pipeline quality, payment structure flexibility, and area concentration. Developers active in multiple high-demand corridors may offer stronger resale depth, while focused niche developers may provide differentiated product formats and pricing strategies.",
            "Each developer profile connects to project-level detail pages and adjacent research hubs. That internal link structure improves crawl depth and helps search engines understand topical relevance between developer entities, area entities, and transaction-intent project content.",
          ]}
          faqs={[
            {
              question: "Why should I start by developer instead of by project?",
              answer:
                "Starting by developer helps you evaluate execution history and portfolio consistency before comparing specific launches.",
            },
            {
              question: "Can I compare developers in the same area?",
              answer:
                "Yes. Open area hubs and switch between linked developer pages to compare supply, pricing bands, and handover windows.",
            },
            {
              question: "Are these developer pages connected to related guides?",
              answer:
                "Yes. Internal links point to project directories, area hubs, and blog guides to support deeper due diligence.",
            },
          ]}
          relatedLinks={[
            { label: "All projects", to: "/projects" },
            { label: "Dubai areas", to: "/areas" },
            { label: "Investment guides", to: "/blog" },
            { label: "Off-plan by developer", to: "/off-plan-by-developer/emaar" },
            { label: "Off-plan by developer (DAMAC)", to: "/off-plan-by-developer/damac" },
          ]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
