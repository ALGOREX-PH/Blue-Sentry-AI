import React from 'react';
import { Button } from '../ui/Button';

export function AiHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
              AI Intelligence That Sees Beyond the Surface
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Precision Detection for a Cleaner, Safer Ocean
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Learn More</Button>
              <Button variant="secondary">Watch Demo</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-deep-800 border border-aqua/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                    alt="AI Globe"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-aqua/20 rounded-full animate-pulse" />
                      <div className="absolute inset-2 border-2 border-aqua/30 rounded-full animate-spin-slow" />
                      <div className="absolute inset-4 bg-aqua/10 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}