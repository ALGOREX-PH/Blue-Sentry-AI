import React from 'react';
import { Layout } from '../components/layout/Layout';
import { InnovationImpactHero } from '../components/innovation-impact/InnovationImpactHero';
import { CorePrinciples } from '../components/innovation-impact/CorePrinciples';
import { ResearchDevelopment } from '../components/innovation-impact/ResearchDevelopment';
import { InnovationTimeline } from '../components/innovation-impact/InnovationTimeline';
import { InnovationImpactCTA } from '../components/innovation-impact/InnovationImpactCTA';

export function InnovationImpactPage() {
  return (
    <Layout>
      <InnovationImpactHero />
      <CorePrinciples />
      <ResearchDevelopment />
      <InnovationTimeline />
      <InnovationImpactCTA />
    </Layout>
  );
}