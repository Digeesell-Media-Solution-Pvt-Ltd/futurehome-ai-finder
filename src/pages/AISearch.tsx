import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Sparkles, Search, Sliders, ArrowRight, TrendingUp, MapPin, Building, Clock, Loader2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAISearch, useFilteredProjects } from "@/hooks/useProjects";
import { getHeroImage } from "@/lib/heroImages";
import { projectDeveloperMap } from "@/lib/projectUrls";
import type { ProjectFilters, Project, BedroomType } from "@/types/project";
import { toast } from "@/hooks/use-toast";

const suggestedQueries = [
  "2BR apartment in Dubai Marina under 2M",
  "Family villa with garden in Dubai Hills",
  "High ROI investment in Business Bay",
  "Beachfront property in Palm Jumeirah",
];

const filterOptions = {
  budget: ["Under 1M", "1M - 2M", "2M - 5M", "5M - 10M", "10M+"],
  bedrooms: ["Studio", "1 BR", "2 BR", "3 BR", "4+ BR"],
  areas: ["Dubai Marina", "Downtown", "Palm Jumeirah", "Business Bay", "Dubai Hills", "JVC"],
  handover: ["Ready", "2025", "2026", "2027", "2028+"],
};

function formatPrice(price: number | null): string {
  if (!price) return "Price TBA";
  if (price >= 1_000_000) return `AED ${(price / 1_000_000).toFixed(1)}M`;
  if (price >= 1_000) return `AED ${(price / 1_000).toFixed(0)}K`;
  return `AED ${price}`;
}

function getProjectLink(project: Project): string {
  const devSlug = projectDeveloperMap[project.slug];
  if (devSlug) return `/projects/${devSlug}/${project.slug}`;
  const developerSlug = project.developers?.slug || project.developers?.name?.toLowerCase().replace(/\s+/g, '-') || 'developer';
  return `/projects/${developerSlug}/${project.slug}`;
}

export default function AISearchPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [aiFilters, setAiFilters] = useState<ProjectFilters>({});
  const [hasSearched, setHasSearched] = useState(false);
  const [isParsingQuery, setIsParsingQuery] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const { parseQuery } = useAISearch();

  // Convert selectedFilters into ProjectFilters and merge with AI filters
  const mergedFilters: ProjectFilters = (() => {
    const base: ProjectFilters = { ...aiFilters };

    // Budget
    const budgets = selectedFilters.budget || [];
    if (budgets.length > 0) {
      const mins: number[] = [];
      const maxes: number[] = [];
      budgets.forEach((b) => {
        if (b === "Under 1M") { mins.push(0); maxes.push(1_000_000); }
        else if (b === "1M - 2M") { mins.push(1_000_000); maxes.push(2_000_000); }
        else if (b === "2M - 5M") { mins.push(2_000_000); maxes.push(5_000_000); }
        else if (b === "5M - 10M") { mins.push(5_000_000); maxes.push(10_000_000); }
        else if (b === "10M+") { mins.push(10_000_000); }
      });
      base.min_price = Math.min(...mins);
      const finiteMaxes = maxes.filter((m) => m > 0);
      if (finiteMaxes.length > 0 && !budgets.includes("10M+")) {
        base.max_price = Math.max(...finiteMaxes);
      }
    }

    // Bedrooms
    const beds = selectedFilters.bedrooms || [];
    if (beds.length > 0) {
      const map: Record<string, string> = {
        "Studio": "Studio", "1 BR": "1BR", "2 BR": "2BR",
        "3 BR": "3BR", "4+ BR": "4BR",
      };
      base.bedroom_types = beds.map((b) => map[b] || b) as BedroomType[];
    }

    // Areas
    const areas = selectedFilters.areas || [];
    if (areas.length > 0) {
      base.areas = areas;
    }

    // Handover
    const handovers = selectedFilters.handover || [];
    if (handovers.length > 0) {
      const years = handovers
        .map((h) => parseInt(h))
        .filter((y) => !isNaN(y));
      if (years.length > 0) {
        base.handover_year = Math.min(...years);
      }
    }

    return base;
  })();

  const { data: projects, isLoading: isLoadingProjects } = useFilteredProjects(
    hasSearched ? mergedFilters : { areas: ["__none__"] }
  );

  const isSearching = isParsingQuery || (hasSearched && isLoadingProjects);

  useEffect(() => {
    if (initialQuery) {
      handleSearchWithQuery(initialQuery);
    }
  }, []);

  const handleSearchWithQuery = async (q: string) => {
    if (!q.trim()) return;
    setIsParsingQuery(true);
    try {
      const filters = await parseQuery(q.trim());
      setAiFilters(filters);
      setHasSearched(true);
    } catch (e) {
      console.error("AI search error:", e);
      toast({
        title: "Search Failed",
        description: "Could not process your search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsParsingQuery(false);
    }
  };

  const handleSearch = () => handleSearchWithQuery(query);

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter((v) => v !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  const resultsList = hasSearched ? (projects || []) : [];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background animated elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <Header />
      
      <main className="pt-24 pb-20 relative z-10">
        <div className="container-luxury">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(214, 199, 161, 0.2) 0%, rgba(214, 199, 161, 0.1) 100%)",
                border: "1px solid rgba(214, 199, 161, 0.3)",
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(214, 199, 161, 0.3)",
                    "0 0 20px rgba(214, 199, 161, 0.5)",
                    "0 0 10px rgba(214, 199, 161, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center"
              >
                <Sparkles className="w-3.5 h-3.5 text-charcoal" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">AI-Powered Property Matching</span>
            </motion.div>
            <h1 className="text-display text-foreground mb-4">Find Your Perfect Property</h1>
            <p className="text-lg text-muted-foreground">
              Tell us what you're looking for in natural language, and our AI will find 
              the best off-plan properties matching your criteria.
            </p>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Search */}
            <div className="glass-card p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe your ideal property..."
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-background/90 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="md:w-auto rounded-full"
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Search with AI
                    </>
                  )}
                </Button>
              </div>

              {/* Suggested Queries */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Try:</span>
                {suggestedQueries.map((suggestion) => (
                  <motion.button
                    key={suggestion}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setQuery(suggestion);
                      handleSearchWithQuery(suggestion);
                    }}
                    className="text-sm px-4 py-1.5 rounded-full transition-all duration-300 glass-panel hover:border-primary/30"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="glass-card p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sliders className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium text-foreground">Refine Your Search</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Object.entries(filterOptions).map(([category, options]) => (
                  <div key={category}>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block capitalize">
                      {category}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {options.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleFilter(category, option)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                            selectedFilters[category]?.includes(option)
                              ? "bg-gradient-to-r from-primary to-gold-dark text-charcoal border-primary shadow-gold"
                              : "bg-background/50 border-border hover:border-primary/50"
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            {hasSearched && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-medium text-foreground">
                    AI Matched Results
                  </h2>
                  <span className="glass-panel px-3 py-1.5 rounded-full text-sm text-muted-foreground">
                    {isLoadingProjects ? (
                      <span className="flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" /> Loading...</span>
                    ) : (
                      `${resultsList.length} properties found`
                    )}
                  </span>
                </div>

                {isLoadingProjects && (
                  <div className="flex items-center justify-center py-16">
                    <div className="text-center">
                      <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Finding matching properties...</p>
                    </div>
                  </div>
                )}

                {!isLoadingProjects && resultsList.length === 0 && (
                  <div className="text-center py-16 glass-card">
                    <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="text-lg font-display font-medium text-foreground mb-2">No matching properties found</h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">
                      Try broadening your search criteria or using different keywords. Our database is growing daily with new off-plan projects.
                    </p>
                  </div>
                )}

                {!isLoadingProjects && resultsList.map((project, index) => {
                  const heroImg = getHeroImage(project.slug);
                  const handoverText = project.handover_quarter && project.handover_year
                    ? `${project.handover_quarter} ${project.handover_year}`
                    : project.handover_year ? `${project.handover_year}` : "TBA";

                  return (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="group bubble-card overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="relative w-full md:w-72 aspect-video md:aspect-auto">
                          {heroImg ? (
                            <img
                              src={heroImg}
                              alt={project.project_name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center min-h-[200px]">
                              <Building className="w-12 h-12 text-muted-foreground/30" />
                            </div>
                          )}
                          {/* Investment Score Badge */}
                          {project.investment_score && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3, type: "spring" }}
                              className="absolute top-3 left-3 px-4 py-2 rounded-full flex items-center gap-1.5"
                              style={{
                                background: "linear-gradient(135deg, hsl(43 40% 74%) 0%, hsl(43 50% 60%) 100%)",
                                boxShadow: "0 4px 15px rgba(214, 199, 161, 0.4)",
                              }}
                            >
                              <Sparkles className="w-4 h-4 text-charcoal" />
                              <span className="text-sm font-semibold text-charcoal">{project.investment_score}/10 Score</span>
                            </motion.div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 relative z-10">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {project.developers?.name || "Developer"}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {project.areas?.name || project.city}
                            </span>
                          </div>

                          <h3 className="text-xl font-display font-medium text-foreground mb-3">
                            {project.project_name}
                          </h3>

                          {/* Description */}
                          {project.short_description && (
                            <div className="glass-panel rounded-xl p-4 mb-4">
                              <div className="flex items-start gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Sparkles className="w-3.5 h-3.5 text-charcoal" />
                                </div>
                                <p className="text-sm text-foreground line-clamp-2">{project.short_description}</p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-4 flex-wrap">
                              <div>
                                <span className="text-xs text-muted-foreground">From</span>
                                <div className="font-semibold text-foreground">{formatPrice(project.starting_price)}</div>
                              </div>
                              {project.investment_tags?.length > 0 && (
                                <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1 text-primary">
                                  <TrendingUp className="w-4 h-4" />
                                  <span className="font-semibold text-sm">{project.investment_tags[0]}</span>
                                </div>
                              )}
                              <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1 text-muted-foreground text-sm">
                                <Clock className="w-4 h-4" />
                                {handoverText}
                              </div>
                            </div>

                            <Button variant="gold" size="sm" className="rounded-full" asChild>
                              <Link to={getProjectLink(project)}>
                                View Details
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
      
    </div>
  );
}
