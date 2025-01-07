import React from 'react';
import { Card } from '../ui/Card';

interface InitiativeProps {
  title: string;
  description: string;
  items: string[];
  className?: string;
}

function Initiative({ title, description, items, className = '' }: InitiativeProps) {
  return (
    <Card className={`p-8 ${className}`}>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-blue-200">
            <span className="text-aqua">•</span>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Initiatives() {
  const initiatives = [
    {
      title: "Protecting Marine Ecosystems at Scale",
      description: "Comprehensive protection of critical marine habitats",
      items: [
        "Coral reef preservation",
        "Mangrove forest protection",
        "Marine sanctuary monitoring"
      ],
      className: "bg-blue-900/20"
    },
    {
      title: "Contributing to Global Climate Action",
      description: "Supporting international environmental goals",
      items: [
        "Paris Agreement alignment",
        "UN SDGs contribution",
        "Emission reduction support"
      ],
      className: "bg-green-900/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Sustainability Initiatives
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {initiatives.map((initiative, index) => (
            <Initiative key={index} {...initiative} />
          ))}
        </div>
      </div>
    </section>
  );
}