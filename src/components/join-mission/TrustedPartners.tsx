import React from 'react';
import { Card } from '../ui/Card';

export function TrustedPartners() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Trusted by Leading Organizations
          </h2>
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index}
                  className="aspect-[3/2] bg-surface-800 rounded-lg animate-pulse"
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}