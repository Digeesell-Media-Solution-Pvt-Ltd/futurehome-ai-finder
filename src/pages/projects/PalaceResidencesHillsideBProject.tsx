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
} from "lucide-react";

const fallbackImage = "/placeholder.svg";

const images = [
  "/projects/emaar/palace-residences-hillside-b/HERO_1620X832_1-19.jpg",
  "/projects/emaar/palace-residences-hillside-b/HERO_1620X832_2-20.jpg",
  "/projects/emaar/palace-residences-hillside-b/FEATURES_1200X655_1-16.jpg",
  "/projects/emaar/palace-residences-hillside-b/FEATURES_1200X655_2-16.jpg",
  "/projects/emaar/palace-residences-hillside-b/PRO_EXT_1-16-1024x740.jpg",
  "/projects/emaar/palace-residences-hillside-b/PRO_EXT_2-16-1024x740.jpg",
  "/projects/emaar/palace-residences-hillside-b/PRO_EXT_3-12-1024x740.jpg",
  "/projects/emaar/palace-residences-hillside-b/PRO_INT_1-17-670x500.jpg",
  "/projects/emaar/palace-residences-hillside-b/PRO_INT_2-17-670x500.jpg",
  "/projects/emaar/palace-residences-hillside-b/PRO_INT_3-17-670x500.jpg",
];

const PalaceResidencesHillsideBProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Palace Residences Hillside B", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Palace Residences Hillside B by Emaar | Dubai Hills Estate</title>
        <meta
          name="description"
          content="Palace Residences Hillside B by Emaar is positioned within Dubai Hills Estate as part of the Palace Residences Hillside concept, bringing resort-style apartments and townhouses with wellness-focused amenities and access to Dubai Hills Park and Mall."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/emaar/palace-residences-hillside-b"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Palace Residences Hillside B by Emaar"
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
                Palace Residences Hillside B
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Emaar</p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                A variant within the Palace Residences Hillside concept at Dubai Hills Estate, drawing
                from the same resort-style living, wellness lounges and connection to Dubai Hills Park,
                Hills Mall and the Golf Club.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Pricing on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments &amp; Townhouses
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Dubai Hills Estate, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Handover &amp; payment plan on request
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
                  alt={`Palace Residences Hillside B view ${i + 1}`}
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
            {/* Tabs */}
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
                    The official Palace Residences Hillside page describes a collection of apartments
                    and townhouses in Dubai Hills Estate with resort‑style facilities, wellness lounges,
                    pools, padel courts and gyms, connected directly to Dubai Hills Park, Dubai Hills
                    Mall and the Dubai Hills Golf Club. Palace Residences Hillside B is treated here as
                    a variant within that concept, but all factual information follows the shared
                    Palace Residences Hillside release rather than introducing unverified specifics.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Until Emaar publishes explicit variant‑level details, pricing, handover timings and
                    payment plan information for Hillside B should be requested directly from the
                    developer or authorised brokers. For the purposes of this page and dataset, those
                    fields remain &quot;on request&quot; and null‑safe in structured data.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Part of the Palace Residences Hillside concept by Emaar at Dubai Hills Estate</li>
                    <li>Resort‑inspired amenities including pools, wellness lounges and fitness facilities (per official Hillside content)</li>
                    <li>Direct connection to Dubai Hills Park and close proximity to Dubai Hills Mall</li>
                    <li>Access to Dubai Hills Golf Club and the broader green master community</li>
                    <li>Located within Dubai Hills Estate, positioned between Downtown Dubai and Dubai Marina corridors</li>
                    <li>Variant B treated as off‑plan with further details available on request</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Amenities (community‑level)</h2>
                  <p className="text-sm text-muted-foreground">
                    Palace Residences Hillside is marketed with resort‑style facilities. The list below
                    reflects those community‑level amenities based on the official page; exact
                    allocations for Hillside B should be confirmed with Emaar.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Swimming pools and landscaped decks</li>
                    <li>Wellness lounges and relaxation zones</li>
                    <li>Gym and fitness spaces (including padel and training areas as per Hillside materials)</li>
                    <li>Access to Dubai Hills Park and urban green spaces</li>
                    <li>Proximity to Dubai Hills Mall and community F&amp;B</li>
                  </ul>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Dubai Hills Estate connectivity</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dubai Hills Estate is framed as a green master community between Downtown Dubai and
                    Dubai Marina, with access via key roads such as Al Khail Road. Palace Residences
                    Hillside B benefits from this broader connectivity and from being close to Dubai
                    Hills Park, the Dubai Hills Golf Club and Dubai Hills Mall. Timings and
                    distances are indicative of Dubai Hills Estate in general rather than
                    unit‑specific travel times.
                  </p>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`Palace Residences Hillside B image ${i + 1}`}
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
                      Register for Hillside B details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request official pricing, handover timing, payment plan and unit availability
                      for Palace Residences Hillside B from Emaar&apos;s sales channels.
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
                      All materials are shared after a quick lead form to ensure you receive the
                      latest Hillside B information from verified sources.
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

export default PalaceResidencesHillsideBProject;

