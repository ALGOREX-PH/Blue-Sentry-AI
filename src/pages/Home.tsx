import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { Mission } from '../components/home/Mission';
import { Crisis } from '../components/home/Crisis';
import { Solution } from '../components/home/Solution';
import { Services } from '../components/home/Services';
import { Vision } from '../components/home/Vision';
import { Features } from '../components/home/Features';

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Crisis />
      <Solution />
      <Services />
      <Vision />
      <Features />
    </Layout>
  );
}