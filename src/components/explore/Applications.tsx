import React from 'react';
import { Building2, Globe, Anchor } from 'lucide-react';
import { Card } from '../ui/Card';

interface ApplicationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ApplicationCard({ icon, title, description }: ApplicationCardProps) {
  return (
    <Card className="text-center hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function Applications() {
  const applications = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Government Agencies",
      description: "Monitor maritime borders and protect sensitive marine zones"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Environmental NGOs",
      description: "Oversee protected waters and respond to pollution events"
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Maritime Industry",
      description: "Ensure compliance and mitigate environmental risks"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Applications Across Industries
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <ApplicationCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}