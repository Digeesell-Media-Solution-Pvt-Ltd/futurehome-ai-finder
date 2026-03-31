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
const heroImg = "/projects/tranquil/blossom-40/hero.jpg";
const galleryImgOne = "/projects/tranquil/blossom-40/gallery-1.jpg";
const galleryImgTwo = "/projects/tranquil/blossom-40/gallery-2.jpg";
const galleryImgThree = "/projects/tranquil/blossom-40/gallery-3.jpg";
const galleryImgFour = "/projects/tranquil/blossom-40/gallery-4.jpg";

const images = [heroImg, galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour];

const Blossom40Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Blossom 40", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Blossom 40 by Tranquil Developers | Apartments in Majan, Dubai</title>
        <meta
          name="description"
          content="Blossom 40 by Tranquil Developers offers thoughtfully planned 1.5 and 2.5 bedroom apartments in Majan, Dubailand, designed around modern living with strong long-term appeal."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/tranquil/blossom-40"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Blossom 40 in Majan, Dubai"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Blossom 40
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by Tranquil Developers
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                Considered 1.5 and 2.5 bedroom apartments in Majan, Dubailand, shaped around how
                residents live, work and unwind in a growing community.
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
                  <BedDouble className="w-4 h-4" />
                  1.5 &amp; 2.5 bedroom layouts
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Wadi Al Safa 3, Majan, Dubai
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
                  alt={`Blossom 40 view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main layout */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: content */}
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
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    About Blossom 40
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Blossom 40 is a residential project by Tranquil Developers in Majan, part of the
                    wider Dubailand corridor. The development focuses on well-considered 1.5 and 2.5
                    bedroom apartments, with layouts shaped around how residents live, work and
                    unwind on a daily basis. Interiors prioritise usable space and natural light,
                    creating calm, efficient homes that support both everyday routines and longer-term
                    lifestyle goals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Set within Wadi Al Safa 3 in Majan, Blossom 40 benefits from established
                    infrastructure, improving connectivity and steady residential demand in the
                    surrounding community. The project is positioned for residents who want a
                    considered address in Dubailand as well as investors seeking exposure to a
                    maturing sub-market with ongoing development momentum.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Pricing, handover timelines and payment plans are available on request via the
                    project sales team. Prospective buyers can register interest to receive the
                    latest information, floor plans and release updates as they are shared by Tranquil
                    Developers.
                  </p>
                </TabsContent>

                <TabsContent value="key-facts" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Developer</p>
                        <p className="font-medium text-foreground">Tranquil Developers</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Location</p>
                        <p className="font-medium text-foreground">Wadi Al Safa 3, Majan, Dubai</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Property type</p>
                        <p className="font-medium text-foreground">Residential apartments</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Unit mix</p>
                        <p className="font-medium text-foreground">1.5 &amp; 2.5 bedroom layouts</p>
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
                        <p className="text-xs text-muted-foreground mb-1">Pricing</p>
                        <p className="font-medium text-foreground">On request</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Amenities &amp; lifestyle
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tranquil Developers positions Blossom 40 as a considered residential address in
                    Majan. Specific on-site amenity details are to be confirmed by the developer;
                    registered buyers will receive the official lifestyle and facility list as it is
                    released.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Location &amp; connectivity
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Blossom 40 is located in Wadi Al Safa 3, within the Majan district of Dubailand.
                    The area benefits from established infrastructure and a growing residential base,
                    supporting both lifestyle stability and long-term investment outlook.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                    <li>Located in Wadi Al Safa 3, Majan, Dubailand</li>
                    <li>Part of a maturing residential and mixed-use community</li>
                    <li>Connectivity and infrastructure in the wider Dubailand corridor</li>
                  </ul>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden">
                        <img
                          src={img}
                          alt={`Blossom 40 image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Note: Local image placeholders are wired for Blossom 40. Please ensure
                    `/public/projects/tranquil/blossom-40/` contains the latest approved visuals
                    from the official Tranquil Developers materials.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right: sticky CTA card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register your interest
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get official pricing, floor plans and payment plan details for Blossom 40
                      direct from the project team.
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
                        className="w-full"
                        variant="outline"
                        size="sm"
                        onClick={() => handleCTA("Download Brochure")}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
                      </Button>
                      <Button
                        className="w-full"
                        variant="outline"
                        size="sm"
                        onClick={() => handleCTA("Get Floor Plan")}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Get Floor Plan
                      </Button>
                      <Button
                        className="w-full"
                        variant="outline"
                        size="sm"
                        onClick={() => handleCTA("Payment Plan")}
                      >
                        <Banknote className="w-4 h-4 mr-2" />
                        Payment Plan
                      </Button>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      All downloadable materials are gated behind a quick lead form so the project
                      team can share tailored information.
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

export default Blossom40Project;

