import React from 'react';
import { MissionHero } from '../components/mission/MissionHero';
import { Lifeblood } from '../components/mission/Lifeblood';
import { CoreValues } from '../components/mission/CoreValues';
import { ImpactMetrics } from '../components/mission/ImpactMetrics';
import { JoinMission } from '../components/mission/JoinMission';
import { Footer } from '../components/Footer';

export function MissionPage() {
  return (
    <div className="min-h-screen bg-deep-900">
      <div className="fixed inset-0 bg-gradient-radial from-ocean-800/20 via-deep-900/50 to-deep-900 -z-10" />
      <main>
        <MissionHero />
        <Lifeblood />
        <CoreValues />
        <ImpactMetrics />
        <JoinMission />
      </main>
      <Footer />
    </div>
  );
}