import React from 'react';
import { Layout } from '../components/layout/Layout';
import { VisionHero } from '../components/vision/VisionHero';
import { VisionIntro } from '../components/vision/VisionIntro';
import { LongTermVision } from '../components/vision/LongTermVision';
import { TechRoadmap } from '../components/vision/TechRoadmap';
import { VisionCTA } from '../components/vision/VisionCTA';

export function VisionPage() {
  return (
    <Layout>
      <VisionHero />
      <VisionIntro />
      <LongTermVision />
      <TechRoadmap />
      <VisionCTA />
    </Layout>
  );
}