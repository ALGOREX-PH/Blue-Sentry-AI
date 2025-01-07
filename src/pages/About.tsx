import React from 'react';
import { Layout } from '../components/layout/Layout';
import { AboutHero } from '../components/about/AboutHero';
import { Biography } from '../components/about/Biography';
import { Achievements } from '../components/about/Achievements';
import { Vision } from '../components/about/Vision';
import { AboutCTA } from '../components/about/AboutCTA';

export function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <Biography />
      <Achievements />
      <Vision />
      <AboutCTA />
    </Layout>
  );
}