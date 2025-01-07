import React from 'react';
import { Shield, Globe, Recycle } from 'lucide-react';
import { Card } from '../ui/Card';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <Card className="text-center p-8">
      <div className="text-aqua mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function SustainabilityPillars() {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Proactive Protection",
      description: "Safeguarding marine ecosystems through early detection and prevention"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Climate Action",
      description: "Contributing to worldwide efforts in reducing environmental impact"
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: "Resource Efficiency",
      description: "Minimizing waste and optimizing response operations"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Our Sustainability Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}