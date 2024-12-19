import React from 'react';
import { Button } from '../ui/Button';

export function SolutionHero() {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            BlueSentry AI: Intelligent Oil Spill Detection and Classification for a Healthier Ocean
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Accelerating the pace of environmental protection through advanced satellite imaging, proprietary AI algorithms, and real-time analytics.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Request Demo</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}