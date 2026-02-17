import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DeveloperCard } from "@/components/developers/DeveloperCard";
import { DeveloperSearch } from "@/components/developers/DeveloperSearch";
import { AlphabetFilter } from "@/components/developers/AlphabetFilter";
import { FeaturedDevelopersSection } from "@/components/developers/FeaturedDevelopersSection";
import { useDevelopers } from "@/hooks/useDevelopers";

export default function DevelopersPage() {
  const {
    filteredDevelopers,
    featuredDevelopers,
    isLoading,
    searchQuery,
    setSearchQuery,
    selectedLetter,
    setSelectedLetter,
    availableLetters,
    totalCount,
    filteredCount,
  } = useDevelopers();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Developers Directory
            </span>
            <h1 className="text-display text-foreground mb-4">
              Explore UAE's Top Property Developers
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover off-plan projects from {totalCount.toLocaleString()}+ leading UAE real estate developers. 
              Filter by A–Z or search for your preferred developer.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <DeveloperSearch 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
          </motion.div>

          {/* Alphabet Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <AlphabetFilter
              selectedLetter={selectedLetter}
              onSelect={setSelectedLetter}
              availableLetters={availableLetters}
            />
          </motion.div>

          {/* Featured Developers (only show when not filtering) */}
          {!selectedLetter && !searchQuery && featuredDevelopers.length > 0 && (
            <FeaturedDevelopersSection developers={featuredDevelopers} />
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">
                {filteredCount.toLocaleString()} developer{filteredCount !== 1 ? 's' : ''} 
                {selectedLetter && ` starting with "${selectedLetter}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
            </div>
            {(selectedLetter || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedLetter(null);
                  setSearchQuery('');
                }}
                className="text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            )}
          </motion.div>

          {/* Developers Grid */}
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-2xl" />
              ))}
            </div>
          ) : filteredDevelopers.length > 0 ? (
            <div 
              key={`grid-${selectedLetter || 'all'}-${searchQuery}`}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {filteredDevelopers.map((developer, index) => (
                <DeveloperCard 
                  key={developer.id} 
                  developer={developer} 
                  index={index}
                  variant={developer.featured ? "featured" : "default"}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Building2 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No developers found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedLetter(null);
                  setSearchQuery('');
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
