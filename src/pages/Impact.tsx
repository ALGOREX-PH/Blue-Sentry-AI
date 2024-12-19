import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ImpactHero } from '../components/impact/ImpactHero';
import { ImpactMetrics } from '../components/impact/ImpactMetrics';
import { SuccessStories } from '../components/impact/SuccessStories';
import { ImpactCTA } from '../components/impact/ImpactCTA';

export function ImpactPage() {
  return (
    <Layout>
      <ImpactHero />
      <ImpactMetrics />
      <SuccessStories />
      <ImpactCTA />
    </Layout>
  );
}