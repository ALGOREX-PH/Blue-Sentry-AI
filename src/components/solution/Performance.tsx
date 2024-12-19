import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export function Performance() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Performance Metrics</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="text-4xl font-bold text-aqua mb-2">30min</div>
            <p className="text-blue-200">Detection Time</p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl font-bold text-aqua mb-2">90%</div>
            <p className="text-blue-200">Faster Response</p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl font-bold text-aqua mb-2">98%</div>
            <p className="text-blue-200">Accuracy Rate</p>
          </Card>
        </div>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-semibold text-blue-100">Proven Results</h3>
          </div>
          <p className="text-blue-200">
            "BlueSentry AI has revolutionized our response capabilities, enabling us to detect and respond to spills faster than ever before."
          </p>
        </Card>
      </div>
    </section>
  );
}