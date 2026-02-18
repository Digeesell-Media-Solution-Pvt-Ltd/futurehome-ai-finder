import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeadCaptureProvider } from "@/contexts/LeadCaptureContext";
import { LeadCaptureModal } from "@/components/lead/LeadCaptureModal";
import Index from "./pages/Index";
import AISearchPage from "./pages/AISearch";
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
import DamacCasaProject from "./pages/projects/DamacCasaProject";
import VoltaProject from "./pages/projects/VoltaProject";
import CoralReefProject from "./pages/projects/CoralReefProject";
import EleganceTowerProject from "./pages/projects/EleganceTowerProject";
import CanalHeightsProject from "./pages/projects/CanalHeightsProject";
import LaTiliaProject from "./pages/projects/LaTiliaProject";
import MudonAlRanim7Project from "./pages/projects/MudonAlRanim7Project";
import EltieraViewsProject from "./pages/projects/EltieraViewsProject";
import MerivaCollectionProject from "./pages/projects/MerivaCollectionProject";
import SalvaProject from "./pages/projects/SalvaProject";
import MuroojAlFurjanProject from "./pages/projects/MuroojAlFurjanProject";
import AlbaResidencesProject from "./pages/projects/AlbaResidencesProject";
import MudonAlRanim5Project from "./pages/projects/MudonAlRanim5Project";
import GroveRidgeProject from "./pages/projects/GroveRidgeProject";
import VistaRidgeProject from "./pages/projects/VistaRidgeProject";
import TilalAlFurjanProject from "./pages/projects/TilalAlFurjanProject";
import CanalFrontResidencesProject from "./pages/projects/CanalFrontResidencesProject";
import OrlaDorchesterProject from "./pages/projects/OrlaDorchesterProject";
import VelaVientoProject from "./pages/projects/VelaVientoProject";
import PeninsulaFourProject from "./pages/projects/PeninsulaFourProject";
import ArtistryOneProject from "./pages/projects/ArtistryOneProject";
import ArtistryTwoProject from "./pages/projects/ArtistryTwoProject";
import JumeirahLivingProject from "./pages/projects/JumeirahLivingProject";
import Areas from "./pages/Areas";
import AreaDetail from "./pages/AreaDetail";
import DubaiMarinaArea from "./pages/areas/DubaiMarinaArea";
import DowntownDubaiArea from "./pages/areas/DowntownDubaiArea";
import PalmJumeirahArea from "./pages/areas/PalmJumeirahArea";
import BusinessBayArea from "./pages/areas/BusinessBayArea";
import DubaiHillsArea from "./pages/areas/DubaiHillsArea";
import JVCArea from "./pages/areas/JVCArea";
import DubaiCreekHarbourArea from "./pages/areas/DubaiCreekHarbourArea";
import MeydanArea from "./pages/areas/MeydanArea";
import AlMarjanIslandArea from "./pages/areas/AlMarjanIslandArea";
import DubaiSouthArea from "./pages/areas/DubaiSouthArea";
import DubaiSportsCityArea from "./pages/areas/DubaiSportsCityArea";
import AlFurjanArea from "./pages/areas/AlFurjanArea";
import DubaiSiliconOasisArea from "./pages/areas/DubaiSiliconOasisArea";
import DamacHillsArea from "./pages/areas/DamacHillsArea";
import SheikhZayedRoadArea from "./pages/areas/SheikhZayedRoadArea";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import AdvertisingPolicy from "./pages/AdvertisingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiePolicy from "./pages/CookiePolicy";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LeadCaptureProvider>
      <Toaster />
      <Sonner />
      <LeadCaptureModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-search" element={<AISearchPage />} />
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
          <Route path="/projects/damac/damac-casa" element={<DamacCasaProject />} />
          <Route path="/projects/damac/volta" element={<VoltaProject />} />
          <Route path="/projects/damac/coral-reef" element={<CoralReefProject />} />
          <Route path="/projects/damac/elegance-tower" element={<EleganceTowerProject />} />
          <Route path="/projects/damac/canal-heights" element={<CanalHeightsProject />} />
          <Route path="/projects/dubai-properties/la-tilia" element={<LaTiliaProject />} />
          <Route path="/projects/dubai-properties/mudon-al-ranim-5" element={<MudonAlRanim5Project />} />
          <Route path="/projects/dubai-properties/mudon-al-ranim-7" element={<MudonAlRanim7Project />} />
          <Route path="/projects/ellington/eltiera-views" element={<EltieraViewsProject />} />
          <Route path="/projects/ellington/meriva-collection" element={<MerivaCollectionProject />} />
          <Route path="/projects/emaar/salva" element={<SalvaProject />} />
          <Route path="/projects/emaar/grove-ridge" element={<GroveRidgeProject />} />
          <Route path="/projects/emaar/vista-ridge" element={<VistaRidgeProject />} />
          <Route path="/projects/nakheel/tilal-al-furjan" element={<TilalAlFurjanProject />} />
          <Route path="/projects/nakheel/canal-front-residences" element={<CanalFrontResidencesProject />} />
          <Route path="/projects/nakheel/murooj-al-furjan" element={<MuroojAlFurjanProject />} />
          <Route path="/projects/omniyat/alba-residences" element={<AlbaResidencesProject />} />
          <Route path="/projects/omniyat/orla-dorchester-collection" element={<OrlaDorchesterProject />} />
          <Route path="/projects/omniyat/vela-viento-dorchester-collection" element={<VelaVientoProject />} />
          <Route path="/projects/select-group/peninsula-four-the-plaza" element={<PeninsulaFourProject />} />
          <Route path="/projects/select-group/artistry-one-residences" element={<ArtistryOneProject />} />
          <Route path="/projects/select-group/artistry-two-residences" element={<ArtistryTwoProject />} />
          <Route path="/projects/select-group/jumeirah-living-business-bay" element={<JumeirahLivingProject />} />
          <Route path="/projects/:developer/:projectId" element={<ProjectDetail />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/dubai-marina" element={<DubaiMarinaArea />} />
          <Route path="/areas/downtown-dubai" element={<DowntownDubaiArea />} />
          <Route path="/areas/palm-jumeirah" element={<PalmJumeirahArea />} />
          <Route path="/areas/business-bay" element={<BusinessBayArea />} />
          <Route path="/areas/dubai-hills" element={<DubaiHillsArea />} />
          <Route path="/areas/jvc" element={<JVCArea />} />
          <Route path="/areas/dubai-creek-harbour" element={<DubaiCreekHarbourArea />} />
          <Route path="/areas/meydan" element={<MeydanArea />} />
          <Route path="/areas/al-marjan-island" element={<AlMarjanIslandArea />} />
          <Route path="/areas/dubai-south" element={<DubaiSouthArea />} />
          <Route path="/areas/dubai-sports-city" element={<DubaiSportsCityArea />} />
          <Route path="/areas/al-furjan" element={<AlFurjanArea />} />
          <Route path="/areas/dubai-silicon-oasis" element={<DubaiSiliconOasisArea />} />
          <Route path="/areas/damac-hills" element={<DamacHillsArea />} />
          <Route path="/areas/sheikh-zayed-road" element={<SheikhZayedRoadArea />} />
          <Route path="/areas/:areaId" element={<AreaDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/advertising-policy" element={<AdvertisingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </LeadCaptureProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
