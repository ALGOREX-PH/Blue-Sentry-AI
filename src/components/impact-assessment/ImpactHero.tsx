import React from 'react';
import { Button } from '../ui/Button';

export function ImpactHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/90 via-marine/50 to-deep-900/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
              Understand the Impact. Act for the Future.
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Transform raw data into actionable intelligence for preserving marine environments and protecting vulnerable coastal communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Request Demo</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-deep-800 border border-aqua/20">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80"
                alt="Impact visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}