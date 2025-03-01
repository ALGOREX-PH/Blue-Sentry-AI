import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import { MissionPage } from './pages/Mission';
import { SolutionPage } from './pages/Solution';
import { ServicesPage } from './pages/Services';
import { AiSatelliteTechPage } from './pages/AiSatelliteTech';
import { EcosystemProtectionPage } from './pages/EcosystemProtection';
import { BiodiversityLossPage } from './pages/BiodiversityLoss';
import { EconomicImpactPage } from './pages/EconomicImpact';
import { EnvironmentalDamagePage } from './pages/EnvironmentalDamage';
import { Sentinel1SarDataPage } from './pages/Sentinel1SarData';
import { ExploreOurTechnologyPage } from './pages/ExploreOurTechnology';
import { ProprietaryAiPage } from './pages/ProprietaryAi';
import { ChallengesWithCurrentMethodsPage } from './pages/ChallengesWithCurrentMethods';
import { PartnerWithUsPage } from './pages/PartnerWithUs';
import { ImpactPage } from './pages/Impact';
import { SeeItInActionPage } from './pages/SeeItInAction';
import { RapidResponsePage } from './pages/RapidResponse';
import { ActionableInsightsPage } from './pages/ActionableInsights';
import { RealTimeDetectionPage } from './pages/RealTimeDetection';
import { ImpactAssessmentPage } from './pages/ImpactAssessment';
import { JoinMissionPage } from './pages/JoinMission';
import { VisionPage } from './pages/Vision';
import { AboutPage } from './pages/About';
import { InnovationImpactPage } from './pages/InnovationImpact';
import { InnovationPage } from './pages/Innovation';
import { SustainabilityPage } from './pages/Sustainability';
import { CommunityPage } from './pages/Community';
import { TransparencyPage } from './pages/Transparency';
import { EducationPage } from './pages/Education';
import { GlobalCollaborationPage } from './pages/GlobalCollaboration';
/*

Coded by Danielle Bagaforo Meer
Lets Connect : https://www.linkedin.com/in/algorexph

*/
export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-900">
        <div className="fixed inset-0 bg-gradient-radial -z-10" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technology" element={<AiSatelliteTechPage />} />
          <Route path="/ecosystem" element={<EcosystemProtectionPage />} />
          <Route path="/biodiversity" element={<BiodiversityLossPage />} />
          <Route path="/economic-impact" element={<EconomicImpactPage />} />
          <Route path="/environmental-damage" element={<EnvironmentalDamagePage />} />
          <Route path="/sar-technology" element={<Sentinel1SarDataPage />} />
          <Route path="/explore-technology" element={<ExploreOurTechnologyPage />} />
          <Route path="/ai-technology" element={<ProprietaryAiPage />} />
          <Route path="/challenges" element={<ChallengesWithCurrentMethodsPage />} />
          <Route path="/partner" element={<PartnerWithUsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/demo" element={<SeeItInActionPage />} />
          <Route path="/rapid-response" element={<RapidResponsePage />} />
          <Route path="/actionable-insights" element={<ActionableInsightsPage />} />
          <Route path="/real-time-detection" element={<RealTimeDetectionPage />} />
          <Route path="/impact-assessment" element={<ImpactAssessmentPage />} />
          <Route path="/join-mission" element={<JoinMissionPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/innovation-impact" element={<InnovationImpactPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/global-collaboration" element={<GlobalCollaborationPage />} />
        </Routes>
      </div>
    </Router>
  );
}