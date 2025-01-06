import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ImpactHero } from '../components/impact-assessment/ImpactHero';
import { ImpactFeatures } from '../components/impact-assessment/ImpactFeatures';
import { RiskVisualizations } from '../components/impact-assessment/RiskVisualizations';
import { RealWorldCase } from '../components/impact-assessment/RealWorldCase';
import { ImpactCTA } from '../components/impact-assessment/ImpactCTA';

export function ImpactAssessmentPage() {
  return (
    <Layout>
      <ImpactHero />
      <ImpactFeatures />
      <RiskVisualizations />
      <RealWorldCase />
      <ImpactCTA />
    </Layout>
  );
}