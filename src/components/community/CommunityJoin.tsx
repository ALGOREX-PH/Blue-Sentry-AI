import React from 'react';
import { Button } from '../ui/Button';

export function CommunityJoin() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the Movement
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          The future of our oceans depends on the actions we take today. Partner with Blue Sentry AI to empower communities and drive impactful change.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Partner With Us</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}