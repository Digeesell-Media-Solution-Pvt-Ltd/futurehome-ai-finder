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
  Waves,
  Shield,
  Dumbbell,
  TreePine,
  Baby,
  Heart,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "https://symphonybychaimaa.com/assets/banner-1-DSTz2y07.webp";
const featureImgOne = "https://symphonybychaimaa.com/assets/facade1-Du2-hg9r.webp";
const featureImgTwo = "https://symphonybychaimaa.com/assets/interior1-DkzPIgiT.webp";
const galleryImgOne = "https://symphonybychaimaa.com/assets/gallery1-B8Ik8DPJ.webp";
const galleryImgTwo = "https://symphonybychaimaa.com/assets/gallery2-Bq6B_GBV.webp";
const galleryImgThree = "https://symphonybychaimaa.com/assets/gallery3-Df-_Ol0e.webp";
const galleryImgFour = "https://symphonybychaimaa.com/assets/gallery4-Bi8yAt8G.webp";
const galleryImgFive = "https://symphonybychaimaa.com/assets/terrace-pool1-DFu2OqDt.webp";
const galleryImgSix = "https://symphonybychaimaa.com/assets/terrace-pool2-BySZKQrz.webp";
const galleryImgSeven = "https://symphonybychaimaa.com/assets/interior3-Djq1ihEu.webp";
const galleryImgEight = "https://symphonybychaimaa.com/assets/interior6-BwRJM2aC.webp";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: Heart, label: "Wellness-Inspired Living Concept" },
  { icon: Waves, label: "Resort-Style Pools & Terrace Leisure" },
  { icon: Dumbbell, label: "Holistic Wellness & Fitness Facilities" },
  { icon: Baby, label: "Family-Friendly Podiums & Play Spaces" },
  { icon: TreePine, label: "Curated Outdoor Lifestyle Zones" },
  { icon: Users, label: "Community-Centered Social Spaces" },
  { icon: Building2, label: "Smartly Designed 1 & 2 Bedroom Homes" },
  { icon: Shield, label: "24/7 Security & Controlled Access" },
];

const SymphonyByChaimaaProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Symphony by Chaimaa", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Symphony by Chaimaa | Wellness-Inspired 1 & 2 Bedroom Residences in Majan</title>
        <meta
          name="description"
          content="Discover Symphony by Chaimaa in Majan, Dubai — a wellness-inspired residential project with refined 1 and 2 bedroom apartments, premium amenities, and community-focused living."
        />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/chaimaa/symphony-by-chaimaa" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Symphony by Chaimaa in Majan, Dubai"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">New Launch</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Symphony by Chaimaa</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Chaimaa Holdings</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Majan, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartments</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR & 2BR Residences</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover TBD</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> Price on Request</span>
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
                <img
                  src={img}
                  alt={`View ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
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
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Symphony by Chaimaa</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Symphony by Chaimaa introduces a wellness-inspired residential address in Dubai&apos;s Majan
                      district, envisioned for buyers who value design quality, comfort, and a lifestyle centered
                      around balance. The project presents a refined collection of 1 and 2 bedroom residences shaped by
                      contemporary architecture, elegant interior expression, and practical everyday planning.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Official project messaging emphasizes holistic living: spaces that support relaxation, family
                      moments, and active routines through curated amenities and thoughtfully layered community zones.
                      From facade aesthetics to interior ambiance, Symphony is positioned as a premium yet livable
                      environment that aligns with modern end-user expectations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Located in Majan, the development benefits from established neighborhood infrastructure and growing
                      long-term demand within Dubai&apos;s evolving residential landscape. For end users, it offers a
                      lifestyle-oriented home; for investors, it stands out as a concept-driven launch in a connected
                      submarket with broad rental and resale appeal.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Developer", value: "Chaimaa Holdings" },
                      { label: "Community", value: "Majan, Dubai" },
                      { label: "Residences", value: "1BR & 2BR Apartments" },
                      { label: "Payment Plan", value: "Available on request" },
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
                    <h3 className="text-lg font-semibold text-foreground mb-3">Who is it for?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Symphony by Chaimaa suits end users seeking a wellness-led home in a calm, connected district,
                      and investors targeting a design-forward launch with strong mid-market and premium-rental demand.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-5">
                  <h2 className="text-2xl font-bold text-foreground">Key Highlights</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Wellness-inspired development concept focused on everyday balance and comfort.</li>
                    <li>• Officially positioned in Majan, one of Dubai&apos;s growing residential districts.</li>
                    <li>• 1 and 2 bedroom apartment mix aligned with broad buyer and tenant demand.</li>
                    <li>• Contemporary architecture with premium, lifestyle-driven common areas.</li>
                    <li>• Holistic facilities designed for relaxation, activity, and family time.</li>
                    <li>• Community-oriented planning with social and leisure zones integrated into the project.</li>
                    <li>• Strong appeal for first-time premium buyers and upgrade end users.</li>
                    <li>• Suitable for investors targeting long-term occupancy and resale liquidity.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">Why this project?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Distinct lifestyle positioning through a wellness-led brand narrative.</li>
                    <li>• Efficient 1BR/2BR unit strategy in a demand-resilient segment.</li>
                    <li>• Majan location with access to nearby schools, healthcare, and retail zones.</li>
                    <li>• Premium visual identity with practical liveability for end users.</li>
                    <li>• Balanced potential for both rental income and medium-term capital growth.</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Wellness</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Holistic wellness facilities</li>
                          <li>• Resort-style pools and deck areas</li>
                          <li>• Relaxation-focused lifestyle zones</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Family</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Family-friendly leisure spaces</li>
                          <li>• Safe circulation and shared podium areas</li>
                          <li>• Residential environment designed for daily comfort</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Sports</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Fitness and active-lifestyle facilities</li>
                          <li>• Proximity to neighborhood sports areas in Majan</li>
                          <li>• Outdoor activity-oriented planning</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2">Community</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Curated social spaces and lounge environments</li>
                          <li>• Contemporary lobby and shared amenities design</li>
                          <li>• 24/7 security and controlled access</li>
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

                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Symphony by Chaimaa is positioned in Majan, Dubai, with nearby community infrastructure referenced
                    on official project materials. The timing below is approximate and subject to traffic conditions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Majan Family Park", time: "Approx. nearby (official map reference)" },
                      { place: "Majan Active Park / Basketball Court", time: "Approx. nearby (official map reference)" },
                      { place: "Cityland Mall", time: "Approx. 8-12 min (approximate)" },
                      { place: "Dubai Outlet Mall", time: "Approx. 12-18 min (approximate)" },
                      { place: "Dubai Hills Mall", time: "Approx. 18-25 min (approximate)" },
                      { place: "Dubai Silicon Oasis zone", time: "Approx. 10-15 min (approximate)" },
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
                    {[
                      galleryImgOne,
                      galleryImgTwo,
                      galleryImgThree,
                      galleryImgFour,
                      galleryImgFive,
                      galleryImgSix,
                      galleryImgSeven,
                      galleryImgEight,
                    ].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Symphony by Chaimaa gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <Download className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Project Brochure</h3>
                        <p className="text-sm text-muted-foreground">Request full project brochure by submitting your details.</p>
                        <Button onClick={() => handleCTA("Download Brochure")} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Request floor plan layouts via lead capture.</p>
                        <Button onClick={() => handleCTA("Download Floor Plan")} className="mt-2">Download Floor Plan</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Payment Plan</h3>
                        <p className="text-sm text-muted-foreground">Get the latest payment milestones and structure.</p>
                        <Button onClick={() => handleCTA("Download Payment Plan")} className="mt-2">Download Payment Plan</Button>
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
                    <p className="text-3xl font-bold text-foreground">Price on Request</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Enquire Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Brochure")}>
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plan
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Payment Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Payment Plan
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Consultation")}>
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">Available on request</p>
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

export default SymphonyByChaimaaProject;
