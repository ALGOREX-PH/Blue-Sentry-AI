import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SarHero } from '../components/sar/SarHero';
import { KeyFeatures } from '../components/sar/KeyFeatures';
import { HowItWorks } from '../components/sar/HowItWorks';
import { SarCTA } from '../components/sar/SarCTA';

export function Sentinel1SarDataPage() {
  return (
    <Layout>
      <SarHero />
      <KeyFeatures />
      <HowItWorks />
      <SarCTA />
    </Layout>
  );
}