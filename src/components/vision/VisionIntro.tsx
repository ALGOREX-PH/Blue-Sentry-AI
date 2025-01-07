import React from 'react';
import { Globe, Brain, Users } from 'lucide-react';
import { Card } from '../ui/Card';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
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

export function VisionIntro() {
  const values = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Monitoring",
      description: "Comprehensive satellite coverage for complete ocean protection"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Innovation",
      description: "Advanced analytics for predictive insights and rapid response"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Global Collaboration",
      description: "Partnerships driving conservation and accountability"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-blue-200 mb-12 text-center">
            The oceans are not just vast expanses of water; they are the lifeblood of our planet—regulating climate, sustaining biodiversity, and supporting billions of people. At Blue Sentry AI, we believe the future of the oceans lies in the fusion of advanced technology and human ingenuity.
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