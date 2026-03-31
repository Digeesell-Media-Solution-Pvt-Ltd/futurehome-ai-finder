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
  Download,
  FileText,
  Phone,
  Waves,
  TreesIcon,
  BedDouble,
  Car,
  Dumbbell,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";

const base = "/projects/holm/linea-by-holm";
const images = [
  `${base}/2026-01-09-A3-HOLM-2-C02-2-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C04-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C09-V2-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C07-1-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C08-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C06-V3-1-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C04-1-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C05-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C03-1-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C02-2-2-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C01-2-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C06-V3-scaled.jpg`,
  `${base}/2026-01-09-A3-HOLM-2-C03-scaled.jpg`,
];

const LineaByHolmProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Linea by HOLM", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Linea by HOLM | Apartments in Jumeirah Garden City, Dubai</title>
        <meta
          name="description"
          content="Linea by HOLM in Jumeirah Garden City offers fully furnished apartments with smart home technology, low-rise living and premium amenities. Completion Q4 2027."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/holm/linea-by-holm"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Linea by HOLM, Jumeirah Garden City"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">
                Off-plan
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Linea by HOLM
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by HOLM Developments
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                Fully furnished apartments with smart home technology in Jumeirah Garden City.
                Low-rise, calm architecture with refined finishes. From AED 960K.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" />
                  Studio, 1–2 BR
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Jumeirah Garden City (Al Satwa), Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  From AED 960K
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Q4 2027
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Thumbnails */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i
                    ? "border-primary"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Linea by HOLM view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
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

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    LINEA by HOLM in Jumeirah Garden City balances calm architecture, efficient
                    layouts and refined finishes to offer homes that are practical today and
                    relevant for years to come. With low- to mid-rise buildings, LINEA
                    prioritises comfort, privacy and long-term value in one of Dubai&apos;s most
                    central districts.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    LINEA is designed for central living where form and function exist in
                    perfect harmony. Fully furnished residences feature smart home technology
                    and refined finishes throughout, offering a lifestyle that is both
                    practical and elevated. Unit types include Studio (from 386 sq ft, from
                    AED 960K), 1 Bedroom (from 626 sq ft, from AED 1.5M) and 2 Bedroom (from
                    986 sq ft, from AED 2.4M). Handover is expected Q4 2027. Payment plans and
                    exact availability are on request from the developer.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Fully furnished apartments with smart home technology</li>
                    <li>Low-density, low-rise buildings in Jumeirah Garden City</li>
                    <li>Studio from AED 960K, 1BR from AED 1.5M, 2BR from AED 2.4M</li>
                    <li>Expected completion Q4 2027</li>
                    <li>Refined finishes and efficient layouts</li>
                    <li>Easy access to Sheikh Zayed Road, retail and leisure</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Thoughtfully Curated Amenities
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    LINEA offers a focused set of amenities for everyday living and leisure.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Waves className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Rooftop Infinity Pool</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Dumbbell className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Fully Equipped Gym</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TreesIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Landscaped Garden</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Kids Play Area</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <UtensilsCrossed className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">BBQ Areas</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Waves className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Rooftop Padel Court</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TreesIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Outdoor Seating</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Location &amp; connectivity
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    LINEA is positioned in Jumeirah Garden City (Al Satwa), offering easy
                    access to Dubai&apos;s key destinations while maintaining a calm, residential
                    vibe. Live close to business hubs, retail and leisure, without the noise and
                    congestion of downtown. The area is well served by Sheikh Zayed Road and
                    benefits from green parks, The Green Planet and Dubai Garden Glow nearby.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-primary" />
                        Sheikh Zayed Road
                      </span>
                      <Badge variant="secondary">Central</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Jumeirah Garden City
                      </span>
                      <Badge variant="secondary">Al Satwa</Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`Linea by HOLM image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* CTA card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register for Linea by HOLM
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request pricing, handover details, floor plans and payment plan
                      information for Linea by HOLM.
                    </p>
                    <div className="space-y-3">
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Register Interest")}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Register Interest
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Download Brochure")}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Get Floor Plan")}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Get Floor Plan
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Payment Plan")}
                      >
                        <Banknote className="w-4 h-4 mr-2" />
                        Payment Plan
                      </Button>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      All materials are shared after a quick lead form so you receive the
                      latest Linea by HOLM information from authorised channels.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default LineaByHolmProject;
