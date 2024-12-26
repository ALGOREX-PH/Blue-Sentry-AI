import React from 'react';
import { Droplet, TreePine, Fish } from 'lucide-react';
import { Card } from '../ui/Card';

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ImpactCard({ icon, title, description }: ImpactCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function EnvironmentalImpacts() {
  const impacts = [
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Water Quality Degradation",
      description: "The immediate and long-lasting consequence affecting marine ecosystems."
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Habitat Destruction",
      description: "Critical damage to mangroves, coral reefs, and coastal wetlands."
    },
    {
      icon: <Fish className="w-12 h-12" />,
      title: "Ecosystem Disruption",
      description: "Breaking the delicate balance of marine food chains."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Understanding Environmental Impact
          </h2>
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