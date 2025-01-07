import React from 'react';
import { Button } from '../ui/Button';

export function InnovationImpactCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join Us in Shaping the Future
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Partner with Blue Sentry AI to pioneer innovative solutions for ocean conservation
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Contact Our Team</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}