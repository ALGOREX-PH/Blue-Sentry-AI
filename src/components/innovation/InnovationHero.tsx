import React from 'react';
import { Button } from '../ui/Button';

export function InnovationHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/90 via-marine/50 to-deep-900/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Leading Innovation in Ocean Conservation Through AI
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Where Innovation Meets Conservation - Pioneering the future of marine protection with cutting-edge AI technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <Button>Explore Our Innovations</Button>
          </div>
        </div>
      </div>
    </section>
  );
}