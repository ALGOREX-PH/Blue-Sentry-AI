import React from 'react';
import { Button } from '../ui/Button';

export function DemoHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Experience the Future of Ocean Protection – Detect Oil Spills Instantly with AI
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Empower your environmental efforts with the latest in satellite technology and artificial intelligence. Upload a Sentinel-1 SAR image or dive into our live demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Upload Image to Start Detection</Button>
            <Button variant="secondary">Explore Our Demo Library</Button>
          </div>
        </div>
      </div>
    </section>
  );
}