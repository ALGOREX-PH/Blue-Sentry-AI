import React from 'react';
import { Activity, Brain } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function BiodiversityProtection() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            How Blue Sentry AI Protects Marine Biodiversity
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <Activity className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-blue-200 mb-6">
                Through satellite surveillance, we identify oil spills as soon as they occur.
              </p>
              <Button>Learn More</Button>
            </Card>

            <Card className="relative overflow-hidden">
              <Brain className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-blue-200 mb-6">
                Predictive modeling and impact mapping for rapid response.
              </p>
              <Button>Learn More</Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}