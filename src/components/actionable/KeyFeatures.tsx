import React from 'react';
import { Map, LineChart, FileCheck } from 'lucide-react';
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
      icon: <Map className="w-12 h-12" />,
      title: "Geospatial Analysis",
      description: "Advanced mapping to visualize spill locations, predict drift paths, and highlight affected zones."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Predictive Forecasting",
      description: "AI-driven modeling to forecast spill movement based on oceanographic data and conditions."
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Custom Reporting",
      description: "Automated reports tailored to environmental regulations and sustainability frameworks."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Key Features and Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}