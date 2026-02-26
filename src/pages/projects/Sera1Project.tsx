import { Helmet } from "react-helmet-async";
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
  Waves,
  Shield,
  Dumbbell,
  TreePine,
  Baby,
  Heart,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/HERO_1620X832_1-7.jpg";
const featureImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/FEATURES_1200X655_1-3.jpg";
const featureImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/FEATURES_1200X655_2-3.jpg";
const galleryImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_EXT_1-3-1024x740.jpg";
const galleryImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_EXT_2-3-1024x740.jpg";
const galleryImgThree = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_EXT_3-3-1024x740.jpg";
const galleryImgFour = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_1-3-1024x740.jpg";
const galleryImgFive = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_2-3-1024x740.jpg";
const galleryImgSix = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_3-3-1024x740.jpg";
const galleryImgSeven = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_4-1024x740.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: Waves, label: "Water Garden & Resort Poolscape" },
  { icon: Dumbbell, label: "Exclusive Gym Facilities" },
  { icon: Baby, label: "Vibrant Kids' Play Areas" },
  { icon: TreePine, label: "Lush Amenities Podium" },
  { icon: Users, label: "Versatile Multipurpose Rooms" },
  { icon: Building2, label: "Elegant Retail Outlets" },
  { icon: Heart, label: "Marina Promenade Lifestyle" },
  { icon: Shield, label: "24/7 Security" },
];

const Sera1Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Sera 1 at Rashid Yachts & Marina", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Sera 1 at Rashid Yachts & Marina by Emaar | 1-3BR Apartments & 3BR Townhouses</title>
        <meta
          name="description"
          content="Discover Sera 1 at Rashid Yachts & Marina by Emaar — an exclusive waterfront sanctuary with 1 to 3-bedroom apartments, 3-bedroom townhouses, and resort-inspired marina living."
        />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/emaar/sera-1" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Sera 1 at Rashid Yachts & Marina by Emaar"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Sera 1 at Rashid Yachts & Marina</h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Emaar Properties</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                An exclusive waterfront sanctuary where resort-inspired elegance meets vibrant marina life.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 2.1M</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartments & Townhouses</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR-3BR Apartments · 3BR Townhouses</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Rashid Yachts & Marina, Dubai</span>
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
                  <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Sera 1 at Rashid Yachts & Marina</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sera 1 at Rashid Yachts & Marina presents a refined new chapter of Emaar waterfront living,
                      curated as an exclusive residential sanctuary where every day carries the ease of a premium
                      retreat. The architecture combines nautical elegance with contemporary sophistication, expressed
                      through soft sand tones, reflective glass, and finely detailed accents that echo the calm rhythm
                      of the marina.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Homes are designed as serene private escapes, with warm material palettes, natural light, and
                      layouts that flow effortlessly from indoor comfort to outdoor views. From water gardens and
                      resort-style poolscapes to vibrant social and family amenities, the project frames leisure,
                      wellness, and convenience in one cohesive lifestyle environment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Set within Rashid Yachts & Marina, Sera 1 balances tranquility and energy through a marina
                      promenade lifestyle of waterfront cafes, curated retail, and iconic coastal vistas. For end users
                      and investors alike, it delivers a rare combination of elegant residences, destination living, and
                      long-term value in one of Dubai&apos;s most compelling seafront communities.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments & Townhouses" },
                      { label: "Bedrooms", value: "1BR - 3BR" },
                      { label: "Community", value: "Rashid Yachts & Marina" },
                      { label: "Starting Price", value: "AED 2.1M" },
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
                    <li>• New Emaar release in Rashid Yachts & Marina, Dubai.</li>
                    <li>• 1 to 3-bedroom apartments with a limited 3-bedroom townhouse option.</li>
                    <li>• Starting price from AED 2.1M.</li>
                    <li>• Officially positioned as an exclusive waterfront sanctuary.</li>
                    <li>• Resort-style living concept with water gardens and tranquil pools.</li>
                    <li>• Nautical-inspired architecture with contemporary sophistication.</li>
                    <li>• Elegant interiors with warm textures and marina-facing ambiance.</li>
                    <li>• Vibrant marina promenade lifestyle with cafes and boutique experiences.</li>
                    <li>• Access to iconic views of Burj Khalifa and the Arabian Sea.</li>
                    <li>• Located in a community with 400 wet berths and a floating yacht club.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Wellness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Water Garden</li>
                          <li>• Resort-style pool environments</li>
                          <li>• Exclusive Gym Facilities</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Family</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Vibrant Kids&apos; Play Areas</li>
                          <li>• Lush amenities podium for shared leisure</li>
                          <li>• Safe, integrated community environment</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Sports & Activity</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Gym and active lifestyle spaces</li>
                          <li>• Marina promenade walking routes</li>
                          <li>• Outdoor movement-focused zones</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Community</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Versatile Multipurpose Rooms</li>
                          <li>• Elegant Retail Outlets</li>
                          <li>• Marina social energy near home</li>
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

                <TabsContent value="lifestyle" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Community & Lifestyle</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sera 1 is crafted around marina living where serene private spaces and vibrant waterfront moments
                    coexist. Residents can transition from quiet mornings near water gardens to lively evenings along
                    the promenade, with curated dining, retail, and social experiences always within reach. It is a
                    lifestyle that combines the ease of a luxury retreat with the energy of a destination marina.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on official project location cues, Sera 1 offers convenient connectivity across key Dubai
                    destinations while maintaining a true waterfront setting.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Rashid Yachts & Marina Promenade", time: "Within Community" },
                      { place: "QE2 Hotel", time: "Nearby (official map cue)" },
                      { place: "Downtown Dubai", time: "Approx. 15-20 min" },
                      { place: "Dubai Mall", time: "Approx. 15-20 min" },
                      { place: "Dubai International Airport", time: "Approx. 20-25 min" },
                      { place: "Burj Khalifa / Arabian Sea Views", time: "Iconic Community Outlook" },
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
                    {[
                      galleryImgOne,
                      galleryImgTwo,
                      galleryImgThree,
                      galleryImgFour,
                      galleryImgFive,
                      galleryImgSix,
                      galleryImgSeven,
                    ].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Sera 1 gallery ${i + 1}`}
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
                    <p className="text-3xl font-bold text-foreground">AED 2,100,000</p>
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

export default Sera1Project;
