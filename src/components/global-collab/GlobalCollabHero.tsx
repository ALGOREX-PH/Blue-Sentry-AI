import React from 'react';
import { Button } from '../ui/Button';

export function GlobalCollabHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Protecting Oceans is a Shared Responsibility
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            The oceans belong to all of us, but no single entity can protect them alone. At Blue Sentry AI, we firmly believe that by working together—across industries, nations, and communities—we can achieve transformative results that ensure the preservation of marine ecosystems.
          </p>
          <Button>Join Our Global Network</Button>
        </div>
      </div>
    </section>
  );
}