import React from 'react';
import { Card } from '../ui/Card';

export function SuccessStories() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Proven Impact – Stories of Success
        </h2>
        
        <Card className="max-w-4xl mx-auto p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80"
                alt="Coral reef protection"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between text-blue-200">
                  <span>Area Protected</span>
                  <span className="text-aqua">1,200 km²</span>
                </div>
                <div className="flex justify-between text-blue-200">
                  <span>Response Time</span>
                  <span className="text-aqua">6 hours</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">
                Protecting Coral Reefs from Disaster
              </h3>
              <p className="text-blue-200 mb-6">
                In 2023, Blue Sentry AI detected an oil spill 40 miles from a protected coral reef in the Pacific. Thanks to rapid detection and alerting, local authorities deployed cleanup crews within 6 hours, preventing the spill from reaching fragile reef systems.
              </p>
              <blockquote className="text-aqua italic">
                "Working with Blue Sentry AI has transformed our environmental risk management. Our fleet monitoring now incorporates real-time spill detection, significantly reducing operational risks."
              </blockquote>
              <p className="text-blue-200 mt-2">- CEO, Global Shipping Corporation</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}