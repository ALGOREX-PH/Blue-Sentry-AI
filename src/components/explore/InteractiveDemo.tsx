import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Download } from 'lucide-react';

export function InteractiveDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-aqua mb-6">Interactive Visualization</h2>
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1920&q=80"
                  alt="Detection visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-deep-900/50" />
              </div>
              <Button variant="secondary" className="mt-4">
                Toggle Heatmap
              </Button>
            </div>

            <div>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-blue-100 mb-4">Detection Results</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Status</span>
                    <span className="text-aqua font-semibold">Oil Spill Detected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Confidence Score</span>
                    <span className="text-aqua font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Area Affected</span>
                    <span className="text-aqua font-semibold">2.5 km²</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Report
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}