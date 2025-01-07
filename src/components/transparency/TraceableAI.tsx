import React from 'react';
import { Card } from '../ui/Card';
import { Activity } from 'lucide-react';

export function TraceableAI() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Traceable AI Decisions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80"
                alt="AI visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-semibold text-blue-100 mb-6">
                Every Decision Logged & Traceable
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-aqua flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-blue-100 mb-2">Detection Logs</h4>
                    <p className="text-blue-200">Complete history of all AI detections with confidence scores</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-aqua flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-blue-100 mb-2">Decision Trail</h4>
                    <p className="text-blue-200">Clear documentation of AI decision-making process</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Activity className="w-6 h-6 text-aqua flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-blue-100 mb-2">Verification System</h4>
                    <p className="text-blue-200">Multi-step verification for high-confidence results</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}