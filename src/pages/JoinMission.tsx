import React from 'react';
import { Layout } from '../components/layout/Layout';
import { JoinMissionHero } from '../components/join-mission/JoinMissionHero';
import { MissionIntro } from '../components/join-mission/MissionIntro';
import { GetInvolved } from '../components/join-mission/GetInvolved';
import { ContributionTiers } from '../components/join-mission/ContributionTiers';
import { TrustedPartners } from '../components/join-mission/TrustedPartners';
import { JoinMissionCTA } from '../components/join-mission/JoinMissionCTA';

export function JoinMissionPage() {
  return (
    <Layout>
      <JoinMissionHero />
      <MissionIntro />
      <GetInvolved />
      <ContributionTiers />
      <TrustedPartners />
      <JoinMissionCTA />
    </Layout>
  );
}