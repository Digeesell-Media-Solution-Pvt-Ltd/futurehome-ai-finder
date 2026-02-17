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
  Building2, MapPin, Calendar, Banknote, BedDouble,
  Download, FileText, Phone, Star, Waves, Shield, Dumbbell, TreePine,
  Baby, Sparkles, Car, Users, Laptop, Heart, Home
} from "lucide-react";

import heroImg from "@/assets/projects/salva-hero.jpg";
import interiorImg from "@/assets/projects/salva-interior.jpg";
import poolImg from "@/assets/projects/salva-pool.jpg";
import livingImg from "@/assets/projects/salva-living.jpg";

const images = [heroImg, interiorImg, poolImg, livingImg];

const amenities = [
  { icon: Home, label: "Clubhouse" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Heart, label: "Jogging Track" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Sparkles, label: "Spa & Wellness" },
  { icon: Heart, label: "Yoga Deck" },
  { icon: Laptop, label: "Co-working Space" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Car, label: "Parking" },
];

const SalvaProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Salva at The Heights", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Salva at The Heights by Emaar | Wellness Villas in Dubai</title>
        <meta name="description" content="Explore Salva at The Heights Country Club & Wellness by Emaar Properties — exclusive 3 to 5 bedroom villas in Dubai's first wellness-led master community." />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/emaar/salva" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={images[activeImage]} alt="Salva at The Heights by Emaar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Salva at The Heights</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Emaar Properties</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> The Heights, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Villa</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 3BR – 5BR</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Q3 2030</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 6,500,000</span>
              </div>
            </div>
          </div>
        </section>

        {/* Thumbnails */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}>
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
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Salva at The Heights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Salva at The Heights Country Club & Wellness is the inaugural villa release within Emaar Properties' ambitious wellness-led master community in Dubai. Offering 483 exclusive 3, 4, and 5-bedroom villas with generous plot sizes from 4,847 sq.ft, the development is designed around nature, movement, and everyday balance.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The villas feature contemporary architecture with light-filled interiors, neutral material palettes, and layouts that prioritise indoor-outdoor flow. Private terraces, landscaped gardens, and green corridors create a serene residential environment that supports both active and restorative lifestyles.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Located near Expo City Dubai and Al Maktoum International Airport with 20-minute access to Dubai Hills Estate and 30 minutes to Downtown Dubai via Al Khail Road and Emirates Road.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Villa" },
                      { label: "Bedrooms", value: "3BR – 5BR" },
                      { label: "Handover", value: "Q3 2030" },
                      { label: "Starting Price", value: "AED 6.5M" },
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
                    <h3 className="text-lg font-semibold text-foreground mb-3">Villa Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { bed: "3 Bedroom", units: "185 units", area: "3,404 sq.ft", plot: "4,847 sq.ft" },
                        { bed: "4 Bedroom", units: "232 units", area: "4,307 sq.ft", plot: "5,143 sq.ft" },
                        { bed: "5 Bedroom", units: "66 units", area: "5,824 sq.ft", plot: "6,762 sq.ft" },
                      ].map((v) => (
                        <Card key={v.bed} className="bg-muted/30">
                          <CardContent className="p-4">
                            <p className="font-semibold text-foreground mb-2">{v.bed}</p>
                            <p className="text-xs text-muted-foreground">{v.units} · BUA {v.area}</p>
                            <p className="text-xs text-muted-foreground">Plot: {v.plot}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Luxury Segment", "High Capital Appreciation", "Investor Hotspot"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Wellness Living", "Family Friendly", "Gated Community", "Resort Style"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">World-Class Amenities</h2>
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

                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <Download className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Project Brochure</h3>
                        <p className="text-sm text-muted-foreground">Full project details, villa layouts, and specifications</p>
                        <Button onClick={() => handleCTA("Download Brochure")} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for 3, 4, and 5-bedroom villas</p>
                        <Button onClick={() => handleCTA("Download Floor Plan")} className="mt-2">Download Floor Plans</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img src={img} alt={`Salva gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
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
                    <p className="text-3xl font-bold text-foreground">AED 6,500,000</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Request Details
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Brochure")}>
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plan
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Consultation")}>
                      <Phone className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Payment Plan</h4>
                    <p className="text-sm text-muted-foreground">80/20 construction-linked — 10% down payment with staggered milestones and 20% on completion.</p>
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

export default SalvaProject;
