import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ActionableHero } from '../components/actionable/ActionableHero';
import { KeyFeatures } from '../components/actionable/KeyFeatures';
import { ArcticCase } from '../components/actionable/ArcticCase';
import { ActionableCTA } from '../components/actionable/ActionableCTA';

export function ActionableInsightsPage() {
  return (
    <Layout>
      <ActionableHero />
      <KeyFeatures />
      <ArcticCase />
      <ActionableCTA />
    </Layout>
  );
}