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
  Waves,
  Shield,
  Dumbbell,
  TreePine,
  Baby,
  Heart,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/HERO_1620X832_1-8.jpg";
const featureImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/FEATURES_1200X655_4.jpg";
const featureImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/FEATURES_1200X655_5.jpg";
const galleryImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_EXT_1-4-1024x740.jpg";
const galleryImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_EXT_2-4-1024x740.jpg";
const galleryImgThree = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_EXT_3-4-1024x740.jpg";
const galleryImgFour = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_1-4-1024x740.jpg";
const galleryImgFive = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_2-4-1024x740.jpg";
const galleryImgSix = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_3-4-1024x740.jpg";
const galleryImgSeven = "https://cdn.properties.emaar.com/wp-content/uploads/2025/08/PRO_INT_4-1-1024x740.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: Waves, label: "Water Garden & Leisure Pools" },
  { icon: Dumbbell, label: "Exclusive Gym Facilities" },
  { icon: Baby, label: "Vibrant Kids' Play Areas" },
  { icon: TreePine, label: "Expansive Amenities Podium" },
  { icon: Users, label: "Versatile Multipurpose Rooms" },
  { icon: Building2, label: "Elegant Retail Outlets" },
  { icon: Heart, label: "Yoga, Padel & Outdoor Fitness" },
  { icon: Shield, label: "24/7 Security" },
];

const Sera2Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Sera 2 at Rashid Yachts & Marina", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <SeoHead
        title="Sera 2 at Rashid Yachts & Marina by Emaar | 1-3BR Luxury Apartments & 3BR Townhouses"
        description="Discover Sera 2 at Rashid Yachts & Marina by Emaar — a resort-themed residential escape with 1 to 3-bedroom luxury apartments, 3-bedroom townhouses, and vibrant marina-side living."
        canonicalPath="/projects/emaar/sera-2"
      />


      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Sera 2 at Rashid Yachts & Marina by Emaar"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Sera 2 at Rashid Yachts & Marina</h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Emaar Properties</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                A resort-themed residential escape where tranquil luxury meets vibrant waterfront energy.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 2.1M</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Luxury Apartments & Townhouses</span>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Sera 2 at Rashid Yachts & Marina</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sera 2 at Rashid Yachts & Marina is crafted as a luxurious resort-style retreat where each day is
                      shaped by calm waterfront moments and elevated design. Official project messaging highlights a
                      lifestyle framed by shimmering waters, serene pools, and sunlit promenades that bring together
                      sophistication, relaxation, and vibrant marina-side living.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The architecture blends coastal elegance with modern refinement through soft sandy hues,
                      glistening glass, and champagne-toned accents. Interiors continue this serene expression with warm
                      textures, natural palettes, and sunlit spaces that feel open, tranquil, and intimately connected
                      to the marina surroundings.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond private residences, Sera 2 presents a dynamic outdoor playground with wellness and social
                      experiences including fitness zones, leisure spaces, and curated promenades near retail and cafes.
                      For homeowners and investors, it offers a strong waterfront proposition in one of Dubai&apos;s most
                      compelling seafront communities, balancing premium lifestyle appeal with long-term market demand.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Luxury Apartments & Townhouses" },
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
                    <li>• 1 to 3-bedroom luxury apartments plus 3-bedroom townhouses.</li>
                    <li>• Starting price from AED 2.1M.</li>
                    <li>• Officially positioned as a resort-themed residential escape.</li>
                    <li>• Azure pools, water gardens, and marina promenades shape daily living.</li>
                    <li>• Dedicated wellness and activity offerings including yoga platform and paddle court.</li>
                    <li>• Outdoor gym and leisure zones for active, resort-inspired routines.</li>
                    <li>• Contemporary coastal architecture with premium material detailing.</li>
                    <li>• Elegant interiors with natural tones and warm, refined textures.</li>
                    <li>• Access to vibrant promenade retail, cafes, and social experiences.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Wellness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Water Garden and serene pool environments</li>
                          <li>• Yoga platform and relaxation zones</li>
                          <li>• Exclusive Gym Facilities</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Family</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Vibrant Kids&apos; Play Areas</li>
                          <li>• Lush podium leisure spaces</li>
                          <li>• Socially connected, family-friendly setting</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Sports & Activity</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Paddle court and outdoor fitness options</li>
                          <li>• Outdoor gym and movement-focused zones</li>
                          <li>• Promenade-led active lifestyle</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Community</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Versatile Multipurpose Rooms</li>
                          <li>• Elegant Retail Outlets</li>
                          <li>• Marina-side cafes and boutique experiences</li>
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
                    Sera 2 delivers a marina-first lifestyle where calm waterside retreat and vibrant urban energy
                    coexist. From peaceful mornings in landscaped leisure spaces to evenings on the waterfront
                    promenade, the community experience is defined by curated dining, social destinations, and iconic
                    skyline-sea views.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on official Sera 2 location cues, the project enjoys strong access to key Dubai landmarks
                    while preserving premium waterfront privacy.
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
                          alt={`Sera 2 gallery ${i + 1}`}
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

export default Sera2Project;
