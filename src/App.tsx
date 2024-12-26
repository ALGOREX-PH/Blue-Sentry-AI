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
import { PartnerWithUsPage } from './pages/PartnerWithUs';
import { ImpactPage } from './pages/Impact';
import { SeeItInActionPage } from './pages/SeeItInAction';
import { RapidResponsePage } from './pages/RapidResponse';

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
          <Route path="/partner" element={<PartnerWithUsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/demo" element={<SeeItInActionPage />} />
          <Route path="/rapid-response" element={<RapidResponsePage />} />
        </Routes>
      </div>
    </Router>
  );
}