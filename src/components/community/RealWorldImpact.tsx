import React from 'react';
import { Card } from '../ui/Card';

export function RealWorldImpact() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8">
          <h2 className="text-2xl font-bold text-aqua mb-6 text-center">
            Real-World Impact
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            "When an oil spill struck the coast of West Africa, Blue Sentry AI quickly mobilized alongside local environmental agencies and indigenous leaders. Together, we established a network of real-time monitoring stations that tracked the spill's movement and coordinated rapid response efforts. Within weeks, the region saw a 40% reduction in spill damage, safeguarding local fisheries and allowing communities to resume operations."
          </p>
        </Card>
      </div>
    </section>
  );
}