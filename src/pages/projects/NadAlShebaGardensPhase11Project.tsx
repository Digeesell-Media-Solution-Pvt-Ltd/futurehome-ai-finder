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
  Download,
  FileText,
  Phone,
  TreesIcon,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const hero = "/projects/meraas/nad-al-sheba-gardens-phase-11/hero.jpg";

const images = [hero];

const NadAlShebaGardensPhase11Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Nad Al Sheba Gardens Phase 11", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <SeoHead
        title="Nad Al Sheba Gardens Phase 11 by Meraas | Villas &amp; Townhouses"
        description="Nad Al Sheba Gardens Phase 11 by Meraas extends the popular gated villa community in Nad Al Sheba, Dubai with new low-rise villas and townhouses surrounded by landscaped gardens."
        canonicalPath="/projects/meraas/nad-al-sheba-gardens-phase-11"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Nad Al Sheba Gardens Phase 11 by Meraas"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">New Phase</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Nad Al Sheba Gardens (Phase 11)
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by Meraas
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                A continuation of Nad Al Sheba Gardens&apos; low-rise villa and townhouse community,
                bringing new phases of garden-inspired family homes close to central Dubai.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Pricing on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Villas &amp; Townhouses
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Nad Al Sheba, Dubai
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
                  alt={`Nad Al Sheba Gardens Phase 11 view ${i + 1}`}
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
            {/* Left: tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="community">Community &amp; lifestyle</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Project summary</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The official Nad Al Sheba Gardens materials describe a private, low-rise community of
                    villas and townhouses with open-plan gardens, tree-lined streets and distinct
                    architecture. Phase 11 continues this master vision by releasing new clusters of
                    homes within the established neighbourhood, but exact Phase 11 pricing, handover
                    dates and payment plans are best obtained directly from Meraas or authorised agents.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Positioned minutes from Downtown Dubai and major highways, the community is framed
                    as a place for families to live at their own pace, combining landscaped green
                    spaces with modern interiors and gated-neighbourhood privacy.
                  </p>
                </TabsContent>

                <TabsContent value="community" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Community story &amp; lifestyle</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nad Al Sheba Gardens is promoted as a garden suburb for Dubai, with low-rise
                    streetscapes, private gardens and generous setbacks between homes. The narrative
                    focuses on space for family life, outdoor gatherings and everyday routines within a
                    gated environment, rather than on high-rise or mixed-use density.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Within that backdrop, Phase 11 adds more villas and townhouses that build on the
                    same design language – warm, modern facades; large windows to bring in light; and
                    layouts that open to courtyards and gardens. Lifestyle messaging highlights
                    wellness, greenery and proximity to key city destinations.
                  </p>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amenities (community-level)</h2>
                  <p className="text-sm text-muted-foreground">
                    The Nad Al Sheba Gardens master community is promoted with a mix of leisure and
                    wellness spaces. The list below reflects community-level highlights mentioned in
                    official materials; Phase 11-specific amenity allocations should be confirmed with
                    the developer.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TreesIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Garden &amp; park spaces</p>
                          <p className="text-xs text-muted-foreground">
                            Landscaped streets and green areas for walking, play and outdoor gatherings.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Family-focused community</p>
                          <p className="text-xs text-muted-foreground">
                            Gated master plan with neighbourhood amenities positioned for families.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`Nad Al Sheba Gardens Phase 11 image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right: CTA card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register for Phase 11 details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request official pricing, Phase 11 availability, handover timeline and payment
                      plans directly from the Nad Al Sheba Gardens sales team.
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
                      All downloadable content is shared after a quick lead form, ensuring you receive
                      the latest official information for Nad Al Sheba Gardens Phase 11.
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

export default NadAlShebaGardensPhase11Project;

