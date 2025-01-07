import React from 'react';
import { Building2, Anchor, Heart } from 'lucide-react';
import { Card } from '../ui/Card';

interface ModelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ModelCard({ icon, title, description, features }: ModelCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-blue-200">
            <span className="text-aqua">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function PartnershipModels() {
  const models = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Government Agencies",
      description: "Monitor national waters and protect marine resources with unparalleled precision",
      features: [
        "National waters monitoring",
        "Port entry surveillance",
        "Marine reserve protection"
      ]
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Maritime Corporations",
      description: "Integrate spill detection into vessel monitoring and offshore operations",
      features: [
        "Fleet monitoring",
        "Risk management",
        "Compliance tracking"
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Non-Profits & NGOs",
      description: "Maximize conservation initiatives through AI-enhanced monitoring",
      features: [
        "Conservation monitoring",
        "Impact assessment",
        "Research support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Customizable Partnership Models
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
}