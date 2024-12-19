import React from 'react';
import { Trash2, Anchor, LineChart } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function AdditionalServices() {
  const services = [
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: "Plastic & Debris Monitoring",
      description: "Track and analyze marine waste patterns with advanced tracking capabilities."
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Illegal Fishing Detection",
      description: "Combat illicit activities with AI-powered surveillance systems."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Predictive Analytics",
      description: "Forecast risks and prepare effective emergency plans."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Additional Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}