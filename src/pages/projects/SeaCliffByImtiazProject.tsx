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
  Ship,
  Car,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";

const images = [
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_017.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_001.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_002.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_005.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_006.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_007.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_009.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-Exterior_010.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/Seacliff-bedroom_002.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/Seacliff-bedroom_003.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/Seacliff-bedroom_005.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/Seacliff-clubhouse_007.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/Seacliff-gym_007.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-living-kitchen_002.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-living-kitchen_004.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-living-kitchen_006.webp",
  "/projects/imtiaz/sea-cliff-by-imtiaz/SeaCliff-living-kitchen_007.webp",
];

const SeaCliffByImtiazProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Sea Cliff by Imtiaz", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Sea Cliff by Imtiaz | 1–4 BR Sea-View Apartments in Dubai Islands</title>
        <meta
          name="description"
          content="Sea Cliff by Imtiaz at Dubai Islands offers modern 1–4 BR sea-view apartments with a flexible 50/50 payment plan, resort-style amenities and coastal living moments from the city."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/imtiaz/sea-cliff-by-imtiaz"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Sea Cliff by Imtiaz at Dubai Islands"
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
                Sea Cliff by Imtiaz
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by Imtiaz Developments
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                1–4 bedroom sea-view apartments at Dubai Islands, pairing coastal living with a
                flexible 50/50 payment plan and resort-style amenities.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" />
                  1–4 BR
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Dubai Islands, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  50/50 payment plan
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Handover on request
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
                  alt={`Sea Cliff by Imtiaz view ${i + 1}`}
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
                  <TabsTrigger value="dubai-islands">Dubai Islands lifestyle</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sea Cliff by Imtiaz is presented as a waterfront-inspired apartment development
                    on Dubai Islands, featuring modern 1–4 bedroom layouts with sea-facing views and
                    a flexible 50/50 payment plan. Official materials position the project as a
                    coastal sanctuary where soft, natural tones and expansive glazing open the
                    interiors to the water and skyline beyond, while maintaining the brand&apos;s
                    focus on detail-driven design and everyday functionality.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The project is framed as a bridge between serene seaside living and city
                    convenience, with Dubai Islands connected to the mainland via established
                    bridges and road networks. Until Imtiaz publishes clear numerical starting
                    prices or a definitive handover date, those fields are treated as on request and
                    should be confirmed directly with the developer or authorised sales partners.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Sea-view 1–4 bedroom apartments on Dubai Islands</li>
                    <li>Flexible 50/50 payment plan highlighted in official messaging</li>
                    <li>Contemporary interiors with large windows and light-toned palettes</li>
                    <li>Resort-style pool and lifestyle amenities curated by Imtiaz</li>
                    <li>Positioned at the waterfront edge of a growing island community</li>
                    <li>Easy bridge and road connectivity back to mainland Dubai</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amenities</h2>
                  <p className="text-sm text-muted-foreground">
                    Sea Cliff is marketed with a mix of leisure, wellness and social amenities. The
                    list below reflects a typical amenity mix for this type of Imtiaz development;
                    for exact details, please refer to the latest official materials.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Waves className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Pool &amp; deck</p>
                          <p className="text-xs text-muted-foreground">
                            Resort-style swimming pool with sun deck and lounging areas.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TreesIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Landscaped zones</p>
                          <p className="text-xs text-muted-foreground">
                            Green pockets and promenade-style landscaping around the building.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="dubai-islands" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Dubai Islands lifestyle</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dubai Islands is positioned as a multi-island coastal destination, combining
                    beach access, marina promenades and hospitality offerings with residential
                    communities. Sea Cliff sits within this setting, giving residents the ability to
                    step out to shaded island pathways and water-facing vistas while still being a
                    drive away from established mainland hubs. Lifestyle references are based on the
                    broader Dubai Islands positioning rather than individual unit views or access
                    rights.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Location &amp; connectivity</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Official copy emphasises that Dubai Islands is connected to the city via
                    established bridges and roads, bringing Downtown Dubai, Dubai Creek and key
                    employment corridors within reach while preserving a coastal setting. Travel
                    times and distances are indicative of the wider Dubai Islands masterplan and not
                    specific to a single building or unit.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Ship className="w-4 h-4 text-primary" />
                        Waterfront promenades
                      </span>
                      <Badge variant="secondary">Island setting</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-primary" />
                        Mainland Dubai
                      </span>
                      <Badge variant="secondary">Bridge access</Badge>
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
                          alt={`Sea Cliff by Imtiaz image ${i + 1}`}
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
                      Register for Sea Cliff details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request current pricing, handover timing, detailed floor plans and full
                      payment plan information for Sea Cliff by Imtiaz.
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
                      All materials are shared after a quick lead form so you receive the latest Sea
                      Cliff by Imtiaz information from authorised channels.
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

export default SeaCliffByImtiazProject;

