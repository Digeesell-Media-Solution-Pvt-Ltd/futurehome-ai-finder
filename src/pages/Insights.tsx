import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Download, TrendingUp, Building2, Home, MapPin, Calendar, FileText } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SeoHead } from "@/components/seo/SeoHead";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ReportLeadModal } from "@/components/lead/ReportLeadModal";

interface ReportData {
  id: string;
  month: string;
  year: string;
  downloadUrl: string;
  reportName: string;
  title: string;
  description: string;
  tags: { icon: React.ElementType; label: string }[];
  highlights: { label: string; value: string }[];
}

const REPORTS: ReportData[] = [
  {
    id: "jan-2026",
    month: "January",
    year: "2026",
    downloadUrl: "/reports/dubai-transactions-jan-2026.html",
    reportName: "Dubai Transactions Jan 2026 Report",
    title: "Dubai Off-Plan Transactions — January 2026",
    description:
      "Comprehensive off-plan transaction report covering 95 active areas. Includes area-wise unit volumes, total transaction values, average selling prices, room-type breakdowns, and top 10 area deep-dives.",
    tags: [
      { icon: TrendingUp, label: "9,511 Transactions" },
      { icon: Home, label: "AED 22.37B Total Value" },
      { icon: MapPin, label: "95 Active Areas" },
      { icon: Building2, label: "Area-wise Breakdown" },
    ],
    highlights: [
      { label: "Total Transactions", value: "9,511" },
      { label: "Top Area by Volume", value: "DLRC (640)" },
      { label: "Avg Deal Size", value: "AED 2.4M" },
      { label: "Highest Area Value", value: "AED 2.57B" },
    ],
  },
  {
    id: "feb-2026",
    month: "February",
    year: "2026",
    downloadUrl: "/reports/dubai-transactions-feb-2026-full.html",
    reportName: "Dubai Transactions Feb 2026 Report",
    title: "Dubai Off-Plan Transactions — February 2026",
    description:
      "Full monthly off-plan transaction report for 98 areas. Area-wise rankings by units sold and value, average selling prices per area, room-type heatmaps, and detailed top 10 area analysis.",
    tags: [
      { icon: TrendingUp, label: "9,388 Transactions" },
      { icon: Home, label: "AED 22.48B Total Value" },
      { icon: MapPin, label: "98 Active Areas" },
      { icon: Building2, label: "Area-wise Breakdown" },
    ],
    highlights: [
      { label: "Total Transactions", value: "9,388" },
      { label: "Top Area by Volume", value: "Madinat Al Mataar (747)" },
      { label: "Avg Deal Size", value: "AED 2.4M" },
      { label: "Highest Area Value", value: "AED 1.74B" },
    ],
  },
  {
    id: "feb-2026-summary",
    month: "February",
    year: "2026",
    downloadUrl: "/reports/dubai-transactions-feb-2026.html",
    reportName: "Dubai Transactions Feb 2026 Summary",
    title: "Dubai Transaction Values — February 2026 Summary",
    description:
      "Top 15 locations ranked by total transaction value across Off-Plan, Ready, Commercial, and Residential segments. Includes volume trends, price distributions, and area-level comparisons.",
    tags: [
      { icon: TrendingUp, label: "Off-Plan Transactions" },
      { icon: Home, label: "Ready Properties" },
      { icon: Building2, label: "Commercial & Residential" },
      { icon: MapPin, label: "Top 15 Locations" },
    ],
    highlights: [
      { label: "Total Transactions", value: "17,014" },
      { label: "Off-Plan Total", value: "AED 19.5B" },
      { label: "Ready Total", value: "AED 27.2B" },
      { label: "Unique Areas", value: "200+" },
    ],
  },
];

export default function InsightsPage() {
  const [activeReport, setActiveReport] = useState<ReportData | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="UAE Real Estate Market Reports & Insights | OffPlanProjects"
        description="Download monthly UAE real estate market reports. Track off-plan project launches, developer activity, and investment trends across Dubai and UAE."
        canonicalPath="/insights"
      />
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
              top-performing locations, average selling prices, and sector breakdowns.
            </p>
          </motion.div>

          {/* Report Cards */}
          <div className="space-y-6">
            {REPORTS.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
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
                            <p className="text-xs text-muted-foreground">
                              {report.month} {report.year}
                            </p>
                          </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
                          {report.title}
                        </h2>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {report.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {report.tags.map(({ icon: Icon, label }) => (
                            <span
                              key={label}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground"
                            >
                              <Icon className="w-3.5 h-3.5" />
                              {label}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            variant="gold"
                            size="lg"
                            className="rounded-full"
                            onClick={() => setActiveReport(report)}
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            View {report.month} Report
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full"
                            onClick={() => setActiveReport(report)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>

                      <div className="hidden lg:block w-72 shrink-0">
                        <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-4">
                          <p className="text-xs font-medium tracking-wider uppercase text-primary mb-3">
                            Report Highlights
                          </p>
                          {report.highlights.map(({ label, value }) => (
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
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground">
              More monthly reports and market analysis coming soon.
            </p>
          </motion.div>
        </div>
      </main>

      {activeReport && (
        <ReportLeadModal
          isOpen={!!activeReport}
          onClose={() => setActiveReport(null)}
          downloadUrl={activeReport.downloadUrl}
          reportName={activeReport.reportName}
        />
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
