import React from 'react';
import { Layout } from '../components/layout/Layout';
import { MissionHero } from '../components/mission/MissionHero';
import { Lifeblood } from '../components/mission/Lifeblood';
import { CoreValues } from '../components/mission/CoreValues';
import { ImpactMetrics } from '../components/mission/ImpactMetrics';
import { JoinMission } from '../components/mission/JoinMission';

export function MissionPage() {
  return (
    <Layout>
      <MissionHero />
      <Lifeblood />
      <CoreValues />
      <ImpactMetrics />
      <JoinMission />
    </Layout>
  );
}