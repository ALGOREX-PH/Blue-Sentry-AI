import React from 'react';
import { Satellite, Brain, Zap } from 'lucide-react';
import { Card } from '../ui/Card';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function TechCard({ icon, title, description, features }: TechCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-blue-200 flex items-start gap-2">
            <span className="text-aqua">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function CoreTechnologies() {
  const technologies = [
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Sentinel-1 SAR Satellites",
      description: "High-resolution radar imaging for comprehensive ocean monitoring",
      features: [
        "24/7 all-weather operation",
        "Wide-area coverage",
        "Penetrates cloud cover"
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Algorithms",
      description: "Advanced machine learning models for accurate detection",
      features: [
        "Deep learning neural networks",
        "Minimal false positives",
        "Continuous learning system"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Real-Time Processing",
      description: "Swift data analysis and alert generation",
      features: [
        "Instant data processing",
        "Automated alert system",
        "Predictive analytics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Core Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}