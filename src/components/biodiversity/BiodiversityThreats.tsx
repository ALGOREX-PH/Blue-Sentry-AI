import React from 'react';
import { Skull, Waves, Fish } from 'lucide-react';
import { Card } from '../ui/Card';

interface ThreatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ThreatCard({ icon, title, description }: ThreatCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function BiodiversityThreats() {
  const threats = [
    {
      icon: <Skull className="w-12 h-12" />,
      title: "Wildlife Fatalities",
      description: "Oil coats marine mammals and seabirds, leading to hypothermia and mass mortality."
    },
    {
      icon: <Waves className="w-12 h-12" />,
      title: "Coral Reef Collapse",
      description: "Oil slicks suffocate coral polyps, preventing photosynthesis and causing bleaching."
    },
    {
      icon: <Fish className="w-12 h-12" />,
      title: "Food Chain Breakdown",
      description: "Toxic substances accumulate in organisms, affecting entire marine food webs."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            The Threat of Biodiversity Loss
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <ThreatCard key={index} {...threat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}