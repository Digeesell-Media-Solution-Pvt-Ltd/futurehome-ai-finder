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
const hero1 = "/projects/adaan/art-house-hills/hero-1.webp";
const hero2 = "/projects/adaan/art-house-hills/hero-2.webp";

const images = [hero1, hero2];

const ArtHouseHillsProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Art House Hills", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Art House Hills by Adaan Developments | Apartments in Arjan, Dubai</title>
        <meta
          name="description"
          content="Art House Hills by Adaan Developments is an off-plan apartment project in Arjan, Dubai, positioned as a contemporary community with lifestyle-led amenities and city connectivity."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/adaan/art-house-hills"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Art House Hills by Adaan Developments in Arjan, Dubai"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Art House Hills
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by Adaan Developments
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                An off-plan apartment community in Arjan, Dubai, with a contemporary design outlook and
                lifestyle-led shared spaces.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Price on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Arjan, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Handover timeline on request
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
                  alt={`Art House Hills view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content + CTA layout */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tabs / narrative */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="key-facts">Key facts</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">About Art House Hills</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Art House Hills is presented in third-party listings as an off-plan apartment
                    project in the Arjan community of Dubai, positioned as a contemporary address with
                    lifestyle-oriented amenities and access to key city corridors. Full official
                    project details, including exact unit mix, amenities and payment plan, should be
                    confirmed directly with the developer or their authorized sales channels.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The development is expected to appeal to residents and investors looking at
                    mid-rise apartment living in Arjan, a district known for its mix of residential,
                    retail, and community offerings within Dubai&apos;s wider urban fabric.
                  </p>
                </TabsContent>

                <TabsContent value="key-facts" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Developer</p>
                        <p className="font-medium text-foreground">Adaan Developments</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Community</p>
                        <p className="font-medium text-foreground">Arjan, Dubai</p>
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

                <TabsContent value="amenities" className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Amenities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Public aggregator listings for Art House Hills reference lifestyle amenities and
                    community facilities in general terms. A detailed, confirmed amenity list has not
                    been extracted in a structured way from the available sources, so specifics such as
                    pool, gym, or dedicated leisure areas should be verified with the developer before
                    being treated as final.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Location
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Art House Hills is positioned in Arjan, a community in Dubai that has become a
                    hub for residential and mixed-use developments. Arjan offers connectivity to key
                    city routes and access to nearby retail, dining and entertainment options in the
                    surrounding area.
                  </p>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden">
                        <img
                          src={img}
                          alt={`Art House Hills image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sticky CTA card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register your interest
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get official pricing, unit availability and payment plan details for Art House
                      Hills direct from the project&apos;s sales channels.
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
                      All downloadable materials are gated behind a quick lead form so the project
                      team can respond with tailored information for your requirements.
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

export default ArtHouseHillsProject;

