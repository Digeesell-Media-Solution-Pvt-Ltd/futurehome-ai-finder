import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AISearch from "./pages/AISearch";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
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
