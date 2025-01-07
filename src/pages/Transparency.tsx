import React from 'react';
import { Layout } from '../components/layout/Layout';
import { TransparencyHero } from '../components/transparency/TransparencyHero';
import { OpenAccess } from '../components/transparency/OpenAccess';
import { TraceableAI } from '../components/transparency/TraceableAI';
import { ContinuousReporting } from '../components/transparency/ContinuousReporting';
import { TransparencyCTA } from '../components/transparency/TransparencyCTA';

export function TransparencyPage() {
  return (
    <Layout>
      <TransparencyHero />
      <OpenAccess />
      <TraceableAI />
      <ContinuousReporting />
      <TransparencyCTA />
    </Layout>
  );
}