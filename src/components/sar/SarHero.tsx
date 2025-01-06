import React from 'react';
import { Button } from '../ui/Button';

export function SarHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-marine/40 via-purple/20 to-deep-900/60" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-aqua/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
              Global Ocean Surveillance, Redefined – Sentinel-1 SAR Technology at the Helm
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              The health of our oceans directly impacts ecosystems, economies, and communities across the globe. Discover how our Sentinel-1 SAR technology revolutionizes maritime surveillance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Learn More</Button>
              <Button variant="secondary">Watch Demo</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-deep-800 border border-aqua/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border-2 border-aqua/30 animate-spin-slow relative">
                  <div className="absolute w-4 h-4 bg-aqua rounded-full -top-2 -right-2" />
                </div>
                <div className="absolute w-1/2 h-1/2 rounded-full border-2 border-aqua/20 animate-spin-reverse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}