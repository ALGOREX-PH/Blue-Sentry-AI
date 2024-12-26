import React from 'react';
import { Satellite, Brain, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

export function TechnologySolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Our Technology Solution
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                alt="AI Detection System"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                AI Detection System Visualization
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-blue-100 mb-6">
                Real-Time Monitoring
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Satellite className="w-6 h-6 text-aqua" />
                  <p className="text-blue-200">Continuous satellite surveillance for early detection</p>
                </div>
                <div className="flex items-center gap-4">
                  <Brain className="w-6 h-6 text-aqua" />
                  <p className="text-blue-200">Advanced predictive modeling</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-aqua" />
                  <p className="text-blue-200">Rapid response coordination</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}