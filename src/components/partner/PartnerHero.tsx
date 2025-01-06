import React from 'react';
import { Button } from '../ui/Button';

export function PartnerHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-marine/40 via-purple/20 to-deep-900/60" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-aqua/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-8 text-glow">
            Uniting Technology and Purpose to Safeguard Our Oceans
          </h1>
          <div className="prose prose-lg prose-invert mx-auto mb-12">
            <p className="text-xl text-blue-200 leading-relaxed">
              The oceans are the lifeblood of our planet – vast, mysterious, and essential. They provide over 50% of the oxygen we breathe, regulate the Earth's climate, and sustain millions of species.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Schedule Consultation</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}