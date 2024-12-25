import React from 'react';
import { Layout } from '../components/layout/Layout';
import { TechHero } from '../components/tech/TechHero';
import { CoreTechnologies } from '../components/tech/CoreTechnologies';
import { TechSpecs } from '../components/tech/TechSpecs';
import { HowItWorks } from '../components/tech/HowItWorks';
import { TechDemo } from '../components/tech/TechDemo';
import { TechBenefits } from '../components/tech/TechBenefits';
import { TechCTA } from '../components/tech/TechCTA';

export function AiSatelliteTechPage() {
  return (
    <Layout>
      <TechHero />
      <CoreTechnologies />
      <TechSpecs />
      <HowItWorks />
      <TechDemo />
      <TechBenefits />
      <TechCTA />
    </Layout>
  );
}