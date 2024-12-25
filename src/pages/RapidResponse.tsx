import React from 'react';
import { Layout } from '../components/layout/Layout';
import { RapidResponseHero } from '../components/rapid-response/RapidResponseHero';
import { ResponseMetrics } from '../components/rapid-response/ResponseMetrics';
import { HowItWorks } from '../components/rapid-response/HowItWorks';
import { TacticalResponse } from '../components/rapid-response/TacticalResponse';
import { PredictiveContainment } from '../components/rapid-response/PredictiveContainment';
import { ResponseBenefits } from '../components/rapid-response/ResponseBenefits';
import { CaseStudies } from '../components/rapid-response/CaseStudies';
import { ResponseCTA } from '../components/rapid-response/ResponseCTA';

export function RapidResponsePage() {
  return (
    <Layout>
      <RapidResponseHero />
      <ResponseMetrics />
      <HowItWorks />
      <TacticalResponse />
      <PredictiveContainment />
      <ResponseBenefits />
      <CaseStudies />
      <ResponseCTA />
    </Layout>
  );
}