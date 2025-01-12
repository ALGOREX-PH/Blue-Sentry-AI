import React from 'react';
import { Button } from '../ui/Button';

export function MissionHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20">
  
  <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/90 via-marine/50 to-deep-900/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow z-index-5">
            Our Mission: Protecting the Oceans, Preserving the Future
          </h1>
      </div>
      <div className="container mx-auto px-4 relative z-10">
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