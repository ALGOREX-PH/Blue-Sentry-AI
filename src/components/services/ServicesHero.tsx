import React from 'react';
import { Button } from '../ui/Button';

export function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] pt-32 pb-20">
      
      <div className="absolute inset-0 bg-gradient-to-b from-marine/40 via-purple/20 to-deep-900/60" />
      
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-aqua/5 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Comprehensive, AI-Powered Services for Safeguarding Our Oceans
          </h1>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            At BlueSentry AI, we empower organizations with cutting-edge solutions designed to preserve and protect the world's oceans.
          </p>
          <Button>Explore Solutions</Button>
        </div>
      </div>
    </section>
  );
}