import React from 'react';
import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { DemoHero } from '../components/demo/DemoHero';
import { LiveDashboard } from '../components/demo/LiveDashboard';
import { HeatmapVisualization } from '../components/demo/HeatmapVisualization';
import { BeforeAfter } from '../components/demo/BeforeAfter';
import { CaseStudies } from '../components/demo/CaseStudies';
import { DemoCTA } from '../components/demo/DemoCTA';
import { ImageUpload } from '../components/demo/ImageUpload';
import { AnalysisProcess } from '../components/demo/AnalysisProcess';
import { DetectionResults } from '../components/demo/DetectionResults';
import { DemoCases } from '../components/demo/DemoCases';

export function SeeItInActionPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <DemoHero />
      <LiveDashboard />
      <HeatmapVisualization />
      <BeforeAfter />
      <CaseStudies />
      <ImageUpload onImageSelect={setSelectedImage} />
      <AnalysisProcess />
      <DetectionResults originalImage={selectedImage} />
      <DemoCases />
      <DemoCTA />
    </Layout>
  );
}