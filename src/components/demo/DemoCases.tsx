import React from 'react';
import { Card } from '../ui/Card';

interface DemoCaseProps {
  title: string;
  description: string;
  imageUrl: string;
}

function DemoCase({ title, description, imageUrl }: DemoCaseProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-blue-100 mb-2">{title}</h3>
        <p className="text-blue-200 mb-4">{description}</p>
        <Button variant="secondary" className="w-full">View Case</Button>
      </div>
    </Card>
  );
}

export function DemoCases() {
  const cases = [
    {
      title: "Gulf of Mexico Pipeline Leak",
      description: "Active spill detected and contained within 30 minutes",
      imageUrl: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "North Atlantic Shipping Lane",
      description: "Clear waters, no spill detected in high-traffic zone",
      imageUrl: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pacific Industrial Zone",
      description: "Early warning system prevented major contamination",
      imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Explore Demo Cases
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((demoCase, index) => (
            <DemoCase key={index} {...demoCase} />
          ))}
        </div>
      </div>
    </section>
  );
}