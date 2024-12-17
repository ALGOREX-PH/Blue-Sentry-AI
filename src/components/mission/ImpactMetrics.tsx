import React from 'react';
import { Counter } from '../Counter';

export function ImpactMetrics() {
  return (
    <section className="py-20 bg-ocean-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Counter 
            value={2500}
            label="Oil Spills"
            description="Detected and monitored"
          />
          <Counter 
            value={98}
            label="Detection Accuracy"
            description="Percentage accuracy rate"
          />
          <Counter 
            value={150}
            label="Partner Organizations"
            description="Global collaborations"
          />
        </div>
      </div>
    </section>
  );
}