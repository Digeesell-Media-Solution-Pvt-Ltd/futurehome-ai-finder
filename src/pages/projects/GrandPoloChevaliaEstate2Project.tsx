import { SeoHead } from "@/components/seo/SeoHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { useState } from "react";
import {
  Building2,
  MapPin,
  Calendar,
  Banknote,
  BedDouble,
  Download,
  FileText,
  Phone,
  Star,
  TreePine,
  Shield,
  Dumbbell,
  Waves,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/HERO_1620X832_1.jpg";
const featureImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/FEATURES_1200X655_4.jpg";
const featureImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/FEATURES_1200X655_3.jpg";
const galleryImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/PRO_EXT_1-1024x740.jpg";
const galleryImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/PRO_EXT_2-1024x740.jpg";
const galleryImgThree = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/PRO_EXT_3-1024x740.jpg";
const galleryImgFour = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/PRO_INT_1-1024x740.jpg";
const galleryImgFive = "https://cdn.properties.emaar.com/wp-content/uploads/2025/09/PRO_INT_2-1024x740.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: TreePine, label: "The Polo Fields" },
  { icon: Users, label: "The Clubhouse" },
  { icon: Building2, label: "The Stables" },
  { icon: Waves, label: "Linear Parks" },
  { icon: Building2, label: "Community Centre" },
  { icon: Dumbbell, label: "Equestrian-Focused Activity Zones" },
  { icon: MapPin, label: "Green Core Landscape Loop" },
  { icon: Shield, label: "24/7 Security" },
];

const GrandPoloChevaliaEstate2Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Grand Polo - Chevalia Estate 2", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <SeoHead
        title="Grand Polo - Chevalia Estate 2 by Emaar | 4 & 5 Bedroom Luxury Villas"
        description="Discover Grand Polo - Chevalia Estate 2 by Emaar at Grand Polo Club & Resort — a premium community of 4 and 5-bedroom luxury villas inspired by equestrian heritage."
        canonicalPath="/projects/emaar/grand-polo-chevalia-estate-2"
      />


      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Grand Polo - Chevalia Estate 2 by Emaar"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Grand Polo - Chevalia Estate 2</h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Emaar Properties</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Grandeur estate living inspired by equestrian legacy and refined park-side luxury.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> Starting Price AED 7.8M</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Luxury Villas</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 4BR & 5BR</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Grand Polo Club & Resort, Dubai</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover TBD</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`View ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Grand Polo - Chevalia Estate 2</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Grand Polo - Chevalia Estate 2 by Emaar introduces an estate-led villa address shaped by
                      equestrian heritage, architectural poise, and landscape-driven serenity. Official project
                      narratives describe a grand arrival framed by lush greenery and a refined enclave of luxury villas
                      anchored by the Stables, Clubhouse, polo fields, and riding arenas.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At the heart of the community lies the Green Core, an expansive sequence of sculpted lawns and
                      curated pathways where nature, sport, and daily leisure come together. The planning language is
                      intentionally elegant yet immersive, creating a setting designed for calm reflection, active
                      living, and social connection.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Chevalia Estate 2 offers 4 and 5-bedroom luxury villas with interiors envisioned in polished
                      finishes, soft tones, and textured materials that balance contemporary comfort with timeless
                      prestige. For end users, it delivers a lifestyle of privacy and open green horizons; for
                      long-horizon investors, it represents a premium landed proposition in a destination community
                      built around identity, leisure, and long-term value.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Luxury Villas" },
                      { label: "Bedrooms", value: "4BR & 5BR" },
                      { label: "Community", value: "Grand Polo Club & Resort" },
                      { label: "Starting Price", value: "AED 7.8M" },
                    ].map((item) => (
                      <Card key={item.label} className="bg-muted/30">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground mt-1">{item.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Key Highlights</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Emaar luxury villa release within Grand Polo Club & Resort.</li>
                    <li>• Officially defined as a 4 & 5-bedroom luxury villa community.</li>
                    <li>• Starting Price from AED 7.8M.</li>
                    <li>• Equestrian heritage concept with stables and riding arenas.</li>
                    <li>• The Green Core with manicured lawns and connected park pathways.</li>
                    <li>• Signature clubhouse and polo field experiences at the community core.</li>
                    <li>• Architecture inspired by estate grandeur and natural landscape flow.</li>
                    <li>• Curated interiors with polished finishes and refined material palette.</li>
                    <li>• Linear parks and wellness-led open spaces for daily leisure.</li>
                    <li>• Positioned for premium end-user living and long-term investment value.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Equestrian & Sport</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• The Polo Fields</li>
                          <li>• The Stables</li>
                          <li>• Riding and arena environments</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Lifestyle & Wellness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Linear Parks</li>
                          <li>• Green Core landscape loop</li>
                          <li>• Open-air leisure and reflection spaces</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Family & Community</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Community Centre</li>
                          <li>• Shared social spaces</li>
                          <li>• Club-led community experiences</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Signature Access</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• The Clubhouse</li>
                          <li>• Estate-scale landscaped entries</li>
                          <li>• High-privacy premium villa environment</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenities.map(({ icon: Icon, label }) => (
                      <Card key={label} className="bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{label}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Official location cues position Chevalia Estate 2 inside Grand Polo Club & Resort with strong
                    masterplan connectivity to equestrian, leisure, and community anchors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Grand Polo Club & Resort Core", time: "Within Community" },
                      { place: "The Green Core", time: "Within Community" },
                      { place: "The Stables & Polo Fields", time: "Within Community" },
                      { place: "The Clubhouse", time: "Within Community" },
                      { place: "Linear Parks", time: "Integrated Park Network" },
                      { place: "Dubai (City Access)", time: "Connected via Major Road Networks" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour, galleryImgFive].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Chevalia Estate 2 gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">AED 7,800,000</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Enquire Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Brochure")}>
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plan
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Payment Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Payment Plan
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Consultation")}>
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">Available on request</p>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                    <p>This platform is a marketing and discovery portal only. It is not a licensed brokerage. All inquiries are forwarded to the official developer sales team or their authorized channel partners.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default GrandPoloChevaliaEstate2Project;
