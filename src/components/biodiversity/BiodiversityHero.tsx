import React from 'react';
import { Button } from '../ui/Button';

export function BiodiversityHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Protecting Marine Life: How AI Fights Back Against Biodiversity Loss
          </h1>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            The oceans hold mysteries older than humanity itself—home to vibrant coral reefs, 
            sprawling kelp forests, and countless species that remain undiscovered.
          </p>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1920&q=80"
              alt="Marine biodiversity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}