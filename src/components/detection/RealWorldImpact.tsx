import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle } from 'lucide-react';

export function RealWorldImpact() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Real World Impact
          </h2>
          
          <Card className="mb-12 overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1920&q=80"
                alt="Live detection dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 via-transparent to-transparent" />
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-aqua" />
              <h3 className="text-xl font-semibold text-blue-100">South China Sea Success Story</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-sm text-blue-200 mb-1">Detection Time</div>
                <div className="text-2xl font-bold text-aqua">18 minutes</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Cost Reduction</div>
                <div className="text-2xl font-bold text-aqua">40%</div>
              </div>
              <div>
                <div className="text-sm text-blue-200 mb-1">Protected</div>
                <div className="text-2xl font-bold text-aqua">Coral reefs, local fisheries</div>
              </div>
            </div>
            <p className="text-blue-200">
              Rapid detection and response prevented significant environmental damage and protected thousands of coastal residents' livelihoods.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}