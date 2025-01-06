import React from 'react';
import { Card } from '../ui/Card';

export function RiskVisualizations() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1527672809634-04ed36500acd?auto=format&fit=crop&w=1920&q=80"
              alt="Risk heatmap"
              className="w-full h-full object-cover"
            />
          </Card>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-aqua mb-6">
              Predictive Risk Modeling
            </h2>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Our advanced visualization tools transform complex data into clear, actionable insights. Monitor potential risks, track spill progression, and make informed decisions with confidence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-2xl font-bold text-aqua mb-2">98%</div>
                <p className="text-blue-200">Prediction Accuracy</p>
              </Card>
              <Card className="p-6">
                <div className="text-2xl font-bold text-aqua mb-2">30min</div>
                <p className="text-blue-200">Update Frequency</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}