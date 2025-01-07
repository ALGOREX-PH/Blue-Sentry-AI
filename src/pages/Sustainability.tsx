import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SustainabilityHero } from '../components/sustainability/SustainabilityHero';
import { SustainabilityPillars } from '../components/sustainability/SustainabilityPillars';
import { Initiatives } from '../components/sustainability/Initiatives';
import { GlobalImpact } from '../components/sustainability/GlobalImpact';
import { SustainabilityCTA } from '../components/sustainability/SustainabilityCTA';

export function SustainabilityPage() {
  return (
    <Layout>
      <SustainabilityHero />
      <SustainabilityPillars />
      <Initiatives />
      <GlobalImpact />
      <SustainabilityCTA />
    </Layout>
  );
}