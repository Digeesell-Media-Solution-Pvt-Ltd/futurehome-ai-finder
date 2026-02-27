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
  "/projects/meraas/city-walk-crestlane-5/hero-1.jpg",
  "/projects/meraas/city-walk-crestlane-5/hero-2.jpg",
  "/projects/meraas/city-walk-crestlane-5/gallery-1.jpg",
  "/projects/meraas/city-walk-crestlane-5/gallery-2.jpg",
];

const CityWalkCrestlane5Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "City Walk Crestlane 5", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>City Walk Crestlane 5 by Meraas | Apartments &amp; Duplexes in City Walk</title>
        <meta
          name="description"
          content="City Walk Crestlane 5 by Meraas brings a new phase of design-led apartments and duplexes to City Walk (Al Wasl), combining water-inspired landscapes with walkable urban living in Dubai."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/meraas/city-walk-crestlane-5"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="City Walk Crestlane 5 by Meraas"
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
                City Walk Crestlane 5
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by Meraas
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                A new phase within City Walk Crestlane&apos;s water-inspired masterplan, bringing
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
                  alt={`City Walk Crestlane 5 view ${i + 1}`}
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
                    Official materials for City Walk Crestlane describe a collection of 1‑ to 4‑bedroom
                    apartments and duplexes arranged around water features and landscaped promenades in
                    the heart of City Walk. Crestlane 5 continues that story as one of the later phases,
                    drawing from the same design language and masterplan but with its own building and
                    release timing. Specific details such as exact starting prices, unit allocations and
                    handover timeline for Crestlane 5 are best confirmed directly with Meraas or their
                    appointed sales representatives.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Set within City Walk (Al Wasl), the wider Crestlane concept blends an urban,
                    walk‑everywhere address with water‑inspired calm. Residents of Crestlane 5 can expect
                    contemporary interiors, access to community pools and fitness spaces, and immediate
                    proximity to the retail, dining, and entertainment offering that has made City Walk
                    one of Dubai&apos;s most recognisable lifestyle districts.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Key highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Phase within the City Walk Crestlane masterplan by Meraas</li>
                    <li>Low‑rise buildings with apartments and duplex configurations</li>
                    <li>Water‑inspired community design with pools and water features</li>
                    <li>Walkable access to City Walk mall, cafés and restaurants</li>
                    <li>Urban address close to Downtown Dubai, DIFC and Jumeirah</li>
                    <li>Interiors positioned as modern, light‑filled and lifestyle‑driven</li>
                    <li>Part of a wider freehold offering in a central Dubai location</li>
                    <li>Payment plan and handover details available on request</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amenities (community‑level)</h2>
                  <p className="text-sm text-muted-foreground">
                    The Crestlane concept is marketed with a mix of leisure and lifestyle amenities. The
                    list below reflects community‑level highlights drawn from official content; exact
                    allocations for Crestlane 5 should be confirmed with Meraas.
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
                            Landscaped walkways, seating zones and exercise lawns designed for everyday use.
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
                    City Walk Crestlane 5 sits within the established City Walk (Al Wasl) district,
                    benefiting from quick access to Sheikh Zayed Road, Downtown Dubai, DIFC and Jumeirah
                    beach. Travel times and connectivity references are approximate and based on the
                    broader City Walk positioning rather than Crestlane 5 only.
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
                    location; they are not specific to an individual Crestlane 5 unit.
                  </p>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`City Walk Crestlane 5 image ${i + 1}`}
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
                      Register interest in Crestlane 5
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request phase‑specific pricing, handover timing, payment plan and detailed floor
                      plans for City Walk Crestlane 5 from the official sales team.
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
                      information for City Walk Crestlane 5 directly from authorised channels.
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

export default CityWalkCrestlane5Project;

