import React from 'react';
import { Button } from '../ui/Button';

export function TransparencyHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Transparency Fuels Trust. Trust Drives Protection.
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            At Blue Sentry AI, transparency isn't just a policy—it's our foundation. Through open data access, traceable AI decisions, and continuous reporting, we build trust that empowers effective ocean protection.
          </p>
          <Button>Explore Our Commitment</Button>
        </div>
      </div>
    </section>
  );
}