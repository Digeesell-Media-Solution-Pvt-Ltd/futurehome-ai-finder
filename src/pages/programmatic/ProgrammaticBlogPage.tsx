import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProgrammaticBlogPost } from "@/data/programmatic/registry";
import { blogPageMeta } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema-jsonld";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getContextualBlogLinks } from "@/lib/internal-linking/buildInternalLinks";
import { ProgrammaticFaqSection } from "@/components/programmatic/ProgrammaticFaqSection";
import { ProgrammaticCtaBand } from "@/components/programmatic/ProgrammaticCtaBand";
import { SimpleBlogBody } from "@/components/programmatic/SimpleBlogBody";
import { BlogDynamicListingStrip } from "@/components/programmatic/BlogDynamicListingStrip";
import { programmaticAreaPath } from "@/lib/seo/programmaticPaths";
import NotFound from "@/pages/NotFound";

export default function ProgrammaticBlogPage() {
  const { topicSlug = "" } = useParams<{ topicSlug: string }>();
  const post = getProgrammaticBlogPost(topicSlug);
  if (!post) return <NotFound />;

  const meta = blogPageMeta(post);
  const displayH1 = post.h1 ?? post.title;
  const articleLd = articleSchema({
    headline: displayH1,
    description: meta.description,
    url: meta.canonical,
    datePublished: post.publishedAt,
    authorName: post.authorName,
  });
  const faqLd = faqPageSchema(post.faq);
  const breadcrumbLd = breadcrumbListSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: post.title, path: meta.path },
  ]);

  const contextualLinks = getContextualBlogLinks(post);
  const guide = post.areaListingGuide;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content="article" />
      </Helmet>
      <ProgrammaticJsonLd data={[articleLd, breadcrumbLd, faqLd].filter(Boolean) as Record<string, unknown>[]} />

      <Header />
      <main className="pt-24 pb-20">
        <article className="container-luxury max-w-3xl">
          {guide ? (
            <ProgrammaticCtaBand
              className="mb-10"
              heading={`Shortlist off plan projects in ${guide.areaName}`}
              sub="Cross-check payment milestones on official addenda, then compare two towers side-by-side before you reserve."
              primary={{
                label: `View all projects in ${guide.areaName}`,
                to: programmaticAreaPath(guide.areaHubSlug),
                variant: "hero",
              }}
              secondary={{
                label: "Request payment plan guidance",
                to: "/contact",
                variant: "outline",
              }}
            />
          ) : (
            <ProgrammaticCtaBand
              className="mb-10"
              heading="Turn reading into a shortlist"
              sub="Run the AI matcher after you note two developers or communities you liked."
              primary={{ label: "AI property search", to: "/ai-search", variant: "hero" }}
              secondary={{ label: "All projects", to: "/projects", variant: "outline" }}
            />
          )}

          <p className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <Link to="/insights" className="hover:text-primary">
              Insights
            </Link>
            {" / "}
            <span className="line-clamp-1">{post.title}</span>
          </p>

          <h1 className="text-display text-foreground mb-4">{displayH1}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {new Date(post.publishedAt).toLocaleDateString("en-AE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {post.authorName ? ` · ${post.authorName}` : null}
          </p>

          <p className="text-lg text-muted-foreground mb-8">{post.contentAngle}</p>

          {guide ? (
            <>
              <SimpleBlogBody text={guide.introduction} />
              <h2 className="text-2xl font-display font-semibold text-foreground mt-12 mb-4">
                Why investors still anchor on {guide.areaName}
              </h2>
              <SimpleBlogBody text={guide.whyInvest} />
              <h2 className="text-2xl font-display font-semibold text-foreground mt-12 mb-4">
                Pricing, yields, and payment-plan reality
              </h2>
              <SimpleBlogBody text={guide.priceAndRoi} />

              <ProgrammaticCtaBand
                className="my-12"
                heading="Need the latest brochure or unit mix?"
                sub="We route you to developer-authorised information—no brokerage claims, just cleaner discovery."
                primary={{ label: "Get project details", to: "/contact", variant: "hero" }}
                secondary={{ label: "Open full directory", to: "/projects", variant: "outline" }}
              />
            </>
          ) : (
            <SimpleBlogBody text={post.body} />
          )}
        </article>

        {guide ? (
          <div className="container-luxury max-w-5xl px-4 sm:px-6 lg:px-8 mt-4 mb-16">
            <BlogDynamicListingStrip guide={guide} />
          </div>
        ) : null}

        {guide ? (
          <article className="container-luxury max-w-3xl">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Investment tips before you reserve
            </h2>
            <SimpleBlogBody text={guide.investmentTips} />

            <InternalLinkCluster
              className="mt-12"
              title="Dubai Marina hubs, developers & further reading"
              intro="Structured internal links keep crawl paths tight: move from this guide to money pages with natural, keyword-loaded anchors."
              links={contextualLinks}
              inlineContextCount={2}
            />
          </article>
        ) : (
          <article className="container-luxury max-w-3xl">
            <InternalLinkCluster
              className="mt-12"
              title="Related areas, projects & developer hubs"
              intro="Weighted toward your topic cluster—expand the crawl path back to money pages without generic anchors."
              links={contextualLinks}
              inlineContextCount={2}
            />
          </article>
        )}

        <ProgrammaticFaqSection faq={post.faq} />

        <div className="container-luxury max-w-3xl pt-12">
          <ProgrammaticCtaBand
            heading={
              guide
                ? `Keep exploring ${guide.areaName} off-plan inventory`
                : "Next step: validate payment plans on live inventory"
            }
            sub={
              guide
                ? "Pair this article with the area hub and live listings—then confirm escrow-backed milestones on the official addendum."
                : undefined
            }
            primary={
              guide
                ? {
                    label: `View ${guide.areaName} project hub`,
                    to: programmaticAreaPath(guide.areaHubSlug),
                    variant: "hero",
                  }
                : { label: "Browse projects", to: "/projects", variant: "hero" }
            }
            secondary={
              guide
                ? { label: "AI property search", to: "/ai-search", variant: "outline" }
                : { label: "Contact", to: "/contact", variant: "outline" }
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
