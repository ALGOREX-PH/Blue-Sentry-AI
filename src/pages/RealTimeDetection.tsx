import React from 'react';
import { Layout } from '../components/layout/Layout';
import { DetectionHero } from '../components/detection/DetectionHero';
import { DetectionFeatures } from '../components/detection/DetectionFeatures';
import { RealWorldImpact } from '../components/detection/RealWorldImpact';
import { DetectionCTA } from '../components/detection/DetectionCTA';

export function RealTimeDetectionPage() {
  return (
    <Layout>
      <DetectionHero />
      <DetectionFeatures />
      <RealWorldImpact />
      <DetectionCTA />
    </Layout>
  );
}