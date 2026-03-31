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
  TreePine,
  Shield,
  Dumbbell,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "/projects/emaar/grand-polo-equiterra-2/img-1.jpg";
const galleryImgOne = "/projects/emaar/grand-polo-equiterra-2/img-2.jpg";
const galleryImgTwo = "/projects/emaar/grand-polo-equiterra-2/img-3.jpg";
const galleryImgThree = "/projects/emaar/grand-polo-equiterra-2/img-4.jpg";
const galleryImgFour = "/projects/emaar/grand-polo-equiterra-2/img-5.jpg";

const images = [heroImg, galleryImgOne, galleryImgTwo, galleryImgThree];

const amenities = [
  { icon: TreePine, label: "Green Core Landscapes" },
  { icon: Users, label: "Community Clubhouse" },
  { icon: Dumbbell, label: "Fitness & Activity Zones" },
  { icon: Building2, label: "Estate-Style Townhouse Streetscapes" },
  { icon: Shield, label: "24/7 Security" },
];

const GrandPoloEquiterra2Project = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Grand Polo Club & Resort – Equiterra 2", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Grand Polo Club & Resort – Equiterra 2 by Emaar | Townhouses in Dubai Investment Park</title>
        <meta
          name="description"
          content="Equiterra 2 at Grand Polo Club & Resort by Emaar brings equestrian-inspired townhouse living to Dubai Investment Park with estate-style landscaping and community amenities."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/emaar/grand-polo-equiterra-2"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Equiterra 2 at Grand Polo Club & Resort by Emaar"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Off-plan</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Grand Polo Club & Resort – Equiterra 2
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">by Emaar</p>
              <p className="text-white/80 text-sm md:text-base mb-4">
                A townhouse collection shaped by equestrian heritage, green courtyards and estate-inspired community living.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" /> Price on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> Townhouses
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> 3 &amp; 4-bedroom layouts
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Dubai Investment Park (DIP), Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Handover TBD
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
                  alt={`Equiterra 2 view ${i + 1}`}
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
                  <TabsTrigger value="master">Master Community</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                {/* Overview */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      About Equiterra 2 at Grand Polo Club & Resort
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Grand Polo Club & Resort – Equiterra 2 extends the equestrian-inspired vision of the master community
                      with a new release of townhouses carefully woven into green corridors and landscaped streets. Official
                      descriptions of the wider community emphasise a lifestyle where polo fields, clubhouses and sculpted
                      lawns shape the backdrop to daily life, and Equiterra 2 inherits this estate-led character in its
                      architecture and setting.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Townhouse facades are conceived to echo the rhythm of the masterplan – balancing clean contemporary lines
                      with warm materials, framed views and a sense of belonging to a larger equestrian narrative. Inside,
                      open-plan living, generous glazing and flowing connections to private outdoor spaces aim to support both
                      family living and social entertaining.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Positioned within Dubai Investment Park (DIP), the project benefits from its strategic location and
                      emerging infrastructure while remaining anchored in a distinct destination identity. For end users and
                      investors seeking a townhouse address linked to a signature lifestyle concept, Equiterra 2 offers a
                      compelling blend of community design, greenery and long-term potential.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Townhouses" },
                      { label: "Bedrooms", value: "3 & 4-bedroom" },
                      { label: "Community", value: "Grand Polo Club & Resort" },
                      { label: "Starting Price", value: "Price on request" },
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
                    <li>• Townhouse release within the Grand Polo Club & Resort master community by Emaar.</li>
                    <li>• Equestrian-led lifestyle concept with polo fields, stables and signature clubhouse elements.</li>
                    <li>• Estate-style streetscapes framed by green corridors and curated landscape design.</li>
                    <li>• 3 and 4-bedroom townhouse layouts crafted for family living and entertaining.</li>
                    <li>• Integration with the wider Green Core and open-space network across the masterplan.</li>
                    <li>• Access to community leisure, fitness and social facilities within the greater development.</li>
                    <li>• Strategically located in Dubai Investment Park (DIP) with connectivity to key city destinations.</li>
                    <li>• Long-term growth potential underpinned by a distinct destination identity and Emaar&apos;s brand.</li>
                  </ul>
                </TabsContent>

                {/* Master Community */}
                <TabsContent value="master" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Grand Polo Club & Resort</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Grand Polo Club & Resort is presented as a master community where equestrian pursuits, nature and refined
                    living converge. Official community content highlights polo fields, stables, clubhouses and manicured
                    landscapes as centrepieces, with residential clusters like Equiterra 2 positioned around the Green Core and
                    linear parks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With a focus on walkable streets, landscaped links and a layered mix of sport and leisure offerings, the
                    masterplan is designed to encourage both active and contemplative moments. Equiterra 2 connects directly to
                    this vision, enabling residents to experience the broader estate while enjoying the intimacy of their own
                    townhouse enclave.
                  </p>
                </TabsContent>

                {/* Amenities */}
                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Equestrian & Outdoor</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Access to polo fields and equestrian facilities within the wider community</li>
                          <li>• Green Core landscapes and linear parks nearby</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Community & Lifestyle</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Clubhouse-style social and leisure spaces in the master community</li>
                          <li>• Family-friendly environment with landscaped streets and gathering spots</li>
                        </ul>
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
                    Equiterra 2 sits within Grand Polo Club & Resort in Dubai Investment Park (DIP), a district positioned for
                    long-term growth and enhanced connectivity across Dubai.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Grand Polo Club & Resort Core", time: "Within Community" },
                      { place: "Green Core & Polo Landscapes", time: "Within Community" },
                      { place: "Dubai Investment Park (DIP)", time: "Primary District" },
                      { place: "Key Dubai business & lifestyle hubs", time: "Reachable via major roads" },
                      { place: "Wider Dubai city destinations", time: "Connected by arterial routes" },
                      { place: "Airport & logistics corridors", time: "Regional Accessibility" },
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
                    {[heroImg, galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Equiterra 2 gallery ${i + 1}`}
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
                    <p className="text-3xl font-bold text-foreground">Price on request</p>
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
                    <p className="text-sm text-muted-foreground">Details available on request from the official sales team.</p>
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

export default GrandPoloEquiterra2Project;

