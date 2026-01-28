import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AISearch from "./pages/AISearch";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import BreezProject from "./pages/projects/BreezProject";
import TimezProject from "./pages/projects/TimezProject";
import SparklzProject from "./pages/projects/SparklzProject";
import ShahrukhzProject from "./pages/projects/ShahrukhzProject";
import AspirzProject from "./pages/projects/AspirzProject";
import Bayz102Project from "./pages/projects/Bayz102Project";
import OasizProject from "./pages/projects/OasizProject";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import Developers from "./pages/Developers";
import DeveloperDetail from "./pages/DeveloperDetail";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-search" element={<AISearch />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/breez" element={<BreezProject />} />
          <Route path="/projects/timez" element={<TimezProject />} />
          <Route path="/projects/sparklz" element={<SparklzProject />} />
          <Route path="/projects/shahrukhz" element={<ShahrukhzProject />} />
          <Route path="/projects/aspirz" element={<AspirzProject />} />
          <Route path="/projects/bayz102" element={<Bayz102Project />} />
          <Route path="/projects/oasiz" element={<OasizProject />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:areaId" element={<AreaDetail />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/:developerId" element={<DeveloperDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
