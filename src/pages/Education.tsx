import React from 'react';
import { Layout } from '../components/layout/Layout';
import { EducationHero } from '../components/education/EducationHero';
import { CommunityLearning } from '../components/education/CommunityLearning';
import { IndustryEducation } from '../components/education/IndustryEducation';
import { NextGeneration } from '../components/education/NextGeneration';
import { EducationCTA } from '../components/education/EducationCTA';

export function EducationPage() {
  return (
    <Layout>
      <EducationHero />
      <CommunityLearning />
      <IndustryEducation />
      <NextGeneration />
      <EducationCTA />
    </Layout>
  );
}