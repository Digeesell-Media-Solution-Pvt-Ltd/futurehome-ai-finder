import { SeoHead } from "@/components/seo/SeoHead";
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
  CheckCircle, Users, Heart, Award
} from "lucide-react";

import heroImg from "@/assets/projects/orla-dorchester-hero.jpg";
import interiorImg from "@/assets/projects/orla-dorchester-interior.jpg";
import beachImg from "@/assets/projects/orla-dorchester-beach.jpg";
import spaImg from "@/assets/projects/orla-dorchester-spa.jpg";

const images = [heroImg, interiorImg, beachImg, spaImg];

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Heart, label: "Private Beach" },
  { icon: Users, label: "Dorchester Concierge" },
  { icon: Heart, label: "Spa & Wellness" },
  { icon: Dumbbell, label: "State-of-the-Art Gym" },
  { icon: Heart, label: "Yoga Deck" },
  { icon: Users, label: "Valet Parking" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Award, label: "Branded Hotel Services" },
];

const OrlaDorchesterProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "ORLA Dorchester Collection", ctaType });
  };

  return (
    <>
      <SeoHead
        title="ORLA Dorchester Collection by Omniyat | Luxury Residences on Palm Jumeirah"
        description="Discover ORLA Dorchester Collection by Omniyat — a Foster + Partners-designed masterpiece on Palm Jumeirah with 89 ultra-luxury residences, Super Penthouses, and Dorchester Collection management."
        canonicalPath="/projects/omniyat/orla-dorchester-collection"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="ORLA Dorchester Collection by Omniyat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="border border-primary/30 flex items-center gap-1">
                  <Award className="w-3 h-3" /> Foster + Partners Architecture
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Dorchester Collection Managed
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">ORLA Dorchester Collection</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Omniyat</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Palm Jumeirah, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartment · Penthouse · Duplex</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 2BR – Sky Palace</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Completion 2026</span>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">Where City Meets Sanctuary</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      ORLA Dorchester Collection is an architectural masterpiece by Omniyat, occupying a prized position at the crown of Palm Jumeirah — one of the world's most iconic addresses. Designed by the legendary Foster + Partners with landscape architecture by ZED Collective, ORLA is a singular statement in ultra-luxury residential design.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      At ORLA, indoor and outdoor dissolve seamlessly — where sea and sky define every perspective, and energising natural light streams through each residence from sunrise to the final golden hour. The development comprises a strictly limited collection of 89 residences, 2 Super Penthouses, a Sky Palace, and a Mansion.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Every residence is managed by the Dorchester Collection — one of the world's most prestigious hotel groups — ensuring a standard of personalised service, discretion, and hospitality that extends across every touchpoint of daily life at ORLA.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Architect", value: "Foster + Partners" },
                      { label: "Management", value: "Dorchester Collection" },
                      { label: "Completion", value: "2026" },
                      { label: "Total Units", value: "89 + Penthouses" },
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
                      <Award className="w-4 h-4 text-primary" /> World-Class Credentials
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Architecture by Foster + Partners — global icon of design excellence</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Managed by Dorchester Collection — one of the world's finest hotel groups</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Landscape design by ZED Collective</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Strictly limited collection — 89 residences only</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Profile</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Luxury Segment", "Branded Residences", "Limited Units", "High Capital Appreciation"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Beachfront", "Island Living", "Resort Style", "Skyline View", "Waterfront"].map(tag => (
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
                        type: "2 Bedroom Simplex",
                        size: "2,799 – 4,299 sq. ft.",
                        desc: "Elegantly proportioned simplex apartments with commanding sea views, premium finishes, and full access to Dorchester Collection hotel services.",
                      },
                      {
                        type: "3 Bedroom Simplex",
                        size: "3,181 – 4,435 sq. ft.",
                        desc: "Three-bedroom residences offering sweeping panoramas of the Arabian Gulf and Dubai skyline, with bespoke interior specifications crafted for discerning residents.",
                      },
                      {
                        type: "3 & 4 Bedroom Duplex",
                        size: "4,871 – 11,749 sq. ft.",
                        desc: "Double-height duplex residences with private terraces, dramatic double-volume living spaces, and the finest material selections across two full floors.",
                      },
                      {
                        type: "Triplex & Penthouse",
                        size: "9,293 – 30,678 sq. ft.",
                        desc: "Extraordinary triplex residences and two Super Penthouses of 20,107 and 30,678 sq. ft. — defining a new category of Palm Jumeirah trophy ownership.",
                      },
                      {
                        type: "Sky Palace",
                        size: "One of a kind",
                        desc: "A singular Sky Palace — a fully bespoke residence unlike any other on Palm Jumeirah, offering the ultimate expression of private luxury living in Dubai.",
                      },
                      {
                        type: "Mansion",
                        size: "One of a kind",
                        desc: "A one-of-a-kind private Mansion — an unparalleled ground-level estate with private garden, direct beach access, and total privacy within the ORLA community.",
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
                  <h2 className="text-2xl font-bold text-foreground mb-6">Amenities & Services</h2>
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dorchester Collection Services</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      As a Dorchester Collection-managed residence, ORLA owners receive access to the full spectrum of hotel-grade services: 24-hour concierge, valet, housekeeping, in-residence dining, private event planning, and the exclusive Dorchester Spa and wellness facilities — delivered with the discretion and personalisation that defines the Dorchester standard globally.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location on Palm Jumeirah</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    ORLA occupies a commanding position at the crownof Palm Jumeirah — Dubai's iconic island address — surrounded by the Arabian Gulf on three sides with unobstructed 270-degree sea and skyline views. The location combines absolute privacy with connectivity to the world-class amenities of the Palm and wider Dubai.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Dubai Marina", time: "10 min" },
                      { place: "Dubai Mall & Burj Khalifa", time: "20 min" },
                      { place: "DIFC", time: "20 min" },
                      { place: "Atlantis The Palm", time: "5 min" },
                      { place: "Dubai International Airport", time: "30 min" },
                      { place: "Al Maktoum Airport", time: "40 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">The Palm Jumeirah Address</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Crown of the Palm — the island's most prestigious position</li>
                      <li>270° unobstructed Arabian Gulf views</li>
                      <li>Private beachfront — no shared beach access</li>
                      <li>Proximity to Atlantis The Palm and Palm West Beach</li>
                      <li>Monorail connectivity to the mainland</li>
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
                          alt={`ORLA Dorchester Collection gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Full residence details, specification, and brand overview</p>
                        <Button onClick={() => handleCTA("Download Brochure")} className="mt-2">Request Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for all unit types including Penthouses</p>
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
                      <Badge variant="secondary" className="text-xs">Branded Residences</Badge>
                      <Badge variant="secondary" className="text-xs">Limited Units</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Price on request</p>
                    <p className="text-xl font-bold text-foreground mt-1">2BR – Sky Palace</p>
                    <p className="text-xs text-muted-foreground mt-1">Completion 2026 · 89 Residences</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Pricing")}>
                      <Star className="w-4 h-4 mr-2" /> Request Details
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
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Why ORLA Stands Apart</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Foster + Partners iconic design</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Dorchester Collection management</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Only 89 residences — strictly limited</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Private beachfront on Palm Jumeirah</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 270° unobstructed sea views</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                    <p>This platform connects buyers with official developer sales representatives. It is a marketing and discovery portal only — not a licensed brokerage. All enquiries are forwarded to the Omniyat sales team or their authorised partners.</p>
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

export default OrlaDorchesterProject;
