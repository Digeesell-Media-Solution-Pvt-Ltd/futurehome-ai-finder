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
  Download, FileText, Phone, Star, Waves, Shield, Dumbbell, TreePine,
  Baby, Heart, ShoppingBag, CheckCircle, Home, Bike
} from "lucide-react";

import heroImg from "@/assets/projects/tilal-al-furjan-hero.jpg";
import interiorImg from "@/assets/projects/tilal-al-furjan-interior.jpg";
import poolImg from "@/assets/projects/tilal-al-furjan-pool.jpg";
import clubhouseImg from "@/assets/projects/tilal-al-furjan-clubhouse.jpg";

const images = [heroImg, interiorImg, poolImg, clubhouseImg];

const amenities = [
  { icon: Waves, label: "Large Swimming Pools" },
  { icon: Baby, label: "Shaded Children's Play Areas" },
  { icon: Home, label: "Al Furjan Pavilion" },
  { icon: Home, label: "Al Furjan West Pavilion" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Bike, label: "Cycling Track" },
  { icon: Heart, label: "Sports Courts" },
  { icon: TreePine, label: "Landscaped Parks" },
  { icon: ShoppingBag, label: "Retail Outlets" },
  { icon: Shield, label: "24/7 Security" },
];

const TilalAlFurjanProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Tilal Al Furjan", ctaType });
  };

  return (
    <>
      <SeoHead
        title="Tilal Al Furjan by Nakheel | Ready Villas in Al Furjan Dubai"
        description="Discover Tilal Al Furjan by Nakheel — ready 4 and 5-bedroom villas in Al Furjan Dubai with gated community living, resort-style amenities, and excellent connectivity."
        canonicalPath="/projects/nakheel/tilal-al-furjan"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Tilal Al Furjan by Nakheel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge variant="secondary" className="mb-3 flex items-center gap-1 w-fit border border-primary/30">
                <CheckCircle className="w-3 h-3" /> Ready to Move In
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Tilal Al Furjan</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Nakheel</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Al Furjan, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Villa</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 4BR – 5BR</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover Complete</span>
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
                  <TabsTrigger value="villas">Villas</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                </TabsList>

                {/* OVERVIEW */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">
                      100% construction complete — Customer orientation and handover currently in progress.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Tilal Al Furjan</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Tilal Al Furjan is a fully completed villa community by Nakheel, located within the established Al Furjan master community in Dubai. Offering an exclusive collection of 4 and 5-bedroom villas, it delivers elevated living through contemporary architecture, spacious layouts, and a host of curated family amenities — all within a gated, landscaped neighbourhood.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Every villa reflects a new level of modern elegance. Clean architectural lines define remarkably spacious interiors, while the highest standard of finishes creates homes of lasting refinement. Each property comes with provision for smart home functionalities, combining contemporary design with the convenience of connected living.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      As a completed Nakheel development with 100% construction progress and handover underway, Tilal Al Furjan represents a compelling opportunity for investors seeking immediate rental income and long-term capital appreciation in a proven, high-demand location.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Villa" },
                      { label: "Bedrooms", value: "4BR – 5BR" },
                      { label: "Status", value: "Ready" },
                      { label: "Developer", value: "Nakheel" },
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
                      {["Rental Income Focused", "High Capital Appreciation", "Investor Hotspot"].map(tag => (
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

                {/* VILLAS */}
                <TabsContent value="villas" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Villa Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "4 Bedroom Villa",
                        desc: "Generously proportioned family villas with open-plan ground floor living, private garden, and smart home provisions. Ideal for families seeking premium suburban living in a gated community.",
                      },
                      {
                        type: "5 Bedroom Villa",
                        desc: "Expansive flagship villas offering extra space for large families, featuring grand living and dining areas, a private pool option, landscaped garden, and premium finishes throughout.",
                      },
                    ].map((unit) => (
                      <Card key={unit.type} className="bg-muted/30">
                        <CardContent className="p-5">
                          <h4 className="font-semibold text-foreground mb-2">{unit.type}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{unit.desc}</p>
                          <Button size="sm" onClick={() => handleCTA(`Enquire ${unit.type}`)}>
                            Enquire Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Design Philosophy</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A new level of modern elegance marks every villa within Tilal Al Furjan. Clean lines form the remarkably spacious interiors and define the highest standard of finishes to create a home that provides a welcome like no other. All homes include provision for smart functionalities.
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Community Pavilions</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Residents enjoy exclusive access to both the Al Furjan Pavilion and Al Furjan West Pavilion — two fully operational community hubs featuring supermarkets, cafés, restaurants, and leisure facilities serving the wider Al Furjan masterplan.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tilal Al Furjan occupies a prime position within the Al Furjan master community — one of Dubai's most sought-after family villa addresses, bordered by Sheikh Zayed Road and offering seamless access to the Dubai Metro, key shopping destinations, and major employment hubs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Al Furjan Metro Station", time: "6 min" },
                      { place: "Ibn Battuta Mall", time: "11 min" },
                      { place: "Dubai Marina", time: "16 min" },
                      { place: "Palm Jumeirah", time: "20 min" },
                      { place: "Al Maktoum International Airport", time: "25 min" },
                      { place: "Downtown Dubai", time: "28 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Al Furjan Masterplan</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Established residential community with operational amenities</li>
                      <li>Two community pavilions with retail and dining</li>
                      <li>Direct access to Sheikh Zayed Road & Al Khail Road</li>
                      <li>Adjacent to Expo City Dubai growth corridor</li>
                      <li>Serviced by Al Furjan Metro Station (Red Line)</li>
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
                          alt={`Tilal Al Furjan gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Full villa details, floor plans, and community overview</p>
                        <Button onClick={() => handleCTA("Download Brochure")} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Detailed layouts for 4 and 5-bedroom villas</p>
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
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Ready to Move In</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Price on request</p>
                    <p className="text-xl font-bold text-foreground mt-1">4BR & 5BR Villas</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Pricing")}>
                      <Star className="w-4 h-4 mr-2" /> Request Pricing
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Brochure")}>
                      <Download className="w-4 h-4 mr-2" /> Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => handleCTA("Download Floor Plan")}>
                      <FileText className="w-4 h-4 mr-2" /> Download Floor Plans
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" onClick={() => handleCTA("Book Viewing")}>
                      <Phone className="w-4 h-4 mr-2" /> Book a Viewing
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Why Invest Now?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Immediate rental income potential</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> No construction risk — 100% complete</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Established community with all amenities live</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 6 min to Metro Station</li>
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

export default TilalAlFurjanProject;
