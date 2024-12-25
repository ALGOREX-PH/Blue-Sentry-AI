import React from 'react';
import { Layout } from '../components/layout/Layout';
import { EcosystemHero } from '../components/ecosystem/EcosystemHero';
import { EcosystemStats } from '../components/ecosystem/EcosystemStats';
import { HolisticApproach } from '../components/ecosystem/HolisticApproach';
import { EcosystemAIFeatures } from '../components/ecosystem/EcosystemAIFeatures';
import { EcosystemMap } from '../components/ecosystem/EcosystemMap';
import { TechnologyAction } from '../components/ecosystem/TechnologyAction';
import { JoinMission } from '../components/ecosystem/JoinMission';

export function EcosystemProtectionPage() {
  return (
    <Layout>
      <EcosystemHero />
      <EcosystemStats />
      <HolisticApproach />
      <EcosystemAIFeatures />
      <EcosystemMap />
      <TechnologyAction />
      <JoinMission />
    </Layout>
  );
}