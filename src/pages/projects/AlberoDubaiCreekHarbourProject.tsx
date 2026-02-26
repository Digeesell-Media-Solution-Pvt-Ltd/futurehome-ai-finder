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
  Users,
  Home,
  Bike,
  GraduationCap,
  ShoppingBag,
  Trophy,
} from "lucide-react";

const heroImg = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3.jpg";
const featureImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_1.jpg";
const featureImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/FEATURES_1200X655_2.jpg";
const galleryImgOne = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/PRO_EXT_1-1024x740.jpg";
const galleryImgTwo = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/PRO_EXT_2-1024x740.jpg";
const galleryImgThree = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/PRO_INT_1-1024x740.jpg";
const galleryImgFour = "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/PRO_INT_2-1024x740.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: TreePine, label: "Lawn" },
  { icon: Trophy, label: "Table Tennis & Badminton" },
  { icon: Bike, label: "Running Track" },
  { icon: Trophy, label: "Multi-Sport Court" },
  { icon: ShoppingBag, label: "Promenade Retail" },
  { icon: GraduationCap, label: "Schools" },
  { icon: Home, label: "Neighbourhood Plaza" },
  { icon: Dumbbell, label: "Sport Park" },
  { icon: TreePine, label: "Community Park" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: Shield, label: "24/7 Security" },
];

const AlberoDubaiCreekHarbourProject = () => {
  const { openLeadCapture, requestBrochureDownload } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);
  const brochureUrl = getBrochureUrl("emaar", "albero-at-dubai-creek-harbour");

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Albero - Dubai Creek Harbour", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Albero - Dubai Creek Harbour by Emaar | Luxury Apartments</title>
        <meta
          name="description"
          content="Discover Albero at Dubai Creek Harbour by Emaar, featuring 1 to 3-bedroom apartments and 3-bedroom townhouses from AED 1.81M in a premium waterfront master community."
        />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/emaar/albero-at-dubai-creek-harbour" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={images[activeImage]} alt="Albero - Dubai Creek Harbour by Emaar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Albero - Dubai Creek Harbour</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Emaar</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Dubai Creek Harbour, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Luxury Apartments · Townhouses</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR - 3BR Apartments · 3BR Townhouses</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover TBD</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 1.81M</span>
              </div>
            </div>
          </div>
        </section>

        {/* Thumbnails */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"}`}>
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
                  <TabsTrigger value="apartments">Apartments</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                </TabsList>

                {/* OVERVIEW */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Albero - Dubai Creek Harbour</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Albero at Dubai Creek Harbour by Emaar is a refined waterfront address where contemporary
                      architecture meets nature-led living. Overlooking lush landscapes, the Creek, and skyline views,
                      the project is designed for residents seeking elegance, comfort, and long-term value.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The development offers a curated collection of 1 to 3-bedroom apartments and 3-bedroom
                      townhouses, with interiors crafted around natural tones, practical layouts, and premium
                      finishes. Spacious lobbies, quality materials, and functional planning align with Emaar&apos;s
                      signature residential standards.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Positioned within the 7.4 million sqm Dubai Creek Harbour master community, Albero connects
                      residents to parks, retail promenades, wellness-focused amenities, and key city destinations.
                      Backed by Emaar&apos;s track record, the project presents compelling end-user and investment appeal.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments & Townhouses" },
                      { label: "Developer", value: "Emaar" },
                      { label: "Handover", value: "TBD" },
                      { label: "Starting Price", value: "AED 1.81M" },
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
                      {["High Capital Appreciation", "Luxury Segment", "Investor Hotspot"].map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Waterfront", "Popular Location", "Family Friendly", "Good Connectivity"].map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* APARTMENTS */}
                <TabsContent value="apartments" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Collection</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { type: "1-Bedroom Apartments", size: "From AED 1.81M", desc: "Contemporary waterfront apartments with efficient layouts, quality finishes, and strong entry-level investment potential." },
                      { type: "2-Bedroom Apartments", size: "Premium family layouts", desc: "Spacious homes with balanced living zones and seamless indoor comfort suited for end-users and investors." },
                      { type: "3-Bedroom Apartments", size: "Expanded living spaces", desc: "Generously planned apartments designed for families seeking elevated comfort in a prime waterfront district." },
                      { type: "3-Bedroom Townhouses", size: "Limited collection", desc: "Townhouses offering added privacy and scale with community-oriented surroundings and landscaped open spaces." },
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
                    Dubai Creek Harbour is a premium waterfront enclave where contemporary design, green open spaces,
                    and lifestyle convenience come together. Albero residents enjoy easy access to Downtown Dubai,
                    Dubai International Airport, Creek Marina, and the Ras Al Khor Wildlife Sanctuary.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Downtown Dubai", time: "Approx. 15 min" },
                      { place: "Dubai International Airport", time: "Approx. 15 min" },
                      { place: "Business Bay", time: "Approx. 20 min" },
                      { place: "Dubai Marina", time: "Approx. 30 min" },
                      { place: "Ras Al Khor Wildlife Sanctuary", time: "Nearby" },
                      { place: "Creek Marina Waterfront", time: "Nearby" },
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
                          alt={`Albero gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Comprehensive development overview and unit details</p>
                        <Button onClick={() => requestBrochureDownload(brochureUrl)} className="mt-2">Request Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">TBD - request unit layout information</p>
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
                    <p className="text-3xl font-bold text-foreground">AED 1.81M</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Request Details
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => requestBrochureDownload(brochureUrl)}>
                      <Download className="w-4 h-4 mr-2" /> Request Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Request Floor Plans
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Consultation")}>
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">TBD - payment plan details to be announced by Emaar.</p>
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

export default AlberoDubaiCreekHarbourProject;
