import { HelmetProvider } from "react-helmet-async";
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
import Oasiz2Project from "./pages/projects/Oasiz2Project";
import DamacIslands2Project from "./pages/projects/DamacIslands2Project";
import DamacDistrictProject from "./pages/projects/DamacDistrictProject";
import ChelseaResidencesProject from "./pages/projects/ChelseaResidencesProject";
import SafaGateProject from "./pages/projects/SafaGateProject";
import RiversideViewsProject from "./pages/projects/RiversideViewsProject";
import Violet4Project from "./pages/projects/Violet4Project";
import SunCityProject from "./pages/projects/SunCityProject";
import DamacIslandsProject from "./pages/projects/DamacIslandsProject";
import ShorelineProject from "./pages/projects/ShorelineProject";
import Elo3Project from "./pages/projects/Elo3Project";
import BurjAziziProject from "./pages/projects/BurjAziziProject";
import AliyahProject from "./pages/projects/AliyahProject";
import CreekViewsProject from "./pages/projects/CreekViewsProject";
import AuraProject from "./pages/projects/AuraProject";
import BinghattiLuxuriaProject from "./pages/projects/BinghattiLuxuriaProject";
import BinghattiCullinanProject from "./pages/projects/BinghattiCullinanProject";
import BinghattiHillcrestProject from "./pages/projects/BinghattiHillcrestProject";
import BinghattiTitaniaProject from "./pages/projects/BinghattiTitaniaProject";
import BinghattiVintageProject from "./pages/projects/BinghattiVintageProject";
import SamanaBoulevardProject from "./pages/projects/SamanaBoulevardProject";
import SamanaHillsSouth3Project from "./pages/projects/SamanaHillsSouth3Project";
import SamanaHillsSouth2Project from "./pages/projects/SamanaHillsSouth2Project";
import SamanaImperialProject from "./pages/projects/SamanaImperialProject";
import SamanaSkyViewsProject from "./pages/projects/SamanaSkyViewsProject";
import RukanTowerProject from "./pages/projects/RukanTowerProject";
import PerlaPrimeProject from "./pages/projects/PerlaPrimeProject";
import RHillsProject from "./pages/projects/RHillsProject";
import ViaProject from "./pages/projects/ViaProject";
import TheGroveProject from "./pages/projects/TheGroveProject";
import TheGreensProject from "./pages/projects/TheGreensProject";
import TheBrooksProject from "./pages/projects/TheBrooksProject";
import ThePinnacleProject from "./pages/projects/ThePinnacleProject";
import SkyvueAltierProject from "./pages/projects/SkyvueAltierProject";
import CityWalkCrestlaneProject from "./pages/projects/CityWalkCrestlaneProject";
import TheEditD3Project from "./pages/projects/TheEditD3Project";
import NadAlShebaGardensProject from "./pages/projects/NadAlShebaGardensProject";
import MJLNourelleProject from "./pages/projects/MJLNourelleProject";
import JumeirahEmiratesTowerProject from "./pages/projects/JumeirahEmiratesTowerProject";
import MeridenBeachProject from "./pages/projects/MeridenBeachProject";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import Developers from "./pages/Developers";
import DeveloperDetail from "./pages/DeveloperDetail";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import AdvertisingPolicy from "./pages/AdvertisingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-search" element={<AISearch />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/danube/breez" element={<BreezProject />} />
          <Route path="/projects/danube/timez" element={<TimezProject />} />
          <Route path="/projects/danube/sparklz" element={<SparklzProject />} />
          <Route path="/projects/danube/shahrukhz" element={<ShahrukhzProject />} />
          <Route path="/projects/danube/aspirz" element={<AspirzProject />} />
          <Route path="/projects/danube/bayz102" element={<Bayz102Project />} />
          <Route path="/projects/danube/oasiz" element={<OasizProject />} />
          <Route path="/projects/danube/oasiz2" element={<Oasiz2Project />} />
          <Route path="/projects/damac/damac-islands-2" element={<DamacIslands2Project />} />
          <Route path="/projects/damac/damac-district" element={<DamacDistrictProject />} />
          <Route path="/projects/damac/chelsea-residences" element={<ChelseaResidencesProject />} />
          <Route path="/projects/damac/safa-gate" element={<SafaGateProject />} />
          <Route path="/projects/damac/riverside-views" element={<RiversideViewsProject />} />
          <Route path="/projects/damac/violet-4" element={<Violet4Project />} />
          <Route path="/projects/damac/sun-city" element={<SunCityProject />} />
          <Route path="/projects/damac/damac-islands" element={<DamacIslandsProject />} />
          <Route path="/projects/damac/shoreline" element={<ShorelineProject />} />
          <Route path="/projects/damac/elo-3" element={<Elo3Project />} />
          <Route path="/projects/azizi/burj-azizi" element={<BurjAziziProject />} />
          <Route path="/projects/azizi/aliyah" element={<AliyahProject />} />
          <Route path="/projects/azizi/creek-views" element={<CreekViewsProject />} />
          <Route path="/projects/azizi/aura" element={<AuraProject />} />
          <Route path="/projects/binghatti/binghatti-luxuria" element={<BinghattiLuxuriaProject />} />
          <Route path="/projects/binghatti/binghatti-cullinan" element={<BinghattiCullinanProject />} />
          <Route path="/projects/binghatti/binghatti-hillcrest" element={<BinghattiHillcrestProject />} />
          <Route path="/projects/binghatti/binghatti-titania" element={<BinghattiTitaniaProject />} />
          <Route path="/projects/binghatti/binghatti-vintage" element={<BinghattiVintageProject />} />
          <Route path="/projects/samana/samana-boulevard" element={<SamanaBoulevardProject />} />
          <Route path="/projects/samana/samana-hills-south-3" element={<SamanaHillsSouth3Project />} />
          <Route path="/projects/samana/samana-hills-south-2" element={<SamanaHillsSouth2Project />} />
          <Route path="/projects/samana/samana-imperial" element={<SamanaImperialProject />} />
          <Route path="/projects/samana/samana-sky-views" element={<SamanaSkyViewsProject />} />
          <Route path="/projects/reportage/rukan-tower" element={<RukanTowerProject />} />
          <Route path="/projects/reportage/perla-prime" element={<PerlaPrimeProject />} />
          <Route path="/projects/reportage/r-hills" element={<RHillsProject />} />
          <Route path="/projects/reportage/via" element={<ViaProject />} />
          <Route path="/projects/sobha/the-grove" element={<TheGroveProject />} />
          <Route path="/projects/sobha/the-greens" element={<TheGreensProject />} />
          <Route path="/projects/sobha/the-brooks" element={<TheBrooksProject />} />
          <Route path="/projects/sobha/the-pinnacle" element={<ThePinnacleProject />} />
          <Route path="/projects/sobha/skyvue-altier" element={<SkyvueAltierProject />} />
          <Route path="/projects/meraas/city-walk-crestlane" element={<CityWalkCrestlaneProject />} />
          <Route path="/projects/meraas/the-edit-d3" element={<TheEditD3Project />} />
          <Route path="/projects/meraas/nad-al-sheba-gardens" element={<NadAlShebaGardensProject />} />
          <Route path="/projects/meraas/mjl-nourelle" element={<MJLNourelleProject />} />
          <Route path="/projects/meraas/jumeirah-emirates-tower" element={<JumeirahEmiratesTowerProject />} />
          <Route path="/projects/green-horizon/meriden-beach" element={<MeridenBeachProject />} />
          <Route path="/projects/:developer/:projectId" element={<ProjectDetail />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:areaId" element={<AreaDetail />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/:developerId" element={<DeveloperDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/advertising-policy" element={<AdvertisingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
