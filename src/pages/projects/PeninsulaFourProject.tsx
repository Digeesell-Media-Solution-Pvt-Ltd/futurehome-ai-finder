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
  Building2, MapPin, Calendar, BedDouble,
  Download, FileText, Phone, Star, Waves, Shield, Dumbbell,
  CheckCircle, TreePine, ShoppingBag, Award
} from "lucide-react";

import heroImg from "@/assets/projects/peninsula-four-hero.jpg";
import interiorImg from "@/assets/projects/peninsula-four-interior.jpg";
import poolImg from "@/assets/projects/peninsula-four-pool.jpg";
import plazaImg from "@/assets/projects/peninsula-four-plaza.jpg";

const images = [heroImg, interiorImg, poolImg, plazaImg];

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Dumbbell, label: "State-of-the-Art Gym" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: ShoppingBag, label: "Retail & Dining Plaza" },
  { icon: Award, label: "Concierge Services" },
  { icon: Shield, label: "24/7 Security" },
  { icon: TreePine, label: "Jogging Track" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Building2, label: "Entertainment Facilities" },
];

const PeninsulaFourProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Peninsula Four, The Plaza", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Peninsula Four The Plaza by Select Group | Waterfront Residences Business Bay Dubai</title>
        <meta name="description" content="Discover Peninsula Four, The Plaza by Select Group — luxury waterfront studios to 4BR penthouses and duplex lofts in Business Bay, steps from Downtown Dubai and Burj Khalifa." />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/select-group/peninsula-four-the-plaza" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Peninsula Four The Plaza by Select Group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="border border-primary/30">
                  Peninsula Masterplan
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Waterfront Community
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Peninsula Four, The Plaza</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Select Group</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Business Bay, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartment · Penthouse · Duplex Loft</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Studio – 4BR Penthouse</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover Q2 2026</span>
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
                  activeImage === i ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Live in the Heart of It All</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Peninsula Four, The Plaza by Select Group is the crown jewel of the fully integrated Peninsula master waterfront community in Business Bay. Positioned at the beating core of this landmark mixed-use development, Peninsula Four introduces The Plaza — a dynamic waterfront destination bringing together residences, retail, dining, and entertainment in one vibrant urban canvas.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The development comprises two architecturally striking towers offering studios to 4-bedroom penthouses, alongside a collection of low-rise waterfront Duplex Lofts — delivering a curated spectrum of luxury urban living typologies for residents, families, and investors.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      At the heart of the development, The Plaza creates a lively environment with waterside eateries, al-fresco dining, boutique retail, and entertainment facilities — making Peninsula Four a true live, work, and play destination on the Dubai Water Canal.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Developer", value: "Select Group" },
                      { label: "Community", value: "Peninsula Masterplan" },
                      { label: "Location", value: "Business Bay" },
                      { label: "Unit Range", value: "Studio – 4BR Penthouse" },
                    ].map((item) => (
                      <Card key={item.label} className="bg-muted/30">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground mt-1 text-sm">{item.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="p-5 bg-primary/5 border border-primary/15 rounded-xl">
                    <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" /> Why Peninsula Four Stands Apart
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Part of the acclaimed Peninsula masterplan by Select Group</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Direct Dubai Water Canal frontage with curated plaza</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Multiple typologies — Towers, Penthouses, and Duplex Lofts</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Steps from Downtown Dubai, Burj Khalifa, and Business Bay Metro</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Profile</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["High ROI", "High Capital Appreciation", "Investor Hotspot", "Rental Income Focused"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Waterfront", "City View", "Skyline View", "Popular Location", "Good Connectivity"].map(tag => (
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
                        type: "Studio Apartments",
                        size: "From 494 sq. ft.",
                        desc: "Smartly designed studio apartments combining contemporary style with premium finishes — ideal for professionals and investors seeking a prime Business Bay address with strong rental appeal.",
                      },
                      {
                        type: "1 & 2 Bedroom Apartments",
                        size: "Available in towers",
                        desc: "Generously proportioned 1 and 2-bedroom residences flooded with natural light, featuring open-plan layouts and privileged views of The Plaza and the Dubai Water Canal skyline.",
                      },
                      {
                        type: "3 & 4 Bedroom Apartments",
                        size: "Up to 5,260 sq. ft.",
                        desc: "Spacious 3 and 4-bedroom residences crafted for luxury family living — expansive layouts with premium finishes, dedicated dining areas, and panoramic views of Downtown Dubai and the canal.",
                      },
                      {
                        type: "4 Bedroom Penthouses",
                        size: "Up to 5,260 sq. ft.",
                        desc: "Crown-floor 4-bedroom penthouses commanding extraordinary 360° vistas of the Burj Khalifa, Dubai Water Canal, and the entire Peninsula masterplan — the pinnacle of luxury at The Plaza.",
                      },
                      {
                        type: "The Lofts — 3BR Duplex",
                        size: "3,674 – 4,000 sq. ft.",
                        desc: "Low-rise waterfront 3-bedroom duplex Lofts offering a tranquil refuge from city life — timeless elegance, lush interiors, and thoughtfully designed living areas for families who value space.",
                      },
                      {
                        type: "The Lofts — 4BR Duplex",
                        size: "Up to 4,513 sq. ft.",
                        desc: "Exceptional 4-bedroom duplex Lofts — the most expansive low-rise offering at Peninsula Four, designed with meticulous attention to detail for those who appreciate copious open spaces and waterfront serenity.",
                      },
                    ].map((unit) => (
                      <Card key={unit.type} className="bg-muted/30">
                        <CardContent className="p-5">
                          <h4 className="font-semibold text-foreground mb-1">{unit.type}</h4>
                          <p className="text-xs text-primary mb-2 font-medium">{unit.size}</p>
                          <p className="text-sm text-muted-foreground mb-4">{unit.desc}</p>
                          <Button size="sm" onClick={() => handleCTA(`Enquire ${unit.type}`)}>
                            Request Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* AMENITIES */}
                <TabsContent value="amenities" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Amenities & The Plaza</h2>
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

                  <div className="mt-8 p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">The Plaza — Where Active Living Comes Naturally</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      At the heart of Peninsula Four, The Plaza delivers an exceptional living experience beyond your residence — with waterside eateries, al-fresco dining, boutique stores, entertainment facilities, generous gardens, and public realm areas. Whether seeking tranquillity or lively interaction, The Plaza is the perfect stage for immersing yourself in the best of Business Bay waterfront living.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location in Business Bay</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Peninsula Four, The Plaza occupies a prime waterfront position within the Peninsula masterplan in Business Bay — Dubai's most dynamic mixed-use district. Fronting the Dubai Water Canal, the development offers unobstructed views of the Burj Khalifa and Downtown Dubai skyline, with unrivalled connectivity to all of Dubai's key destinations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Burj Khalifa & Dubai Mall", time: "5 min" },
                      { place: "Downtown Dubai", time: "5 min" },
                      { place: "Business Bay Metro Station", time: "5 min" },
                      { place: "DIFC", time: "10 min" },
                      { place: "Dubai International Airport", time: "20 min" },
                      { place: "Dubai Marina", time: "20 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Peninsula Masterplan</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Fully integrated waterfront community by Select Group</li>
                      <li>Direct Dubai Water Canal frontage throughout</li>
                      <li>Curated retail, dining, and entertainment plaza</li>
                      <li>Steps from Business Bay Metro Station</li>
                      <li>5 minutes to Burj Khalifa and Dubai Mall</li>
                    </ul>
                  </div>
                </TabsContent>

                {/* GALLERY */}
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Peninsula Four The Plaza gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Full development overview, floor plans, and community masterplan</p>
                        <Button onClick={() => handleCTA("Download Brochure")} className="mt-2">Request Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for towers, penthouses, and duplex lofts</p>
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
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">Waterfront</Badge>
                      <Badge variant="secondary" className="text-xs">High ROI</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting From</p>
                    <p className="text-2xl font-bold text-primary mt-1">AED 1.1M</p>
                    <p className="text-sm text-muted-foreground">Studio – 4BR Penthouse</p>
                    <p className="text-xs text-muted-foreground mt-1">Business Bay · Dubai Water Canal · Handover Q2 2026</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Pricing")}>
                      <Star className="w-4 h-4 mr-2" /> Request Pricing
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Brochure")}>
                      <Download className="w-4 h-4 mr-2" /> Request Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Request Floor Plans
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Viewing")}>
                      <Phone className="w-4 h-4 mr-2" /> Arrange a Viewing
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Highlights</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Peninsula master waterfront community</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Studios to 4BR Penthouses (494–5,260 sq.ft.)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Duplex Lofts (3,674–4,513 sq.ft.)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Curated retail & dining plaza</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 5 min to Burj Khalifa & Dubai Mall</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                    <p>This platform connects buyers with official developer sales representatives. It is a marketing and discovery portal only — not a licensed brokerage. All enquiries are forwarded to the Select Group sales team or their authorised partners.</p>
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

export default PeninsulaFourProject;
