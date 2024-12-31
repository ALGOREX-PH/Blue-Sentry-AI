import React from 'react';
import { Button } from '../ui/Button';
import { Upload } from 'lucide-react';

export function TechHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Experience Real-Time Oil Spill Detection with Blue Sentry AI
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Upload Sentinel-1 satellite images and witness the power of AI in detecting oil spills with exceptional accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>
              <Upload className="w-5 h-5 mr-2" />
              Upload Image
            </Button>
            <Button variant="secondary">Try Demo Data</Button>
          </div>
        </div>
      </div>
    </section>
  );
}