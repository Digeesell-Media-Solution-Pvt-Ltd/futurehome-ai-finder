import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { programmaticBlogPosts } from "@/data/programmatic/blog.seed";
import { Input } from "@/components/ui/input";
import { SeoHead } from "@/components/seo/SeoHead";

const CATEGORIES = ["All", "Area Guide", "Investment", "Payment Plans", "Insights"] as const;

function getCategoryTag(post: (typeof programmaticBlogPosts)[0]): string {
  if (post.areaListingGuide) return "Area Guide";
  if (post.primaryKeyword.toLowerCase().includes("invest")) return "Investment";
  if (post.primaryKeyword.toLowerCase().includes("payment")) return "Payment Plans";
  return "Insights";
}

export default function BlogListingPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const sorted = useMemo(
    () =>
      [...programmaticBlogPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ),
    []
  );

  const filtered = useMemo(() => {
    return sorted.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.primaryKeyword.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || getCategoryTag(post) === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [sorted, search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Dubai Real Estate Blog | Off Plan Projects"
        description="Explore Dubai real estate insights, off-plan property guides, area updates, and investment tips from Off Plan Projects."
        canonicalPath="/blog"
      />

      <Header />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Real Estate Insights & Off-Plan Guides
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Explore the latest updates, investment guides, area insights, and off-plan property trends in Dubai.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container-luxury py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-charcoal text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No articles found matching your search.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
