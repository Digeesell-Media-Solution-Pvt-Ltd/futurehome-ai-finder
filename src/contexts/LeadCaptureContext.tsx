import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface LeadCaptureConfig {
  projectName?: string;
  ctaType: string;
  downloadUrl?: string;
}

interface LeadCaptureContextType {
  isOpen: boolean;
  config: LeadCaptureConfig;
  openLeadCapture: (config: LeadCaptureConfig) => void;
  requestBrochureDownload: (url: string, projectName?: string) => void;
  handleLeadSubmitSuccess: () => void;
  closeLeadCapture: () => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<LeadCaptureConfig>({ ctaType: "General" });
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState<string | null>(null);

  const triggerDownload = useCallback((url: string) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.download = "";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }, []);

  const openLeadCapture = useCallback((cfg: LeadCaptureConfig) => {
    setConfig(cfg);
    setIsOpen(true);
  }, []);

  const requestBrochureDownload = useCallback((url: string, projectName?: string) => {
    setPendingDownloadUrl(url);
    setConfig({
      projectName,
      ctaType: "Download Brochure",
      downloadUrl: url,
    });
    setIsOpen(true);
  }, []);

  const handleLeadSubmitSuccess = useCallback(() => {
    const url = pendingDownloadUrl || config.downloadUrl;
    if (url) {
      triggerDownload(url);
    }
    setPendingDownloadUrl(null);
  }, [pendingDownloadUrl, config.downloadUrl, triggerDownload]);

  const closeLeadCapture = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadCaptureContext.Provider
      value={{
        isOpen,
        config,
        openLeadCapture,
        requestBrochureDownload,
        handleLeadSubmitSuccess,
        closeLeadCapture,
      }}
    >
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const ctx = useContext(LeadCaptureContext);
  if (!ctx) throw new Error("useLeadCapture must be used within LeadCaptureProvider");
  return ctx;
}
