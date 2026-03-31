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
const hero1 = "/projects/emaar/ovelle-at-the-valley/hero-1.jpg";
const hero2 = "/projects/emaar/ovelle-at-the-valley/hero-2.jpg";
const hero3 = "/projects/emaar/ovelle-at-the-valley/hero-3.jpg";
const feature1 = "/projects/emaar/ovelle-at-the-valley/feature-1.jpg";
const feature2 = "/projects/emaar/ovelle-at-the-valley/feature-2.jpg";
const ext1 = "/projects/emaar/ovelle-at-the-valley/ext-1.jpg";
const ext2 = "/projects/emaar/ovelle-at-the-valley/ext-2.jpg";
const int1 = "/projects/emaar/ovelle-at-the-valley/int-1.jpg";
const int2 = "/projects/emaar/ovelle-at-the-valley/int-2.jpg";
const int3 = "/projects/emaar/ovelle-at-the-valley/int-3.jpg";

const images = [hero1, hero2, hero3, feature1, feature2, ext1, ext2, int1, int2, int3];

const OvelleTheValleyProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Ovelle at The Valley", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Ovelle at The Valley by Emaar | 4 &amp; 5-Bedroom Villas in Dubai</title>
        <meta
          name="description"
          content="Ovelle at The Valley by Emaar offers 4 and 5-bedroom luxury villas inspired by the contours of Emirati valleys, with serene trails, lush landscapes and mindful family living along Dubai–Al Ain Road."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/emaar/ovelle-at-the-valley"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Ovelle at The Valley by Emaar"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Ovelle at The Valley
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Emaar</p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                4 &amp; 5-bedroom luxury villas inspired by Emirati valleys, where flowing trails, lush
                landscapes and mindful community living shape a nature-first lifestyle.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  From AED 7.09M
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Villas
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" />
                  4 &amp; 5-bedroom layouts
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  The Valley, Dubai (Dubai–Al Ain Road)
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Handover on request
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
                  alt={`Ovelle at The Valley view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main content layout */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tabs + narrative */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="key-facts">Key facts</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    About Ovelle at The Valley
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovelle at The Valley is a luxury villa release by Emaar inspired by the flowing
                    contours, textures, and tones of Emirati valleys. The master vision combines
                    contemporary architecture with earthy palettes, water features, and layered
                    landscapes so that homes feel deeply rooted in their natural surroundings while
                    remaining unmistakably modern.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The collection features 4 and 5-bedroom villas designed for families who value
                    space, light, and a slower rhythm of life. Interiors echo the project&apos;s
                    nature-first narrative with generous glazing, biophilic cues, and layouts that
                    encourage movement between indoor comfort and outdoor terraces, gardens, and
                    trail connections.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Set within The Valley along Dubai–Al Ain Road, Ovelle offers a community fabric of
                    parks, trails, and central gathering spaces, alongside access to wider Dubai in a
                    manageable drive. Pricing starts from AED 7.09M, with handover timelines and
                    payment plans available on request from Emaar.
                  </p>
                </TabsContent>

                <TabsContent value="key-facts" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Developer</p>
                        <p className="font-medium text-foreground">Emaar</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Community</p>
                        <p className="font-medium text-foreground">The Valley, Dubai</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Property type</p>
                        <p className="font-medium text-foreground">Luxury villas</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Bedrooms</p>
                        <p className="font-medium text-foreground">4 &amp; 5-bedroom layouts</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-xs text-muted-foreground mb-1">Starting price</p>
                        <p className="font-medium text-foreground">AED 7.09M</p>
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

                <TabsContent value="highlights" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Key Highlights
                  </h2>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 4 &amp; 5-bedroom luxury villas by Emaar at The Valley.</li>
                    <li>• Architecture and landscaping inspired by Emirati valleys and natural contours.</li>
                    <li>• Nature-led community narrative with trails, lush greenery and mindful outdoor zones.</li>
                    <li>• Contemporary interiors with biophilic design and expansive glazing.</li>
                    <li>• Positioned along Dubai–Al Ain Road for convenient connectivity.</li>
                    <li>• Designed as a family-focused, gated environment with community parks and gathering spaces.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Amenities &amp; lifestyle
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovelle is framed as a nature-centric villa enclave within The Valley, with emphasis
                    on trails, landscaped surroundings and community spaces that bring neighbours
                    together. Emaar&apos;s official page positions amenities as experiences that connect
                    residents to movement, outdoors and shared moments, with specific facility details
                    to be confirmed directly by the developer.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Detailed amenity lists (parks, pools, sports courts, etc.) should be taken from
                    the latest official material when available and can be layered into this section
                    without changing the overall layout.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Location &amp; connectivity
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Valley is a master community along Dubai–Al Ain Road, positioned as a green,
                    family-oriented destination that still maintains access to Dubai&apos;s key hubs.
                    Ovelle sits within this landscape of parks, neighbourhood streets and central
                    gathering areas, giving residents an everyday sense of escape without losing
                    connection to the city.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Located in The Valley along Dubai–Al Ain Road.</li>
                    <li>Access to community parks, trails and central social spaces within The Valley.</li>
                    <li>Balanced positioning between city access and a more tranquil suburban setting.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden">
                        <img
                          src={img}
                          alt={`Ovelle at The Valley image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Image paths are wired to local assets under
                    {" "}
                    <code>/public/projects/emaar/ovelle-at-the-valley/</code>. Ensure this folder
                    contains the latest approved visuals from the official Emaar release.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sticky CTA card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-3xl font-bold text-foreground">AED 7.09M</p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Register to receive official pricing releases, floor plans and payment options
                      for Ovelle at The Valley directly from the developer sales channels.
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

                    <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                      <p>
                        All downloadable materials for this project are gated behind a short lead form.
                        After registering, the official team can share the latest brochure, floor plans
                        and payment details.
                      </p>
                    </div>
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

export default OvelleTheValleyProject;

