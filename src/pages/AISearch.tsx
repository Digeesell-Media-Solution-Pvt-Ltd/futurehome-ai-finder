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
    id: "shahrukhz",
    name: "Shahrukhz by Danube",
    developer: "Danube Properties",
    location: "Sheikh Zayed Road",
    price: "AED 1.9M",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    handover: "2029",
    roi: "7-9%",
    matchScore: 94,
    matchReason: "Premium match: Grade-A commercial offices on Dubai's iconic Sheikh Zayed Road with helipad, skypool, and 70/30 payment plan.",
  },
  {
    id: "sparklz",
    name: "Sparklz by Danube",
    developer: "Danube Properties",
    location: "Al Furjan, Dubai",
    price: "AED 900K",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    handover: "Q2 2028",
    roi: "7-9%",
    matchScore: 96,
    matchReason: "Great match: Smart convertible apartments in family-friendly Al Furjan with 30+ amenities and excellent metro connectivity.",
  },
  {
    id: "aspirz",
    name: "Aspirz by Danube",
    developer: "Danube Properties",
    location: "Dubai Sports City",
    price: "AED 850K",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    handover: "Q4 2028",
    roi: "8-10%",
    matchScore: 95,
    matchReason: "Great match: Mixed-use tower with convertible apartments and office spaces in Dubai Sports City. Ideal for investors seeking diversified rental income.",
  },
  {
    id: "timez",
    name: "Timez by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 550K",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    handover: "Q4 2027",
    roi: "8-10%",
    matchScore: 97,
    matchReason: "Excellent match: Affordable entry point with convertible layouts, 1% monthly payment plan perfect for first-time investors in DSO's growing tech hub.",
  },
  {
    id: "breez",
    name: "Breez by Danube",
    developer: "Danube Properties",
    location: "Dubai Maritime City",
    price: "AED 700K",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    handover: "Q4 2028",
    roi: "12-15%",
    matchScore: 98,
    matchReason: "Perfect match: Waterfront property with 40+ amenities, fully furnished, high ROI potential in emerging Dubai Maritime City location.",
  },
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background animated elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
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
            {/* Main Search - Glass card */}
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
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        ⟳
                      </motion.span>
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

              {/* Suggested Queries - Bubble pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Try:</span>
                {suggestedQueries.map((suggestion) => (
                  <motion.button
                    key={suggestion}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setQuery(suggestion)}
                    className="text-sm px-4 py-1.5 rounded-full transition-all duration-300 glass-panel hover:border-primary/30"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Filters - Glass card */}
            <div className="glass-card p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sliders className="w-4 h-4 text-primary" />
                </div>
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
                  <span className="glass-panel px-3 py-1.5 rounded-full text-sm text-muted-foreground">
                    {sampleResults.length} properties found
                  </span>
                </div>

                {sampleResults.map((result, index) => (
                  <motion.article
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group bubble-card overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative w-full md:w-72 aspect-video md:aspect-auto">
                        <img
                          src={result.image}
                          alt={result.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Match Score - Bubble */}
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
                          <span className="text-sm font-semibold text-charcoal">{result.matchScore}% Match</span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 relative z-10">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {result.developer}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {result.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-display font-medium text-foreground mb-3">
                          {result.name}
                        </h3>

                        {/* AI Insight - Glass panel */}
                        <div className="glass-panel rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Sparkles className="w-3.5 h-3.5 text-charcoal" />
                            </div>
                            <p className="text-sm text-foreground">{result.matchReason}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div>
                              <span className="text-xs text-muted-foreground">From</span>
                              <div className="font-semibold text-foreground">{result.price}</div>
                            </div>
                            <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1 text-primary">
                              <TrendingUp className="w-4 h-4" />
                              <span className="font-semibold text-sm">{result.roi} ROI</span>
                            </div>
                            <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-1 text-muted-foreground text-sm">
                              <Clock className="w-4 h-4" />
                              {result.handover}
                            </div>
                          </div>

                          <Button variant="gold" size="sm" className="rounded-full" asChild>
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
