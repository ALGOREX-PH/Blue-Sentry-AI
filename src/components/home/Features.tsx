import React from 'react';
import { Clock, Target, Globe, Network } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-aqua">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-blue-100">{title}</h3>
      </div>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Actionability",
      description: "Instant alerts and insights for rapid response"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Unmatched Accuracy",
      description: "Precision detection powered by advanced AI"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scalability",
      description: "Monitor vast ocean areas efficiently"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Collaborative Ecosystem",
      description: "Seamless integration with existing systems"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aqua mb-4 text-glow">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-blue-200">
              Innovative solutions for comprehensive ocean protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="mx-auto" to="/explore-technology">
              Learn More About Our Technology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}