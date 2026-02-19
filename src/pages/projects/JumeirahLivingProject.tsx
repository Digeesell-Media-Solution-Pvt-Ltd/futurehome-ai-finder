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
  CheckCircle, Award, Sparkles, Gem, Crown, Users
} from "lucide-react";

import heroImg from "@/assets/projects/jumeirah-living-hero.jpg";
import interiorImg from "@/assets/projects/jumeirah-living-interior.jpg";
import poolImg from "@/assets/projects/jumeirah-living-pool.jpg";
import penthouseImg from "@/assets/projects/jumeirah-living-penthouse.jpg";

const images = [heroImg, interiorImg, poolImg, penthouseImg];

const amenities = [
  { icon: Waves, label: "Infinity Lap Pool" },
  { icon: Waves, label: "Massage Circuit Pool" },
  { icon: Dumbbell, label: "Fully-Equipped Gymnasium" },
  { icon: Award, label: "Personal Training Room" },
  { icon: Gem, label: "Spa & Wellness" },
  { icon: Gem, label: "Sauna & Steam Rooms" },
  { icon: Gem, label: "Yoga Deck & Jacuzzi" },
  { icon: Crown, label: "Jumeirah Concierge" },
  { icon: Users, label: "Residents' Lounge" },
  { icon: Users, label: "Millennial Lounge" },
  { icon: Building2, label: "Private Cinema" },
  { icon: Shield, label: "24/7 Security & Valet" },
];

const JumeirahLivingProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Jumeirah Living Business Bay", ctaType });
  };

  return (
    <>
      <Helmet>
        <title>Jumeirah Living Business Bay | Select Group | Dubai Canal Branded Residences</title>
        <meta
          name="description"
          content="Discover Jumeirah Living Business Bay by Select Group — the only Jumeirah-managed branded residence on Dubai Water Canal. 2–5BR apartments and full-floor penthouse. Under construction, Q4 2025 handover."
        />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/select-group/jumeirah-living-business-bay" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Jumeirah Living Business Bay Select Group Dubai Canal branded residences"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          {/* Branded residences badge - top right */}
          <div className="absolute top-6 right-6">
            <div className="bg-charcoal/60 backdrop-blur-md border border-primary/40 text-primary px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <Crown className="w-3 h-3" /> Jumeirah Branded Residences
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="border border-gold/30 bg-gold/10 text-gold-dark">
                  Under Construction
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Business Bay · Dubai Canal
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Branded Residences
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-1 font-display">
                Jumeirah Living Business Bay
              </h1>
              <p className="text-gold text-lg md:text-xl mb-4 font-medium">by Select Group · Managed by Jumeirah</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Business Bay, Dubai Water Canal</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartments · Penthouses</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 2BR – Full-Floor Penthouse</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover Q4 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Thumbnails */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { img: heroImg, label: "Exterior" },
              { img: interiorImg, label: "Residence" },
              { img: poolImg, label: "Pool Deck" },
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
                  {/* Brand strip */}
                  <div className="p-5 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Crown className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <p className="text-gold-dark font-semibold text-sm">Operated by Jumeirah Group</p>
                      <p className="text-muted-foreground text-xs">The only Jumeirah-managed branded residence on the Dubai Water Canal — "Stay Different" hospitality, every day.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">The Pinnacle of Canal Living</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Jumeirah Living Business Bay is the only residential address in Dubai fully managed and operated by the iconic Jumeirah hospitality brand. Rising 35 floors directly on the Dubai Water Canal in the heart of Business Bay, the development is a statement of ultra-luxury — where the world's most discerning buyers find a home managed to the exacting standards of a five-star hotel.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The collection spans 2, 3, and 4-bedroom premium apartments, exceptional simplex and duplex 5-bedroom penthouses, and a singular full-floor 9,656 sq.ft. master penthouse spanning the entire 35th floor — with 360-degree panoramic views of the Dubai Canal, Downtown Dubai, and the Burj Khalifa.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Every residence is defined by superior detailed finishes, ultra-premium appointments, and floor-to-ceiling glazing that frames some of the most coveted views in Dubai. Residents experience the full breadth of Jumeirah's "Stay Different" promise — including valet, concierge, spa, poolside service, and all the hallmarks of five-star living, every single day.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Developer", value: "Select Group" },
                      { label: "Operator", value: "Jumeirah Group" },
                      { label: "Location", value: "Dubai Water Canal, Business Bay" },
                      { label: "Handover", value: "Q4 2025" },
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
                      <Sparkles className="w-4 h-4 text-primary" /> Why Jumeirah Living Stands Alone
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Only Jumeirah-branded and managed residence on the Dubai Water Canal</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Full-floor 9,656 sq.ft. master penthouse — a singular one-of-a-kind address in Dubai</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> 360° views of Dubai Canal, Burj Khalifa & Downtown Dubai from all residences</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Hospitality-grade service: valet, 24/7 concierge, spa, fitness, and poolside amenity</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Attractive 40/60 payment plan — near completion with Q4 2025 handover</li>
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
                      {["Waterfront", "Skyline View", "City View", "Popular Location", "Resort Style", "Good Connectivity"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* RESIDENCES */}
                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">The Collection</h2>

                  <div className="p-4 bg-muted/30 rounded-xl mb-4">
                    <h3 className="font-semibold text-foreground mb-1">Payment Plan: 40/60</h3>
                    <p className="text-sm text-muted-foreground">Token on reservation · 20% registration within 14 days · 20% within 6 months · 60% on completion (Q4 2025)</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "2 Bedroom Apartments",
                        size: "Premium residences",
                        desc: "Spacious 2-bedroom apartments with superior finishes and floor-to-ceiling glazing framing stunning Dubai Canal and city skyline panoramas — ideal for executives and investors targeting premium Business Bay rental yields.",
                      },
                      {
                        type: "3 Bedroom Apartments",
                        size: "Generous layouts",
                        desc: "Expansive 3-bedroom residences with large balconies, dedicated dining areas, premium marble finishes, and sweeping views — curated for families seeking a five-star hospitality lifestyle in the heart of Dubai.",
                      },
                      {
                        type: "4 Bedroom Apartments",
                        size: "Ultra-spacious living",
                        desc: "Palatial 4-bedroom apartments with generous living spaces, multiple balconies facing the Dubai Canal, and full access to Jumeirah's bespoke hospitality services — a true urban sanctuary above the waterfront.",
                      },
                      {
                        type: "Simplex & Duplex Penthouses",
                        size: "5-bedroom sky residences",
                        desc: "Exquisitely crafted 5-bedroom simplex and duplex sky penthouses with superior finishes, ultra-premium appointments, and a design that maximises breathtaking views of the Dubai Canal and Downtown Dubai.",
                      },
                      {
                        type: "Full-Floor Master Penthouse",
                        size: "9,656 sq.ft. — Entire 35th Floor",
                        desc: "The singular crown of Jumeirah Living — spanning the entire 35th floor, this palatial 5-bedroom master penthouse includes a private library, gymnasium, sauna and steam room, and expansive balconies with unobstructed 360° city and canal views.",
                      },
                    ].map((unit) => (
                      <Card key={unit.type} className={`bg-muted/30 ${unit.type.includes("Full-Floor") ? "md:col-span-2 border-gold/20" : ""}`}>
                        <CardContent className="p-5">
                          {unit.type.includes("Full-Floor") && (
                            <div className="flex items-center gap-2 mb-2">
                              <Crown className="w-4 h-4 text-gold-dark" />
                              <span className="text-xs text-gold-dark font-semibold uppercase tracking-widest">One-of-a-Kind</span>
                            </div>
                          )}
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
                  <h2 className="text-2xl font-bold text-foreground mb-2">Leisure & Wellness</h2>
                  <p className="text-muted-foreground mb-6 text-sm">Curated by Jumeirah Group — world-class hospitality delivered to your doorstep.</p>
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
                      <Crown className="w-4 h-4 text-gold-dark" /> Life in Perfect Balance
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Life at Jumeirah Living Business Bay is like no other. Residents live, work, and play in the lap of luxury in the heart of Dubai — operated by a world-class hospitality brand renowned for its elevated service and "Stay Different" promise. From a selection of luxurious swimming pools including a massage circuit pool and lap pool, to a decadent yoga deck, jacuzzi, sauna, steam rooms, and a fully-equipped gymnasium with personal training room and private cinema — every amenity is curated to deliver a five-star residential experience, every day.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">At the Heart of Dubai</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Positioned directly on the Dubai Water Canal in Business Bay — one of Dubai's most recognisable and well-connected districts. The tower offers residents unrestricted access to the city's most iconic landmarks, with the Burj Khalifa just 6 minutes away and Downtown Dubai 8 minutes distant.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Burj Khalifa & Dubai Mall", time: "6 min" },
                      { place: "Downtown Dubai", time: "8 min" },
                      { place: "DIFC", time: "10 min" },
                      { place: "Jumeirah Beach", time: "7 min" },
                      { place: "Mall of the Emirates", time: "9 min" },
                      { place: "Dubai International Airport", time: "11 min" },
                      { place: "Palm Jumeirah", time: "18 min" },
                      { place: "Knowledge Village", time: "13 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Business Bay · Dubai Water Canal</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Directly on the Dubai Water Canal promenade</li>
                      <li>Adjacent to Downtown Dubai and the Burj Khalifa district</li>
                      <li>Premium Business Bay commercial and lifestyle district</li>
                      <li>Easy access to Sheikh Zayed Road, Al Khail Road, and metro network</li>
                      <li>Close proximity to Jumeirah Beach, DIFC, and Dubai Old Town</li>
                    </ul>
                  </div>
                </TabsContent>

                {/* GALLERY */}
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { img: heroImg, label: "Canal Façade at Dusk" },
                      { img: interiorImg, label: "Premium Residence Interior" },
                      { img: poolImg, label: "Infinity Pool & Leisure Deck" },
                      { img: penthouseImg, label: "Full-Floor Master Penthouse" },
                    ].map(({ img, label }, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video relative group">
                        <img
                          src={img}
                          alt={`${label} — Jumeirah Living Business Bay`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs font-medium">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* BROCHURE */}
                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Brochure</h2>
                  <p className="text-muted-foreground mb-6">
                    Request the full Jumeirah Living Business Bay brochure — including floor plans for all 2BR to full-floor penthouse typologies, payment plan breakdown, service charge guide, and project timeline.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <FileText className="w-10 h-10 text-gold-dark" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Project Brochure</h3>
                          <p className="text-sm text-muted-foreground">Full development overview, residences, amenities, and investment case</p>
                        </div>
                        <Button className="w-full" onClick={() => handleCTA("Brochure Download")}>
                          <Download className="w-4 h-4 mr-2" /> Download Brochure
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <Building2 className="w-10 h-10 text-gold-dark" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Floor Plans</h3>
                          <p className="text-sm text-muted-foreground">All 2BR–5BR duplex and full-floor penthouse layouts</p>
                        </div>
                        <Button variant="outline" className="w-full" onClick={() => handleCTA("Floor Plan Download")}>
                          <Download className="w-4 h-4 mr-2" /> Get Floor Plans
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card className="border-gold/30 bg-gradient-to-b from-gold/10 to-muted/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-4 h-4 text-gold-dark" />
                    <span className="text-xs text-gold-dark font-semibold uppercase tracking-widest">Jumeirah Branded</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting From</p>
                    <p className="text-2xl font-bold text-primary">AED 3.5M</p>
                    <p className="text-xs text-muted-foreground">2–5BR Apartments · Full-Floor Penthouse</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Location</p>
                      <p className="font-medium text-foreground">Dubai Water Canal</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Handover</p>
                      <p className="font-medium text-foreground">Q4 2025</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Payment Plan</p>
                      <p className="font-medium text-foreground">40/60</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Operator</p>
                      <p className="font-medium text-foreground">Jumeirah Group</p>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => handleCTA("Register Interest")}>
                    Register Interest
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => handleCTA("Request Callback")}>
                    <Phone className="w-4 h-4 mr-2" /> Request Callback
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Legal Disclaimer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All prices, availability, and project details are subject to change without notice. Information is sourced from the developer's official materials. This listing is for informational purposes only and does not constitute an offer or contract. Buyers are advised to conduct their own due diligence. Service charges estimated at AED 30/sq.ft.
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

export default JumeirahLivingProject;
