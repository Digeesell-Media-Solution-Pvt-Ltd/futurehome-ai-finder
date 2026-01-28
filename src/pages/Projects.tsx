import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BadgeCheck, Clock, Filter, Grid, List, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { getProjectUrl } from "@/lib/projectUrls";
import breezHero from "@/assets/projects/breez-hero.jpg";
import timezHero from "@/assets/projects/timez-hero.jpg";
import sparklzInterior from "@/assets/projects/sparklz-interior.jpg";
import shahrukhzLobby from "@/assets/projects/shahrukhz-lobby.jpg";
import aspirzPool from "@/assets/projects/aspirz-pool.jpg";
import bayz102Hero from "@/assets/projects/bayz102-hero.jpg";
import oasizHero from "@/assets/projects/oasiz-hero.jpg";
import oasiz2Hero from "@/assets/projects/oasiz2-hero.jpg";
import damacIslands2Hero from "@/assets/projects/damac-islands2-hero.jpg";
import damacDistrictHero from "@/assets/projects/damac-district-hero.jpg";
import chelseaResidencesHero from "@/assets/projects/chelsea-residences-hero.jpg";
import safaGateHero from "@/assets/projects/safa-gate-hero.jpg";
import riversideViewsHero from "@/assets/projects/riverside-views-hero.jpg";
import violet4Hero from "@/assets/projects/violet4-hero.jpg";
import sunCityHero from "@/assets/projects/sun-city-hero.jpg";
import damacIslandsHero from "@/assets/projects/damac-islands-hero.jpg";
import shorelineHero from "@/assets/projects/shoreline-hero.jpg";
import elo3Hero from "@/assets/projects/elo3-hero.jpg";
import burjAziziHero from "@/assets/projects/burj-azizi-hero.jpg";
import creekViewsHero from "@/assets/projects/creek-views-hero.jpg";

const allProjects = [
  {
    id: "creek-views",
    name: "Creek Views",
    developer: "Azizi Developments",
    location: "Dubai Healthcare City",
    price: "AED 873K",
    image: creekViewsHero,
    handover: "Ready",
    roi: "8-10%",
    tags: ["Creek Views", "Modern Tower", "Investment"],
    verified: true,
    featured: true,
  },
  {
    id: "burj-azizi",
    name: "Burj Azizi",
    developer: "Azizi Developments",
    location: "Sheikh Zayed Road, Dubai",
    price: "On Request",
    image: burjAziziHero,
    handover: "2029",
    roi: "Premium",
    tags: ["Tallest Residential", "Burj Azizi", "Iconic"],
    verified: true,
    featured: true,
  },
  {
    id: "shoreline",
    name: "Shoreline by DAMAC",
    developer: "DAMAC Properties",
    location: "Al Marjan Island, RAK",
    price: "On Request",
    image: shorelineHero,
    handover: "2028",
    roi: "8-10%",
    tags: ["Seafront", "Coastal Living", "Premium Views"],
    verified: true,
    featured: true,
  },
  {
    id: "damac-islands",
    name: "DAMAC Islands",
    developer: "DAMAC Properties",
    location: "Dubai Islands (Waterfront)",
    price: "AED 2.75M",
    image: damacIslandsHero,
    handover: "2027",
    roi: "10-12%",
    tags: ["Island Villas", "DAMAC Waterfront", "Tropical Lifestyle"],
    verified: true,
    featured: true,
  },
  {
    id: "sun-city",
    name: "DAMAC Sun City",
    developer: "DAMAC Properties",
    location: "Dubai South",
    price: "On Request",
    image: sunCityHero,
    handover: "2028",
    roi: "7-9%",
    tags: ["Resort Style", "Sunny Community", "Family Living"],
    verified: true,
    featured: true,
  },
  {
    id: "riverside-views",
    name: "DAMAC Riverside Views",
    developer: "DAMAC Properties",
    location: "DAMAC Riverside, Dubai",
    price: "AED 650K",
    image: riversideViewsHero,
    handover: "Q1 2029",
    roi: "7-9%",
    tags: ["Riverside", "Waterfront", "Community Living"],
    verified: true,
    featured: true,
  },
  {
    id: "safa-gate",
    name: "Safa Gate",
    developer: "DAMAC Properties",
    location: "Sheikh Zayed Road / Safa Park",
    price: "AED 1.41M",
    image: safaGateHero,
    handover: "Q4 2028",
    roi: "8-10%",
    tags: ["Park Views", "Luxury Tower", "City Living"],
    verified: true,
    featured: true,
  },
  {
    id: "chelsea-residences",
    name: "Chelsea Residences",
    developer: "DAMAC Properties",
    location: "Dubai Maritime City",
    price: "AED 2.92M",
    image: chelseaResidencesHero,
    handover: "Q4 2028",
    roi: "8-10%",
    tags: ["Branded Living", "Waterfront", "Chelsea FC"],
    verified: true,
    featured: true,
  },
  {
    id: "damac-district",
    name: "DAMAC District",
    developer: "DAMAC Properties",
    location: "DAMAC Hills, Dubai",
    price: "AED 1.59M",
    image: damacDistrictHero,
    handover: "Q3 2029",
    roi: "7-9%",
    tags: ["Mixed-Use", "DAMAC Hills", "Golf Community"],
    verified: true,
    featured: true,
  },
  {
    id: "damac-islands-2",
    name: "DAMAC Islands 2",
    developer: "DAMAC Properties",
    location: "DAMAC Islands 2 Community",
    price: "AED 2.75M",
    image: damacIslands2Hero,
    handover: "2028",
    roi: "10-12%",
    tags: ["Waterfront Villas", "Island Living", "Eco-Luxury"],
    verified: true,
    featured: true,
  },
  {
    id: "oasiz2",
    name: "Oasiz 2 by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 699K",
    image: oasiz2Hero,
    handover: "Nov 2027",
    roi: "8-10%",
    tags: ["Skyline Views", "DSO", "Private Pool"],
    verified: true,
    featured: true,
  },
  {
    id: "oasiz",
    name: "Oasiz by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 699K",
    image: oasizHero,
    handover: "Nov 2027",
    roi: "8-10%",
    tags: ["Affordable Luxury", "DSO", "1% Monthly"],
    verified: true,
    featured: true,
  },
  {
    id: "bayz102",
    name: "Bayz 102 by Danube",
    developer: "Danube Properties",
    location: "Business Bay",
    price: "AED 1.38M",
    image: bayz102Hero,
    handover: "June 2029",
    roi: "7-9%",
    tags: ["Business Bay", "Luxury", "Burj Views"],
    verified: true,
    featured: true,
  },
  {
    id: "shahrukhz",
    name: "Shahrukhz by Danube",
    developer: "Danube Properties",
    location: "Sheikh Zayed Road",
    price: "AED 1.9M",
    image: shahrukhzLobby,
    handover: "2029",
    roi: "7-9%",
    tags: ["Commercial", "Grade-A", "55 Floors"],
    verified: true,
    featured: true,
  },
  {
    id: "sparklz",
    name: "Sparklz by Danube",
    developer: "Danube Properties",
    location: "Al Furjan, Dubai",
    price: "AED 900K",
    image: sparklzInterior,
    handover: "Q2 2028",
    roi: "7-9%",
    tags: ["Smart Living", "Convertible", "30+ Amenities"],
    verified: true,
    featured: true,
  },
  {
    id: "timez",
    name: "Timez by Danube",
    developer: "Danube Properties",
    location: "Dubai Silicon Oasis",
    price: "AED 550K",
    image: timezHero,
    handover: "Q4 2027",
    roi: "8-10%",
    tags: ["Convertible Units", "1% Monthly", "45+ Amenities"],
    verified: true,
    featured: true,
  },
  {
    id: "aspirz",
    name: "Aspirz by Danube",
    developer: "Danube Properties",
    location: "Dubai Sports City",
    price: "AED 850K",
    image: aspirzPool,
    handover: "Q4 2028",
    roi: "8-10%",
    tags: ["Mixed-Use", "Convertible", "30+ Amenities"],
    verified: true,
    featured: true,
  },
  {
    id: "breez",
    name: "Breez by Danube",
    developer: "Danube Properties",
    location: "Dubai Maritime City",
    price: "AED 700K",
    image: breezHero,
    handover: "Q4 2028",
    roi: "12-15%",
    tags: ["Waterfront", "Fully Furnished", "40+ Amenities"],
    verified: true,
    featured: true,
  },
  {
    id: "violet-4",
    name: "Violet 4",
    developer: "DAMAC Properties",
    location: "DAMAC Hills 2, Dubai",
    price: "On Request",
    image: violet4Hero,
    handover: "Q3 2027",
    roi: "6-8%",
    tags: ["Family Community", "Suburban Living", "Townhouses"],
    verified: true,
    featured: false,
  },
  {
    id: "elo-3",
    name: "ELO 3",
    developer: "DAMAC Properties",
    location: "DAMAC Hills 2",
    price: "AED 580K",
    image: elo3Hero,
    handover: "Q4 2027",
    roi: "7-9%",
    tags: ["Affordable Luxury", "Vertical Living", "Smart Homes"],
    verified: true,
    featured: false,
  },
  {
    id: "aliyah",
    name: "Aliyah Residences",
    developer: "Azizi Developments",
    location: "Dubai Healthcare City",
    price: "AED 1.14M",
    image: "https://images.ctfassets.net/og52t9hg6rhr/2mjKa9dw4Qmgenwjedl0Xv/82cd3498a2798231ef802fb67fee7e63/00_Hero.jpeg",
    handover: "Ready",
    roi: "7-9%",
    tags: ["Mid-Rise", "Healthcare City", "Investment"],
    verified: true,
    featured: false,
  },
  {
    name: "The Oasis by Emaar",
    developer: "Emaar Properties",
    location: "Dubai",
    price: "AED 2.5M",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    handover: "Q4 2026",
    roi: "8.2%",
    tags: ["New Launch", "Investor Pick"],
    verified: true,
    featured: false,
  },
  {
    id: 2,
    name: "Palm Views Residences",
    developer: "Nakheel",
    location: "Palm Jumeirah",
    price: "AED 4.8M",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    handover: "Q2 2025",
    roi: "7.5%",
    tags: ["Ready Soon", "Premium"],
    verified: true,
    featured: false,
  },
  {
    id: 3,
    name: "Marina Vista Tower",
    developer: "Damac",
    location: "Dubai Marina",
    price: "AED 1.8M",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    handover: "Q1 2027",
    roi: "9.1%",
    tags: ["10% Down", "High ROI"],
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: "Creek Harbour Views",
    developer: "Emaar Properties",
    location: "Dubai Creek",
    price: "AED 3.2M",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    handover: "Q3 2026",
    roi: "7.8%",
    tags: ["Waterfront", "Luxury"],
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: "Business Bay Heights",
    developer: "Sobha Realty",
    location: "Business Bay",
    price: "AED 1.5M",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    handover: "Q2 2027",
    roi: "10.2%",
    tags: ["Best Value", "High ROI"],
    verified: true,
    featured: false,
  },
  {
    id: 6,
    name: "Dubai Hills Estate",
    developer: "Meraas",
    location: "Dubai Hills",
    price: "AED 3.8M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    handover: "Q1 2026",
    roi: "7.2%",
    tags: ["Family", "Golf Course"],
    verified: true,
    featured: false,
  },
];

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

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
            className="mb-10"
          >
            <h1 className="text-display text-foreground mb-4">
              Off-Plan Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our curated collection of verified off-plan properties 
              from top developers across the UAE.
            </p>
          </motion.div>

          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 p-4 bg-card border border-border rounded-xl"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="gold-outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{allProjects.length} projects</span>
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 ${view === "grid" ? "bg-primary text-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 ${view === "list" ? "bg-primary text-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {allProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group card-luxury"
              >
                {view === "grid" ? (
                  <>
                    {/* Grid View */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {project.featured && (
                          <span className="badge-tag flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="badge-tag">{tag}</span>
                        ))}
                      </div>

                      {project.verified && (
                        <div className="absolute top-3 right-3 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center">
                          <BadgeCheck className="w-5 h-5 text-primary" />
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold text-foreground">{project.roi} ROI</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span>{project.developer}</span>
                        <span>·</span>
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <span className="text-xs text-muted-foreground block">Starting from</span>
                          <span className="font-semibold text-foreground">{project.price}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          {project.handover}
                        </div>
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <Button variant="gold-outline" size="sm" className="w-full" asChild>
                        <Link to={getProjectUrl(String(project.id), project.developer)}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </>
                ) : (
                  /* List View */
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 aspect-video md:aspect-auto">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="badge-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span>{project.developer}</span>
                          <span>·</span>
                          <span>{project.location}</span>
                          {project.verified && <BadgeCheck className="w-4 h-4 text-primary" />}
                        </div>
                        <h3 className="font-display text-xl font-medium text-foreground mb-2">
                          {project.name}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="text-xs text-muted-foreground block">From</span>
                            <span className="font-semibold text-foreground">{project.price}</span>
                          </div>
                          <div className="flex items-center gap-1 text-primary">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-semibold">{project.roi} ROI</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Clock className="w-4 h-4" />
                            {project.handover}
                          </div>
                        </div>
                        <Button variant="gold" size="sm" asChild>
                          <Link to={getProjectUrl(String(project.id), project.developer)}>
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
