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
  Baby, Heart, ShoppingBag, Zap, Users
} from "lucide-react";

import heroImg from "@/assets/projects/vista-ridge-hero.jpg";
import interiorImg from "@/assets/projects/vista-ridge-interior.jpg";
import poolImg from "@/assets/projects/vista-ridge-pool.jpg";
import aerialImg from "@/assets/projects/vista-ridge-aerial.jpg";

const images = [heroImg, interiorImg, poolImg, aerialImg];

const amenities = [
  { icon: Waves, label: "Adult Pool" },
  { icon: Baby, label: "Kids Pool & Splash Pad" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Dumbbell, label: "Indoor & Outdoor Gym" },
  { icon: Heart, label: "Indoor & Outdoor Yoga" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Zap, label: "Padel Court" },
  { icon: Users, label: "Event Lawn & BBQ Area" },
  { icon: ShoppingBag, label: "Retail Outlets" },
  { icon: Users, label: "Multipurpose Room" },
  { icon: Shield, label: "24/7 Security" },
];

const VistaRidgeProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Vista Ridge at Emaar South", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Vista Ridge at Emaar South by Emaar | Golf Apartments in Dubai</title>
        <meta name="description" content="Explore Vista Ridge at Emaar South by Emaar — golf-front apartments from AED 2.5M with championship course views, resort-style amenities, and exceptional investment potential." />
        <link rel="canonical" href="https://off-plan-projects.com/projects/emaar/vista-ridge" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Vista Ridge at Emaar South by Emaar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">Newly Launched</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Vista Ridge at Emaar South</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Emaar Properties</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Emaar South, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartment</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR – 3BR</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Q4 2028</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> From AED 2,545,888</span>
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
                  <TabsTrigger value="apartments">Apartments</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                </TabsList>

                {/* OVERVIEW */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Vista Ridge at Emaar South</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Vista Ridge at Emaar South is Emaar Properties' latest golf-facing apartment collection within the Emaar South master community. Offering 1, 2, and 3-bedroom apartments from 1,286 sq.ft and starting at AED 2,545,888, Vista Ridge delivers refined living shaped by the essential elements of golf and nature.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Set amidst unspoiled fairways and open green landscapes, each residence is designed to breathe — with airy contemporary interiors, warm timber cabinetry, textured stone detailing, and soft neutral palettes accented with marshy greens and earthy tones. Floor-to-ceiling windows frame the golf course as a living canvas, making every room a destination.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Positioned minutes from Al Maktoum International Airport and adjacent to Expo City Dubai, Vista Ridge offers investors competitive entry-level pricing within a master community undergoing transformative infrastructure investment — one of Dubai's most compelling growth corridors.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartment" },
                      { label: "Bedrooms", value: "1BR – 3BR" },
                      { label: "Handover", value: "Q4 2028" },
                      { label: "Starting Price", value: "AED 2.54M" },
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
                      {["Affordable Entry", "High ROI", "Rental Income Focused"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Golf Community", "Family Friendly", "Good Connectivity"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* APARTMENTS */}
                <TabsContent value="apartments" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Apartment Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { type: "1 Bedroom Apartment", size: "From 1,286 sq.ft", desc: "Compact golf-view residences ideal for single investors or young professionals seeking entry to Emaar South." },
                      { type: "2 Bedroom Apartment", size: "Area on request", desc: "Spacious open-plan layouts with large balconies and panoramic fairway views — strong rental demand." },
                      { type: "3 Bedroom Apartment", size: "Area on request", desc: "Generous family-sized residences with premium kitchen, dining, and dedicated living areas." },
                      { type: "3 Bedroom Townhouse", size: "Area on request", desc: "Exclusive ground-level townhomes with private gardens and direct golf course frontage." },
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

                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Interior Design Palette</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Homes at Vista Ridge echo the landscape beyond — textured stone and warm timber connect interiors to their golf surroundings. Soft neutrals mingle with marshy greens, earthy browns, and gentle beiges, creating a calming, sophisticated aesthetic throughout every room.
                    </p>
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

                  <div className="mt-8 p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">18-Hole Championship Golf Course</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Vista Ridge residents enjoy direct access to Emaar South's world-class 18-hole championship golf course — one of the UAE's finest. From sunrise tee-off to evening walks along the fairways, the course defines life at Vista Ridge.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Emaar South is positioned at the confluence of Al Maktoum International Airport, Expo City Dubai, and major transport arteries connecting south and central Dubai — making Vista Ridge one of the most strategically located investments in the city.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Al Maktoum International Airport", time: "5 min" },
                      { place: "Expo City Dubai", time: "10 min" },
                      { place: "Dubai Hills Estate", time: "20 min" },
                      { place: "Downtown Dubai", time: "35 min" },
                      { place: "Dubai Marina", time: "30 min" },
                      { place: "Palm Jumeirah", time: "30 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Emaar South Masterplan</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>22,700 total residential units across the masterplan</li>
                      <li>18-hole championship golf course</li>
                      <li>25 neighbourhood parks</li>
                      <li>53,000 sqm of retail and dining space</li>
                      <li>15,360 apartment units planned</li>
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
                          alt={`Vista Ridge gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Full project details, apartment layouts, and community plan</p>
                        <Button onClick={() => handleCTA("Download Brochure")} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for 1, 2, and 3-bedroom apartments</p>
                        <Button onClick={() => handleCTA("Download Floor Plan")} className="mt-2">Download Floor Plans</Button>
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
                    <p className="text-3xl font-bold text-foreground">AED 2,545,888</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Request Details
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Brochure")}>
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
                    <p className="text-sm text-muted-foreground">Flexible construction-linked payment plan — low entry deposit with staggered milestones and final balance on handover.</p>
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

export default VistaRidgeProject;
