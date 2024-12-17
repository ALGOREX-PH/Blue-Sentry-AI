import React from 'react';
import { Button } from '../ui/Button';

export function MissionHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=2000&q=80)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deep-900/90 to-deep-900/70" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Mission: Protecting the Oceans, Preserving the Future
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Leading the charge to using advanced AI technology to safeguard marine ecosystems for future generations.
          </p>
          <div className="flex gap-4">
            <Button>Learn More</Button>
            <Button variant="secondary">Watch Video</Button>
          </div>
        </div>
      </div>
    </section>
  );
}