import React from 'react';
import { Shield, Users, Brain } from 'lucide-react';
import { Card } from '../ui/Card';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="text-center p-8 hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function MissionIntro() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Global Impact",
      description: "Protecting marine life and ecosystems worldwide"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Collective Action",
      description: "Join forces with global partners and advocates"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Technology",
      description: "Innovative solutions for ocean conservation"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-4 text-center">
            A Call to Protect the Blue Heart of Our Planet
          </h2>
          <p className="text-xl text-blue-200 mb-12 text-center">
            The ocean covers over 70% of our planet's surface, providing more than half of the oxygen we breathe and serving as a crucial source of food, energy, and economic stability for billions of people.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}