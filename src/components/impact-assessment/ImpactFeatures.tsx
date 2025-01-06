import React from 'react';
import { Map, LineChart, FileCheck, Activity } from 'lucide-react';
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

export function ImpactFeatures() {
  const features = [
    {
      icon: <Map className="w-12 h-12" />,
      title: "Risk Heatmaps",
      description: "Advanced geographic modeling to visualize at-risk zones and critical areas."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Economic Analysis",
      description: "Project financial impacts across affected sectors and communities."
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Drift Modeling",
      description: "Predict spill trajectories using ocean currents and weather data."
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Ecological Reports",
      description: "Comprehensive assessment of environmental risks and biodiversity impact."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Key Features & Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}