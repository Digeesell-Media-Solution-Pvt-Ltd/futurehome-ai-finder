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
  Star,
  Dumbbell,
  Users,
  Shield,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "/projects/prysm/sunvale/img-1.jpg";
const galleryImgOne = "/projects/prysm/sunvale/img-2.jpg";
const galleryImgTwo = "/projects/prysm/sunvale/img-3.jpg";
const galleryImgThree = "/projects/prysm/sunvale/img-4.jpg";

const images = [heroImg, galleryImgOne, galleryImgTwo, galleryImgThree];

const amenities = [
  { icon: Dumbbell, label: "Modern Fitness Facilities" },
  { icon: Users, label: "Community Lounge & Social Zones" },
  { icon: Building2, label: "Contemporary Lobby Spaces" },
  { icon: Shield, label: "24/7 Security" },
];

const SunvaleProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Sunvale", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Sunvale by PRYSM Real Estate in International City, Dubai</title>
        <meta
          name="description"
          content="Sunvale by PRYSM Real Estate is an off-plan residential project in International City, Dubai with contemporary apartments, lifestyle amenities and neighbourhood connectivity."
        />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/prysm/sunvale" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Sunvale by PRYSM Real Estate in International City, Dubai"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Off-plan</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Sunvale</h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by PRYSM Real Estate</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                A contemporary residential concept in International City, bringing fresh interiors and lifestyle-led amenities
                to a well-established community.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" /> Price on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> Apartments
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> Unit mix coming soon
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> International City, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Handover timeline to be announced
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero thumbnails */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Sunvale view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                {/* Overview */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Sunvale</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sunvale is presented by PRYSM Real Estate as a fresh residential concept in International City, designed
                      to build on the area&apos;s established convenience and connectivity while elevating interior quality
                      and amenity offerings. Visual material suggests a focus on well-proportioned apartments, large windows
                      and thoughtful layouts that maximise liveable space.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The project&apos;s positioning is oriented towards residents looking for an accessible off-plan entry
                      point in Dubai with upgraded interiors compared to typical stock in the surrounding neighbourhood.
                      Architecture and interiors appear to favour a warm, modern palette with clean lines and functional
                      storage, aligning with everyday usability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Within the broader International City context, Sunvale taps into a district known for its mix of retail,
                      services and multicultural character, offering a base that is connected to Dubai&apos;s core districts
                      while retaining more approachable price points. Full details on unit mix, pricing and handover are
                      expected to be released progressively; until then, the development can be viewed as a lifestyle and
                      investment proposition anchored in a maturing community.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments" },
                      { label: "Bedrooms", value: "Details coming soon" },
                      { label: "Community", value: "International City" },
                      { label: "Starting Price", value: "To be announced" },
                    ].map((item) => (
                      <Card key={item.label} className="bg-muted/30">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground mt-1">{item.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Highlights */}
                <TabsContent value="highlights" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Key Highlights</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Off-plan residential project in International City by PRYSM Real Estate.</li>
                    <li>• Contemporary apartments with upgraded interior finishes versus typical area stock.</li>
                    <li>• Positioned to benefit from an established community with extensive retail and services.</li>
                    <li>• Amenity offering centred around fitness, social spaces and practical convenience.</li>
                    <li>• Aims to provide an accessible entry point for both end users and investors in Dubai.</li>
                  </ul>
                </TabsContent>

                {/* Amenities */}
                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities & Lifestyle</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on PRYSM&apos;s positioning for Sunvale, lifestyle is expected to focus on well-specified interiors
                    and compact but meaningful communal amenities that support daily routines.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Wellness & Fitness</h3>
                        <p className="text-sm text-muted-foreground">
                          A modern fitness offering and movement-focused spaces are anticipated as core elements of the amenity
                          mix, supporting residents&apos; everyday wellbeing.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Community & Convenience</h3>
                        <p className="text-sm text-muted-foreground">
                          Communal lounges, lobby spaces and practical on-site facilities are expected to complement the wider
                          retail and service ecosystem of International City.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenities.map(({ icon: Icon, label }) => (
                      <Card key={label} className="bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{label}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Location */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sunvale is located in International City, one of Dubai&apos;s long-established residential and retail
                    districts with a diverse community and everyday convenience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "International City Community", time: "Within District" },
                      { place: "Local Retail & Services", time: "Nearby" },
                      { place: "Wider Dubai arterial roads", time: "Regional Connectivity" },
                      { place: "Key employment & lifestyle hubs", time: "Accessible by car" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Gallery */}
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[heroImg, galleryImgOne, galleryImgTwo, galleryImgThree].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Sunvale gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right: CTA card */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">To be announced</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Enquire Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Download Brochure")}
                    >
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Download Floor Plan")}
                    >
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plan
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Download Payment Plan")}
                    >
                      <FileText className="w-4 h-4 mr-2" /> Download Payment Plan
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      size="lg"
                      onClick={() => handleCTA("Book Consultation")}
                    >
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      Details will be shared upon release by the official PRYSM Real Estate sales team.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                    <p>
                      This platform is a marketing and discovery portal only. It is not a licensed brokerage. All inquiries are
                      forwarded to the official developer sales team or their authorized channel partners.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default SunvaleProject;

