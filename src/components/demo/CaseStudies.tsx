import React from 'react';
import { Card } from '../ui/Card';

export function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Case Studies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="aspect-video mb-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80"
                alt="Coral Reef Rescue"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Coral Reef Rescue</h3>
            <p className="text-blue-200">
              Swift detection prevented widespread damage to a protected coral reef ecosystem.
            </p>
          </Card>
          
          <Card>
            <div className="aspect-video mb-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80"
                alt="Shipping Route Protection"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Shipping Route Protection</h3>
            <p className="text-blue-200">
              Early warning system protected vessels from contamination in busy shipping lanes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}