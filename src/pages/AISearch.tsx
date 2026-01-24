import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Search, Sliders, ArrowRight, Filter, TrendingUp, MapPin, Building, Clock, BadgeCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const suggestedQueries = [
  "2BR apartment in Dubai Marina under 2M",
  "Family villa with garden in Dubai Hills",
  "High ROI investment in Business Bay",
  "Beachfront property in Palm Jumeirah",
];

const filters = {
  budget: ["Under 1M", "1M - 2M", "2M - 5M", "5M - 10M", "10M+"],
  bedrooms: ["Studio", "1 BR", "2 BR", "3 BR", "4+ BR"],
  areas: ["Dubai Marina", "Downtown", "Palm Jumeirah", "Business Bay", "Dubai Hills", "JVC"],
  handover: ["Ready", "2025", "2026", "2027", "2028+"],
};

const sampleResults = [
  {
    id: 1,
    name: "Marina Vista Tower",
    developer: "Damac",
    location: "Dubai Marina",
    price: "AED 1.8M",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    handover: "Q1 2027",
    roi: "9.1%",
    matchScore: 95,
    matchReason: "Perfect match: 2BR in Dubai Marina, within budget, high ROI potential",
  },
  {
    id: 2,
    name: "The Oasis by Emaar",
    developer: "Emaar Properties",
    location: "Dubai",
    price: "AED 2.5M",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    handover: "Q4 2026",
    roi: "8.2%",
    matchScore: 87,
    matchReason: "Great match: Premium developer, slightly above budget but excellent appreciation potential",
  },
];

export default function AISearchPage() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter((v) => v !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">AI-Powered Property Matching</span>
            </div>
            <h1 className="text-display text-foreground mb-4">
              Find Your Perfect Property
            </h1>
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
            <div className="bg-card border border-border rounded-2xl p-6 shadow-luxury mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe your ideal property..."
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="md:w-auto"
                >
                  {isSearching ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
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
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="text-sm px-3 py-1 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-luxury mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sliders className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Refine Your Search</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {Object.entries(filters).map(([category, options]) => (
                  <div key={category}>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block capitalize">
                      {category}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {options.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter(category, option)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                            selectedFilters[category]?.includes(option)
                              ? "bg-primary text-foreground border-primary"
                              : "bg-background border-border hover:border-primary"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            {showResults && (
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
                  <span className="text-sm text-muted-foreground">
                    {sampleResults.length} properties found
                  </span>
                </div>

                {sampleResults.map((result, index) => (
                  <motion.article
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card border border-border rounded-xl overflow-hidden shadow-luxury hover:shadow-gold transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative w-full md:w-72 aspect-video md:aspect-auto">
                        <img
                          src={result.image}
                          alt={result.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Match Score */}
                        <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary rounded-full flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-foreground" />
                          <span className="text-sm font-semibold text-foreground">{result.matchScore}% Match</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {result.developer}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {result.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-display font-medium text-foreground mb-2">
                          {result.name}
                        </h3>

                        {/* AI Insight */}
                        <div className="bg-primary/10 rounded-lg p-3 mb-4">
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                            <p className="text-sm text-foreground">{result.matchReason}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div>
                              <span className="text-xs text-muted-foreground">From</span>
                              <div className="font-semibold text-foreground">{result.price}</div>
                            </div>
                            <div className="flex items-center gap-1 text-primary">
                              <TrendingUp className="w-4 h-4" />
                              <span className="font-semibold">{result.roi} ROI</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <Clock className="w-4 h-4" />
                              {result.handover}
                            </div>
                          </div>

                          <Button variant="gold" size="sm" asChild>
                            <Link to={`/projects/${result.id}`}>
                              View Details
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
