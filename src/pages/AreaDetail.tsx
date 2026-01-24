import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, TrendingUp, Building, ArrowRight, ArrowUpRight, 
  Home, Users, Car, GraduationCap, ShoppingBag, Waves
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const areasData: Record<string, {
  name: string;
  image: string;
  overview: string;
  avgPrice: string;
  roi: string;
  priceGrowth: string;
  projects: number;
  highlights: string[];
  amenities: { icon: React.ElementType; name: string }[];
  topProjects: { id: string; name: string; developer: string; price: string; image: string; handover: string }[];
  priceHistory: { year: string; price: string }[];
}> = {
  "dubai-marina": {
    name: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    overview: "Dubai Marina is one of the most sought-after waterfront communities in Dubai, offering a premium lifestyle with stunning views of the marina and Arabian Gulf. Known for its iconic skyline and vibrant atmosphere, it attracts investors seeking high rental yields and capital appreciation.",
    avgPrice: "AED 1.8M",
    roi: "8.5%",
    priceGrowth: "+12.3%",
    projects: 42,
    highlights: [
      "Waterfront living with marina views",
      "World-class dining and entertainment",
      "Direct beach access at JBR",
      "Metro connectivity",
      "High rental demand from professionals"
    ],
    amenities: [
      { icon: Waves, name: "Beach Access" },
      { icon: ShoppingBag, name: "Marina Mall" },
      { icon: Car, name: "Metro Station" },
      { icon: Users, name: "Vibrant Community" }
    ],
    topProjects: [
      { id: "1", name: "Marina Vista", developer: "Emaar", price: "AED 2.1M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q4 2025" },
      { id: "2", name: "The Cove", developer: "Emaar", price: "AED 1.8M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q2 2026" },
      { id: "3", name: "Azure Residences", developer: "Sobha", price: "AED 2.5M", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", handover: "Q1 2025" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 1.2M" },
      { year: "2021", price: "AED 1.35M" },
      { year: "2022", price: "AED 1.5M" },
      { year: "2023", price: "AED 1.65M" },
      { year: "2024", price: "AED 1.8M" }
    ]
  },
  "downtown": {
    name: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80",
    overview: "Home to the iconic Burj Khalifa and Dubai Mall, Downtown Dubai represents the pinnacle of urban luxury living. This master-planned community offers unparalleled access to world-class entertainment, dining, and cultural attractions.",
    avgPrice: "AED 2.5M",
    roi: "7.2%",
    priceGrowth: "+15.8%",
    projects: 38,
    highlights: [
      "Home to Burj Khalifa",
      "Adjacent to Dubai Mall",
      "Premium address status",
      "Strong capital appreciation",
      "Tourist hotspot with high short-term rental demand"
    ],
    amenities: [
      { icon: Building, name: "Burj Khalifa" },
      { icon: ShoppingBag, name: "Dubai Mall" },
      { icon: Car, name: "Metro Station" },
      { icon: Users, name: "Boulevard" }
    ],
    topProjects: [
      { id: "4", name: "The Residence", developer: "Emaar", price: "AED 3.2M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q3 2025" },
      { id: "5", name: "Burj Crown", developer: "Emaar", price: "AED 2.8M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q4 2025" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 1.8M" },
      { year: "2021", price: "AED 2.0M" },
      { year: "2022", price: "AED 2.15M" },
      { year: "2023", price: "AED 2.3M" },
      { year: "2024", price: "AED 2.5M" }
    ]
  },
  "palm-jumeirah": {
    name: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80",
    overview: "The world's largest man-made island, Palm Jumeirah offers exclusive waterfront living with private beaches and access to luxury resorts. This iconic destination attracts high-net-worth individuals seeking privacy and prestige.",
    avgPrice: "AED 5.2M",
    roi: "6.8%",
    priceGrowth: "+22.5%",
    projects: 24,
    highlights: [
      "World-famous iconic island",
      "Private beach access",
      "Ultra-luxury properties",
      "Five-star hotel amenities",
      "Exclusive community"
    ],
    amenities: [
      { icon: Waves, name: "Private Beach" },
      { icon: Home, name: "Villa Living" },
      { icon: ShoppingBag, name: "Nakheel Mall" },
      { icon: Users, name: "Resort Lifestyle" }
    ],
    topProjects: [
      { id: "6", name: "Palm Beach Towers", developer: "Nakheel", price: "AED 4.5M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q2 2025" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 3.5M" },
      { year: "2021", price: "AED 3.9M" },
      { year: "2022", price: "AED 4.3M" },
      { year: "2023", price: "AED 4.8M" },
      { year: "2024", price: "AED 5.2M" }
    ]
  },
  "business-bay": {
    name: "Business Bay",
    image: "https://images.unsplash.com/photo-1596360174634-80b8c4c86f8e?w=1200&q=80",
    overview: "Dubai's dynamic business hub offering a blend of commercial and residential towers. Business Bay attracts professionals and investors with its modern infrastructure, canal views, and proximity to Downtown Dubai.",
    avgPrice: "AED 1.5M",
    roi: "9.1%",
    priceGrowth: "+18.2%",
    projects: 56,
    highlights: [
      "Central business location",
      "Dubai Canal views",
      "Walking distance to Downtown",
      "High rental yields",
      "Modern high-rise living"
    ],
    amenities: [
      { icon: Building, name: "Business Hub" },
      { icon: Waves, name: "Canal Views" },
      { icon: Car, name: "Metro Station" },
      { icon: ShoppingBag, name: "Bay Avenue" }
    ],
    topProjects: [
      { id: "7", name: "The Opus", developer: "Omniyat", price: "AED 2.2M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Ready" },
      { id: "8", name: "Reva Residences", developer: "Damac", price: "AED 1.4M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q1 2026" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 1.0M" },
      { year: "2021", price: "AED 1.15M" },
      { year: "2022", price: "AED 1.28M" },
      { year: "2023", price: "AED 1.4M" },
      { year: "2024", price: "AED 1.5M" }
    ]
  },
  "dubai-hills": {
    name: "Dubai Hills",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    overview: "A premium family-friendly master community developed by Emaar, Dubai Hills Estate offers a perfect blend of urban convenience and green living. Home to a championship golf course and Dubai Hills Mall.",
    avgPrice: "AED 2.2M",
    roi: "7.8%",
    priceGrowth: "+20.1%",
    projects: 31,
    highlights: [
      "Championship golf course",
      "Dubai Hills Mall",
      "Family-oriented community",
      "Excellent schools nearby",
      "Green spaces and parks"
    ],
    amenities: [
      { icon: Home, name: "Villas & Apartments" },
      { icon: GraduationCap, name: "Top Schools" },
      { icon: ShoppingBag, name: "Dubai Hills Mall" },
      { icon: Users, name: "Family Community" }
    ],
    topProjects: [
      { id: "9", name: "Golf Grove", developer: "Emaar", price: "AED 2.5M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q4 2025" },
      { id: "10", name: "Park Heights", developer: "Emaar", price: "AED 1.8M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q2 2025" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 1.5M" },
      { year: "2021", price: "AED 1.7M" },
      { year: "2022", price: "AED 1.85M" },
      { year: "2023", price: "AED 2.0M" },
      { year: "2024", price: "AED 2.2M" }
    ]
  },
  "jvc": {
    name: "Jumeirah Village Circle",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    overview: "One of Dubai's most popular residential communities offering affordable luxury with the highest rental yields in the city. JVC attracts young professionals and families with its community feel and value proposition.",
    avgPrice: "AED 850K",
    roi: "10.2%",
    priceGrowth: "+25.3%",
    projects: 67,
    highlights: [
      "Highest ROI in Dubai",
      "Affordable entry point",
      "Strong rental demand",
      "Growing community",
      "Family-friendly environment"
    ],
    amenities: [
      { icon: Home, name: "Affordable Living" },
      { icon: GraduationCap, name: "Schools" },
      { icon: ShoppingBag, name: "Circle Mall" },
      { icon: Users, name: "Community Parks" }
    ],
    topProjects: [
      { id: "11", name: "Binghatti Avenue", developer: "Binghatti", price: "AED 750K", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q3 2025" },
      { id: "12", name: "Ellington House", developer: "Ellington", price: "AED 950K", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q1 2026" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 550K" },
      { year: "2021", price: "AED 620K" },
      { year: "2022", price: "AED 700K" },
      { year: "2023", price: "AED 780K" },
      { year: "2024", price: "AED 850K" }
    ]
  },
  "dubai-creek": {
    name: "Dubai Creek Harbour",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    overview: "A visionary waterfront destination developed by Emaar, Dubai Creek Harbour will be home to the world's tallest tower. This emerging community offers stunning creek views and a blend of urban and natural living.",
    avgPrice: "AED 2.8M",
    roi: "8.0%",
    priceGrowth: "+19.5%",
    projects: 28,
    highlights: [
      "Future tallest tower",
      "Waterfront living",
      "Emaar master development",
      "Wildlife sanctuary nearby",
      "Strong appreciation potential"
    ],
    amenities: [
      { icon: Building, name: "Creek Tower" },
      { icon: Waves, name: "Creek Views" },
      { icon: ShoppingBag, name: "Creek Marina" },
      { icon: Users, name: "Promenade" }
    ],
    topProjects: [
      { id: "13", name: "Creek Edge", developer: "Emaar", price: "AED 2.5M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q2 2025" },
      { id: "14", name: "Harbour Views", developer: "Emaar", price: "AED 3.2M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q4 2025" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 1.9M" },
      { year: "2021", price: "AED 2.15M" },
      { year: "2022", price: "AED 2.4M" },
      { year: "2023", price: "AED 2.6M" },
      { year: "2024", price: "AED 2.8M" }
    ]
  },
  "meydan": {
    name: "Meydan",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80",
    overview: "Home to the prestigious Meydan Racecourse and the upcoming Meydan One Mall, this district offers a unique blend of equestrian heritage and modern urban development. Ideal for those seeking a prestigious address.",
    avgPrice: "AED 1.6M",
    roi: "8.8%",
    priceGrowth: "+16.8%",
    projects: 19,
    highlights: [
      "Meydan Racecourse",
      "Crystal Lagoon",
      "Meydan One development",
      "Low-density living",
      "Prestigious address"
    ],
    amenities: [
      { icon: Home, name: "Villas" },
      { icon: Waves, name: "Crystal Lagoon" },
      { icon: ShoppingBag, name: "Meydan One Mall" },
      { icon: Users, name: "Racecourse" }
    ],
    topProjects: [
      { id: "15", name: "Meydan Avenue", developer: "Meydan", price: "AED 1.5M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q1 2026" },
      { id: "16", name: "Azizi Riviera", developer: "Azizi", price: "AED 1.2M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q3 2025" }
    ],
    priceHistory: [
      { year: "2020", price: "AED 1.1M" },
      { year: "2021", price: "AED 1.25M" },
      { year: "2022", price: "AED 1.38M" },
      { year: "2023", price: "AED 1.5M" },
      { year: "2024", price: "AED 1.6M" }
    ]
  }
};

export default function AreaDetail() {
  const { areaId } = useParams();
  const area = areasData[areaId || ""] || areasData["dubai-marina"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <img
            src={area.image}
            alt={area.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container-luxury pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  {area.projects} Active Projects
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-background mb-4">
                  {area.name}
                </h1>
                <div className="flex flex-wrap gap-6 text-background/80">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    <span>From {area.avgPrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span>{area.roi} ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-green-400" />
                    <span>{area.priceGrowth} YoY Growth</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview & Highlights */}
        <section className="py-16 bg-background">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Area Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {area.overview}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {area.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-cream rounded-lg"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <amenity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Investment Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-charcoal rounded-2xl p-6"
              >
                <h3 className="text-lg font-display font-semibold text-background mb-4">
                  Investment Highlights
                </h3>
                <ul className="space-y-3">
                  {area.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-background/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Price Trends */}
        <section className="py-16 bg-cream">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
                Average Price Trends
              </h2>
              <div className="flex items-end gap-4 h-48">
                {area.priceHistory.map((item, index) => {
                  const maxPrice = Math.max(...area.priceHistory.map(p => parseFloat(p.price.replace(/[^\d.]/g, ''))));
                  const currentPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
                  const heightPercent = (currentPrice / maxPrice) * 100;
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg relative group cursor-pointer"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-charcoal text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.price}
                        </div>
                      </motion.div>
                      <span className="text-xs text-muted-foreground">{item.year}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top Projects */}
        <section className="py-16 bg-background">
          <div className="container-luxury">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-semibold text-foreground">
                Top Projects in {area.name}
              </h2>
              <Button variant="ghost" asChild>
                <Link to={`/projects?area=${areaId}`}>
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.topProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-background rounded-xl overflow-hidden border border-border hover:shadow-luxury transition-all duration-300"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary font-medium">{project.developer}</span>
                        <Badge variant="secondary" className="text-xs">
                          {project.handover}
                        </Badge>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground">
                        From <span className="text-foreground font-semibold">{project.price}</span>
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-charcoal">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-semibold text-background mb-4">
                Find Your Perfect Property in {area.name}
              </h2>
              <p className="text-background/70 mb-8 max-w-xl mx-auto">
                Let our AI analyze your preferences and investment goals to find 
                the best off-plan opportunities in this area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-search">
                    Start AI Property Search
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="gold-outline" size="lg" asChild>
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
