import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { getBrochureUrl } from "@/lib/brochure";
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
  Waves,
  Shield,
  Dumbbell,
  TreePine,
  Baby,
  Heart,
  ShoppingBag,
  Zap,
  Users,
} from "lucide-react";

const heroImg = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/HERO_1620X832_1-3.jpg";
const featureImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/FEATURES_1200X655_2-2.jpg";
const featureImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/FEATURES_1200X655_3.jpg";
const galleryImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_EXT_1-2-1024x740.jpg";
const galleryImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_EXT_2-2-1024x740.jpg";
const galleryImgThree = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_INT_1-2-1024x740.jpg";
const galleryImgFour = "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_INT_2-2-1024x740.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: Waves, label: "Adult Pool" },
  { icon: Baby, label: "Kids Pool & Splash Pad" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Dumbbell, label: "Indoor & Outdoor Gym" },
  { icon: Heart, label: "Yoga & Wellness Zones" },
  { icon: TreePine, label: "Landscaped Greens" },
  { icon: Zap, label: "Padel / Multi-Sport Courts" },
  { icon: Users, label: "Event Lawn & BBQ Areas" },
  { icon: ShoppingBag, label: "Community Retail" },
  { icon: Building2, label: "18-Hole Championship Golf Course Access" },
  { icon: Shield, label: "24/7 Security" },
];

const GolfMeadowEmaarSouthProject = () => {
  const { openLeadCapture, requestBrochureDownload } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);
  const brochureUrl = getBrochureUrl("emaar", "golf-meadow-at-emaar-south");

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Golf Meadow at Emaar South", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Golf Meadow at Emaar South by Emaar | Golf Lifestyle Apartments & Townhouses</title>
        <meta
          name="description"
          content="Discover Golf Meadow at Emaar South by Emaar — 1 to 3-bedroom luxury apartments and 3-bedroom townhouses with golf-estate living and prices from AED 1.12M."
        />
        <link rel="canonical" href="https://off-plan-projects.com/projects/emaar/golf-meadow-at-emaar-south" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Golf Meadow at Emaar South by Emaar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Golf Meadow at Emaar South</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Emaar Properties</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Emaar South, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Luxury Apartments & Townhouses</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR - 3BR Apartments · 3BR Townhouses</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover TBD</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 1.12M</span>
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
                  activeImage === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
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
                  <TabsTrigger value="residences">Residences</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                </TabsList>

                {/* OVERVIEW */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Golf Meadow at Emaar South</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Golf Meadow at Emaar South is a golf-facing residential collection by Emaar, designed around
                      open greens, natural light, and contemporary architectural lines. The project blends refined
                      urban comfort with the calm rhythm of a golf-estate lifestyle.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The development features 1 to 3-bedroom luxury apartments and 3-bedroom townhouses positioned
                      near the 18-hole championship golf course, with thoughtfully planned layouts and a premium
                      community environment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Located in Emaar South, Golf Meadow offers residents an elegant lifestyle with strong
                      connectivity to major city destinations and future growth corridors, supporting both end-user
                      living and long-term investment appeal.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments & Townhouses" },
                      { label: "Bedrooms", value: "1BR - 3BR" },
                      { label: "Community", value: "Emaar South" },
                      { label: "Starting Price", value: "AED 1.12M" },
                    ].map((item) => (
                      <Card key={item.label} className="bg-muted/30">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground mt-1">{item.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Affordable Entry", "High ROI", "Rental Income Focused"].map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Golf Community", "Family Friendly", "Good Connectivity"].map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* RESIDENCES */}
                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Collection</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "1-Bedroom Apartments",
                        size: "From AED 1.12M",
                        desc: "Contemporary golf-facing residences with practical layouts and premium finishing for modern living.",
                      },
                      {
                        type: "2-Bedroom Apartments",
                        size: "Spacious family layouts",
                        desc: "Refined homes with open-plan living, abundant daylight, and views over landscaped surroundings.",
                      },
                      {
                        type: "3-Bedroom Apartments",
                        size: "Expanded interior planning",
                        desc: "Well-proportioned residences suitable for families seeking comfort within a golf-estate community.",
                      },
                      {
                        type: "3-Bedroom Townhouses",
                        size: "Limited collection",
                        desc: "Townhouses offering additional privacy and larger living spaces connected to community amenities.",
                      },
                    ].map((unit) => (
                      <Card key={unit.type} className="bg-muted/30">
                        <CardContent className="p-5">
                          <h4 className="font-semibold text-foreground mb-1">{unit.type}</h4>
                          <p className="text-xs text-primary font-medium mb-2">{unit.size}</p>
                          <p className="text-sm text-muted-foreground mb-3">{unit.desc}</p>
                          <Button size="sm" onClick={() => handleCTA(`Enquire ${unit.type}`)}>
                            Enquire Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* AMENITIES */}
                <TabsContent value="amenities" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Community Amenities</h2>
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

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Emaar South is a master-planned district centered around green open spaces and a championship golf
                    course, with strong access to key road links and strategic destinations including Expo City Dubai
                    and Al Maktoum International Airport.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Al Maktoum International Airport", time: "Approx. 5-10 min" },
                      { place: "Expo City Dubai", time: "Approx. 10 min" },
                      { place: "Dubai Marina", time: "Approx. 30 min" },
                      { place: "Downtown Dubai", time: "Approx. 35 min" },
                      { place: "Major Road Connectivity", time: "Easy Access" },
                      { place: "18-Hole Golf Course", time: "Within Community" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* GALLERY */}
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Golf Meadow gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* BROCHURE */}
                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <Download className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Project Brochure</h3>
                        <p className="text-sm text-muted-foreground">Full project details, unit mix, and master community information</p>
                        <Button onClick={() => requestBrochureDownload(brochureUrl)} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for available apartment and townhouse configurations</p>
                        <Button onClick={() => handleCTA("Download Floor Plan")} className="mt-2">Request Floor Plans</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">AED 1,120,000</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Enquire Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => requestBrochureDownload(brochureUrl)}>
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plans
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Consultation")}>
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">Flexible construction-linked payment plan. Contact us for latest installment milestones.</p>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                    <p>This platform is a marketing and discovery portal only. It is not a licensed brokerage. All inquiries are forwarded to the official developer sales team or their authorized channel partners.</p>
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

export default GolfMeadowEmaarSouthProject;
