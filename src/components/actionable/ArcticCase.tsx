import React from 'react';
import { Card } from '../ui/Card';

export function ArcticCase() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-aqua mb-6">
              How Blue Sentry AI Averted Disaster in the Arctic
            </h2>
            <p className="text-blue-200 mb-6 leading-relaxed">
              When a tanker spill occurred off the coast of the Arctic Circle, harsh weather conditions limited traditional response efforts. Blue Sentry AI's predictive tools accurately forecasted the drift path, enabling responders to deploy containment measures ahead of time.
            </p>
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-aqua mb-2">30%</div>
                  <p className="text-blue-200">Faster cleanup operations</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-aqua mb-2">100%</div>
                  <p className="text-blue-200">Critical habitats protected</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="relative">
            <Card className="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?auto=format&fit=crop&w=1920&q=80"
                alt="Arctic case study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 via-transparent to-transparent" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}