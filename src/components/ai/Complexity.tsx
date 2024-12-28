import React from 'react';
import { Card } from '../ui/Card';
import { AlertTriangle } from 'lucide-react';

export function Complexity() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            The Complexity of Monitoring the Oceans
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1920&q=80"
                alt="Ocean monitoring"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/50 to-transparent" />
            </div>

            <Card className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-semibold text-blue-100">Key Challenges</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-aqua mt-2 flex-shrink-0" />
                  <span>Wide ocean areas make comprehensive surveillance difficult</span>
                </li>
                <li className="flex items-start gap-3 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-aqua mt-2 flex-shrink-0" />
                  <span>Complex data interpretation leads to missed spills</span>
                </li>
                <li className="flex items-start gap-3 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-aqua mt-2 flex-shrink-0" />
                  <span>Natural phenomena can be mistaken for hazards</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}