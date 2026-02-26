import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { getBrochureUrl } from "@/lib/brochure";
import { useState } from "react";
import {
  Building2,
  MapPin,
  Calendar,
  Banknote,
  BedDouble,
  Download,
  FileText,
  Phone,
  Star,
  Waves,
  Shield,
  Dumbbell,
  TreePine,
  Baby,
  Heart,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";
const heroImg = "/images/projects/nakheel/palm-central-private-residences/hero.jpg";
const featureImgOne = "/images/projects/nakheel/palm-central-private-residences/feature-1.jpg";
const featureImgTwo = "/images/projects/nakheel/palm-central-private-residences/feature-2.jpg";
const galleryImgOne = "/images/projects/nakheel/palm-central-private-residences/gallery-1.jpg";
const galleryImgTwo = "/images/projects/nakheel/palm-central-private-residences/gallery-2.jpg";
const galleryImgThree = "/images/projects/nakheel/palm-central-private-residences/gallery-3.jpg";
const galleryImgFour = "/images/projects/nakheel/palm-central-private-residences/gallery-4.jpg";

const images = [heroImg, featureImgOne, featureImgTwo, galleryImgOne];

const amenities = [
  { icon: Waves, label: "Resort-Style Swimming Pool" },
  { icon: Dumbbell, label: "Fitness Studio" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: TreePine, label: "Landscaped Outdoor Spaces" },
  { icon: Heart, label: "Wellness Zones" },
  { icon: Users, label: "Residents Lounge" },
  { icon: Building2, label: "Private Residences Experience" },
  { icon: Shield, label: "24/7 Security" },
];

const PalmCentralPrivateResidencesProject = () => {
  const { openLeadCapture, requestBrochureDownload } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);
  const brochureUrl = getBrochureUrl("nakheel", "palm-central-private-residences-brochure");

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Palm Central Private Residences", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Palm Central Private Residences by Nakheel | Palm Jumeirah Luxury Living</title>
        <meta
          name="description"
          content="Discover Palm Central Private Residences by Nakheel — a premium Palm Jumeirah residential address with curated amenities, elegant layouts, and strong long-term investment appeal."
        />
        <link rel="canonical" href="https://futurehome-ai-finder.lovable.app/projects/nakheel/palm-central-private-residences" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Palm Central Private Residences by Nakheel"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">New Launch</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Palm Central Private Residences</h1>
              <p className="text-white/90 text-lg md:text-xl mb-4">by Nakheel</p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Palm Jumeirah, Dubai</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Luxury Apartments</span>
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Bedrooms TBD</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Handover TBD</span>
                <span className="flex items-center gap-1"><Banknote className="w-4 h-4" /> Price on Request</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`View ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
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
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">About Palm Central Private Residences</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Palm Central Private Residences is a signature Nakheel address in Palm Jumeirah, designed for
                      residents who seek privacy, design quality, and exceptional waterfront city living. The project
                      blends contemporary architecture with refined interiors and curated communal spaces.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Positioned within one of Dubai&apos;s most internationally recognized destinations, the development
                      offers a premium lifestyle with direct proximity to hospitality, dining, retail, and leisure.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Palm Central Private Residences is structured to support both long-term lifestyle value and
                      investment demand, supported by Palm Jumeirah&apos;s sustained global appeal.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Type", value: "Apartments" },
                      { label: "Community", value: "Palm Jumeirah" },
                      { label: "Status", value: "New Launch" },
                      { label: "Starting Price", value: "TBD" },
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
                      {["Luxury Segment", "High Capital Appreciation", "Investor Hotspot"].map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Lifestyle Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Waterfront", "Popular Location", "Wellness Living", "Resort Style"].map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="residences" className="mt-6 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Residence Collection</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        type: "Apartments",
                        size: "Unit mix to be confirmed",
                        desc: "Private residences with a premium finish palette and contemporary, open-plan layouts.",
                      },
                      {
                        type: "Waterfront Living",
                        size: "Lifestyle-led positioning",
                        desc: "A central Palm Jumeirah address with strong connectivity to luxury hospitality and retail.",
                      },
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Location & Connectivity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Palm Jumeirah remains one of Dubai&apos;s highest-demand luxury residential destinations, with strong
                    access to Sheikh Zayed Road, Dubai Marina, and key commercial districts while preserving an
                    exclusive island lifestyle.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { place: "Palm Jumeirah Core", time: "Prime Island Address" },
                      { place: "Dubai Marina", time: "Approx. 10-15 min" },
                      { place: "Downtown Dubai", time: "Approx. 25-30 min" },
                      { place: "DXB Airport", time: "Approx. 30-35 min" },
                    ].map(({ place, time }) => (
                      <div key={place} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm text-foreground">{place}</span>
                        <Badge variant="secondary">{time}</Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour].map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`Palm Central gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={handleImageError}
                        />
                      </div>
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
                        <p className="text-sm text-muted-foreground">Full project details, highlights, and positioning</p>
                        <Button onClick={() => requestBrochureDownload(brochureUrl)} className="mt-2">Download Brochure</Button>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/30">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                        <FileText className="w-10 h-10 text-primary" />
                        <h3 className="font-semibold text-foreground">Floor Plans</h3>
                        <p className="text-sm text-muted-foreground">Request detailed layouts and current availability</p>
                        <Button onClick={() => handleCTA("Download Floor Plan")} className="mt-2">Request Floor Plans</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-foreground">Price on Request</p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => handleCTA("Request Details")}>
                      <Star className="w-4 h-4 mr-2" /> Enquire Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" onClick={() => requestBrochureDownload(brochureUrl)}>
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
                    <p className="text-sm text-muted-foreground">TBD. Contact us for the latest payment plan and release inventory.</p>
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

export default PalmCentralPrivateResidencesProject;
