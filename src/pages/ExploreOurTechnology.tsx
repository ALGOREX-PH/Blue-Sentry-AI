import React from 'react';
import { Layout } from '../components/layout/Layout';
import { TechHero } from '../components/explore/TechHero';
import { HowItWorks } from '../components/explore/HowItWorks';
import { ImageUpload } from '../components/explore/ImageUpload';
import { InteractiveDemo } from '../components/explore/InteractiveDemo';
import { TechPerformance } from '../components/explore/TechPerformance';
import { Applications } from '../components/explore/Applications';
import { ExploreCTA } from '../components/explore/ExploreCTA';

export function ExploreOurTechnologyPage() {
  return (
    <Layout>
      <TechHero />
      <HowItWorks />
      <ImageUpload />
      <InteractiveDemo />
      <TechPerformance />
      <Applications />
      <ExploreCTA />
    </Layout>
  );
}