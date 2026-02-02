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
import auraHero from "@/assets/projects/aura-hero.jpg";
import binghattiLuxuriaHero from "@/assets/projects/binghatti-luxuria-hero.jpg";
import binghattiCullinanHero from "@/assets/projects/binghatti-cullinan-hero.jpg";
import binghattiHillcrestHero from "@/assets/projects/binghatti-hillcrest-hero.jpg";
import binghattiTitaniaHero from "@/assets/projects/binghatti-titania-hero.jpg";
import binghattiVintageHero from "@/assets/projects/binghatti-vintage-hero.jpg";
import samanaBoulevardHero from "@/assets/projects/samana-boulevard-hero.jpg";
import samanaHillsSouth3Hero from "@/assets/projects/samana-hills-south3-hero.jpg";
import samanaHillsSouth2Hero from "@/assets/projects/samana-hills-south2-hero.jpg";
import samanaImperialHero from "@/assets/projects/samana-imperial-hero.jpg";
import samanaSkyViewsHero from "@/assets/projects/samana-skyviews-hero.jpg";
import rukanTowerHero from "@/assets/projects/rukan-tower-hero.jpg";
import perlaPrimeHero from "@/assets/projects/perla-prime-hero.jpg";
import rHillsHero from "@/assets/projects/r-hills-hero.jpg";
import viaHero from "@/assets/projects/via-hero.jpg";
import theGroveHero from "@/assets/projects/the-grove-hero.jpg";
import theGreensHero from "@/assets/projects/the-greens-hero.jpg";

const allProjects = [
  {
    id: "the-grove",
    name: "The Grove",
    developer: "Sobha Realty",
    location: "Sobha Sanctuary, Dubai",
    price: "AED 9.32M",
    image: theGroveHero,
    handover: "2027",
    roi: "7-9%",
    tags: ["Luxury Villas", "Sobha Sanctuary", "New Launch"],
    verified: true,
    featured: true,
  },
  {
    id: "the-greens",
    name: "The Greens",
    developer: "Sobha Realty",
    location: "Sobha Sanctuary, Dubai",
    price: "AED 3.99M",
    image: theGreensHero,
    handover: "2027",
    roi: "7-9%",
    tags: ["Townhouses", "Sobha Sanctuary", "Family Living"],
    verified: true,
    featured: true,
  },
  {
    id: "via",
    name: "VIA - Montenapoleone",
    developer: "Reportage Properties",
    location: "Mostakbal City, New Cairo, Egypt",
    price: "On Request",
    image: viaHero,
    handover: "2026",
    roi: "10-12%",
    tags: ["Commercial", "Mixed-Use", "New Cairo"],
    verified: true,
    featured: false,
  },
  {
    id: "r-hills",
    name: "R. Hills",
    developer: "Reportage Properties",
    location: "Dubailand, Dubai",
    price: "AED 1.8M",
    image: rHillsHero,
    handover: "2026",
    roi: "8-10%",
    tags: ["Townhouses", "Gated Community", "Dubailand"],
    verified: true,
    featured: false,
  },
  {
    id: "perla-prime",
    name: "Perla Prime",
    developer: "Reportage Properties",
    location: "Yas Island, Abu Dhabi",
    price: "AED 750K",
    image: perlaPrimeHero,
    handover: "2027",
    roi: "8-10%",
    tags: ["Waterfront", "Yas Island", "Beach Access"],
    verified: true,
    featured: false,
  },
  {
    id: "rukan-tower",
    name: "Rukan Tower",
    developer: "Reportage Properties",
    location: "Dubai Land, Dubai",
    price: "AED 550K",
    image: rukanTowerHero,
    handover: "2026",
    roi: "8-10%",
    tags: ["Green Living", "Dubai Land", "Off-Plan"],
    verified: true,
    featured: true,
  },
  {
    id: "samana-sky-views",
    name: "Samana Sky Views",
    developer: "Samana Developers",
    location: "Arjan, Dubai",
    price: "AED 1.5M",
    image: samanaSkyViewsHero,
    handover: "2028",
    roi: "9-11%",
    tags: ["Smart Architecture", "Rooftop Pool", "Sky Deck"],
    verified: true,
    featured: true,
  },
  {
    id: "samana-imperial",
    name: "Samana Imperial Garden",
    developer: "Samana Developers",
    location: "Arjan, Dubai",
    price: "AED 1.2M",
    image: samanaImperialHero,
    handover: "2028",
    roi: "8-10%",
    tags: ["Imperial Living", "Nature Inspired", "Wellness"],
    verified: true,
    featured: true,
  },
  {
    id: "samana-hills-south-2",
    name: "Samana Hills South 2",
    developer: "Samana Developers",
    location: "Arjan, Dubai",
    price: "AED 750K",
    image: samanaHillsSouth2Hero,
    handover: "2027",
    roi: "7-9%",
    tags: ["Family Friendly", "Affordable Living", "Suburban"],
    verified: true,
    featured: false,
  },
  {
    id: "samana-hills-south-3",
    name: "Samana Hills South 3",
    developer: "Samana Developers",
    location: "Arjan, Dubai",
    price: "AED 988K",
    image: samanaHillsSouth3Hero,
    handover: "2028",
    roi: "7-9%",
    tags: ["Affordable Luxury", "Green Community", "Arjan"],
    verified: true,
    featured: false,
  },
  {
    id: "samana-boulevard",
    name: "Samana Boulevard Heights",
    developer: "Samana Developers",
    location: "Arjan, Dubai",
    price: "AED 893K",
    image: samanaBoulevardHero,
    handover: "2028",
    roi: "8-10%",
    tags: ["Smart Living", "Balcony Pools", "Wellness"],
    verified: true,
    featured: true,
  },
  {
    id: "binghatti-vintage",
    name: "Binghatti Vintage",
    developer: "Binghatti Developers",
    location: "Majan, Dubailand",
    price: "AED 675K",
    image: binghattiVintageHero,
    handover: "2027",
    roi: "8-10%",
    tags: ["Retro Modern", "Urban Chic", "Majan"],
    verified: true,
    featured: false,
  },
  {
    id: "binghatti-titania",
    name: "Binghatti Titania",
    developer: "Binghatti Developers",
    location: "Majan, Dubailand",
    price: "AED 680K",
    image: binghattiTitaniaHero,
    handover: "2027",
    roi: "8-10%",
    tags: ["Premium Living", "New Launch", "Majan"],
    verified: true,
    featured: false,
  },
  {
    id: "binghatti-hillcrest",
    name: "Binghatti Hillcrest",
    developer: "Binghatti Developers",
    location: "Arjan, Dubailand",
    price: "AED 800K",
    image: binghattiHillcrestHero,
    handover: "2027",
    roi: "7-9%",
    tags: ["Family Living", "Suburban Community", "Dubailand"],
    verified: true,
    featured: false,
  },
  {
    id: "binghatti-cullinan",
    name: "Binghatti Cullinan",
    developer: "Binghatti Developers",
    location: "Al Jaddaf, Dubai",
    price: "AED 820K",
    image: binghattiCullinanHero,
    handover: "2027",
    roi: "8-10%",
    tags: ["Iconic Design", "Modern Living", "Al Jaddaf"],
    verified: true,
    featured: true,
  },
  {
    id: "binghatti-luxuria",
    name: "Binghatti Luxuria",
    developer: "Binghatti Developers",
    location: "Jumeirah Village Triangle",
    price: "AED 767K",
    image: binghattiLuxuriaHero,
    handover: "2027",
    roi: "8-10%",
    tags: ["Luxury", "High-Rise", "Prime Location"],
    verified: true,
    featured: true,
  },
  {
    id: "aura",
    name: "Aura by Azizi",
    developer: "Azizi Developments",
    location: "Jebel Ali, Dubai",
    price: "AED 1.33M",
    image: auraHero,
    handover: "Ready",
    roi: "7-9%",
    tags: ["Ready Property", "Metro Access", "Investment"],
    verified: true,
    featured: false,
  },
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
