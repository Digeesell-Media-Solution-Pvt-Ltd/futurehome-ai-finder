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
  Dumbbell,
  Users,
  Shield,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "/projects/azizi/azizi-david/hero.jpg";
const galleryImgOne = "/projects/azizi/azizi-david/gallery-1.jpg";
const galleryImgTwo = "/projects/azizi/azizi-david/gallery-2.jpg";
const galleryImgThree = "/projects/azizi/azizi-david/gallery-3.jpg";
const galleryImgFour = "/projects/azizi/azizi-david/gallery-4.jpg";

const images = [heroImg, galleryImgOne, galleryImgTwo, galleryImgThree];

const amenities = [
  { icon: Waves, label: "Infinity Pool & Sun Deck" },
  { icon: Dumbbell, label: "State-of-the-Art Gym" },
  { icon: Users, label: "Private Cinema & Lounge Spaces" },
  { icon: Building2, label: "Retail & Café Promenade" },
  { icon: Shield, label: "24/7 Security & Concierge" },
];

const AziziDavidProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Azizi David", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Azizi David at Al Jaddaf, Dubai | Studios, 1 & 2BR Apartments</title>
        <meta
          name="description"
          content="Azizi David offers waterfront-inspired living in Al Jaddaf, Dubai with studios, 1 and 2-bedroom apartments and luxury penthouses, a resort-style pool, gym and retail promenade."
        />
        <link rel="canonical" href="https://off-plan-projects.com/projects/azizi/azizi-david" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Azizi David at Al Jaddaf, Dubai"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Azizi David</h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Azizi Developments</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Waterfront-inspired residences in Al Jaddaf with modern apartments, luxury penthouses and resort-style amenities.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 764,000</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartments & Penthouses</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Studios, 1 & 2BR</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Al Jaddaf, Dubai</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover Q4 2027</span>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Azizi David</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Azizi David is a contemporary residential tower by Azizi Developments, positioned along the Al Jaddaf
                      waterfront within the wider Dubai Creek and Culture Village corridor. Official project messaging
                      emphasises a lifestyle that blends stylish city living with calm creek-facing vistas, tailored both for
                      end users seeking central connectivity and investors targeting long-term appreciation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The development features a curated mix of studios, 1 and 2-bedroom apartments and a limited collection of
                      luxury penthouses. Interiors focus on clean lines, generous glazing and light neutral palettes, creating
                      bright, efficient layouts that frame water, skyline and community views while maximising usable space.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond the homes themselves, Azizi David is anchored by resort-style leisure decks, a modern gym, cinema
                      experiences and a retail promenade at podium level. With handover targeted for Q4 2027 and starting
                      prices from AED 764,000, it offers an accessible entry point into a well-connected waterfront district
                      with strong rental and capital-growth fundamentals.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments & Penthouses" },
                      { label: "Bedrooms", value: "Studios, 1 & 2BR" },
                      { label: "Community", value: "Al Jaddaf / Dubai Creek" },
                      { label: "Starting Price", value: "AED 764,000" },
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
                    <li>• Waterfront-inspired residential tower by Azizi Developments in Al Jaddaf.</li>
                    <li>• Studios, 1 and 2-bedroom apartments with curated layouts and modern finishes.</li>
                    <li>• Limited number of premium penthouses for elevated creek and skyline views.</li>
                    <li>• Resort-style podium with infinity pool, landscaped deck and leisure pockets.</li>
                    <li>• Contemporary fitness centre, cinema-style experiences and social lounges.</li>
                    <li>• Ground-level retail and café frontage activating the streetscape.</li>
                    <li>• Strong access to Downtown Dubai, Business Bay and wider city via key roads.</li>
                    <li>• Attractive entry price from AED 764,000 with Q4 2027 handover timeline.</li>
                    <li>• Designed for both investors and end users seeking central, well-connected living.</li>
                    <li>• Part of a maturing creekside urban district with long-term growth potential.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Leisure & Wellness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Infinity-style swimming pool</li>
                          <li>• Sun decks and lounging cabanas</li>
                          <li>• Modern indoor gym</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Community & Convenience</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Private cinema and multi-purpose spaces</li>
                          <li>• Retail and cafés at podium level</li>
                          <li>• Dedicated parking and 24/7 security</li>
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
                    Azizi David is positioned in the Al Jaddaf area near Dubai Creek, offering quick access to core business
                    and lifestyle districts while retaining a more tranquil waterfront setting.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Al Jaddaf Waterfront / Culture Village", time: "Within Community" },
                      { place: "Dubai Creek & promenade", time: "Nearby" },
                      { place: "Downtown Dubai & Dubai Mall", time: "Approx. 10–15 min" },
                      { place: "Business Bay", time: "Approx. 10–15 min" },
                      { place: "Major Roads (Al Khail / SZR)", time: "Quick Connectivity" },
                      { place: "Dubai International Airport", time: "Approx. 15–20 min" },
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
                    {[galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Azizi David gallery ${i + 1}`}
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
                    <p className="text-3xl font-bold text-foreground">AED 764,000</p>
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
                    <p className="text-sm text-muted-foreground">70/30 payment structure – details available on request.</p>
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

export default AziziDavidProject;

