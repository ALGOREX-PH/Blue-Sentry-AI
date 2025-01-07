import React from 'react';
import { Card } from '../ui/Card';

export function CollaborationImpact() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Global Impact Through Collaboration
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                alt="Global impact map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-aqua mb-2">500+</div>
                  <div className="text-blue-200">Oil Spill Incidents Detected</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-aqua mb-2">100+</div>
                  <div className="text-blue-200">Marine Protected Areas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-aqua mb-2">24/7</div>
                  <div className="text-blue-200">Global Monitoring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-aqua mb-2">1000+</div>
                  <div className="text-blue-200">Species Protected</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}