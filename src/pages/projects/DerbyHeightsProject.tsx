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
  Dumbbell,
  Users,
  Shield,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "/projects/amis/derby-heights/img-1.webp";
const galleryImgOne = "/projects/amis/derby-heights/img-2.webp";
const galleryImgTwo = "/projects/amis/derby-heights/img-3.webp";
const galleryImgThree = "/projects/amis/derby-heights/img-4.webp";

const images = [heroImg, galleryImgOne, galleryImgTwo, galleryImgThree];

const amenities = [
  { icon: Dumbbell, label: "Premium Fitness Facilities" },
  { icon: Users, label: "Cinema & Social Lounges" },
  { icon: Building2, label: "Elegantly Designed Lobby" },
  { icon: Shield, label: "24/7 Security & Concierge" },
];

const DerbyHeightsProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Derby Heights", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Derby Heights by AMIS in Dubai South | Contemporary Apartments</title>
        <meta
          name="description"
          content="Derby Heights by AMIS in Dubai South offers contemporary apartments with refined interiors, lifestyle amenities and strong investment credentials in a fast-growing district."
        />
        <link rel="canonical" href="https://off-plan-projects.com/projects/amis/derby-heights" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Derby Heights by AMIS in Dubai South"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Off-plan</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Derby Heights</h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by AMIS Development</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                A contemporary residential address in Dubai South with lifestyle-led amenities and thoughtfully designed homes.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> Price on request</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartments</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Unit mix to be announced</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Dubai South, Dubai</span>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Derby Heights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Derby Heights by AMIS is introduced as a modern residential development in Dubai South, designed with
                      open-plan layouts, contemporary architecture and a focus on liveable interior volumes. Official
                      positioning highlights a project that balances aspirational design with accessible, investor-friendly
                      product in one of Dubai&apos;s rapidly evolving growth corridors.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Marketing narratives underline bright, refined apartments with generous glazing, clean finishes and
                      lifestyle-centric amenities. The building&apos;s common areas and lobby spaces are crafted to offer a
                      boutique feel, while amenity decks and shared zones encourage community interaction, wellness and
                      everyday convenience for residents.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Strategically located in Dubai South, Derby Heights is set to benefit from large-scale infrastructure,
                      employment clusters and long-term master-plan momentum. For both end-users and investors, it represents a
                      way to access a maturing district with improving connectivity and sustained demand for quality
                      apartments near key logistics and aviation hubs.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments" },
                      { label: "Bedrooms", value: "To be announced" },
                      { label: "Community", value: "Dubai South" },
                      { label: "Starting Price", value: "On request" },
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
                    <li>• Contemporary residential project by AMIS Development in Dubai South.</li>
                    <li>• Apartments designed with open-plan layouts and modern interior finishes.</li>
                    <li>• Lifestyle-driven building with amenity spaces for wellness and socialising.</li>
                    <li>• Positioned within a fast-growing master community near key transport and logistics hubs.</li>
                    <li>• Boutique lobby and common areas enhancing arrival experience and sense of address.</li>
                    <li>• Amenity mix including fitness, cinema and resident-focused communal zones.</li>
                    <li>• Strong long-term potential as Dubai South continues to mature and densify.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Wellness & Fitness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Modern fitness facilities</li>
                          <li>• Space for active daily routines</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Lifestyle & Social</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Cinema-style experiences</li>
                          <li>• Resident lounges and gathering spaces</li>
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
                    Located in Dubai South, Derby Heights connects residents to one of Dubai&apos;s most strategically planned
                    districts, close to aviation, logistics and new lifestyle infrastructure.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Dubai South Master Community", time: "Within Community" },
                      { place: "Key Employment & Logistics Hubs", time: "Nearby" },
                      { place: "Dubai South Parks & Community Spaces", time: "Within District" },
                      { place: "Dubai Marina / JLT / Jebel Ali", time: "Approx. drive via major roads" },
                      { place: "Expo / surrounding growth corridor", time: "Regional Access" },
                      { place: "Dubai Citywide Destinations", time: "Connected via main highways" },
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
                    {[heroImg, galleryImgOne, galleryImgTwo, galleryImgThree].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Derby Heights gallery ${i + 1}`}
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
                    <p className="text-3xl font-bold text-foreground">Price on request</p>
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
                    <p className="text-sm text-muted-foreground">Details available on request from the official sales team.</p>
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

export default DerbyHeightsProject;

