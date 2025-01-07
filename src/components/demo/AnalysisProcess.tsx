import React from 'react';
import { Card } from '../ui/Card';

export function AnalysisProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8">
          <h3 className="text-xl font-semibold text-blue-100 mb-6">Analysis Progress</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-blue-200">Examining spectral characteristics...</span>
                <span className="text-aqua">33%</span>
              </div>
              <div className="h-2 bg-deep-900 rounded-full">
                <div className="h-2 bg-aqua rounded-full w-1/3 transition-all duration-1000" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-blue-200">Cross-referencing environmental variables...</span>
                <span className="text-aqua">66%</span>
              </div>
              <div className="h-2 bg-deep-900 rounded-full">
                <div className="h-2 bg-aqua rounded-full w-2/3 transition-all duration-1000" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-blue-200">Calculating risk prediction...</span>
                <span className="text-aqua">90%</span>
              </div>
              <div className="h-2 bg-deep-900 rounded-full">
                <div className="h-2 bg-aqua rounded-full w-[90%] transition-all duration-1000" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}