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
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const hero = "/projects/laraix/zyra-hills/logo.png";

const images = [hero];

const ZyraHillsProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Zyra Hills", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Zyra Hills by Laraix Developers | Off-plan Apartments in Dubai</title>
        <meta
          name="description"
          content="Zyra Hills by Laraix Developers is an off-plan residential concept in Dubai, combining modern architecture, nature-inspired surroundings and investment-focused positioning."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/laraix/zyra-hills"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Zyra Hills by Laraix Developers"
            className="w-full h-full object-contain bg-black"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Zyra Hills
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by Laraix Developers
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                An off-plan residential concept positioned as a new landmark of refined living in Dubai,
                where modern architecture and natural-inspired calm are brought together.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Pricing on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Dubai, UAE (Al Warsan 4 area)
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Handover timeline on request
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Thumbnail strip */}
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
                  alt={`Zyra Hills view ${i + 1}`}
                  className="w-full h-full object-contain bg-black"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content layout */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="key-facts">Key facts</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">About Zyra Hills</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Official messaging for Zyra Hills highlights it as a refined residential concept
                    that elevates everyday living through contemporary design and nature-inspired
                    surroundings. It is positioned as a smart investment choice with an emphasis on
                    flexible plans and returns, but full specification details such as exact unit
                    types, amenities, pricing and handover are best confirmed directly with Laraix
                    Developers or their authorized representatives.
                  </p>
                </TabsContent>

                <TabsContent value="key-facts" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Developer</p>
                        <p className="font-medium text-foreground">Laraix Developers</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Area</p>
                        <p className="font-medium text-foreground">Al Warsan 4, Dubai</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Property type</p>
                        <p className="font-medium text-foreground">Apartments</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Status</p>
                        <p className="font-medium text-foreground">Off-plan (details on request)</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Starting price</p>
                        <p className="font-medium text-foreground">On request</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Handover &amp; payment</p>
                        <p className="font-medium text-foreground">On request</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-black">
                        <img
                          src={img}
                          alt={`Zyra Hills image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-contain"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sticky CTA */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register your interest
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Receive official pricing, unit mix, amenities and payment plan details for Zyra
                      Hills from Laraix Developers&apos; sales channels.
                    </p>
                    <div className="space-y-3">
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Enquire Now")}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Enquire Now
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
                      All downloadable materials are gated behind a quick lead form. After submitting,
                      the official team can share the latest brochure, floor plans and payment options.
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

export default ZyraHillsProject;

