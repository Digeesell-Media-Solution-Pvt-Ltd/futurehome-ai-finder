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
  CheckCircle, TreePine, Users, Award, Sparkles, Coffee
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const images = [
  "/projects/select-group/artistry-one-residences/hero.jpg",
];

const amenities = [
  { icon: Waves, label: "21st-Floor Infinity Pool" },
  { icon: Dumbbell, label: "Fitness Suite & Gym" },
  { icon: Coffee, label: "Sauna & Steam Room" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Users, label: "Co-working Spaces" },
  { icon: Coffee, label: "Resident Lounge" },
  { icon: Award, label: "Concierge Services" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Building2, label: "Retail Outlets" },
];

const ArtistryOneProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Artistry One Residences", ctaType });
  };

  return (
    <>
      <SeoHead
        title="Artistry One Residences by Select Group | Dubai Design District d3"
        description="Explore Artistry One Residences by Select Group in Dubai Design District — 1–3BR apartments and 4BR duplex penthouses with Burj Khalifa views, private rooftop pools, and 50/50 payment plan. Handover 2029."
        canonicalPath="/projects/select-group/artistry-one-residences"
      />


      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Artistry One Residences by Select Group Dubai Design District"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="border border-primary/30">
                  Newly Launched
                </Badge>
                <Badge variant="secondary" className="border border-primary/30">
                  Dubai Design District
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Artistry One Residences</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Select Group</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Dubai Design District (d3), Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Apartment · Duplex Penthouse</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 1BR – 4BR Duplex Penthouse</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover Q4 2029</span>
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
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" onError={handleImageError} />
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">A Living Composition</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Artistry One Residences by Select Group is a landmark new development in Dubai Design District (d3) — a creative quarter strategically positioned between Business Bay, Downtown Dubai, and the Dubai Canal. The development introduces 1, 2, and 3-bedroom residences alongside exclusive 4-bedroom duplex penthouses, all defined by purposeful lines and refined geometry that frame iconic views of the Burj Khalifa, the Downtown skyline, and the Dubai Canal.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A curated palette of premium materials, generous layouts, and fluid connections between living spaces create homes that feel both expansive and grounded — supporting a lifestyle where comfort, clarity, and contemporary design come together effortlessly.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      At the crown of the building, a 21st-floor infinity lap pool and fully equipped fitness suite — complete with gym, training studio, sauna, steam room, and ice baths — elevate everyday wellbeing with sweeping panoramic city views that stretch to the horizon.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Developer", value: "Select Group" },
                      { label: "Location", value: "Dubai Design District (d3)" },
                      { label: "Unit Types", value: "1BR – 4BR Duplex PH" },
                      { label: "Handover", value: "Q4 2029" },
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
                      <Sparkles className="w-4 h-4 text-primary" /> Why Artistry One Stands Apart
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Prime address in Dubai Design District (d3) — Dubai's cultural and creative hub</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Iconic Burj Khalifa and Downtown skyline views from residences</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Exclusive duplex penthouses with private rooftop plunge pools</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Attractive 50/50 payment plan — AED 50K reservation fee</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" /> Steps from Business Bay, DIFC, and major highway access points</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Investment Profile</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["High ROI", "Rental Income Focused", "High Capital Appreciation"].map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Skyline View", "City View", "Popular Location", "Good Connectivity", "Family Friendly"].map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* RESIDENCES */}
                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Collection</h2>

                  <div className="p-4 bg-muted/30 rounded-xl mb-4">
                    <h3 className="font-semibold text-foreground mb-1">Payment Plan: 50/50</h3>
                    <p className="text-sm text-muted-foreground">AED 50K reservation · 20% registration in 14 days · 10% at 6, 12 & 18 months · 50% on handover (Q4 2029)</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "1 Bedroom Apartments",
                        size: "Contemporary layouts",
                        desc: "Thoughtfully proportioned 1-bedroom residences with premium finishes, open-plan living, and privileged views of the Dubai Canal and Burj Khalifa — ideal for professionals and investors seeking strong d3 rental returns.",
                      },
                      {
                        type: "2 Bedroom Apartments",
                        size: "Generous floor plans",
                        desc: "Spacious 2-bedroom residences flooded with natural light through floor-to-ceiling glazing, featuring refined interiors, open-plan dining, and sweeping Downtown Dubai skyline views.",
                      },
                      {
                        type: "3 Bedroom Apartments",
                        size: "Family-sized living",
                        desc: "Expansive 3-bedroom layouts crafted for family living — premium materials, generous terraces, dedicated dining areas, and panoramic vistas of the Burj Khalifa and the Dubai Canal.",
                      },
                      {
                        type: "4BR Duplex Penthouses",
                        size: "4,638 – 7,765 sq. ft.",
                        desc: "Crown-level 4-bedroom duplex penthouses opening onto expansive terraces with private plunge pools and uninterrupted 360° views of the entire city skyline. Two signature residences offer exclusive rooftop terraces for an unparalleled elevated experience.",
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
                  <h2 className="text-2xl font-bold text-foreground mb-6">Amenities & Wellness</h2>
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Renewal & Connection</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Artistry One's amenities are designed to enhance everyday living, bringing together wellness, leisure, and social spaces in a refined setting. From resident lounges and co-working areas to sun decks and family-friendly leisure zones, every detail supports a balanced lifestyle. At the pinnacle, the 21st-floor infinity lap pool and fully equipped fitness suite — with gym, training studio, sauna, steam room, and ice baths — deliver an elevated wellness experience with sweeping city views.
                    </p>
                  </div>
                </TabsContent>

                {/* LOCATION */}
                <TabsContent value="location" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">At the Crossroads of Creativity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dubai Design District (d3) is strategically positioned with seamless access to Business Bay, Downtown Dubai, the Burj Khalifa, Dubai Mall, DIFC, and major business and cultural destinations. Artistry One Residences benefits from effortless connectivity via Al Ain Road, Ras Al Khor Road, Al Khail Road, and key transport links — providing convenient reach across the entire city.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Burj Khalifa & Dubai Mall", time: "5 min" },
                      { place: "Downtown Dubai", time: "5 min" },
                      { place: "Business Bay", time: "5 min" },
                      { place: "DIFC", time: "8 min" },
                      { place: "Dubai International Airport", time: "15 min" },
                      { place: "Dubai Marina", time: "25 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-muted/30 rounded-xl">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dubai Design District (d3)</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Dubai's premier creative and cultural quarter</li>
                      <li>Home to global fashion houses, art galleries, and design studios</li>
                      <li>Direct access to Dubai Canal waterfront promenade</li>
                      <li>Steps from Business Bay and Downtown Dubai</li>
                      <li>Excellent highway connectivity across the city</li>
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
                          alt={`Artistry One Residences gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* BROCHURE */}
                <TabsContent value="brochure" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Brochure</h2>
                  <p className="text-muted-foreground mb-6">
                    Download the full Artistry One Residences brochure to explore detailed floor plans, unit specifications, payment plan breakdown, and project timeline.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <FileText className="w-10 h-10 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Project Brochure</h3>
                          <p className="text-sm text-muted-foreground">Full development overview, architecture, and lifestyle</p>
                        </div>
                        <Button className="w-full" onClick={() => handleCTA("Brochure Download")}>
                          <Download className="w-4 h-4 mr-2" /> Download Brochure
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                        <Building2 className="w-10 h-10 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Floor Plans</h3>
                          <p className="text-sm text-muted-foreground">Detailed unit layouts for all 1BR–4BR duplex typologies</p>
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
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting From</p>
                    <p className="text-2xl font-bold text-primary">AED 1.5M</p>
                    <p className="text-xs text-muted-foreground">1–3BR Apartments & 4BR Duplex Penthouses</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Area</p>
                      <p className="font-medium text-foreground">Dubai Design District</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Handover</p>
                      <p className="font-medium text-foreground">Q4 2029</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Payment Plan</p>
                      <p className="font-medium text-foreground">50/50</p>
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
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Legal Disclaimer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All prices, availability, and project details are subject to change without notice. Information is sourced from the developer's official materials. This listing is for informational purposes only and does not constitute an offer or contract. Buyers are advised to conduct their own due diligence.
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

export default ArtistryOneProject;
