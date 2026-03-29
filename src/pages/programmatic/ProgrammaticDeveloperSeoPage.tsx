import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProgrammaticDeveloper } from "@/data/programmatic/registry";
import { developerPageMeta } from "@/lib/seo/metadata";
import {
  breadcrumbListSchema,
  faqPageSchema,
  organizationSchema,
} from "@/lib/seo/schema-jsonld";
import { getProjectsByDeveloperSlug, getProjectBySlug } from "@/lib/programmatic/projectLookup";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { ProgrammaticFaqSection } from "@/components/programmatic/ProgrammaticFaqSection";
import { ProgrammaticCtaBand } from "@/components/programmatic/ProgrammaticCtaBand";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getDeveloperProgrammaticPageLinks } from "@/lib/internal-linking/buildInternalLinks";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";

export default function ProgrammaticDeveloperSeoPage() {
  const { developerSlug = "" } = useParams<{ developerSlug: string }>();
  const dev = getProgrammaticDeveloper(developerSlug);
  if (!dev) return <NotFound />;

  const meta = developerPageMeta(dev);
  const projectsList = getProjectsByDeveloperSlug(dev.projectFilterDeveloperSlug);
  const featured = dev.featuredProjectSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProjectBySlug>>[];
  const displayProjects = featured.length ? featured : projectsList.slice(0, 12);

  const faqLd = faqPageSchema(dev.faq);
  const breadcrumbLd = breadcrumbListSchema([
    { name: "Home", path: "/" },
    { name: "Developers", path: "/developers" },
    { name: dev.name, path: meta.path },
  ]);
  const orgLd = organizationSchema();

  const contextualLinks = getDeveloperProgrammaticPageLinks(dev);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProgrammaticJsonLd data={[orgLd, breadcrumbLd, faqLd].filter(Boolean) as Record<string, unknown>[]} />

      <Header />
      <main className="pt-24 pb-20">
        <div className="container-luxury max-w-4xl">
          <ProgrammaticCtaBand
            className="mb-10"
            heading={`Compare ${dev.name} launches side by side`}
            sub="Filter by handover, typology, and payment curve—then request official paperwork."
            primary={{ label: "AI search", to: "/ai-search", variant: "hero" }}
            secondary={{ label: "Developer listings", to: dev.internalDeveloperPath, variant: "outline" }}
          />

          <p className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <Link to="/developers" className="hover:text-primary">
              Developers
            </Link>
            {" / "}
            <span>{dev.name}</span>
          </p>

          <h1 className="text-display text-foreground mb-4">
            {dev.name} Off-Plan Projects in Dubai
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{dev.overview}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            <Button asChild>
              <Link to={dev.internalDeveloperPath}>View on-platform projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">Browse all developers</Link>
            </Button>
          </div>

          <section className="mb-12 space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Developer snapshot</h2>
            <p className="text-muted-foreground leading-relaxed">{dev.reputationSummary}</p>
            <h3 className="text-lg font-semibold text-foreground">Notable developments</h3>
            <p className="text-muted-foreground leading-relaxed">{dev.notableDevelopments}</p>
            <h3 className="text-lg font-semibold text-foreground">Trust signals</h3>
            <p className="text-muted-foreground leading-relaxed">{dev.trustSignals}</p>
          </section>

          <ProgrammaticCtaBand
            className="mb-16"
            heading="Mid-page: lock your shortlist"
            sub="Save time—confirm inventory, SPA flow, and currency strategy before you transfer booking funds."
            primary={{ label: "Open projects catalogue", to: "/projects", variant: "hero" }}
            secondary={{ label: "Contact team", to: "/contact", variant: "outline" }}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
              Active off-plan projects ({dev.name})
            </h2>
            {displayProjects.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {displayProjects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                Listings for this developer will appear here as they are synced. Try{" "}
                <Link to="/projects" className="text-primary underline">
                  all projects
                </Link>
                .
              </p>
            )}
          </section>

          <InternalLinkCluster
            title="Developers, areas & guides"
            links={contextualLinks}
            inlineContextCount={2}
          />
        </div>

        <ProgrammaticFaqSection faq={dev.faq} />

        <div className="container-luxury pt-12">
          <ProgrammaticCtaBand
            heading="Request brochures & payment schedules"
            primary={{ label: "Go to AI matcher", to: "/ai-search", variant: "hero" }}
            secondary={{ label: "Legal disclaimer", to: "/disclaimer", variant: "outline" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
