import React from 'react';
import { Layout } from '../components/layout/Layout';
import { DemoHero } from '../components/demo/DemoHero';
import { LiveDashboard } from '../components/demo/LiveDashboard';
import { HeatmapVisualization } from '../components/demo/HeatmapVisualization';
import { BeforeAfter } from '../components/demo/BeforeAfter';
import { CaseStudies } from '../components/demo/CaseStudies';
import { DemoCTA } from '../components/demo/DemoCTA';

export function SeeItInActionPage() {
  return (
    <Layout>
      <DemoHero />
      <LiveDashboard />
      <HeatmapVisualization />
      <BeforeAfter />
      <CaseStudies />
      <DemoCTA />
    </Layout>
  );
}