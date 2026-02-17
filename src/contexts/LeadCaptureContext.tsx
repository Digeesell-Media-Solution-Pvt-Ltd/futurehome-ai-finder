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
  closeLeadCapture: () => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | null>(null);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<LeadCaptureConfig>({ ctaType: "General" });

  const openLeadCapture = useCallback((cfg: LeadCaptureConfig) => {
    setConfig(cfg);
    setIsOpen(true);
  }, []);

  const closeLeadCapture = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadCaptureContext.Provider value={{ isOpen, config, openLeadCapture, closeLeadCapture }}>
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const ctx = useContext(LeadCaptureContext);
  if (!ctx) throw new Error("useLeadCapture must be used within LeadCaptureProvider");
  return ctx;
}
