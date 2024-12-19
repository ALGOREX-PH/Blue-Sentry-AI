import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ServicesHero } from '../components/services/ServicesHero';
import { CoreServices } from '../components/services/CoreServices';
import { AdditionalServices } from '../components/services/AdditionalServices';
import { ServicesCTA } from '../components/services/ServicesCTA';

export function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <CoreServices />
      <AdditionalServices />
      <ServicesCTA />
    </Layout>
  );
}