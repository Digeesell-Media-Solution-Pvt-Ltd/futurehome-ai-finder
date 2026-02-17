import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { supabase } from "@/integrations/supabase/client";

const COUNTRY_CODES = [
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+968", label: "🇴🇲 +968" },
  { code: "+974", label: "🇶🇦 +974" },
  { code: "+973", label: "🇧🇭 +973" },
  { code: "+965", label: "🇰🇼 +965" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+86", label: "🇨🇳 +86" },
  { code: "+7", label: "🇷🇺 +7" },
  { code: "+92", label: "🇵🇰 +92" },
  { code: "+20", label: "🇪🇬 +20" },
  { code: "+90", label: "🇹🇷 +90" },
];

interface FormData {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  requirement: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  requirement?: string;
}

const NAME_REGEX = /^[a-zA-Z\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d+$/;

export function LeadCaptureModal() {
  const { isOpen, config, closeLeadCapture } = useLeadCapture();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    countryCode: "+971",
    phone: "",
    email: "",
    requirement: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCodeDropdown, setShowCodeDropdown] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm({ fullName: "", countryCode: "+971", phone: "", email: "", requirement: "" });
      setErrors({});
      setTouched({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.fullName.trim()) errs.fullName = "Full name is required";
    else if (!NAME_REGEX.test(data.fullName.trim())) errs.fullName = "Name must contain letters only";

    if (!data.phone.trim()) errs.phone = "Phone number is required";
    else if (!PHONE_REGEX.test(data.phone.trim())) errs.phone = "Phone must contain digits only";
    else if (data.phone.trim().length < 8) errs.phone = "Phone number must be at least 8 digits";
    else if (data.phone.trim().length > 14) errs.phone = "Phone number must not exceed 14 digits";

    if (!data.email.trim()) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(data.email.trim())) errs.email = "Enter a valid email address";

    if (!data.requirement.trim()) errs.requirement = "Requirement is required";
    else if (data.requirement.length > 200) errs.requirement = "Requirement must not exceed 200 characters";

    return errs;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const isValid = Object.keys(validate(form)).length === 0 && form.fullName && form.phone && form.email && form.requirement;

  const handleSubmit = async () => {
    const errs = validate(form);
    setErrors(errs);
    setTouched({ fullName: true, phone: true, email: true, requirement: true });
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      await supabase.from("leads").insert({
        full_name: form.fullName.trim(),
        email: form.email.trim(),
        phone_country_code: form.countryCode,
        phone_number: form.phone.trim(),
        requirement: form.requirement.trim(),
        project_name: config.projectName || null,
        cta_type: config.ctaType,
        download_url: config.downloadUrl || null,
      });
      setIsSubmitted(true);
    } catch {
      // silently handle
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    if (config.downloadUrl) {
      window.open(config.downloadUrl, "_blank");
    }
    closeLeadCapture();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeLeadCapture(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-card/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={closeLeadCapture}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-2">
                    Thank You
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our team will connect you shortly.
                  </p>
                  {config.downloadUrl && (
                    <Button variant="gold" className="rounded-full" onClick={handleDownload}>
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </Button>
                  )}
                  {!config.downloadUrl && (
                    <Button variant="gold-outline" className="rounded-full" onClick={closeLeadCapture}>
                      Close
                    </Button>
                  )}
                </motion.div>
              ) : (
                /* Form */
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-display font-medium text-foreground mb-1">
                      {config.ctaType === "Download Brochure" || config.ctaType === "Download Floor Plan"
                        ? config.ctaType
                        : "Get Project Details"}
                    </h3>
                    {config.projectName && (
                      <p className="text-sm text-muted-foreground">{config.projectName}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Your full name"
                        className="w-full h-11 px-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="text-xs text-destructive mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                      <div className="flex gap-2">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowCodeDropdown(!showCodeDropdown)}
                            className="h-11 px-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm flex items-center gap-1 min-w-[90px]"
                          >
                            {COUNTRY_CODES.find((c) => c.code === form.countryCode)?.label || form.countryCode}
                            <ChevronDown className="w-3 h-3 text-muted-foreground" />
                          </button>
                          {showCodeDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-36 max-h-48 overflow-y-auto rounded-xl bg-card border border-border shadow-xl z-50">
                              {COUNTRY_CODES.map((c) => (
                                <button
                                  key={c.code}
                                  type="button"
                                  onClick={() => { setForm((f) => ({ ...f, countryCode: c.code })); setShowCodeDropdown(false); }}
                                  className="w-full text-left px-3 py-2 text-sm hover:bg-muted/50 text-foreground"
                                >
                                  {c.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={form.phone}
                          onChange={(e) => {
                            const v = e.target.value.replace(/\D/g, "");
                            handleChange("phone", v);
                          }}
                          onBlur={() => handleBlur("phone")}
                          placeholder="Phone number"
                          className="flex-1 h-11 px-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="your@email.com"
                        className="w-full h-11 px-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Requirement */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Requirement *</label>
                      <textarea
                        value={form.requirement}
                        onChange={(e) => handleChange("requirement", e.target.value.slice(0, 200))}
                        onBlur={() => handleBlur("requirement")}
                        placeholder="What are you looking for?"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                      />
                      <div className="flex justify-between mt-1">
                        {touched.requirement && errors.requirement ? (
                          <p className="text-xs text-destructive">{errors.requirement}</p>
                        ) : <span />}
                        <p className="text-xs text-muted-foreground">{form.requirement.length}/200</p>
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      variant="hero"
                      className="w-full rounded-full"
                      disabled={!isValid || isSubmitting}
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? "Submitting..." : (
                        <>
                          Submit
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    {/* Disclaimer */}
                    <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                      By submitting this form, you agree to be contacted by authorized project representatives.
                      This platform operates as a property discovery portal and does not provide brokerage services.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
