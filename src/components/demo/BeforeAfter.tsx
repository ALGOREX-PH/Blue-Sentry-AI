import React from 'react';
import { Card } from '../ui/Card';

export function BeforeAfter() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Before and After Scenarios</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="aspect-video bg-deep-900">
            <img 
              src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80"
              alt="Before intervention"
              className="w-full h-full object-cover rounded-lg"
            />
          </Card>
          
          <Card className="aspect-video bg-deep-900">
            <img 
              src="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=800&q=80"
              alt="After intervention"
              className="w-full h-full object-cover rounded-lg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}