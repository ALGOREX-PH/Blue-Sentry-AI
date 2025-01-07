import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function DetectionResults() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Detection Results
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="aspect-video bg-deep-900">
            <div className="p-4 border-b border-aqua/10">
              <h3 className="text-lg font-semibold text-blue-100">Original Image</h3>
            </div>
          </Card>
          
          <Card className="aspect-video bg-deep-900">
            <div className="p-4 border-b border-aqua/10">
              <h3 className="text-lg font-semibold text-blue-100">AI-Processed Image</h3>
            </div>
          </Card>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Detection Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-blue-200">Status</span>
                <span className="text-aqua">Oil Spill Detected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Confidence</span>
                <span className="text-aqua">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Risk Level</span>
                <span className="text-aqua">Moderate</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Location Data</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-blue-200">Latitude</span>
                <span className="text-aqua">14.76° N</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Longitude</span>
                <span className="text-aqua">89.34° W</span>
              </div>
              <Button className="w-full">View Full Report</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}