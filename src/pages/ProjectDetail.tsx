import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, Building, Calendar, Ruler, BedDouble, Bath, 
  Car, ArrowRight, Download, CheckCircle, Sparkles, Heart,
  Phone, MessageCircle, Shield, TrendingUp, ChevronLeft, ChevronRight
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projectsData: Record<string, {
  name: string;
  developer: string;
  area: string;
  price: string;
  roi: string;
  handover: string;
  bedrooms: string;
  size: string;
  bathrooms: string;
  parking: string;
  description: string;
  images: string[];
  amenities: string[];
  paymentPlan: { stage: string; percentage: string }[];
  tags: string[];
  aiInsight: string;
}> = {
  "1": {
    name: "Marina Vista",
    developer: "Emaar Properties",
    area: "Dubai Marina",
    price: "AED 2,100,000",
    roi: "8.5%",
    handover: "Q4 2025",
    bedrooms: "1-3",
    size: "750 - 2,200 sq.ft",
    bathrooms: "1-4",
    parking: "1-2",
    description: "Marina Vista redefines waterfront living with its stunning architecture and unparalleled views of Dubai Marina. This premium development by Emaar offers thoughtfully designed residences that blend modern luxury with functional living spaces. Each unit features floor-to-ceiling windows, premium finishes, and smart home technology.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80"
    ],
    amenities: [
      "Infinity Pool", "State-of-the-art Gym", "Children's Play Area", "24/7 Concierge",
      "Private Beach Access", "Spa & Wellness Center", "BBQ Areas", "Landscaped Gardens",
      "Retail Outlets", "Valet Parking", "Smart Home Features", "Marina Promenade Access"
    ],
    paymentPlan: [
      { stage: "Booking", percentage: "10%" },
      { stage: "During Construction", percentage: "50%" },
      { stage: "On Handover", percentage: "40%" }
    ],
    tags: ["Investor Pick", "10% Down", "Waterfront"],
    aiInsight: "Ideal for investors seeking strong rental yields in a prime waterfront location. The Dubai Marina area consistently shows 8%+ ROI, and Emaar's track record ensures timely delivery and quality construction."
  },
  "2": {
    name: "The Cove",
    developer: "Emaar Properties",
    area: "Dubai Creek Harbour",
    price: "AED 1,800,000",
    roi: "7.8%",
    handover: "Q2 2026",
    bedrooms: "1-4",
    size: "650 - 2,500 sq.ft",
    bathrooms: "1-5",
    parking: "1-2",
    description: "The Cove offers a unique island living experience at Dubai Creek Harbour. Surrounded by water on three sides, residents enjoy panoramic views of the creek, wildlife sanctuary, and the upcoming Dubai Creek Tower.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
    ],
    amenities: [
      "Private Beach", "Kayaking", "Jogging Tracks", "Yoga Lawn",
      "Kids Pool", "Outdoor Cinema", "Co-working Space", "Pet Park"
    ],
    paymentPlan: [
      { stage: "Booking", percentage: "10%" },
      { stage: "During Construction", percentage: "60%" },
      { stage: "On Handover", percentage: "30%" }
    ],
    tags: ["New Launch", "Creek Views", "Family-Friendly"],
    aiInsight: "Perfect for families seeking a serene waterfront lifestyle with excellent appreciation potential. Dubai Creek Harbour is one of Dubai's fastest-growing communities with strong capital gains."
  }
};

// Default project for any ID not found
const defaultProject = projectsData["1"];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId || ""] || defaultProject;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Image Gallery */}
        <section className="relative h-[70vh] min-h-[500px]">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={project.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-background" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-background" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-primary w-6" : "bg-background/50"
                }`}
              />
            ))}
          </div>

          {/* Save Button */}
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="absolute top-6 right-6 w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background/40 transition-colors"
          >
            <Heart className={`w-6 h-6 ${isSaved ? "fill-red-500 text-red-500" : "text-background"}`} />
          </button>
        </section>

        {/* Project Info */}
        <section className="py-12 bg-background">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-2">
                    {project.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {project.developer}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Handover: {project.handover}
                    </span>
                  </div>
                </motion.div>

                {/* Price & Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  <div className="bg-cream p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Starting Price</p>
                    <p className="text-xl font-display font-semibold text-foreground">{project.price}</p>
                  </div>
                  <div className="bg-cream p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Est. ROI</p>
                    <p className="text-xl font-display font-semibold text-primary">{project.roi}</p>
                  </div>
                  <div className="bg-cream p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Bedrooms</p>
                    <p className="text-xl font-display font-semibold text-foreground">{project.bedrooms}</p>
                  </div>
                  <div className="bg-cream p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Size</p>
                    <p className="text-xl font-display font-semibold text-foreground">{project.size}</p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                    About This Project
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Specifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                    Specifications
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-xl">
                      <BedDouble className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Bedrooms</p>
                        <p className="font-medium text-foreground">{project.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-xl">
                      <Bath className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Bathrooms</p>
                        <p className="font-medium text-foreground">{project.bathrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-xl">
                      <Ruler className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Size</p>
                        <p className="font-medium text-foreground">{project.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-xl">
                      <Car className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Parking</p>
                        <p className="font-medium text-foreground">{project.parking}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                    Amenities & Features
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Payment Plan */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                    Payment Plan
                  </h2>
                  <div className="bg-cream rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      {project.paymentPlan.map((item, index) => (
                        <div key={index} className="flex-1 text-center relative">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg font-semibold text-foreground">{item.percentage}</span>
                          </div>
                          <p className="text-sm font-medium text-foreground">{item.stage}</p>
                          {index < project.paymentPlan.length - 1 && (
                            <div className="absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* AI Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-br from-charcoal to-charcoal/90 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-background">AI Investment Insight</h3>
                  </div>
                  <p className="text-background/80 leading-relaxed">
                    {project.aiInsight}
                  </p>
                </motion.div>

                {/* Downloads */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                    Downloads
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="gold-outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Brochure
                    </Button>
                    <Button variant="gold-outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Floor Plans
                    </Button>
                    <Button variant="gold-outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Payment Plan
                    </Button>
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
                      Interested in this property?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get expert advice and exclusive offers
                    </p>
                  </div>

                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="bg-background" />
                    <Input type="email" placeholder="Email Address" className="bg-background" />
                    <Input type="tel" placeholder="Phone Number" className="bg-background" />
                    <Textarea placeholder="Message (optional)" className="bg-background" rows={3} />
                    <Button variant="gold" className="w-full">
                      Request Information
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>

                  <div className="flex gap-3">
                    <Button variant="gold-outline" className="flex-1" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="gold-outline" className="flex-1" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>DLD Approved Project</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>Verified Developer</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Projects CTA */}
        <section className="py-12 bg-cream">
          <div className="container-luxury text-center">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Explore Similar Projects
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover more off-plan opportunities in {project.area}
            </p>
            <Button variant="gold" asChild>
              <Link to={`/projects?area=${project.area.toLowerCase().replace(' ', '-')}`}>
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
