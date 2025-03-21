import React from 'react';
import { Button } from '../ui/Button';

export function EcosystemHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-marine/40 via-purple/20 to-deep-900/60" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-aqua/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Preserving Marine Ecosystems for Future Generations
          </h1>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Through innovative technology and sustainable monitoring, we're protecting marine ecosystems from environmental threats.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Learn More</Button>
            <Button variant="secondary">View Impact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}