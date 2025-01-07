import React from 'react';
import { Layout } from '../components/layout/Layout';
import { GlobalCollabHero } from '../components/global-collab/GlobalCollabHero';
import { PartnershipNetwork } from '../components/global-collab/PartnershipNetwork';
import { CollaborationImpact } from '../components/global-collab/CollaborationImpact';
import { PartnerTestimonials } from '../components/global-collab/PartnerTestimonials';
import { GlobalCollabCTA } from '../components/global-collab/GlobalCollabCTA';

export function GlobalCollaborationPage() {
  return (
    <Layout>
      <GlobalCollabHero />
      <PartnershipNetwork />
      <CollaborationImpact />
      <PartnerTestimonials />
      <GlobalCollabCTA />
    </Layout>
  );
}