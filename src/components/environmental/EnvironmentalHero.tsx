import React from 'react';
import { Button } from '../ui/Button';

export function EnvironmentalHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Minimizing Environmental Damage with Timely Detection
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Protecting our oceans through AI-powered early detection and response systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Learn More</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>
          
          <div className="mt-12 relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1920&q=80"
              alt="Satellite monitoring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              Satellite Image Visualization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}