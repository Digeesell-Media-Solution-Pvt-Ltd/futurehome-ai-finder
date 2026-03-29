import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProgrammaticBlogPost } from "@/data/programmatic/registry";
import { blogPageMeta } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbListSchema, faqPageSchema } from "@/lib/seo/schema-jsonld";
import { ProgrammaticJsonLd } from "@/components/programmatic/ProgrammaticJsonLd";
import { ProgrammaticFaqSection } from "@/components/programmatic/ProgrammaticFaqSection";
import { InternalLinkCluster } from "@/components/internal-linking/InternalLinkCluster";
import { getContextualBlogLinks } from "@/lib/internal-linking/buildInternalLinks";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer";
import { BlogRelatedProjects } from "@/components/blog/BlogRelatedProjects";
import { BlogRelatedArticles } from "@/components/blog/BlogRelatedArticles";
import { BlogFinalCta } from "@/components/blog/BlogFinalCta";
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
    { name: "Blog", path: "/blog" },
    { name: post.title, path: meta.path },
  ]);

  const contextualLinks = getContextualBlogLinks(post);
  const guide = post.areaListingGuide;

  // Collect full body text for content renderer
  const fullBody = guide
    ? [
        guide.introduction,
        `## Why investors still anchor on ${guide.areaName}`,
        guide.whyInvest,
        `## Pricing, yields, and payment-plan reality`,
        guide.priceAndRoi,
        `## Investment tips before you reserve`,
        guide.investmentTips,
      ].join("\n\n")
    : post.body;

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

      {/* Hero */}
      <BlogHero post={post} />

      {/* Main content area */}
      <main className="container-luxury max-w-4xl py-12">
        {/* Article body with auto images & inline CTA */}
        <article>
          <BlogContentRenderer
            text={fullBody}
            areaSlugs={post.relatedAreaProgrammaticSlugs}
          />
        </article>

        {/* Dynamic listing strip for area guides */}
        {guide && (
          <div className="mt-8">
            <BlogDynamicListingStrip guide={guide} />
          </div>
        )}

        {/* Related projects */}
        <BlogRelatedProjects post={post} />

        {/* Internal linking */}
        <InternalLinkCluster
          className="my-12"
          title="Related areas, projects & developer hubs"
          intro="Expand your research across Dubai's off-plan ecosystem."
          links={contextualLinks}
          inlineContextCount={2}
        />

        {/* FAQ */}
        {post.faq.length > 0 && (
          <ProgrammaticFaqSection faq={post.faq} />
        )}

        {/* Related articles */}
        <BlogRelatedArticles current={post} />

        {/* Final CTA */}
        <BlogFinalCta />
      </main>

      <Footer />
    </div>
  );
}
