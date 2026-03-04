import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Download, TrendingUp, Building2, Home, Briefcase, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ReportLeadModal } from "@/components/lead/ReportLeadModal";

const REPORT_DOWNLOAD_URL = "/reports/dubai-transactions-feb-2026.html";

export default function InsightsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">
              Research & Analysis
            </p>
            <h1 className="text-display text-foreground mb-3">
              Market Insights
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Data-driven reports on Dubai's real estate market — transaction volumes,
              top-performing locations, and sector breakdowns.
            </p>
          </motion.div>

          {/* Report Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-medium tracking-wider uppercase text-primary">
                          Monthly Report
                        </span>
                        <p className="text-xs text-muted-foreground">February 2026</p>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
                      Dubai Real Estate Transactions — February 2026
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Top 15 locations ranked by total transaction value across Off-Plan,
                      Ready, Commercial, and Residential segments. Includes volume trends,
                      price distributions, and area-level comparisons.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {[
                        { icon: TrendingUp, label: "Off-Plan Transactions" },
                        { icon: Home, label: "Ready Properties" },
                        { icon: Briefcase, label: "Commercial" },
                        { icon: Building2, label: "Residential" },
                        { icon: MapPin, label: "Top 15 Locations" },
                      ].map(({ icon: Icon, label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {label}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="gold"
                      size="lg"
                      className="rounded-full"
                      onClick={() => setShowModal(true)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download February Report
                    </Button>
                  </div>

                  <div className="hidden lg:block w-72 shrink-0">
                    <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-4">
                      <p className="text-xs font-medium tracking-wider uppercase text-primary mb-3">
                        Report Highlights
                      </p>
                      {[
                        { label: "Total Transactions", value: "15,200+" },
                        { label: "Top Location", value: "Business Bay" },
                        { label: "Off-Plan Share", value: "62%" },
                        { label: "MoM Growth", value: "+8.4%" },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">{label}</span>
                          <span className="text-sm font-semibold text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground">
              More monthly reports and market analysis coming soon.
            </p>
          </motion.div>
        </div>
      </main>

      <ReportLeadModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        downloadUrl={REPORT_DOWNLOAD_URL}
        reportName="Dubai Transactions Feb 2026 Report"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
