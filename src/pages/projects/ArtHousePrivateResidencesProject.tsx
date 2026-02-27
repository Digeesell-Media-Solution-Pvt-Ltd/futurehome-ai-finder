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
  Banknote,
  Download,
  FileText,
  Phone,
  Users,
} from "lucide-react";

const fallbackImage = "/placeholder.svg";

const images = [
  "/projects/viva/art-house-private-residences/hero-1.jpg",
  "/projects/viva/art-house-private-residences/hero-2.jpg",
  "/projects/viva/art-house-private-residences/gallery-1.jpg",
  "/projects/viva/art-house-private-residences/gallery-2.jpg",
  "/projects/viva/art-house-private-residences/gallery-3.jpg",
  "/projects/viva/art-house-private-residences/gallery-4.jpg",
  "/projects/viva/art-house-private-residences/gallery-5.jpg",
  "/projects/viva/art-house-private-residences/gallery-6.jpg",
  "/projects/viva/art-house-private-residences/gallery-7.jpg",
  "/projects/viva/art-house-private-residences/gallery-8.jpg",
];

const ArtHousePrivateResidencesProject = () => {
  const { openLeadCapture } = useLeadCapture();
  const [activeImage, setActiveImage] = useState(0);

  const handleCTA = (ctaType: string) => {
    openLeadCapture({ projectName: "Art House Private Residences by VIVA", ctaType });
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackImage;
  };

  return (
    <>
      <Helmet>
        <title>Art House Private Residences by VIVA | Apartments in Meydan District 11</title>
        <meta
          name="description"
          content="Art House Private Residences by VIVA Real Estate Development is positioned in Meydan District 11 as a design-led apartment project with a focus on curated living and proximity to key Dubai destinations."
        />
        <link
          rel="canonical"
          href="https://futurehome-ai-finder.lovable.app/projects/viva/art-house-private-residences"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt="Art House Private Residences by VIVA"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Badge className="bg-primary/90 text-primary-foreground mb-3">
                Off-plan
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">
                Art House Private Residences
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                by VIVA Real Estate Development
              </p>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                A boutique apartment concept associated with Meydan District 11, curated around
                contemporary design, lifestyle‑driven spaces and access to wider Meydan and MBR City
                connectivity.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Banknote className="w-4 h-4" />
                  Pricing on request
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  Apartments
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Meydan District 11, Dubai
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Handover &amp; payment plan on request
                </span>
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
                  activeImage === i
                    ? "border-primary"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Art House Private Residences view ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-muted/50 p-1">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Public materials for VIVA Real Estate Development position Art House Private
                    Residences as a design‑oriented residential concept linked to Meydan District 11 and
                    the wider Meydan / MBR City catchment. While full official specifications and
                    launch details are not yet widely published, the project is framed as a boutique
                    apartment offering aimed at residents and investors who value curated interiors and
                    a connected suburban‑urban location.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Until detailed numbers and handover information are formally released, pricing,
                    unit mix and payment plans for Art House Private Residences by VIVA should be
                    treated as &quot;on request&quot;, with direct confirmation obtained from the developer or
                    authorised sales partners.
                  </p>
                </TabsContent>

                <TabsContent value="highlights" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Apartment‑only concept associated with Meydan District 11</li>
                    <li>Design‑forward positioning under the VIVA Real Estate Development brand</li>
                    <li>Access to the broader Meydan and MBR City lifestyle and connectivity</li>
                    <li>Off‑plan structure, with details to be confirmed directly with the developer</li>
                    <li>Suitable for end‑users seeking a curated home and investors focused on emerging Meydan communities</li>
                  </ul>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Amenities (to be confirmed)</h2>
                  <p className="text-sm text-muted-foreground">
                    Specific amenities for Art House Private Residences by VIVA have not been fully
                    detailed in the publicly available official content at this time. Prospective
                    buyers should request the latest amenity list, floor plans and specification
                    sheets directly from VIVA&apos;s sales channels.
                  </p>
                </TabsContent>

                <TabsContent value="location" className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Location &amp; connectivity</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Art House Private Residences is associated with Meydan District 11, benefiting from
                    the wider Meydan area&apos;s proximity to Downtown Dubai, Business Bay and key arterial
                    roads such as Al Khail Road. References to MBR City and Meydan are based on how the
                    area is generally described in public information and are indicative rather than
                    specific travel timings for this individual project.
                  </p>
                </TabsContent>

                <TabsContent value="gallery" className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`Art House Private Residences image ${i + 1}`}
                          className="w-full h-56 md:h-64 object-cover"
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    For now, these slots are configured for project visuals. Please ensure the final
                    approved renders for Art House Private Residences by VIVA are uploaded to the
                    configured `/public/projects/viva/art-house-private-residences/` paths.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Lead-gated CTA card */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <Card className="border-primary/10 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Register for launch details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Request official pricing, handover timeline, payment plan and verified floor
                      plans for Art House Private Residences by VIVA.
                    </p>
                    <div className="space-y-3">
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Register Interest")}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Register Interest
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Download Brochure")}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Brochure
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Get Floor Plan")}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Get Floor Plan
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => handleCTA("Payment Plan")}
                      >
                        <Banknote className="w-4 h-4 mr-2" />
                        Payment Plan
                      </Button>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      All information and materials are shared after a quick lead form, ensuring you
                      receive up‑to‑date details directly from authorised sales teams.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Branded residences style positioning
                      </p>
                      <p className="text-xs text-muted-foreground">
                        The project is positioned as a branded or design‑led residence; please confirm
                        final branding and positioning details with VIVA&apos;s latest releases.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default ArtHousePrivateResidencesProject;

