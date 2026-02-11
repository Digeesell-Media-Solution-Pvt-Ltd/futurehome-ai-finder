import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { 
  Building, MapPin, Calendar, Award, CheckCircle, 
  ArrowRight, TrendingUp, Users, Star
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const developersData: Record<string, {
  name: string;
  logo: string;
  established: string;
  headquarters: string;
  projectsDelivered: number;
  ongoingProjects: number;
  trustScore: number;
  description: string;
  highlights: string[];
  currentProjects: { id: string; name: string; area: string; price: string; image: string; handover: string }[];
  completedProjects: { name: string; area: string; year: string; units: number }[];
  deliveryPerformance: { onTime: number; quality: number; customerSatisfaction: number };
}> = {
  "emaar": {
    name: "Emaar Properties",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    established: "1997",
    headquarters: "Dubai, UAE",
    projectsDelivered: 120,
    ongoingProjects: 45,
    trustScore: 98,
    description: "Emaar Properties is one of the world's most valuable and admired real estate development companies. Based in Dubai, UAE, Emaar has established itself as a leader in shaping landscapes and lifestyles. With a proven track record of delivering iconic projects, Emaar continues to set new standards in the industry.",
    highlights: [
      "Developer of Burj Khalifa, the world's tallest building",
      "Created Downtown Dubai, the city's premier lifestyle destination",
      "Listed on Dubai Financial Market",
      "Operations in 36 markets across the globe",
      "Pioneer of master-planned communities"
    ],
    currentProjects: [
      { id: "1", name: "Marina Vista", area: "Dubai Marina", price: "AED 2.1M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q4 2025" },
      { id: "2", name: "The Cove", area: "Dubai Creek Harbour", price: "AED 1.8M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q2 2026" },
      { id: "3", name: "Park Heights", area: "Dubai Hills", price: "AED 1.5M", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", handover: "Q1 2025" }
    ],
    completedProjects: [
      { name: "Burj Khalifa", area: "Downtown Dubai", year: "2010", units: 900 },
      { name: "The Address Downtown", area: "Downtown Dubai", year: "2008", units: 626 },
      { name: "Dubai Mall", area: "Downtown Dubai", year: "2008", units: 1200 },
      { name: "Emirates Hills", area: "Emirates Living", year: "2003", units: 600 }
    ],
    deliveryPerformance: { onTime: 96, quality: 98, customerSatisfaction: 94 }
  },
  "damac": {
    name: "DAMAC Properties",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    established: "2002",
    headquarters: "Dubai, UAE",
    projectsDelivered: 85,
    ongoingProjects: 32,
    trustScore: 92,
    description: "DAMAC Properties has been at the forefront of the Middle East's luxury real estate market since 2002. With a focus on delivering distinctive lifestyle communities, DAMAC has shaped skylines across the region and beyond.",
    highlights: [
      "Pioneer in branded residences with Versace, Fendi, and Cavalli",
      "Developer of DAMAC Hills and DAMAC Lagoons",
      "Listed on Dubai Financial Market",
      "Operations across MENA and beyond",
      "Award-winning luxury developments"
    ],
    currentProjects: [
      { id: "4", name: "Safa Two", area: "Business Bay", price: "AED 3.5M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q3 2025" },
      { id: "5", name: "Cavalli Tower", area: "Dubai Marina", price: "AED 2.8M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", handover: "Q4 2025" }
    ],
    completedProjects: [
      { name: "DAMAC Towers by Paramount", area: "Business Bay", year: "2018", units: 1400 },
      { name: "Aykon City", area: "Sheikh Zayed Road", year: "2020", units: 800 }
    ],
    deliveryPerformance: { onTime: 88, quality: 94, customerSatisfaction: 90 }
  },
  "sobha": {
    name: "Sobha Realty",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    established: "1976",
    headquarters: "Dubai, UAE",
    projectsDelivered: 50,
    ongoingProjects: 18,
    trustScore: 95,
    description: "Sobha Realty is a leading luxury real estate developer known for its backward integration model, ensuring complete control over quality from design to delivery. The company's commitment to excellence has made it a preferred choice for discerning buyers.",
    highlights: [
      "Backward integrated - controls entire supply chain",
      "Developer of Sobha Hartland",
      "Known for superior build quality",
      "Focus on premium and luxury segments",
      "Award-winning craftsmanship"
    ],
    currentProjects: [
      { id: "6", name: "One Park Avenue", area: "Sobha Hartland", price: "AED 2.2M", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", handover: "Q2 2025" }
    ],
    completedProjects: [
      { name: "Sobha Creek Vistas", area: "Sobha Hartland", year: "2021", units: 450 }
    ],
    deliveryPerformance: { onTime: 94, quality: 99, customerSatisfaction: 96 }
  }
};

// Default developer
const defaultDeveloper = developersData["emaar"];

export default function DeveloperDetail() {
  const { developerId } = useParams();
  const developer = developersData[developerId || ""] || defaultDeveloper;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Developer Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-start mb-12"
          >
            <div className="w-24 h-24 bg-cream rounded-2xl flex items-center justify-center overflow-hidden">
              <Building className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                  {developer.name}
                </h1>
                <Badge className="bg-green-100 text-green-700">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Listed
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Est. {developer.established}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {developer.headquarters}
                </span>
                <span className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  {developer.projectsDelivered} Projects Delivered
                </span>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                {developer.description}
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="bg-cream p-5 rounded-xl text-center">
                  <Building className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-semibold text-foreground">{developer.projectsDelivered}</p>
                  <p className="text-sm text-muted-foreground">Delivered</p>
                </div>
                <div className="bg-cream p-5 rounded-xl text-center">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-semibold text-foreground">{developer.ongoingProjects}</p>
                  <p className="text-sm text-muted-foreground">Ongoing</p>
                </div>
                <div className="bg-cream p-5 rounded-xl text-center">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-semibold text-foreground">{developer.trustScore}%</p>
                  <p className="text-sm text-muted-foreground">Trust Score</p>
                </div>
                <div className="bg-cream p-5 rounded-xl text-center">
                  <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-semibold text-foreground">{developer.deliveryPerformance.quality}%</p>
                  <p className="text-sm text-muted-foreground">Quality Rating</p>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Company Highlights
                </h2>
                <div className="grid gap-3">
                  {developer.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Delivery Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Delivery Performance
                </h2>
                <div className="bg-charcoal rounded-2xl p-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-background/80">On-Time Delivery</span>
                      <span className="text-background font-semibold">{developer.deliveryPerformance.onTime}%</span>
                    </div>
                    <div className="h-2 bg-background/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${developer.deliveryPerformance.onTime}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-background/80">Build Quality</span>
                      <span className="text-background font-semibold">{developer.deliveryPerformance.quality}%</span>
                    </div>
                    <div className="h-2 bg-background/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${developer.deliveryPerformance.quality}%` }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-background/80">Customer Satisfaction</span>
                      <span className="text-background font-semibold">{developer.deliveryPerformance.customerSatisfaction}%</span>
                    </div>
                    <div className="h-2 bg-background/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${developer.deliveryPerformance.customerSatisfaction}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Current Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-semibold text-foreground">
                    Current Off-Plan Projects
                  </h2>
                  <Button variant="ghost" asChild>
                    <Link to={`/projects?developer=${developerId}`}>
                      View All <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {developer.currentProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="group bg-cream rounded-xl overflow-hidden hover:shadow-luxury transition-all duration-300"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-primary font-medium">{project.area}</span>
                          <Badge variant="secondary" className="text-xs">{project.handover}</Badge>
                        </div>
                        <h3 className="font-display font-semibold text-foreground">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">From {project.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Completed Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Completed Projects
                </h2>
                <div className="space-y-3">
                  {developer.completedProjects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-cream rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.area}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{project.year}</p>
                        <p className="text-xs text-muted-foreground">{project.units} units</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-28 bg-cream rounded-2xl p-6 space-y-6"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Interested in {developer.name} projects? Contact us for exclusive deals.
                  </p>
                </div>

                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-background" />
                  <Input type="email" placeholder="Email Address" className="bg-background" />
                  <Input type="tel" placeholder="Phone Number" className="bg-background" />
                  <Textarea placeholder="Message (optional)" className="bg-background" rows={3} />
                  <Button variant="gold" className="w-full">
                    Send Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{developer.projectsDelivered}+ Happy Homeowners</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{developer.trustScore}% Trust Score</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
