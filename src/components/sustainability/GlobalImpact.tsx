import React from 'react';
import { Card } from '../ui/Card';

export function GlobalImpact() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Our Global Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="aspect-video bg-deep-900 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
              alt="Global impact map"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full border-2 border-aqua/30 animate-spin-slow relative">
                <div className="absolute w-4 h-4 bg-aqua rounded-full -top-2 -right-2" />
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold text-blue-100 mb-6">2024 Sustainability Report</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-aqua mb-2">1.2M</div>
                <div className="text-blue-200">Km² of ocean protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-aqua mb-2">98%</div>
                <div className="text-blue-200">Detection accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-aqua mb-2">30min</div>
                <div className="text-blue-200">Average response time</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}