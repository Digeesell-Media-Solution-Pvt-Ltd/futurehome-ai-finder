import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const NAME_REGEX = /^[a-zA-Z\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ReportLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
  reportName: string;
}

export function ReportLeadModal({ isOpen, onClose, downloadUrl, reportName }: ReportLeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) errs.name = "Name is required";
    else if (!NAME_REGEX.test(name.trim())) errs.name = "Letters only";
    if (!email.trim()) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(email.trim())) errs.email = "Enter a valid email";
    return errs;
  };

  const isValid = Object.keys(validate()).length === 0 && name && email;

  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, email: true });
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      await supabase.from("leads").insert({
        full_name: name.trim(),
        email: email.trim(),
        phone_country_code: "+000",
        phone_number: "00000000",
        requirement: "Report Download",
        project_name: reportName,
        cta_type: "Download Report",
        download_url: downloadUrl,
      });
      setIsSubmitted(true);
    } catch {
      // silently handle
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewReport = () => {
    window.open(downloadUrl, "_blank");
    handleClose();
  };

  const handleDownloadReport = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = reportName.replace(/\s+/g, "-").toLowerCase() + ".html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    onClose();
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
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-card/95 backdrop-blur-xl shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-4"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Your report is ready.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="gold" className="rounded-full" onClick={handleViewReport}>
                      <FileText className="w-4 h-4 mr-2" />
                      Open Report
                    </Button>
                    <Button variant="outline" className="rounded-full" onClick={handleDownloadReport}>
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-5">
                    <h3 className="text-lg font-display font-medium text-foreground mb-1">
                      Download Report
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Enter your details to access the report.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (touched.name) setErrors(validate());
                        }}
                        onBlur={() => { setTouched(t => ({ ...t, name: true })); setErrors(validate()); }}
                        placeholder="Your name"
                        className="w-full h-11 px-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (touched.email) setErrors(validate());
                        }}
                        onBlur={() => { setTouched(t => ({ ...t, email: true })); setErrors(validate()); }}
                        placeholder="your@email.com"
                        className="w-full h-11 px-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

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

                    <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                      By submitting, you agree to be contacted by authorized representatives.
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
