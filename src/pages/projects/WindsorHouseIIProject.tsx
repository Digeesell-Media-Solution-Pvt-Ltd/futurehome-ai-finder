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
  BedDouble,
  Plane,
  Car,
  Dumbbell,
  Waves,
  TreesIcon,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";

const images = [
  "/projects/ellington/windsor-house-ii/Windsor-House-Slider_01-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-Slider_02-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-Slider_03-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_01-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_02-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_03-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_04-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_05-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_06-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_07-min.jpg",
  "/projects/ellington/windsor-house-ii/Windsor-House-BottomSlider_08-min.jpg",
];

const WindsorHouseIIProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Windsor House II", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Windsor House II by Ellington Properties | Apartments in Dubai South</title>
        <meta
          name="description"
          content="Windsor House II in Dubai South by Ellington Properties offers smart-home studios to 3BR apartments, resort amenities, and prime Expo City and Al Maktoum International Airport access."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/ellington/windsor-house-ii"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Windsor House II by Ellington Properties"
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
                Windsor House II
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Ellington Properties</p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                Smart-home studios to 3-bedroom apartments in Dubai South with resort-style
                amenities and prime access to Expo City and Al Maktoum International Airport.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" />
                  Studio – 3BR
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Dubai South, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Pricing on request
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
                  alt={`Windsor House II view ${i + 1}`}
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
                    Windsor House II by Ellington Properties is an off-plan residential project in
                    Dubai South, offering studios through to 3-bedroom apartments designed around
                    smart-home features and resort-style living. The development is positioned to
                    benefit from Dubai South&apos;s masterplan, including proximity to Expo City Dubai
                    and Al Maktoum International Airport, making it suited to both residents and
                    investors seeking connectivity and long-term value.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ellington markets the project with a focus on contemporary interiors, community
                    amenities and a location that supports easy access to employment hubs, logistics
                    and future growth corridors. For the latest starting prices, handover timelines
                    and payment plans, details are best confirmed directly with Ellington Properties
                    or their authorised sales channels.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Key highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Studios to 3-bedroom apartments by Ellington Properties</li>
                    <li>Smart-home features and modern finishes</li>
                    <li>Resort-style amenities (pools, gym, lifestyle spaces)</li>
                    <li>Located in Dubai South with Expo City and airport access</li>
                    <li>Strong connectivity to employment and logistics hubs</li>
                    <li>Off-plan product with pricing and handover on request</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amenities</h2>
                  <p className="text-sm text-muted-foreground">
                    Windsor House II is promoted with resort-style and lifestyle amenities. The list
                    below reflects amenities commonly highlighted for the project; exact offerings
                    should be confirmed with Ellington.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Waves className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Pool &amp; leisure</p>
                          <p className="text-xs text-muted-foreground">
                            Resort-style pool and outdoor leisure spaces.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <Dumbbell className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Gym &amp; fitness</p>
                          <p className="text-xs text-muted-foreground">
                            Fitness and wellness facilities for residents.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TreesIcon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Landscaping &amp; gardens</p>
                          <p className="text-xs text-muted-foreground">
                            Landscaped areas and green spaces within the community.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Location &amp; connectivity</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Windsor House II sits within Dubai South, one of Dubai&apos;s strategic
                    masterplans. The area is linked to Expo City Dubai and Al Maktoum International
                    Airport, offering strong connectivity for professionals and investors. Travel
                    times and distances are indicative of the broader Dubai South location.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Expo City Dubai
                      </span>
                      <Badge variant="secondary">Nearby</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-primary" />
                        Al Maktoum International Airport
                      </span>
                      <Badge variant="secondary">Prime access</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                      <span className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-primary" />
                        Dubai South / logistics corridor
                      </span>
                      <Badge variant="secondary">Connectivity</Badge>
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
                          alt={`Windsor House II image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register interest in Windsor House II
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request pricing, handover timing, payment plan and floor plans for Windsor
                      House II from Ellington Properties.
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
                      All materials are shared after a quick lead form so you receive the latest
                      Windsor House II information from authorised channels.
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

export default WindsorHouseIIProject;
