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
  Users,
} from "lucide-react";

const heroImg = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_1-1.jpg";
const featureImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_1-1.jpg";
const featureImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/FEATURES_1200X655_2-2.jpg";
const galleryImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_EXT_1-2-1024x740.jpg";
const galleryImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_EXT_2-2-1024x740.jpg";
const galleryImgThree = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_INT_1-2-1024x740.jpg";
const galleryImgFour = "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_INT_2-2-1024x740.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: Building2, label: "18-Hole Championship Golf Course Access" },
  { icon: Waves, label: "Adult & Kids Swimming Pools" },
  { icon: Dumbbell, label: "Indoor & Outdoor Gym" },
  { icon: Heart, label: "Yoga Areas" },
  { icon: TreePine, label: "Landscaped Parks & Open Spaces" },
  { icon: Users, label: "Community Clubhouse" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Shield, label: "24/7 Security" },
];

const GolfDaleEmaarSouthProject = () => {
  const { openLeadCapture, requestBrochureDownload } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);
  const brochureUrl = getBrochureUrl("emaar", "golf-dale-at-emaar-south");

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Golf Dale at Emaar South", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Golf Dale at Emaar South by Emaar | Golf-Facing 1-3BR Apartments</title>
        <meta
          name="description"
          content="Discover Golf Dale at Emaar South by Emaar — 1 to 3-bedroom golf-facing apartments from AED 1.12M in a premium green community."
        />
        <link rel="canonical" href="https://off-plan-projects.com/projects/emaar/golf-dale-at-emaar-south" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Golf Dale at Emaar South by Emaar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Golf Dale at Emaar South</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Emaar Properties</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Emaar South, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Luxury Apartments</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR - 3BR Apartments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover TBD</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 1.12M</span>
              </div>
            </div>
          </div>
        </section>

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

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Golf Dale at Emaar South</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Golf Dale at Emaar South is a golf-inspired residential address shaped by open views, natural
                      surroundings, and contemporary architecture. The project blends refined design with everyday
                      comfort for a calm, well-connected lifestyle.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The development features 1 to 3-bedroom apartments with thoughtfully planned layouts and strong
                      community integration around leisure, wellness, and green spaces.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Located in Emaar South, Golf Dale offers strategic access to major destinations while providing
                      residents with a premium golf-estate environment suited to both end users and investors.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Luxury Apartments" },
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
                      {["Affordable Entry", "High ROI", "Investor Hotspot"].map((tag) => (
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

                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Collection</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "1-Bedroom Apartments",
                        size: "From AED 1.12M",
                        desc: "Well-planned residences with premium finishes and views over landscaped surroundings.",
                      },
                      {
                        type: "2-Bedroom Apartments",
                        size: "Family-oriented layouts",
                        desc: "Spacious homes designed for everyday comfort with balanced interior planning.",
                      },
                      {
                        type: "3-Bedroom Apartments",
                        size: "Expanded premium units",
                        desc: "Generous configurations ideal for families seeking space, quality, and connectivity.",
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

                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Emaar South is a growing master community with golf, parks, and daily conveniences, positioned for
                    efficient access to Al Maktoum International Airport, Expo City Dubai, and major city corridors.
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

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Golf Dale gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <Download className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Project Brochure</h3>
                        <p className="text-sm text-muted-foreground">Full project details, unit mix, and community highlights</p>
                        <Button onClick={() => requestBrochureDownload(brochureUrl)} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for available apartment configurations</p>
                        <Button onClick={() => handleCTA("Download Floor Plan")} className="mt-2">Request Floor Plans</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

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

export default GolfDaleEmaarSouthProject;
