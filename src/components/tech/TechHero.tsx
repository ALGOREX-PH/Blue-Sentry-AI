import React from 'react';
import { Button } from '../ui/Button';

export function TechHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Innovative Technology for Ocean Conservation
          </h1>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            At Blue Sentry AI, we are on the frontier of technological innovation, harnessing the power of artificial intelligence and high-resolution satellite data to safeguard our oceans.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}