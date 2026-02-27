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
  Waves,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "/projects/prestige-one/prestige-one-residences/img-1.webp";
const galleryImgOne = "/projects/prestige-one/prestige-one-residences/img-2.webp";
const galleryImgTwo = "/projects/prestige-one/prestige-one-residences/img-3.webp";
const galleryImgThree = "/projects/prestige-one/prestige-one-residences/img-4.webp";
const galleryImgFour = "/projects/prestige-one/prestige-one-residences/img-5.webp";

const images = [heroImg, galleryImgOne, galleryImgTwo, galleryImgThree];

const amenities = [
  { icon: Waves, label: "Elevated Pool Deck" },
  { icon: Dumbbell, label: "Hilton-Standard Fitness Facilities" },
  { icon: Users, label: "Social Lounges & Cinema Lawn" },
  { icon: Building2, label: "Branded Lobby & Concierge" },
  { icon: Shield, label: "24/7 Security & Valet" },
];

const PrestigeOneResidencesProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Prestige One Residences (Hilton Residences Dubai Maritime City)", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Prestige One Residences – Hilton Residences Dubai Maritime City</title>
        <meta
          name="description"
          content="Prestige One Residences – Hilton Residences Dubai Maritime City offers branded waterfront apartments with Hilton-inspired amenities and curated lifestyle spaces in Dubai Maritime City."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/prestige-one/prestige-one-residences"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Prestige One Residences – Hilton Residences Dubai Maritime City"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Off-plan</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display">
                Prestige One Residences
              </h1>
              <p className="text-white/80 text-sm md:text-base mb-1">
                Hilton Residences Dubai Maritime City by Prestige One Developments
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                Branded waterfront apartments with Hilton-inspired hospitality, marina views and curated lifestyle amenities.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" /> Price on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> Branded Apartments
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> Unit mix to be announced
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Dubai Maritime City, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Handover TBD
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero thumbnails */}
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
                  alt={`Prestige One Residences view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                {/* Overview */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      About Prestige One Residences – Hilton Residences Dubai Maritime City
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Prestige One Residences – Hilton Residences Dubai Maritime City is introduced as a branded residential
                      address on the Dubai Maritime City peninsula, combining waterfront views with Hilton-inspired design and
                      service-led living. Official messaging for the project highlights a collection of premium apartments with
                      contemporary interiors, generous glazing and carefully composed podium and rooftop amenities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The architecture presents a sleek, modern tower form, with layered terraces and pool decks oriented
                      towards the sea and harbour. Interiors are envisioned in a refined material palette, pairing warm tones
                      and subtle textures with clean lines to echo Hilton&apos;s hospitality standards in a residential context.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      As Dubai Maritime City continues to evolve into a mixed-use waterfront district, Prestige One Residences –
                      Hilton Residences positions itself as a lifestyle and investment opportunity that leverages both branded
                      residence appeal and a strategic location close to key parts of the city while retaining a distinct
                      maritime character.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Branded Apartments" },
                      { label: "Brand", value: "Hilton Residences" },
                      { label: "Community", value: "Dubai Maritime City" },
                      { label: "Starting Price", value: "Price on request" },
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

                {/* Highlights */}
                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Key Highlights</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Branded residences partnership between Prestige One Developments and Hilton in Dubai Maritime City.</li>
                    <li>• Contemporary tower with waterfront and skyline perspectives from select apartments and amenity decks.</li>
                    <li>• Apartments curated to reflect Hilton-inspired hospitality standards in a residential offering.</li>
                    <li>• Elevated pool and leisure deck set against the maritime backdrop.</li>
                    <li>• Fitness spaces, outdoor cinema-style lawn concepts and social lounges highlighted in project visuals.</li>
                    <li>• Located in a peninsula district with growing lifestyle, hospitality and mixed-use appeal.</li>
                    <li>• Strong narrative around waterfront living, branded experience and long-term investment potential.</li>
                  </ul>
                </TabsContent>

                {/* Amenities */}
                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Leisure & Wellness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Elevated pool deck with waterfront ambience</li>
                          <li>• Modern fitness facilities</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Lifestyle & Social</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Lounge-style outdoor seating and entertainment zones</li>
                          <li>• Cinema lawn style experiences suggested by visual material</li>
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

                {/* Location */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Prestige One Residences – Hilton Residences Dubai Maritime City is positioned on the Dubai Maritime City
                    peninsula, offering a maritime-front setting with access to wider city destinations via core arterial roads.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Dubai Maritime City", time: "Within Community" },
                      { place: "Harbour & Sea-Facing Promenades", time: "Nearby" },
                      { place: "Historic waterfront & city centre districts", time: "Short drive (approximate)" },
                      { place: "Key business & lifestyle hubs", time: "Reachable via main roads" },
                      { place: "Wider Dubai coastline & leisure zones", time: "Regional Access" },
                      { place: "Airport & central Dubai", time: "Approximate drive via arterial routes" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Gallery */}
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[heroImg, galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Prestige One Residences gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right: CTA card */}
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
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Download Brochure")}
                    >
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Download Floor Plan")}
                    >
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plan
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Download Payment Plan")}
                    >
                      <FileText className="w-4 h-4 mr-2" /> Download Payment Plan
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Book Consultation")}
                    >
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      Details available on request from the official branded residences sales team.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                    <p>
                      This platform is a marketing and discovery portal only. It is not a licensed brokerage. All inquiries are
                      forwarded to the official developer sales team or their authorized channel partners.
                    </p>
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

export default PrestigeOneResidencesProject;

