import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, CheckCircle, Loader2, X, ImagePlus, FileText, LayoutGrid, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FileUploadSlot {
  label: string;
  icon: React.ReactNode;
  accept: string;
  multiple: boolean;
  key: "images" | "brochure" | "floorplan" | "priceplan";
}

const uploadSlots: FileUploadSlot[] = [
  { label: "Project Images", icon: <ImagePlus className="w-5 h-5" />, accept: "image/*", multiple: true, key: "images" },
  { label: "Project Brochure", icon: <FileText className="w-5 h-5" />, accept: ".pdf,.doc,.docx", multiple: false, key: "brochure" },
  { label: "Project Floor Plan", icon: <LayoutGrid className="w-5 h-5" />, accept: ".pdf,.jpg,.jpeg,.png,.webp", multiple: false, key: "floorplan" },
  { label: "Project Price Plan", icon: <DollarSign className="w-5 h-5" />, accept: ".pdf,.xlsx,.xls,.doc,.docx", multiple: false, key: "priceplan" },
];

export default function ProjectOnboarding() {
  const [formData, setFormData] = useState({
    pocName: "",
    pocEmail: "",
    pocPhone: "",
    developerName: "",
    projectName: "",
  });
  const [files, setFiles] = useState<Record<string, File[]>>({
    images: [],
    brochure: [],
    floorplan: [],
    priceplan: [],
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (key: string, selectedFiles: FileList | null, multiple: boolean) => {
    if (!selectedFiles) return;
    const newFiles = Array.from(selectedFiles);
    setFiles((prev) => ({
      ...prev,
      [key]: multiple ? [...prev[key], ...newFiles] : newFiles,
    }));
  };

  const removeFile = (key: string, index: number) => {
    setFiles((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, i) => i !== index),
    }));
  };

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("onboarding-files").upload(fileName, file);
    if (error) {
      console.error("Upload error:", error);
      return null;
    }
    const { data } = supabase.storage.from("onboarding-files").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Please accept the consent checkbox to proceed.");
      return;
    }
    if (!formData.pocName || !formData.pocEmail || !formData.pocPhone || !formData.developerName || !formData.projectName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const projectFolder = formData.projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

      // Upload images
      const imageUrls: string[] = [];
      for (const file of files.images) {
        const url = await uploadFile(file, `${projectFolder}/images`);
        if (url) imageUrls.push(url);
      }

      // Upload single files
      let brochureUrl: string | null = null;
      let floorplanUrl: string | null = null;
      let priceplanUrl: string | null = null;

      if (files.brochure[0]) brochureUrl = await uploadFile(files.brochure[0], `${projectFolder}/brochure`);
      if (files.floorplan[0]) floorplanUrl = await uploadFile(files.floorplan[0], `${projectFolder}/floorplan`);
      if (files.priceplan[0]) priceplanUrl = await uploadFile(files.priceplan[0], `${projectFolder}/priceplan`);

      const { error } = await supabase.from("project_onboarding").insert({
        poc_name: formData.pocName,
        poc_email: formData.pocEmail,
        poc_phone: formData.pocPhone,
        developer_name: formData.developerName,
        project_name: formData.projectName,
        image_urls: imageUrls,
        brochure_url: brochureUrl,
        floorplan_url: floorplanUrl,
        priceplan_url: priceplanUrl,
        consent_given: consent,
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Project submitted successfully!");
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Project Onboarding | OffPlan Projects</title>
        </Helmet>
        <Header />
        <main className="min-h-screen bg-background pt-28 pb-20">
          <div className="container-luxury max-w-2xl text-center">
            <div className="bg-card rounded-2xl p-12 shadow-luxury border border-border">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-foreground mb-4">Submission Received</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for submitting your project. Our team will review the details and get back to you shortly.
              </p>
              <Button variant="gold" onClick={() => window.location.href = "/"}>
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <MobileNav />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Project Onboarding | OffPlan Projects</title>
        <meta name="description" content="Submit your off-plan project for listing on OffPlan Projects — Dubai's AI-powered property discovery platform." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container-luxury max-w-3xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project On-boarding
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              List your off-plan project on our platform. Fill in the details below and our team will review and publish your listing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* POC Details */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-5">
                <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                  Point of Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="pocName">POC Name <span className="text-destructive">*</span></Label>
                    <Input id="pocName" placeholder="Full name" value={formData.pocName} onChange={(e) => handleInputChange("pocName", e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pocEmail">POC Email <span className="text-destructive">*</span></Label>
                    <Input id="pocEmail" type="email" placeholder="email@example.com" value={formData.pocEmail} onChange={(e) => handleInputChange("pocEmail", e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pocPhone">POC Phone Number <span className="text-destructive">*</span></Label>
                  <Input id="pocPhone" type="tel" placeholder="+971 50 000 0000" value={formData.pocPhone} onChange={(e) => handleInputChange("pocPhone", e.target.value)} required />
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-5">
                <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                  Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="developerName">Developer Registered Name <span className="text-destructive">*</span></Label>
                    <Input id="developerName" placeholder="e.g. DAMAC Properties" value={formData.developerName} onChange={(e) => handleInputChange("developerName", e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name <span className="text-destructive">*</span></Label>
                    <Input id="projectName" placeholder="e.g. Riverside Views" value={formData.projectName} onChange={(e) => handleInputChange("projectName", e.target.value)} required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Uploads */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6 space-y-5">
                <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                  Upload Documents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {uploadSlots.map((slot) => (
                    <div key={slot.key} className="space-y-2">
                      <Label className="flex items-center gap-2">
                        {slot.icon}
                        {slot.label}
                      </Label>
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        onClick={() => fileInputRefs.current[slot.key]?.click()}
                      >
                        <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload {slot.multiple ? "files" : "file"}
                        </p>
                        <input
                          ref={(el) => { fileInputRefs.current[slot.key] = el; }}
                          type="file"
                          accept={slot.accept}
                          multiple={slot.multiple}
                          className="hidden"
                          onChange={(e) => handleFileSelect(slot.key, e.target.files, slot.multiple)}
                        />
                      </div>
                      {/* Selected files */}
                      {files[slot.key].length > 0 && (
                        <div className="space-y-1">
                          {files[slot.key].map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm bg-muted/50 rounded px-3 py-1.5">
                              <span className="truncate max-w-[200px] text-foreground">{file.name}</span>
                              <button type="button" onClick={() => removeFile(slot.key, idx)} className="text-muted-foreground hover:text-destructive ml-2">
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Consent */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I hereby give consent to <span className="font-semibold text-foreground">OffPlan Projects</span> to use the information shared above on the platform for marketing and promotional purposes. I confirm that all information and documents shared are official, accurate, and true. <span className="font-semibold text-foreground">OffPlan Projects</span> is not responsible for the accuracy of the shared information and holds no liability for any discrepancies.
                    <span className="text-destructive"> *</span>
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" variant="gold" size="lg" disabled={submitting} className="min-w-[220px]">
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Project"
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
