import React from 'react';
import { Layout } from '../components/layout/Layout';
import { EconomicHero } from '../components/economic/EconomicHero';
import { IndustryImpacts } from '../components/economic/IndustryImpacts';
import { CaseStudy } from '../components/economic/CaseStudy';
import { EconomicCTA } from '../components/economic/EconomicCTA';

export function EconomicImpactPage() {
  return (
    <Layout>
      <EconomicHero />
      <IndustryImpacts />
      <CaseStudy />
      <EconomicCTA />
    </Layout>
  );
}