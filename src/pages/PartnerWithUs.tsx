import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PartnerHero } from '../components/partner/PartnerHero';
import { WhyPartner } from '../components/partner/WhyPartner';
import { PartnershipTypes } from '../components/partner/PartnershipTypes';
import { PartnerTestimonials } from '../components/partner/PartnerTestimonials';
import { PartnerCTA } from '../components/partner/PartnerCTA';
import { PartnerBenefits } from '../components/partner/PartnerBenefits';
import { PartnershipModels } from '../components/partner/PartnershipModels';
import { SuccessStories } from '../components/partner/SuccessStories';

export function PartnerWithUsPage() {
  return (
    <Layout>
      <PartnerHero />
      <PartnerBenefits />
      <PartnershipModels />
      <WhyPartner />
      <PartnershipTypes />
      <SuccessStories />
      <PartnerTestimonials />
      <PartnerCTA />
    </Layout>
  );
}