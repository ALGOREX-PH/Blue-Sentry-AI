import React from 'react';
import { Layout } from '../components/layout/Layout';
import { CommunityHero } from '../components/community/CommunityHero';
import { GlobalPartnerships } from '../components/community/GlobalPartnerships';
import { CoastalCommunities } from '../components/community/CoastalCommunities';
import { IndustryCollaboration } from '../components/community/IndustryCollaboration';
import { RealWorldImpact } from '../components/community/RealWorldImpact';
import { CommunityJoin } from '../components/community/CommunityJoin';

export function CommunityPage() {
  return (
    <Layout>
      <CommunityHero />
      <GlobalPartnerships />
      <CoastalCommunities />
      <IndustryCollaboration />
      <RealWorldImpact />
      <CommunityJoin />
    </Layout>
  );
}