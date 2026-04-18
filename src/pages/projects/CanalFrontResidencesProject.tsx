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
  TreePine, Baby, ShoppingBag, CheckCircle, Bike, Users
} from "lucide-react";

import heroImg from "@/assets/projects/canal-front-residences-hero.jpg";
import interiorImg from "@/assets/projects/canal-front-residences-interior.jpg";
import poolImg from "@/assets/projects/canal-front-residences-pool.jpg";
import promenadeImg from "@/assets/projects/canal-front-residences-promenade.jpg";

const images = [heroImg, interiorImg, poolImg, promenadeImg];

const amenities = [
  { icon: Waves, label: "Infinity Pool" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Users, label: "Concierge Service" },
  { icon: TreePine, label: "Landscaped Areas" },
  { icon: ShoppingBag, label: "Retail Outlets" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Bike, label: "Cycling Track" },
  { icon: Waves, label: "Boardwalk" },
  { icon: Baby, label: "Children's Play Area" },
];

const CanalFrontResidencesProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Canal Front Residences", ctaType });
  };

  return (
    <>
      <SeoHead
        title="Canal Front Residences by Nakheel | Waterfront Apartments in Dubai"
        description="Explore Canal Front Residences by Nakheel — ready waterfront apartments along Dubai Water Canal with canal and skyline views, 5 minutes from Downtown Dubai."
        canonicalPath="/projects/nakheel/canal-front-residences"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Canal Front Residences by Nakheel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge variant="secondary" className="mb-3 flex items-center gap-1 w-fit border border-primary/30">
                <CheckCircle className="w-3 h-3" /> Ready to Move In
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Canal Front Residences</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Nakheel</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Dubai Water Canal, Al Safa</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartment</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR – 3BR</span>
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
                  <TabsTrigger value="apartments">Apartments</TabsTrigger>
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
                      100% construction complete — All buildings handed over. Move in immediately.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Canal Front Residences</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Canal Front Residences is a fully completed waterfront development by Nakheel, positioned along the iconic Dubai Water Canal — one of the city's most sought-after urban living addresses. The collection of contemporary 1, 2, and 3-bedroom apartments delivers an exceptional quality of finish, direct canal views, and immediate access to a vibrant waterfront lifestyle.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The City's Centre. The Water's Edge. Each apartment is finished to the highest standards with spacious balconies designed to frame spectacular canal and skyline views. Residents are immersed in a neighbourhood defined by dining, leisure, and recreation — with an activated waterfront promenade, boardwalk, cycling tracks, swimming pools, and children's play areas all within the community.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Spanning multiple phases along the Dubai Water Canal in the Al Safa corridor, Canal Front Residences commands immediate rental yield potential and strong capital appreciation fundamentals — positioned to benefit from Dubai's continued expansion as a global urban waterfront destination.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartment" },
                      { label: "Bedrooms", value: "1BR – 3BR" },
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
                      {["High ROI", "High Capital Appreciation", "Investor Hotspot", "Luxury Segment"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Waterfront", "Skyline View", "Popular Location", "Good Connectivity", "City View"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* APARTMENTS */}
                <TabsContent value="apartments" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Apartment Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        type: "1 Bedroom",
                        desc: "Stylish one-bedroom apartments with efficient layouts and canal-facing balconies. Ideal for young professionals and investors seeking maximum rental yield in a prime waterfront location.",
                      },
                      {
                        type: "2 Bedroom",
                        desc: "Generously proportioned two-bedroom residences with open-plan living areas, panoramic canal views, and premium finishes throughout — perfect for couples and small families.",
                      },
                      {
                        type: "3 Bedroom",
                        desc: "Expansive three-bedroom apartments offering ample family space, multiple balconies, and commanding views of the Dubai Water Canal and Downtown skyline.",
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Finish Quality</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every apartment at Canal Front Residences is delivered to the highest standards of specification, featuring premium flooring, designer kitchen and bathroom fittings, full-height glass facades, and smart home provisions — combining the finest materials with a design language that maximises the waterfront setting.
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Waterfront Promenade</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Canal Front Residences is anchored by an activated waterfront promenade stretching along the Dubai Water Canal, featuring a scenic boardwalk, al fresco dining venues, landscaped gardens, and a cycling and jogging track — creating a vibrant community hub along one of Dubai's most iconic urban waterways.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Positioned along the Dubai Water Canal in the prestigious Al Safa corridor, Canal Front Residences places residents at the nexus of Dubai's most dynamic urban addresses — steps from the canal promenade, minutes from Downtown, and seamlessly connected to the wider city via Sheikh Zayed Road and the Dubai Metro.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Nearest Metro Station", time: "4 min" },
                      { place: "Downtown Dubai", time: "5 min" },
                      { place: "Jumeirah Beach", time: "5 min" },
                      { place: "Business Bay", time: "7 min" },
                      { place: "Dubai Mall", time: "8 min" },
                      { place: "DIFC", time: "10 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dubai Water Canal</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>3.2 km man-made canal linking Business Bay to the Arabian Gulf</li>
                      <li>Activated promenade with dining, retail, and leisure</li>
                      <li>Adjacent to Safa Park — one of Dubai's largest green spaces</li>
                      <li>Direct Sheikh Zayed Road access for city-wide connectivity</li>
                      <li>Strong rental demand from DIFC and Downtown professionals</li>
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
                          alt={`Canal Front Residences gallery ${i + 1}`}
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
                        <p className="text-sm text-muted-foreground">Full apartment details, layouts, and community overview</p>
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
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Ready to Move In</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Price on request</p>
                    <p className="text-xl font-bold text-foreground mt-1">1BR – 3BR Apartments</p>
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
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Immediate rental income — fully ready</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 4 min from Metro Station</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 5 min from Downtown Dubai</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Prime canal-front address</li>
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

export default CanalFrontResidencesProject;
