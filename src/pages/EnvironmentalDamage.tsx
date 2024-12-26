import React from 'react';
import { Layout } from '../components/layout/Layout';
import { EnvironmentalHero } from '../components/environmental/EnvironmentalHero';
import { EnvironmentalImpacts } from '../components/environmental/EnvironmentalImpacts';
import { TechnologySolution } from '../components/environmental/TechnologySolution';
import { EnvironmentalCTA } from '../components/environmental/EnvironmentalCTA';

export function EnvironmentalDamagePage() {
  return (
    <Layout>
      <EnvironmentalHero />
      <EnvironmentalImpacts />
      <TechnologySolution />
      <EnvironmentalCTA />
    </Layout>
  );
}