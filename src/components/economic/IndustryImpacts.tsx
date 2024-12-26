import React from 'react';
import { Fish, Palmtree, Anchor } from 'lucide-react';
import { Card } from '../ui/Card';

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

function ImpactCard({ icon, title, description, stat }: ImpactCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <div className="pt-4 border-t border-aqua/10">
        <div className="text-2xl font-bold text-aqua">{stat}</div>
      </div>
    </Card>
  );
}

export function IndustryImpacts() {
  const impacts = [
    {
      icon: <Fish className="w-12 h-12" />,
      title: "Fishing Industry Impact",
      description: "50% reduction in regional fish production",
      stat: "Annual Loss: $50M+"
    },
    {
      icon: <Palmtree className="w-12 h-12" />,
      title: "Tourism Impact",
      description: "70% drop in tourism revenue",
      stat: "Annual Loss: $100M+"
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Maritime Trade Impact",
      description: "Massive global operational losses",
      stat: "Daily Loss: $2M+"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <ImpactCard key={index} {...impact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}