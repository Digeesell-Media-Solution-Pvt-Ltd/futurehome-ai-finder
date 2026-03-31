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
  Users,
  ShoppingBag,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";

const images = [
  "/projects/meraas/city-walk-crestlane-4/hero-1.jpg",
  "/projects/meraas/city-walk-crestlane-4/hero-2.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-1.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-2.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-3.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-4.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-5.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-6.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-7.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-8.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-9.jpg",
  "/projects/meraas/city-walk-crestlane-4/gallery-10.jpg",
];

const CityWalkCrestlane4Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "City Walk Crestlane 4", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>City Walk Crestlane 4 by Meraas | Apartments &amp; Duplexes in City Walk</title>
        <meta
          name="description"
          content="City Walk Crestlane 4 by Meraas is one of the early phases of the Crestlane concept at City Walk (Al Wasl), offering design-led apartments and duplexes around water features and landscaped promenades in central Dubai."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/meraas/city-walk-crestlane-4"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="City Walk Crestlane 4 by Meraas"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">
                New Phase
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                City Walk Crestlane 4
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Meraas</p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                An early phase within the City Walk Crestlane water‑inspired masterplan, bringing
                low‑rise apartments and duplex residences to Dubai&apos;s most walkable urban district.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Pricing on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments &amp; Duplexes
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  City Walk (Al Wasl), Dubai
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
                  alt={`City Walk Crestlane 4 view ${i + 1}`}
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
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Official communications about City Walk Crestlane describe a collection of 1‑ to
                    4‑bedroom apartments and duplexes arranged around water features and landscaped
                    promenades in the heart of City Walk. Crestlane 4 is positioned as one of the
                    earlier phases in this sequence, drawing from the same design language and
                    community story as Crestlane 5, while maintaining its own building and release
                    timing. Phase‑specific details such as exact starting prices, unit allocations and
                    handover timelines for Crestlane 4 are best confirmed directly with Meraas or their
                    appointed sales representatives.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Within City Walk (Al Wasl), Crestlane 4 benefits from a walk‑everywhere address
                    where residents move easily between home, cafés, retail and leisure. The broader
                    Crestlane concept frames these low‑rise buildings with water, greenery and
                    pedestrian‑friendly streetscapes, providing a softer counterpoint to the urban
                    skyline while staying minutes from Downtown Dubai and DIFC. Until Meraas releases
                    more granular information, this page uses only verified shared details for
                    Crestlane 4/5 rather than introducing unconfirmed specifics.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Key highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Phase within the City Walk Crestlane masterplan by Meraas (Crestlane 4)</li>
                    <li>Low‑rise residential buildings with apartments and duplex configurations</li>
                    <li>Water‑inspired community design with pools and water features</li>
                    <li>Located in City Walk (Al Wasl), one of Dubai&apos;s most walkable districts</li>
                    <li>Immediate access to City Walk retail, dining and entertainment</li>
                    <li>Central Dubai address near Downtown Dubai, DIFC and Jumeirah</li>
                    <li>Interiors positioned as modern, lifestyle‑driven and light‑filled</li>
                    <li>Pricing, handover and payment plan available on request from Meraas</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amenities (community‑level)</h2>
                  <p className="text-sm text-muted-foreground">
                    Crestlane is promoted with a mix of leisure and lifestyle amenities. The list
                    below reflects community‑level highlights derived from shared Crestlane materials
                    for phases 4 and 5; exact allocations for Crestlane 4 should be confirmed with
                    Meraas.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Waves className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Water features &amp; pools</p>
                          <p className="text-xs text-muted-foreground">
                            Community pools and water‑framed landscaping that soften the urban setting.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TreesIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Green &amp; lawn areas</p>
                          <p className="text-xs text-muted-foreground">
                            Landscaped walkways, seating zones and exercise lawns designed for everyday
                            use.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Family‑oriented spaces</p>
                          <p className="text-xs text-muted-foreground">
                            Community‑focused zones for gatherings, play and informal socialising.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Location &amp; connectivity</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    City Walk Crestlane 4 sits within the established City Walk (Al Wasl) district and
                    benefits from the same central Dubai connectivity as the wider community. It
                    offers quick access to Sheikh Zayed Road, Downtown Dubai, DIFC and Jumeirah beach.
                    Travel times and connectivity references are indicative of City Walk as a whole
                    rather than Crestlane 4 only.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-primary" />
                        City Walk retail
                      </span>
                      <Badge variant="secondary">Walkable</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Downtown Dubai
                      </span>
                      <Badge variant="secondary">~7 min*</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        DIFC
                      </span>
                      <Badge variant="secondary">~10–12 min*</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Waves className="w-4 h-4 text-primary" />
                        Jumeirah Beach
                      </span>
                      <Badge variant="secondary">Short drive*</Badge>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    *Timings and accessibility are indicative and based on City Walk&apos;s central Dubai
                    location; they are not specific to an individual Crestlane 4 unit.
                  </p>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`City Walk Crestlane 4 image ${i + 1}`}
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
                      Register interest in Crestlane 4
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request phase‑specific pricing, handover timing, payment plan and detailed floor
                      plans for City Walk Crestlane 4 from the official sales team.
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
                      All materials are shared after a quick lead form, ensuring you receive the latest
                      information for City Walk Crestlane 4 directly from authorised channels.
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

export default CityWalkCrestlane4Project;

