import React from 'react';
import { Button } from '../ui/Button';

export function EconomicHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Protecting Coastal Economies from Oil Spill Devastation
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Turning Environmental Catastrophes into Economic Recovery and Resilience
          </p>
          <Button>Learn More</Button>
          
          <div className="mt-12 relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1920&q=80"
              alt="Coastal economy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              Coastal Economy Impact Visualization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}