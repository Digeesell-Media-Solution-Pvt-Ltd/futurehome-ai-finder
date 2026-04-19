import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeadCaptureProvider } from "@/contexts/LeadCaptureContext";
import { LeadCaptureModal } from "@/components/lead/LeadCaptureModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const AISearchPage = lazy(() => import("./pages/AISearch"));
const InsightsPage = lazy(() => import("./pages/Insights"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const BreezProject = lazy(() => import("./pages/projects/BreezProject"));
const TimezProject = lazy(() => import("./pages/projects/TimezProject"));
const SparklzProject = lazy(() => import("./pages/projects/SparklzProject"));
const ShahrukhzProject = lazy(() => import("./pages/projects/ShahrukhzProject"));
const AspirzProject = lazy(() => import("./pages/projects/AspirzProject"));
const Bayz102Project = lazy(() => import("./pages/projects/Bayz102Project"));
const OasizProject = lazy(() => import("./pages/projects/OasizProject"));
const Oasiz2Project = lazy(() => import("./pages/projects/Oasiz2Project"));
const DamacIslands2Project = lazy(() => import("./pages/projects/DamacIslands2Project"));
const DamacDistrictProject = lazy(() => import("./pages/projects/DamacDistrictProject"));
const ChelseaResidencesProject = lazy(() => import("./pages/projects/ChelseaResidencesProject"));
const SafaGateProject = lazy(() => import("./pages/projects/SafaGateProject"));
const RiversideViewsProject = lazy(() => import("./pages/projects/RiversideViewsProject"));
const Violet4Project = lazy(() => import("./pages/projects/Violet4Project"));
const SunCityProject = lazy(() => import("./pages/projects/SunCityProject"));
const DamacIslandsProject = lazy(() => import("./pages/projects/DamacIslandsProject"));
const ShorelineProject = lazy(() => import("./pages/projects/ShorelineProject"));
const Elo3Project = lazy(() => import("./pages/projects/Elo3Project"));
const BurjAziziProject = lazy(() => import("./pages/projects/BurjAziziProject"));
const AziziDavidProject = lazy(() => import("./pages/projects/AziziDavidProject"));
const PrestigeOneResidencesProject = lazy(() => import("./pages/projects/PrestigeOneResidencesProject"));
const SunvaleProject = lazy(() => import("./pages/projects/SunvaleProject"));
const Blossom40Project = lazy(() => import("./pages/projects/Blossom40Project"));
const OvelleTheValleyProject = lazy(() => import("./pages/projects/OvelleTheValleyProject"));
const ArtHouseHillsProject = lazy(() => import("./pages/projects/ArtHouseHillsProject"));
const AliyahProject = lazy(() => import("./pages/projects/AliyahProject"));
const CreekViewsProject = lazy(() => import("./pages/projects/CreekViewsProject"));
const AuraProject = lazy(() => import("./pages/projects/AuraProject"));
const BinghattiLuxuriaProject = lazy(() => import("./pages/projects/BinghattiLuxuriaProject"));
const BinghattiCullinanProject = lazy(() => import("./pages/projects/BinghattiCullinanProject"));
const BinghattiHillcrestProject = lazy(() => import("./pages/projects/BinghattiHillcrestProject"));
const BinghattiTitaniaProject = lazy(() => import("./pages/projects/BinghattiTitaniaProject"));
const BinghattiVintageProject = lazy(() => import("./pages/projects/BinghattiVintageProject"));
const SamanaBoulevardProject = lazy(() => import("./pages/projects/SamanaBoulevardProject"));
const SamanaHillsSouth3Project = lazy(() => import("./pages/projects/SamanaHillsSouth3Project"));
const SamanaHillsSouth2Project = lazy(() => import("./pages/projects/SamanaHillsSouth2Project"));
const SamanaImperialProject = lazy(() => import("./pages/projects/SamanaImperialProject"));
const SamanaSkyViewsProject = lazy(() => import("./pages/projects/SamanaSkyViewsProject"));
const RukanTowerProject = lazy(() => import("./pages/projects/RukanTowerProject"));
const PerlaPrimeProject = lazy(() => import("./pages/projects/PerlaPrimeProject"));
const RHillsProject = lazy(() => import("./pages/projects/RHillsProject"));
const ViaProject = lazy(() => import("./pages/projects/ViaProject"));
const TheGroveProject = lazy(() => import("./pages/projects/TheGroveProject"));
const TheGreensProject = lazy(() => import("./pages/projects/TheGreensProject"));
const TheBrooksProject = lazy(() => import("./pages/projects/TheBrooksProject"));
const ThePinnacleProject = lazy(() => import("./pages/projects/ThePinnacleProject"));
const SkyvueAltierProject = lazy(() => import("./pages/projects/SkyvueAltierProject"));
const CityWalkCrestlaneProject = lazy(() => import("./pages/projects/CityWalkCrestlaneProject"));
const CityWalkCrestlane5Project = lazy(() => import("./pages/projects/CityWalkCrestlane5Project"));
const CityWalkCrestlane4Project = lazy(() => import("./pages/projects/CityWalkCrestlane4Project"));
const TheEditD3Project = lazy(() => import("./pages/projects/TheEditD3Project"));
const NadAlShebaGardensProject = lazy(() => import("./pages/projects/NadAlShebaGardensProject"));
const NadAlShebaGardensPhase11Project = lazy(() => import("./pages/projects/NadAlShebaGardensPhase11Project"));
const MJLNourelleProject = lazy(() => import("./pages/projects/MJLNourelleProject"));
const JumeirahEmiratesTowerProject = lazy(() => import("./pages/projects/JumeirahEmiratesTowerProject"));
const MeridenBeachProject = lazy(() => import("./pages/projects/MeridenBeachProject"));
const DamacCasaProject = lazy(() => import("./pages/projects/DamacCasaProject"));
const VoltaProject = lazy(() => import("./pages/projects/VoltaProject"));
const CoralReefProject = lazy(() => import("./pages/projects/CoralReefProject"));
const EleganceTowerProject = lazy(() => import("./pages/projects/EleganceTowerProject"));
const CanalHeightsProject = lazy(() => import("./pages/projects/CanalHeightsProject"));
const LaTiliaProject = lazy(() => import("./pages/projects/LaTiliaProject"));
const MudonAlRanim7Project = lazy(() => import("./pages/projects/MudonAlRanim7Project"));
const EltieraViewsProject = lazy(() => import("./pages/projects/EltieraViewsProject"));
const MerivaCollectionProject = lazy(() => import("./pages/projects/MerivaCollectionProject"));
const SalvaProject = lazy(() => import("./pages/projects/SalvaProject"));
const MuroojAlFurjanProject = lazy(() => import("./pages/projects/MuroojAlFurjanProject"));
const AlbaResidencesProject = lazy(() => import("./pages/projects/AlbaResidencesProject"));
const MudonAlRanim5Project = lazy(() => import("./pages/projects/MudonAlRanim5Project"));
const GroveRidgeProject = lazy(() => import("./pages/projects/GroveRidgeProject"));
const VistaRidgeProject = lazy(() => import("./pages/projects/VistaRidgeProject"));
const AlberoDubaiCreekHarbourProject = lazy(() => import("./pages/projects/AlberoDubaiCreekHarbourProject"));
const GolfMeadowEmaarSouthProject = lazy(() => import("./pages/projects/GolfMeadowEmaarSouthProject"));
const GolfVergeEmaarSouthProject = lazy(() => import("./pages/projects/GolfVergeEmaarSouthProject"));
const GolfDaleEmaarSouthProject = lazy(() => import("./pages/projects/GolfDaleEmaarSouthProject"));
const ParkwoodDubaiHillsEstateProject = lazy(() => import("./pages/projects/ParkwoodDubaiHillsEstateProject"));
const Sera1Project = lazy(() => import("./pages/projects/Sera1Project"));
const Sera2Project = lazy(() => import("./pages/projects/Sera2Project"));
const PalmCentralPrivateResidencesProject = lazy(() => import("./pages/projects/PalmCentralPrivateResidencesProject"));
const SymphonyByChaimaaProject = lazy(() => import("./pages/projects/SymphonyByChaimaaProject"));
const GrandPoloChevaliaEstate2Project = lazy(() => import("./pages/projects/GrandPoloChevaliaEstate2Project"));
const GrandPoloEquiterra2Project = lazy(() => import("./pages/projects/GrandPoloEquiterra2Project"));
const ZyraHillsProject = lazy(() => import("./pages/projects/ZyraHillsProject"));
const TilalAlFurjanProject = lazy(() => import("./pages/projects/TilalAlFurjanProject"));
const CanalFrontResidencesProject = lazy(() => import("./pages/projects/CanalFrontResidencesProject"));
const OrlaDorchesterProject = lazy(() => import("./pages/projects/OrlaDorchesterProject"));
const VelaVientoProject = lazy(() => import("./pages/projects/VelaVientoProject"));
const HayatDubaiSouthProject = lazy(() => import("./pages/projects/HayatDubaiSouthProject"));
const PeninsulaFourProject = lazy(() => import("./pages/projects/PeninsulaFourProject"));
const ArtistryOneProject = lazy(() => import("./pages/projects/ArtistryOneProject"));
const ArtistryTwoProject = lazy(() => import("./pages/projects/ArtistryTwoProject"));
const JumeirahLivingProject = lazy(() => import("./pages/projects/JumeirahLivingProject"));
const SixSensesResidencesDubaiMarinaProject = lazy(() => import("./pages/projects/SixSensesResidencesDubaiMarinaProject"));
const DerbyHeightsProject = lazy(() => import("./pages/projects/DerbyHeightsProject"));
const ArtHousePrivateResidencesProject = lazy(() => import("./pages/projects/ArtHousePrivateResidencesProject"));
const PalaceResidencesHillsideBProject = lazy(() => import("./pages/projects/PalaceResidencesHillsideBProject"));
const WindsorHouseIIProject = lazy(() => import("./pages/projects/WindsorHouseIIProject"));
const SeaCliffByImtiazProject = lazy(() => import("./pages/projects/SeaCliffByImtiazProject"));
const LineaByHolmProject = lazy(() => import("./pages/projects/LineaByHolmProject"));
const MoonsaResidences2Project = lazy(() => import("./pages/projects/MoonsaResidences2Project"));
const DevelopersPage = lazy(() => import("./pages/Developers"));
const DeveloperProjectsPage = lazy(() => import("./pages/DeveloperProjects"));
const Masterdatapannel = lazy(() => import("./pages/Masterdatapannel"));
const SelectGroupPage = lazy(() => import("./pages/developers/SelectGroupPage"));
const Areas = lazy(() => import("./pages/Areas"));
const AreaDetail = lazy(() => import("./pages/AreaDetail"));
const DubaiMarinaArea = lazy(() => import("./pages/areas/DubaiMarinaArea"));
const DowntownDubaiArea = lazy(() => import("./pages/areas/DowntownDubaiArea"));
const PalmJumeirahArea = lazy(() => import("./pages/areas/PalmJumeirahArea"));
const BusinessBayArea = lazy(() => import("./pages/areas/BusinessBayArea"));
const DubaiHillsArea = lazy(() => import("./pages/areas/DubaiHillsArea"));
const JVCArea = lazy(() => import("./pages/areas/JVCArea"));
const DubaiCreekHarbourArea = lazy(() => import("./pages/areas/DubaiCreekHarbourArea"));
const MeydanArea = lazy(() => import("./pages/areas/MeydanArea"));
const AlMarjanIslandArea = lazy(() => import("./pages/areas/AlMarjanIslandArea"));
const DubaiSouthArea = lazy(() => import("./pages/areas/DubaiSouthArea"));
const DubaiSportsCityArea = lazy(() => import("./pages/areas/DubaiSportsCityArea"));
const AlFurjanArea = lazy(() => import("./pages/areas/AlFurjanArea"));
const DubaiSiliconOasisArea = lazy(() => import("./pages/areas/DubaiSiliconOasisArea"));
const DamacHillsArea = lazy(() => import("./pages/areas/DamacHillsArea"));
const SheikhZayedRoadArea = lazy(() => import("./pages/areas/SheikhZayedRoadArea"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const AdvertisingPolicy = lazy(() => import("./pages/AdvertisingPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Saved = lazy(() => import("./pages/Saved"));
const ProjectOnboarding = lazy(() => import("./pages/ProjectOnboarding"));
const ProgrammaticAreaPage = lazy(() => import("./pages/programmatic/ProgrammaticAreaPage"));
const ProgrammaticDeveloperSeoPage = lazy(() => import("./pages/programmatic/ProgrammaticDeveloperSeoPage"));
const ProgrammaticBlogPage = lazy(() => import("./pages/programmatic/ProgrammaticBlogPage"));
const BlogListingPage = lazy(() => import("./pages/Blog"));

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
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-search" element={<AISearchPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<InsightsPage />} />
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
            <Route path="/projects/azizi/azizi-david" element={<AziziDavidProject />} />
            <Route path="/projects/prestige-one/prestige-one-residences" element={<PrestigeOneResidencesProject />} />
            <Route path="/projects/prysm/sunvale" element={<SunvaleProject />} />
            <Route path="/projects/tranquil/blossom-40" element={<Blossom40Project />} />
            <Route path="/projects/adaan/art-house-hills" element={<ArtHouseHillsProject />} />
            <Route
              path="/projects/dugasta-properties/moonsa-residences-2"
              element={<MoonsaResidences2Project />}
            />
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
            <Route
              path="/projects/meraas/city-walk-crestlane-4"
              element={<CityWalkCrestlane4Project />}
            />
            <Route
              path="/projects/meraas/city-walk-crestlane-5"
              element={<CityWalkCrestlane5Project />}
            />
            <Route path="/projects/meraas/the-edit-d3" element={<TheEditD3Project />} />
            <Route path="/projects/meraas/nad-al-sheba-gardens" element={<NadAlShebaGardensProject />} />
            <Route
              path="/projects/meraas/nad-al-sheba-gardens-phase-11"
              element={<NadAlShebaGardensPhase11Project />}
            />
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
            <Route path="/projects/emaar/albero-at-dubai-creek-harbour" element={<AlberoDubaiCreekHarbourProject />} />
            <Route path="/projects/emaar/golf-meadow-at-emaar-south" element={<GolfMeadowEmaarSouthProject />} />
            <Route path="/projects/emaar/golf-verge-at-emaar-south" element={<GolfVergeEmaarSouthProject />} />
            <Route path="/projects/emaar/golf-dale-at-emaar-south" element={<GolfDaleEmaarSouthProject />} />
            <Route path="/projects/emaar/parkwood-at-dubai-hills-estate" element={<ParkwoodDubaiHillsEstateProject />} />
            <Route path="/projects/emaar/sera-1" element={<Sera1Project />} />
            <Route path="/projects/emaar/sera-2" element={<Sera2Project />} />
            <Route path="/projects/emaar/grand-polo-chevalia-estate-2" element={<GrandPoloChevaliaEstate2Project />} />
            <Route path="/projects/emaar/grand-polo-equiterra-2" element={<GrandPoloEquiterra2Project />} />
            <Route path="/projects/emaar/ovelle-at-the-valley" element={<OvelleTheValleyProject />} />
            <Route path="/projects/chaimaa/symphony-by-chaimaa" element={<SymphonyByChaimaaProject />} />
            <Route path="/projects/laraix/zyra-hills" element={<ZyraHillsProject />} />
            <Route path="/projects/nakheel/palm-central-private-residences" element={<PalmCentralPrivateResidencesProject />} />
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
            <Route path="/projects/select-group/six-senses-residences-dubai-marina" element={<SixSensesResidencesDubaiMarinaProject />} />
            <Route path="/projects/amis/derby-heights" element={<DerbyHeightsProject />} />
            <Route
              path="/projects/viva/art-house-private-residences"
              element={<ArtHousePrivateResidencesProject />}
            />
            <Route
              path="/projects/emaar/palace-residences-hillside-b"
              element={<PalaceResidencesHillsideBProject />}
            />
            <Route
              path="/projects/ellington/windsor-house-ii"
              element={<WindsorHouseIIProject />}
            />
            <Route
              path="/projects/imtiaz/sea-cliff-by-imtiaz"
              element={<SeaCliffByImtiazProject />}
            />
            <Route
              path="/projects/holm/linea-by-holm"
              element={<LineaByHolmProject />}
            />
            <Route
              path="/projects/dubai-south-properties/hayat-dubai-south"
              element={<HayatDubaiSouthProject />}
            />
            <Route path="/projects/:developer/:projectId" element={<ProjectDetail />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/developers/:developerSlug" element={<DeveloperProjectsPage />} />
            <Route path="/developers/select-group" element={<SelectGroupPage />} />
            {/* Programmatic SEO templates — data-driven slugs from src/data/programmatic/*.seed.ts */}
            <Route path="/off-plan-projects/:areaSlug" element={<ProgrammaticAreaPage />} />
            <Route path="/off-plan-by-developer/:developerSlug" element={<ProgrammaticDeveloperSeoPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:topicSlug" element={<ProgrammaticBlogPage />} />
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/advertising-policy" element={<AdvertisingPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/project-onboarding" element={<ProjectOnboarding />} />
            <Route path="/Masterdatapannel" element={<Masterdatapannel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      </LeadCaptureProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
