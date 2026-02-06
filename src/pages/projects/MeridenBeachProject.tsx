import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  MapPin,
  Calendar,
  TrendingUp,
  Download,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
  Waves,
  Dumbbell,
  TreePine,
  Sun,
  Sparkles,
  Palmtree,
  Compass,
  Shell,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from "@/assets/projects/meriden-beach-hero.jpg";
import interiorImage from "@/assets/projects/meriden-beach-interior.jpg";
import poolImage from "@/assets/projects/meriden-beach-pool.jpg";
import beachImage from "@/assets/projects/meriden-beach-beach.jpg";

const projectHighlights = [
  { icon: Waves, label: "Beachfront Living" },
  { icon: Shell, label: "63 Boutique Units" },
  { icon: Compass, label: "Dubai Islands" },
  { icon: Sun, label: "European Craftsmanship" },
];

const amenities = [
  { icon: Waves, name: "Infinity Pool", description: "Rooftop infinity pool with panoramic sea views" },
  { icon: Dumbbell, name: "Fitness Centre", description: "State-of-the-art gym and wellness studio" },
  { icon: Sparkles, name: "Yoga & Meditation", description: "Dedicated terrace for mindfulness and wellness" },
  { icon: TreePine, name: "Landscaped Gardens", description: "Lush tropical gardens and outdoor lounges" },
  { icon: Shell, name: "Private Beach Access", description: "Direct access to pristine island beach" },
  { icon: Sun, name: "Rooftop Terrace", description: "Social rooftop with lounge seating and views" },
];

const galleryImages = [
  { src: heroImage, alt: "Meriden Beach Residences Exterior" },
  { src: interiorImage, alt: "Premium Interior with Sea Views" },
  { src: poolImage, alt: "Infinity Pool & Resort Amenities" },
  { src: beachImage, alt: "Private Beach & Waterfront Promenade" },
];

const MeridenBeachProject = () => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Meriden Beach Residences | Beachfront Apartments Dubai Islands</title>
        <meta
          name="description"
          content="Experience spacious beachfront apartments at Meriden Beach Residences by Green Horizon on Dubai Islands. 1-3 BR from AED 1.8M, Q1 2028 handover."
        />
        <meta
          name="description"
          content="Experience spacious beachfront apartments at Meriden Beach Residences by Green Horizon on Dubai Islands. 1-3 BR from AED 1.8M, Q1 2028 handover."
        />
        <meta name="keywords" content="Meriden Beach Residences, Green Horizon, Dubai Islands, beachfront apartments, off-plan Dubai, waterfront living" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Beachfront</Badge>
                  <Badge className="bg-primary text-primary-foreground">Off-Plan</Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                  Meriden Beach Residences
                </h1>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                  by Green Horizon • Dubai Islands, Dubai
                </p>

                <div className="flex flex-wrap gap-4">
                  {projectHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <highlight.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{highlight.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-card border-y border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Unit Types</p>
                  <p className="font-semibold">1-3 BR Apartments</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Dubai Islands</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting Price</p>
                  <p className="font-semibold">AED 1.8M</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Handover</p>
                  <p className="font-semibold">Q1 2028</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full justify-start mb-8 bg-muted/50">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Timeless Island Living</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Meriden Beach Residences is a boutique coastal residential project by Green Horizon
                        located on Dubai Islands. This low-rise beachfront development offers 63 premium
                        bespoke apartments — 1, 2, and 3 bedroom residences — designed for tranquil seaside
                        living with resort-inspired amenities and direct beach access.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        European craftsmanship meets the Dubai Island spirit in this luxury residence.
                        Every detail is curated to deliver an elevated coastal lifestyle, from Italian
                        porcelain floors to panoramic sea-facing balconies.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">Boutique Exclusivity</h3>
                        <p className="text-sm text-muted-foreground">
                          With only 63 residences, Meriden Beach offers an intimate community where
                          privacy and personalised living come standard. Every unit enjoys generous
                          layouts and unobstructed views.
                        </p>
                      </div>
                      <div className="bg-muted/30 p-6 rounded-xl">
                        <h3 className="font-semibold mb-4">35/65 Payment Plan</h3>
                        <p className="text-sm text-muted-foreground">
                          An attractive 35/65 payment structure makes this beachfront investment
                          accessible — pay 35% during construction and 65% on handover, designed
                          for smart investors.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Investment Potential
                      </h3>
                      <p className="text-muted-foreground">
                        A boutique project with limited inventory of just 63 units on Dubai Islands
                        offers high rental and capital appreciation potential. The waterfront location
                        and rapid growth of the Dubai Islands market make this an exceptional opportunity
                        for discerning investors.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Premium Features</h2>
                      <div className="grid gap-4">
                        {[
                          "Modern low-rise beachfront architecture",
                          "1, 2 & 3 bedroom bespoke apartments",
                          "Italian porcelain floors throughout",
                          "Premium European finishes and fixtures",
                          "Smart home features and automation",
                          "Spacious open layouts with sea-facing views",
                          "Floor-to-ceiling glazing for natural light",
                          "Private balconies with panoramic ocean vistas",
                        ].map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Unit Types</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["1 Bedroom", "2 Bedroom", "3 Bedroom"].map((type) => (
                          <div key={type} className="bg-muted/30 p-4 rounded-lg text-center">
                            <p className="font-medium">{type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Resort-Style Amenities</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {amenities.map((amenity, index) => (
                          <div key={index} className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <amenity.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">{amenity.name}</h3>
                              <p className="text-sm text-muted-foreground">{amenity.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                      <h3 className="text-xl font-semibold mb-4">Location & Connectivity</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Dubai Islands – Island A
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Direct beach access
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Minutes to Deira Corniche
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Near Dubai International Airport
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Palm Deira Bridge access
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          Waterfront promenade walkways
                        </li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="space-y-8">
                    <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                    <Carousel className="w-full">
                      <CarouselContent>
                        {galleryImages.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video rounded-xl overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center text-muted-foreground mt-4">{image.alt}</p>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Sidebar - CTAs */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Waves className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Beachfront Living</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Meriden Beach Residences</h3>
                    <p className="text-2xl font-bold text-primary mb-4">From AED 1.8M</p>
                    <p className="text-muted-foreground mb-6">
                      Boutique 1-3 BR beachfront apartments on Dubai Islands • Q1 2028
                    </p>

                    <div className="space-y-4">
                      <Button asChild className="w-full gap-2" size="lg">
                        <a href="https://ghorizon.ae/en/meriden-beach-residences#register" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          Download Floor Plan
                        </a>
                      </Button>

                      <Button asChild variant="outline" className="w-full gap-2" size="lg">
                        <a href="https://ghorizon.ae/en/meriden-beach-residences#register" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          Download Price Plan
                        </a>
                      </Button>

                      <Button asChild variant="secondary" className="w-full gap-2" size="lg">
                        <a href="tel:+971505550123">
                          <Phone className="w-4 h-4" />
                          Contact Advisor
                        </a>
                      </Button>

                      <Button asChild variant="outline" className="w-full gap-2 border-accent text-accent-foreground hover:bg-accent/10" size="lg">
                        <a
                          href="https://wa.me/971505550123?text=Hi,%20I'm%20interested%20in%20Meriden%20Beach%20Residences%20on%20Dubai%20Islands"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp Inquiry
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4">Developer</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Green Horizon</p>
                        <p className="text-sm text-muted-foreground">Dubai Islands Developer</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-2xl p-6">
                    <h4 className="font-semibold mb-4">Key Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Units</span>
                        <span className="font-medium">63</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Payment Plan</span>
                        <span className="font-medium">35/65</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completion</span>
                        <span className="font-medium">Q1 2028</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span className="font-medium">Low-Rise</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default MeridenBeachProject;
