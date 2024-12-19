import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SolutionHero } from '../components/solution/SolutionHero';
import { Crisis } from '../components/solution/Crisis';
import { Approach } from '../components/solution/Approach';
import { Performance } from '../components/solution/Performance';
import { CallToAction } from '../components/solution/CallToAction';

export function SolutionPage() {
  return (
    <Layout>
      <SolutionHero />
      <Crisis />
      <Approach />
      <Performance />
      <CallToAction />
    </Layout>
  );
}