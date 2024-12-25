import React from 'react';
import { Card } from '../ui/Card';

export function TechnologyAction() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Technology in Action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1920&q=80"
                alt="Marine ecosystem"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card className="flex flex-col justify-center p-8">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">
                Real-world Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-aqua mt-2" />
                  24/7 real-time monitoring
                </li>
                <li className="flex items-start gap-2 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-aqua mt-2" />
                  Rapid threat detection
                </li>
                <li className="flex items-start gap-2 text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-aqua mt-2" />
                  Ecosystem preservation
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}