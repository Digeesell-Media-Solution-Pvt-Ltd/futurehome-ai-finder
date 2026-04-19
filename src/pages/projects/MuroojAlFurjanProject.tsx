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
  Baby, Car, Train, CheckCircle
} from "lucide-react";

import heroImg from "@/assets/projects/murooj-al-furjan-hero.jpg";
import exteriorImg from "@/assets/projects/murooj-al-furjan-exterior.jpg";
import communityImg from "@/assets/projects/murooj-al-furjan-community.jpg";
import poolImg from "@/assets/projects/murooj-al-furjan-pool.jpg";

const images = [heroImg, exteriorImg, communityImg, poolImg];

const amenities = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Car, label: "Parking" },
  { icon: Waves, label: "Children's Pool" },
  { icon: Building2, label: "Basketball Court" },
  { icon: TreePine, label: "Parks & Walkways" },
  { icon: Building2, label: "Community Pavilion" },
];

const MuroojAlFurjanProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Murooj Al Furjan", ctaType });
  };

  return (
    <>
      <SeoHead
        title="Murooj Al Furjan by Nakheel | Ready Villas in Dubai"
        description="Explore Murooj Al Furjan by Nakheel offering ready luxury villas in Al Furjan, Dubai with premium community amenities."
        canonicalPath="/projects/nakheel/murooj-al-furjan"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={images[activeImage]} alt="Murooj Al Furjan by Nakheel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3"><CheckCircle className="w-3 h-3 mr-1" /> Handover Complete</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Murooj Al Furjan</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Nakheel</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Al Furjan, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Villa</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 4BR – 5BR</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Ready</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 4,900,000</span>
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
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Murooj Al Furjan</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Murooj Al Furjan is a prestigious villa community by Nakheel situated in the heart of Al Furjan, Dubai. Named after flourishing meadows, the development features 4 and 5-bedroom standalone villas with contemporary architecture, clean lines, and modern elegance.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Each villa is designed for spacious family living with private gardens, generous terraces, and premium interior finishes. The community weaves lush green landscapes between residences, creating a serene and nature-rich environment.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      From inside to poolside, the finest materials have been selected for exceptional finishes and an experience that makes you feel completely at home wherever you are within the community.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Villa" },
                      { label: "Bedrooms", value: "4BR – 5BR" },
                      { label: "Status", value: "Ready" },
                      { label: "Starting Price", value: "AED 4.9M" },
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
                      {["High Capital Appreciation", "Rental Income Focused", "Investor Hotspot", "Luxury Segment"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Gated Community", "Family Friendly", "Popular Location", "Good Connectivity"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Strategic Location</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Train, label: "Al Furjan Metro Station", time: "6 minutes" },
                      { icon: Building2, label: "Ibn Battuta Mall", time: "11 minutes" },
                      { icon: MapPin, label: "Dubai Marina", time: "16 minutes" },
                      { icon: MapPin, label: "Palm Jumeirah", time: "20 minutes" },
                      { icon: MapPin, label: "Al Maktoum Int'l Airport", time: "25 minutes" },
                      { icon: MapPin, label: "Downtown Dubai", time: "28 minutes" },
                    ].map(({ icon: Icon, label, time }) => (
                      <Card key={label} className="bg-muted/30">
                        <CardContent className="p-4 flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{label}</p>
                            <p className="text-xs text-muted-foreground">{time}</p>
                          </div>
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
                        <img src={img} alt={`Murooj Al Furjan gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                    <p className="text-3xl font-bold text-foreground">AED 4,900,000</p>
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

export default MuroojAlFurjanProject;
