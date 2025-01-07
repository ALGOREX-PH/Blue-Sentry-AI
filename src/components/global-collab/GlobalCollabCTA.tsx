import React from 'react';
import { Button } from '../ui/Button';

export function GlobalCollabCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Your Partnership Can Shape the Future of Ocean Conservation
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          The challenges our oceans face are vast, but together, we can forge a path toward a cleaner, healthier marine environment. Partner with Blue Sentry AI to become part of a global movement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Partner with Us</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}