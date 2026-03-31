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
  BedDouble,
  Download,
  FileText,
  Phone,
  Star,
  Waves,
  Shield,
  Dumbbell,
  CheckCircle,
  Award,
  Sparkles,
  Gem,
  Crown,
  Users,
} from "lucide-react";

import heroImg from "@/assets/projects/jumeirah-living-hero.jpg";
import interiorImg from "@/assets/projects/jumeirah-living-interior.jpg";
import poolImg from "@/assets/projects/jumeirah-living-pool.jpg";
import penthouseImg from "@/assets/projects/jumeirah-living-penthouse.jpg";

const images = [heroImg, interiorImg, poolImg, penthouseImg];

const amenities = [
  { icon: Gem, label: "Wellness & Spa Facilities" },
  { icon: Dumbbell, label: "Gym & Fitness" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Crown, label: "Concierge Services" },
  { icon: Users, label: "Residents Lounge" },
  { icon: Star, label: "Lifestyle Services" },
  { icon: Shield, label: "Premium Security" },
  { icon: Building2, label: "Parking" },
  { icon: Building2, label: "High-Speed Lifts" },
  { icon: Waves, label: "Outdoor Leisure Areas" },
];

const SixSensesResidencesDubaiMarinaProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Six Senses Residences Dubai Marina", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Six Senses Residences Dubai Marina by Select Group | Branded Residences</title>
        <meta
          name="description"
          content="Discover Six Senses Residences Dubai Marina by Select Group — ultra-luxury branded residences with a wellness-led lifestyle concept in Dubai Marina."
        />
        <link
          rel="canonical"
          href="https://off-plan-projects.com/projects/select-group/six-senses-residences-dubai-marina"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Six Senses Residences Dubai Marina by Select Group"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <div className="absolute top-6 right-6">
            <div className="bg-charcoal/60 backdrop-blur-md border border-primary/40 text-primary px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <Crown className="w-3 h-3" /> Branded Residences
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="border border-primary/30">
                  Dubai Marina
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Wellness-Led Living
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Six Senses Branded
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display">
                Six Senses Residences Dubai Marina
              </h1>
              <p className="text-gold text-lg md:text-xl mb-4 font-medium">by Select Group</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Dubai Marina, Dubai, UAE
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> Branded Residences
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> Luxury Apartments · Penthouses
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Handover TBD
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { img: heroImg, label: "Exterior" },
              { img: interiorImg, label: "Residence" },
              { img: poolImg, label: "Amenities" },
              { img: penthouseImg, label: "Penthouse" },
            ].map(({ img, label }, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt={label} className="w-full h-full object-cover" />
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
                  <TabsTrigger value="residences">Residences</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="brochure">Brochure</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div className="p-5 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Crown className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <p className="text-gold-dark font-semibold text-sm">Six Senses Branded Living</p>
                      <p className="text-muted-foreground text-xs">
                        Ultra-luxury residences designed for privacy, wellbeing, and premium service in Dubai Marina.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Luxury Wellness by the Marina</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Six Senses Residences Dubai Marina brings world-class branded living to one of Dubai&apos;s most
                      iconic waterfront destinations. Designed for luxury, privacy, and wellness-led lifestyle, this
                      residence offers premium services and curated amenities in the heart of Dubai Marina.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Positioned in a prime marina address and delivered by trusted developer Select Group, this
                      development is planned to set a new benchmark for branded residences in Dubai with elevated
                      hospitality standards and thoughtfully designed living spaces.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With a focus on lifestyle quality and long-term value, Six Senses Residences Dubai Marina is
                      expected to appeal to discerning end-users and investors seeking premium waterfront real estate.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Developer", value: "Select Group" },
                      { label: "Brand", value: "Six Senses" },
                      { label: "Location", value: "Dubai Marina" },
                      { label: "Handover", value: "TBD" },
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
                      <Sparkles className="w-4 h-4 text-primary" /> Why Six Senses Residences Stands Out
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        Ultra-luxury branded residences by Six Senses
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        Prime Dubai Marina address
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        Wellness-focused living concept
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        High-end amenities and hospitality-style services
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        Developed by trusted market leader Select Group
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Profile</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Luxury Segment", "Branded Residences", "Investor Hotspot", "High Capital Appreciation"].map(
                        (tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Waterfront", "Wellness Living", "Popular Location", "City View", "Good Connectivity"].map(
                        (tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Collection</h2>

                  <div className="p-4 bg-muted/30 rounded-xl mb-4">
                    <h3 className="font-semibold text-foreground mb-1">Payment Plan: TBD</h3>
                    <p className="text-sm text-muted-foreground">
                      Official payment plan details will be announced by the developer.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "Luxury Apartments",
                        size: "TBD",
                        desc: "High-end branded residences with contemporary layouts and premium materials, designed for comfort, privacy, and seamless waterfront living.",
                      },
                      {
                        type: "Signature Penthouses",
                        size: "TBD",
                        desc: "Exclusive penthouse residences positioned for panoramic views and elevated lifestyle with curated services and premium finishes.",
                      },
                      {
                        type: "Wellness-Focused Homes",
                        size: "TBD",
                        desc: "Residences crafted around wellbeing principles with design intent centered on relaxation, balance, and quality of daily living.",
                      },
                      {
                        type: "Branded Lifestyle Collection",
                        size: "TBD",
                        desc: "A curated collection of luxury homes with the service ethos and global brand value associated with Six Senses.",
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

                <TabsContent value="amenities" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Amenities & Services</h2>
                  <p className="text-muted-foreground mb-6 text-sm">
                    Curated wellness and lifestyle amenities designed for elevated everyday living.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenities.map(({ icon: Icon, label }) => (
                      <Card key={label} className="bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-gold-dark" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{label}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 p-5 bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Crown className="w-4 h-4 text-gold-dark" /> Wellness-Led Branded Experience
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Six Senses Residences Dubai Marina is planned to combine branded residential luxury with
                      thoughtfully curated wellness amenities and concierge-level services. The amenity experience is
                      designed to support active living, relaxation, privacy, and convenience in one of Dubai&apos;s most
                      sought-after waterfront neighborhoods.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Prime Dubai Marina Address</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in Dubai Marina, Six Senses Residences enjoys direct access to one of the city&apos;s most
                    iconic lifestyle destinations, known for its waterfront promenade, premium dining, and strong
                    connectivity to key business and leisure districts across Dubai.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Dubai Marina Walk", time: "Nearby" },
                      { place: "JBR Beach", time: "Nearby" },
                      { place: "Palm Jumeirah", time: "Short Drive" },
                      { place: "Sheikh Zayed Road", time: "Easy Access" },
                      { place: "Downtown Dubai", time: "Approx. 20-25 min" },
                      { place: "Dubai International Airport", time: "Approx. 25-30 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dubai Marina</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>One of Dubai&apos;s most established waterfront lifestyle districts</li>
                      <li>Strong rental and resale demand for premium residences</li>
                      <li>Excellent road connectivity across the city</li>
                      <li>Surrounded by dining, leisure, and retail destinations</li>
                      <li>High demand for branded and wellness-led luxury properties</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { img: heroImg, label: "Waterfront Exterior" },
                      { img: interiorImg, label: "Residence Interior" },
                      { img: poolImg, label: "Lifestyle Amenities" },
                      { img: penthouseImg, label: "Penthouse View" },
                    ].map(({ img, label }, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video relative group">
                        <img
                          src={img}
                          alt={`${label} — Six Senses Residences Dubai Marina`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs font-medium">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Documents</h2>
                  <p className="text-muted-foreground mb-6">
                    Brochure and floor plan files are currently listed as TBD. Submit your enquiry to receive updates
                    as soon as official documents are released.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <FileText className="w-10 h-10 text-gold-dark" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Project Brochure (TBD)</h3>
                          <p className="text-sm text-muted-foreground">Official brochure will be available soon</p>
                        </div>
                        <Button className="w-full" onClick={() => handleCTA("Request Brochure")}>
                          <Download className="w-4 h-4 mr-2" /> Request Brochure
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <Building2 className="w-10 h-10 text-gold-dark" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Floor Plans (TBD)</h3>
                          <p className="text-sm text-muted-foreground">Detailed layouts will be shared on request</p>
                        </div>
                        <Button variant="outline" className="w-full" onClick={() => handleCTA("Request Floor Plans")}>
                          <Download className="w-4 h-4 mr-2" /> Request Floor Plans
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-4">
              <Card className="border-gold/30 bg-gradient-to-b from-gold/10 to-muted/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-4 h-4 text-gold-dark" />
                    <span className="text-xs text-gold-dark font-semibold uppercase tracking-widest">
                      Branded Residences
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting From</p>
                    <p className="text-2xl font-bold text-primary">TBD</p>
                    <p className="text-xs text-muted-foreground">Luxury Apartments · Penthouses</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Location</p>
                      <p className="font-medium text-foreground">Dubai Marina</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Handover</p>
                      <p className="font-medium text-foreground">TBD</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Payment Plan</p>
                      <p className="font-medium text-foreground">TBD</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Developer</p>
                      <p className="font-medium text-foreground">Select Group</p>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => handleCTA("Register Interest")}>
                    Register Interest
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => handleCTA("Request Callback")}>
                    <Phone className="w-4 h-4 mr-2" /> Request Callback
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => handleCTA("Source Link Request")}>
                    <FileText className="w-4 h-4 mr-2" /> Request Official Source
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Legal Disclaimer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All prices, availability, and project details are subject to change without notice. Information is
                    sourced from developer channels and public references, including Select Group&apos;s official
                    development page. This listing is for informational purposes only and does not constitute an offer
                    or contract.
                  </p>
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

export default SixSensesResidencesDubaiMarinaProject;
