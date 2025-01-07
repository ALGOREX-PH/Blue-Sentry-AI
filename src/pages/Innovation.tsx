import React from 'react';
import { Layout } from '../components/layout/Layout';
import { InnovationHero } from '../components/innovation/InnovationHero';
import { CorePrinciples } from '../components/innovation/CorePrinciples';
import { ResearchDevelopment } from '../components/innovation/ResearchDevelopment';
import { InnovationTimeline } from '../components/innovation/InnovationTimeline';
import { InnovationCTA } from '../components/innovation/InnovationCTA';

export function InnovationPage() {
  return (
    <Layout>
      <InnovationHero />
      <CorePrinciples />
      <ResearchDevelopment />
      <InnovationTimeline />
      <InnovationCTA />
    </Layout>
  );
}