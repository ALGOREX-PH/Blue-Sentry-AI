import React from 'react';
import { Layout } from '../components/layout/Layout';
import { BiodiversityHero } from '../components/biodiversity/BiodiversityHero';
import { BiodiversityThreats } from '../components/biodiversity/BiodiversityThreats';
import { BiodiversityProtection } from '../components/biodiversity/BiodiversityProtection';
import { BiodiversityCTA } from '../components/biodiversity/BiodiversityCTA';

export function BiodiversityLossPage() {
  return (
    <Layout>
      <BiodiversityHero />
      <BiodiversityThreats />
      <BiodiversityProtection />
      <BiodiversityCTA />
    </Layout>
  );
}