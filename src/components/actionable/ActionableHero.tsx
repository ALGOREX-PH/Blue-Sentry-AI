import React from 'react';
import { Button } from '../ui/Button';

export function ActionableHero() {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
              From Detection to Decision: Actionable Insights That Drive Results
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Turning Data into Action – Empowering Leaders to Safeguard Our Oceans
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Request Demo</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-deep-800 border border-aqua/20">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
                alt="Dashboard visualization"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}