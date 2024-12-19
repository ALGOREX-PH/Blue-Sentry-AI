import React from 'react';
import { Button } from '../ui/Button';

export function ImpactHero() {
  return (
    <section className="relative min-h-[60vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Our Impact: Safeguarding Oceans, One Detection at a Time
          </h1>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            The oceans are the lifeblood of our planet. We harness AI to detect, monitor, and
            mitigate oil spills faster than ever before.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}