import React from 'react';
import { Layout } from '../components/layout/Layout';
import { AiHero } from '../components/ai/AiHero';
import { Complexity } from '../components/ai/Complexity';
import { AiFeatures } from '../components/ai/AiFeatures';
import { AiCTA } from '../components/ai/AiCTA';

export function ProprietaryAiPage() {
  return (
    <Layout>
      <AiHero />
      <Complexity />
      <AiFeatures />
      <AiCTA />
    </Layout>
  );
}