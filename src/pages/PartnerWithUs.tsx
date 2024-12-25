import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PartnerHero } from '../components/partner/PartnerHero';
import { WhyPartner } from '../components/partner/WhyPartner';
import { PartnershipTypes } from '../components/partner/PartnershipTypes';
import { PartnerTestimonials } from '../components/partner/PartnerTestimonials';
import { PartnerCTA } from '../components/partner/PartnerCTA';

export function PartnerWithUsPage() {
  return (
    <Layout>
      <PartnerHero />
      <WhyPartner />
      <PartnershipTypes />
      <PartnerTestimonials />
      <PartnerCTA />
    </Layout>
  );
}