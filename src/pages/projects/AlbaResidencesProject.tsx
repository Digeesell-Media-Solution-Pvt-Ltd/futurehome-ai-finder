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
  Building2, MapPin, Calendar, Banknote, BedDouble,
  Download, FileText, Phone, Star, Waves, Shield, Dumbbell, TreePine,
  Sparkles, Car, Crown, Gem
} from "lucide-react";

import heroImg from "@/assets/projects/alba-residences-hero.jpg";
import poolImg from "@/assets/projects/alba-residences-pool.jpg";
import lobbyImg from "@/assets/projects/alba-residences-lobby.jpg";
import aerialImg from "@/assets/projects/alba-residences-aerial.jpg";
import privatePoolImg from "@/assets/projects/alba-residences-private-pool.jpg";
import spaImg from "@/assets/projects/alba-residences-spa.jpg";

const images = [heroImg, poolImg, lobbyImg, aerialImg, privatePoolImg, spaImg];

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Waves, label: "Private Beach Access" },
  { icon: Crown, label: "Concierge" },
  { icon: Sparkles, label: "Branded Wellness Centre" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Car, label: "Valet Parking" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Waves, label: "Vitality Pools" },
  { icon: Gem, label: "Private Pool in Every Residence" },
  { icon: Crown, label: "Private Elevators" },
  { icon: Sparkles, label: "Treatment Rooms" },
];

const AlbaResidencesProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "The Alba Residences Dorchester Collection", ctaType });
  };

  return (
    <>
      <SeoHead
        title="The Alba Residences by Omniyat | Dorchester Collection Palm Jumeirah"
        description="Discover The Alba Residences at Palm Jumeirah by Omniyat, ultra-luxury branded waterfront homes managed by Dorchester Collection."
        canonicalPath="/projects/omniyat/alba-residences"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
          <img src={images[activeImage]} alt="The Alba Residences Dorchester Collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary/90 text-primary-foreground">Newly Launched</Badge>
                <Badge variant="secondary">Branded Residences</Badge>
                <Badge variant="secondary">Only 69 Homes</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">The Alba Residences</h1>
              <p className="text-white/90 text-lg md:text-xl mb-1">Dorchester Collection · by Omniyat</p>
              <p className="text-white/60 text-sm mb-4">Architecture by Zaha Hadid Architects · Landscape by Vladimir Djurovic</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Palm Jumeirah, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Residences & Penthouses</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 3BR – 4BR</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Q3 2028</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 43,000,000</span>
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
                  <TabsTrigger value="residences">Residences</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About The Alba Residences</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The Alba Residences Dorchester Collection is Palm Jumeirah's definitive ultra-luxury masterpiece, pioneered by OMNIYAT, designed by Zaha Hadid Architects, and managed by Dorchester Collection — the world's most iconic luxury hotel brand.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With only 69 exclusive residences including simplex and duplex layouts (3 to 4 bedrooms, 4,600 to 8,600 sq.ft) and three extraordinary super penthouses, The Alba represents the pinnacle of branded beachfront living in Dubai.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Inspired by the Arabic word for sea and the Latin for dawn, the development unites water and light in an architectural language of undulating organic forms rising from the Arabian Gulf. Every residence features a private pool, expansive terraces, and interiors curated with the finest materials.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Strategically positioned on Palm Jumeirah with panoramic views of the Arabian Gulf, Dubai Marina skyline, and Ain Dubai.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Total Residences", value: "69" },
                      { label: "Bedrooms", value: "3BR – 4BR" },
                      { label: "Handover", value: "Q3 2028" },
                      { label: "Starting Price", value: "AED 43M" },
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
                      {["Luxury Segment", "Branded Residences", "Limited Units", "High Capital Appreciation", "Investor Hotspot"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Beachfront", "Waterfront", "Island Living", "Resort Style", "Skyline View"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { type: "Simplex Residences", beds: "3 – 4 Bedrooms", size: "5,300 – 8,600 sq.ft", desc: "Beautifully light and spacious single-floor residences with inspiring waterfront views and expansive terraces." },
                      { type: "Duplex Residences", beds: "3 – 4 Bedrooms", size: "4,600 – 8,000 sq.ft", desc: "Two-level residences with double-height living spaces, private pools, and panoramic Gulf views." },
                      { type: "Super Penthouses", beds: "4 Bedrooms", size: "Bespoke", desc: "Three extraordinary penthouses spread over multiple floors with private gyms, majlis, and two swimming pools each." },
                      { type: "Sky Palace", beds: "Bespoke", size: "Tri-level", desc: "The ultimate pinnacle — vast living spaces across three floors with 360° panoramic views and unrivalled exclusivity." },
                    ].map((r) => (
                      <Card key={r.type} className="bg-muted/30">
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-foreground text-lg mb-1">{r.type}</h3>
                          <p className="text-sm text-primary font-medium mb-2">{r.beds} · {r.size}</p>
                          <p className="text-sm text-muted-foreground">{r.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">First-of-Its-Kind Amenities</h2>
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

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img src={img} alt={`The Alba gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                    <p className="text-3xl font-bold text-foreground">AED 43,000,000</p>
                    <p className="text-xs text-muted-foreground mt-1">Payment Plan: 5/55/40</p>
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
                    <h4 className="font-semibold text-foreground mb-2">Key Highlights</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Designed by Zaha Hadid Architects</li>
                      <li>• Managed by Dorchester Collection</li>
                      <li>• Private pool in every residence</li>
                      <li>• Landscape by Vladimir Djurovic</li>
                      <li>• Only 69 exclusive homes</li>
                    </ul>
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

export default AlbaResidencesProject;
