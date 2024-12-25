import React from 'react';
import { Shield, Target, Users } from 'lucide-react';
import { Card } from '../ui/Card';

interface ApproachCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ApproachCard({ icon, title, description }: ApproachCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function HolisticApproach() {
  const approaches = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Early Detection",
      description: "Advanced AI systems for rapid identification of environmental threats"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Instant Analysis",
      description: "Real-time assessment of potential impacts on marine ecosystems"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Global Collaboration",
      description: "Coordinated response with international conservation partners"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Our Holistic Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <ApproachCard key={index} {...approach} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}