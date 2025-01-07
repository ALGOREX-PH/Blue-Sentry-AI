import React from 'react';
import { Anchor, Book } from 'lucide-react';
import { Card } from '../ui/Card';

interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function InitiativeCard({ icon, title, items }: InitiativeCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-4">{title}</h3>
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

export function CoastalCommunities() {
  const initiatives = [
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Impact",
      items: [
        "Early detection systems",
        "Enhanced environmental protection",
        "Preserved local livelihoods"
      ]
    },
    {
      icon: <Book className="w-12 h-12" />,
      title: "Capacity Building",
      items: [
        "Technology training",
        "Leadership development",
        "Knowledge sharing"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Empowering Coastal and Indigenous Communities
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {initiatives.map((initiative, index) => (
            <InitiativeCard key={index} {...initiative} />
          ))}
        </div>
      </div>
    </section>
  );
}