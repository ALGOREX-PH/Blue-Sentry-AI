import React from 'react';
import { Card } from '../ui/Card';
import { Brain, Target } from 'lucide-react';

export function TechPerformance() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">Behind the Technology</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-8 h-8 text-aqua" />
                <h3 className="text-xl font-bold text-blue-100">CNN Model Performance</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">Detection Accuracy</span>
                    <span className="text-aqua">98%</span>
                  </div>
                  <div className="h-2 bg-deep-900 rounded-full">
                    <div className="h-2 bg-aqua rounded-full w-[98%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">Processing Speed</span>
                    <span className="text-aqua">95%</span>
                  </div>
                  <div className="h-2 bg-deep-900 rounded-full">
                    <div className="h-2 bg-aqua rounded-full w-[95%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200">False Positive Rate</span>
                    <span className="text-aqua">2%</span>
                  </div>
                  <div className="h-2 bg-deep-900 rounded-full">
                    <div className="h-2 bg-aqua rounded-full w-[2%]" />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-aqua" />
                <h3 className="text-xl font-bold text-blue-100">Multi-Layer Detection</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-aqua" />
                  <span className="text-blue-200">Oil slick pattern recognition</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-aqua" />
                  <span className="text-blue-200">Natural phenomena filtering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-aqua" />
                  <span className="text-blue-200">Continuous model adaptation</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}