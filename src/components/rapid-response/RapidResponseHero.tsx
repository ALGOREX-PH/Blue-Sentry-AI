import React from 'react';
import { Button } from '../ui/Button';
import { Clock } from 'lucide-react';

export function RapidResponseHero() {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-aqua" />
            <h1 className="text-4xl md:text-6xl font-bold text-aqua text-glow">
              When Every Second Counts
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-6">
            Rapid Response to Oil Spills
          </h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Advanced AI-powered detection system that enables real-time response to marine oil spills, protecting our oceans and coastlines.
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