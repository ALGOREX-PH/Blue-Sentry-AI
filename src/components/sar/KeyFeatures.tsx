import React from 'react';
import { Sun, Globe, Target, Layers } from 'lucide-react';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function KeyFeatures() {
  const features = [
    {
      icon: <Sun className="w-12 h-12" />,
      title: "24/7 Surveillance",
      description: "All-weather monitoring with no gaps in coverage, regardless of cloud cover or surface imaging."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Coverage of thousands of square kilometers in a single pass, monitoring even the most inaccessible regions."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "High Resolution",
      description: "Precise detection capabilities with detailed data about surface anomalies and patterns."
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Scalable Solution",
      description: "Adaptable monitoring system to suit local and global environmental protection needs."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Key Features and Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}