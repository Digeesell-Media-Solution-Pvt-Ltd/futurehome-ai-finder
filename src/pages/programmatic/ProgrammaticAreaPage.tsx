import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProgrammaticArea } from "@/data/programmatic/registry";
import { areaPageMeta } from "@/lib/seo/metadata";
import { breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema-jsonld";
import { programmaticBlogPath } from "@/lib/seo/programmaticPaths";
import { getProjectsByAreaSlug, getProjectBySlug } from "@/lib/programmatic/projectLookup";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { ProgrammaticFaqSection } from "@/components/programmatic/ProgrammaticFaqSection";
import { ProgrammaticCtaBand } from "@/components/programmatic/ProgrammaticCtaBand";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getAreaPageInternalLinks } from "@/lib/internal-linking/buildInternalLinks";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";

export default function ProgrammaticAreaPage() {
  const { areaSlug = "" } = useParams<{ areaSlug: string }>();
  const area = getProgrammaticArea(areaSlug);
  if (!area) return <NotFound />;

  const meta = areaPageMeta(area);
  const projectsInArea = getProjectsByAreaSlug(area.projectFilterAreaSlug);
  const featured = area.featuredProjectSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProjectBySlug>>[];
  const displayProjects = featured.length ? featured : projectsInArea.slice(0, 9);

  const faqLd = faqPageSchema(area.faq);
  const breadcrumbLd = breadcrumbListSchema([
    { name: "Home", path: "/" },
    { name: "Areas", path: "/areas" },
    { name: area.name, path: meta.path },
  ]);

  const contextualLinks = getAreaPageInternalLinks(area);

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
      <ProgrammaticJsonLd data={[breadcrumbLd, faqLd].filter(Boolean) as Record<string, unknown>[]} />

      <Header />
      <main className="pt-24 pb-20">
        <div className="container-luxury max-w-4xl">
          <ProgrammaticCtaBand
            className="mb-10"
            heading="See what matches your budget"
            sub="Use AI search to shortlist off-plan homes in Dubai with payment timing you can model."
            primary={{ label: "Start AI search", to: "/ai-search", variant: "hero" }}
            secondary={{ label: "All projects", to: "/projects", variant: "outline" }}
          />

          <p className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <Link to="/areas" className="hover:text-primary">
              Areas
            </Link>
            {" / "}
            <span>{area.name}</span>
          </p>

          <h1 className="text-display text-foreground mb-4">
            Off-Plan Projects in {area.name}, Dubai
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{area.intro}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Button asChild>
              <Link to={`/projects?area=${encodeURIComponent(area.name)}`}>View filtered projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={area.legacyAreaPath}>Open area profile</Link>
            </Button>
          </div>

          <section className="mb-12 space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">
              Why investors shortlist {area.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{area.whyInvest}</p>
            <h3 className="text-lg font-semibold text-foreground">Pricing & payment plans</h3>
            <p className="text-muted-foreground leading-relaxed">{area.pricePaymentOverview}</p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Typical price band:</strong> {area.priceRangeLabel}
            </p>
            <h3 className="text-lg font-semibold text-foreground">Investment lens</h3>
            <p className="text-muted-foreground leading-relaxed">{area.investmentAngle}</p>
            <h3 className="text-lg font-semibold text-foreground">Lifestyle & landmarks</h3>
            <p className="text-muted-foreground leading-relaxed">{area.lifestyleLandmarks}</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              {area.nearbyLandmarks.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>

          <ProgrammaticCtaBand
            className="mb-16"
            heading="Request launch factsheets"
            sub="Compare payment plans and handover dates on a like-for-like basis before you reserve."
            primary={{ label: "Browse all developments", to: "/projects", variant: "hero" }}
            secondary={{ label: "Talk to AI matcher", to: "/ai-search", variant: "outline" }}
          />

          <section className="mb-12">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
              Current off-plan projects in {area.name}
            </h2>
            {displayProjects.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {displayProjects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                No indexed listings in this dataset for this area yet — browse{" "}
                <Link to="/projects" className="text-primary underline">
                  all projects
                </Link>{" "}
                or try the{" "}
                <Link to="/ai-search" className="text-primary underline">
                  AI search
                </Link>
                .
              </p>
            )}
          </section>

          <InternalLinkCluster
            title="Related hubs, developers & guides"
            intro="Contextual links connect this area with live project routes and topical blogs—capped and de-duplicated for cleaner UX and crawl signals."
            links={contextualLinks}
            inlineContextCount={2}
          />
        </div>

        <ProgrammaticFaqSection faq={area.faq} />

        <div className="container-luxury pt-12">
          <ProgrammaticCtaBand
            heading="Book a consultation or download brochures"
            sub="We connect you with official developer sales teams—no brokerage positioning."
            primary={{ label: "Get project details", to: "/contact", variant: "hero" }}
            secondary={{ label: "Payment plan guide", to: programmaticBlogPath("dubai-off-plan-payment-plans-guide"), variant: "outline" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
