import React from 'react';
import { Play } from 'lucide-react';
import { Card } from '../ui/Card';

export function TechDemo() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            See Our Technology in Action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="aspect-video relative group cursor-pointer overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                alt="AI Detection Demo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-aqua/20 flex items-center justify-center backdrop-blur-sm border border-aqua/50 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-aqua" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">AI Detection Demo</h3>
                <p className="text-blue-200">Watch how our AI identifies and tracks oil spills in real-time</p>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Live Detection Statistics</h3>
                <div className="space-y-4">
                  <div className="relative pt-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200">Processing Speed</span>
                      <span className="text-aqua">95%</span>
                    </div>
                    <div className="h-2 bg-deep-900 rounded-full">
                      <div className="h-2 bg-aqua rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200">Detection Accuracy</span>
                      <span className="text-aqua">98%</span>
                    </div>
                    <div className="h-2 bg-deep-900 rounded-full">
                      <div className="h-2 bg-aqua rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200">Response Time</span>
                      <span className="text-aqua">92%</span>
                    </div>
                    <div className="h-2 bg-deep-900 rounded-full">
                      <div className="h-2 bg-aqua rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-blue-200">
                    <span className="w-2 h-2 rounded-full bg-aqua" />
                    Real-time satellite data processing
                  </li>
                  <li className="flex items-center gap-2 text-blue-200">
                    <span className="w-2 h-2 rounded-full bg-aqua" />
                    Advanced machine learning algorithms
                  </li>
                  <li className="flex items-center gap-2 text-blue-200">
                    <span className="w-2 h-2 rounded-full bg-aqua" />
                    Automated alert system
                  </li>
                  <li className="flex items-center gap-2 text-blue-200">
                    <span className="w-2 h-2 rounded-full bg-aqua" />
                    24/7 global monitoring
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}