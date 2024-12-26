import React from 'react';
import { Brain, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

export function BetterApproach() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            How Blue Sentry AI Redefines Oil Spill Detection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Brain className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-4">
                AI-Powered Detection
              </h3>
              <p className="text-blue-200 mb-4">
                98% Detection Accuracy
              </p>
              <div className="bg-surface-900 p-4 rounded">
                <p className="text-blue-200">
                  Real-time monitoring and analysis of satellite imagery
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <Globe className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-4">
                Global Coverage
              </h3>
              <p className="text-blue-200 mb-4">
                24/7 Continuous Monitoring
              </p>
              <div className="bg-surface-900 p-4 rounded">
                <p className="text-blue-200">
                  Complete ocean coverage with satellite technology
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}