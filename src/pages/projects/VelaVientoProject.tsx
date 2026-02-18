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
  CheckCircle, Users, Heart, Award, Sparkles
} from "lucide-react";

import heroImg from "@/assets/projects/vela-viento-hero.jpg";
import interiorImg from "@/assets/projects/vela-viento-interior.jpg";
import poolImg from "@/assets/projects/vela-viento-pool.jpg";
import canalImg from "@/assets/projects/vela-viento-canal.jpg";

const images = [heroImg, interiorImg, poolImg, canalImg];

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Heart, label: "Dorchester Spa" },
  { icon: Dumbbell, label: "State-of-the-Art Gym" },
  { icon: Users, label: "Dorchester Concierge" },
  { icon: Heart, label: "Yoga Deck" },
  { icon: Users, label: "Valet Parking" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Sparkles, label: "Private Elevators" },
  { icon: Award, label: "Hotel-Grade Services" },
];

const VelaVientoProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "VELA Viento Dorchester Collection", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>VELA Viento by Omniyat | Dorchester Collection Residences Business Bay</title>
        <meta name="description" content="Explore VELA Viento at Dubai Water Canal by Omniyat, ultra-luxury branded residences managed by Dorchester Collection in Business Bay, Dubai." />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/omniyat/vela-viento-dorchester-collection" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="VELA Viento Dorchester Collection by Omniyat"
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
                <Badge variant="secondary" className="border border-primary/30">
                  Newly Launched
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">VELA Viento Dorchester Collection</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Omniyat</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Marasi Bay, Business Bay, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartment · Penthouse · Duplex</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 2BR – Celestial Penthouse</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Completion Q3 2027</span>
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">A Realm Above the Ordinary</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      VELA Viento Dorchester Collection ascends to celestial heights above Marasi Bay — one of Dubai's most coveted waterfront addresses within Business Bay. Embodying the Latin meaning for 'sail' and 'wind', VELA Viento is an architectural statement by the globally renowned Foster + Partners, with bespoke interiors crafted by Gilles & Boissier and Banda Studio.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Comprising a strictly limited collection of 95 residences — 61 Viento Residences, 3 Sky Bridge Duplexes, 29 Horizon Residences, and 2 Celestial Penthouses — VELA Viento represents one of the rarest residential propositions in Dubai's luxury market.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Situated above the glistening waters of Marasi Bay, residents enjoy direct access to a curated waterfront promenade with fine dining experiences, luxury boutiques, and wellness spaces — all managed by the Dorchester Collection, one of the world's most distinguished hotel groups.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Architect", value: "Foster + Partners" },
                      { label: "Interiors", value: "Gilles & Boissier" },
                      { label: "Completion", value: "Q3 2027" },
                      { label: "Total Residences", value: "95 Units" },
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
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Interiors by Gilles & Boissier and Banda Studio</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Managed by Dorchester Collection — world's finest hotel group</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Strictly limited — only 95 residences on Marasi Bay</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Profile</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Luxury Segment", "Branded Residences", "High Capital Appreciation", "Investor Hotspot"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Waterfront", "Skyline View", "Resort Style", "Popular Location", "Good Connectivity", "City View"].map(tag => (
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
                        type: "Viento Residences",
                        config: "2 – 3 Bedroom · 61 Units",
                        size: "2,780 – 3,920 sq. ft.",
                        desc: "The signature residential collection at VELA Viento — elegantly proportioned 2 and 3-bedroom apartments with panoramic Marasi Bay and Burj Khalifa views, and full Dorchester Collection service access.",
                      },
                      {
                        type: "Horizon Residences",
                        config: "3 – 4 Bedroom · 29 Units",
                        size: "3,511 – 8,295 sq. ft.",
                        desc: "Expansive 3 and 4-bedroom residences offering sweeping vistas of the Dubai Water Canal and Downtown skyline, with bespoke Gilles & Boissier interior specifications.",
                      },
                      {
                        type: "Sky Bridge Duplexes",
                        config: "4 Bedroom · 3 Units",
                        size: "10,235 sq. ft.",
                        desc: "Three extraordinary Sky Bridge Duplexes spanning the iconic architectural bridge connecting the two towers — an unrivalled typology offering dramatic double-height living across two full levels.",
                      },
                      {
                        type: "Celestial Penthouses",
                        config: "4 Bedroom · 2 Units",
                        size: "13,822 – 15,759 sq. ft.",
                        desc: "Two Celestial Penthouses crowning VELA Viento — pinnacle residences with extraordinary 360° views of the Dubai skyline, Marasi Bay, and the Arabian Gulf, representing the ultimate expression of urban luxury.",
                      },
                    ].map((unit) => (
                      <Card key={unit.type} className="bg-muted/30">
                        <CardContent className="p-5">
                          <h4 className="font-semibold text-foreground mb-1">{unit.type}</h4>
                          <p className="text-xs text-primary mb-1 font-medium">{unit.config}</p>
                          <p className="text-xs text-muted-foreground mb-2 font-medium">{unit.size}</p>
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
                      As a Dorchester Collection-managed residence, VELA Viento owners receive access to the full spectrum of hotel-grade services: 24-hour concierge, valet, housekeeping, in-residence dining, private event planning, and exclusive Dorchester Spa and wellness facilities — delivered with the discretion and personalisation that defines the Dorchester standard globally.
                    </p>
                  </div>

                  <div className="mt-6 p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Marasi Bay Waterfront Promenade</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      VELA Viento residents enjoy direct access to the curated Marasi Bay waterfront promenade — home to fine dining destinations, luxury boutiques, art installations, and wellness spaces positioned along the Dubai Water Canal.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location at Marasi Bay</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    VELA Viento is positioned at Marasi Bay — the most prestigious waterfront address within Business Bay — offering unobstructed views of the Dubai Water Canal, the Burj Khalifa, and the Downtown Dubai skyline. The location delivers both urban connectivity and serene waterfront privacy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Burj Khalifa & Dubai Mall", time: "5 min" },
                      { place: "Downtown Dubai", time: "5 min" },
                      { place: "DIFC", time: "10 min" },
                      { place: "Dubai Marina", time: "20 min" },
                      { place: "Dubai International Airport", time: "20 min" },
                      { place: "Al Maktoum Airport", time: "40 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">The Marasi Bay Address</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Prime waterfront position on Dubai Water Canal</li>
                      <li>Unobstructed views of Burj Khalifa and Downtown Dubai</li>
                      <li>Direct access to the Marasi Bay waterfront promenade</li>
                      <li>Steps from Business Bay Metro Station</li>
                      <li>Minutes from DIFC, Downtown Dubai, and Dubai Mall</li>
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
                          alt={`VELA Viento Dorchester Collection gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Detailed layouts for all residence types including Celestial Penthouses</p>
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
                      <Badge variant="secondary" className="text-xs">Newly Launched</Badge>
                      <Badge variant="secondary" className="text-xs">Branded Residences</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Price on request</p>
                    <p className="text-xl font-bold text-foreground mt-1">2BR – Celestial Penthouse</p>
                    <p className="text-xs text-muted-foreground mt-1">Completion Q3 2027 · 95 Residences</p>
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
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Why VELA Viento Stands Apart</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Foster + Partners iconic architecture</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Gilles & Boissier bespoke interiors</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Dorchester Collection management</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Only 95 residences — strictly limited</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Prime Marasi Bay waterfront address</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 5 minutes from Burj Khalifa & Dubai Mall</li>
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

export default VelaVientoProject;
