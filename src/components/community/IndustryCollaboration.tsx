import React from 'react';
import { Building2, Droplet, Anchor } from 'lucide-react';
import { Card } from '../ui/Card';

interface CollaborationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CollaborationCard({ icon, title, description }: CollaborationCardProps) {
  return (
    <Card className="p-6">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-100 mb-2">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function IndustryCollaboration() {
  const collaborations = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Shipping Companies",
      description: "Real-time monitoring systems and maritime safety solutions"
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Oil & Gas Enterprises",
      description: "Proactive monitoring and accountability measures"
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Fishing Fleets",
      description: "Sustainable practices and ecosystem protection"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Collaborating with Industry Leaders
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collaborations.map((collab, index) => (
            <CollaborationCard key={index} {...collab} />
          ))}
        </div>
      </div>
    </section>
  );
}