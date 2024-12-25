import React from 'react';
import { Layout } from '../components/layout/Layout';
import { EcosystemHero } from '../components/ecosystem/EcosystemHero';
import { EcosystemStats } from '../components/ecosystem/EcosystemStats';
import { HolisticApproach } from '../components/ecosystem/HolisticApproach';
import { TechnologyAction } from '../components/ecosystem/TechnologyAction';
import { JoinMission } from '../components/ecosystem/JoinMission';

export function EcosystemProtectionPage() {
  return (
    <Layout>
      <EcosystemHero />
      <EcosystemStats />
      <HolisticApproach />
      <TechnologyAction />
      <JoinMission />
    </Layout>
  );
}