import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ChallengesHero } from '../components/challenges/ChallengesHero';
import { TraditionalMethods } from '../components/challenges/TraditionalMethods';
import { ComparisonTable } from '../components/challenges/ComparisonTable';
import { BetterApproach } from '../components/challenges/BetterApproach';
import { ChallengesCTA } from '../components/challenges/ChallengesCTA';

export function ChallengesWithCurrentMethodsPage() {
  return (
    <Layout>
      <ChallengesHero />
      <TraditionalMethods />
      <ComparisonTable />
      <BetterApproach />
      <ChallengesCTA />
    </Layout>
  );
}