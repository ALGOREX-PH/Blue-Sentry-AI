import React from 'react';
import { Microscope, Code, Database } from 'lucide-react';
import { Card } from '../ui/Card';

interface ResearchAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ResearchArea({ icon, title, description, features }: ResearchAreaProps) {
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

export function ResearchDevelopment() {
  const areas = [
    {
      icon: <Microscope className="w-12 h-12" />,
      title: "Next-Generation AI Models",
      description: "Developing advanced neural networks for comprehensive marine protection",
      features: [
        "Multi-threat detection capabilities",
        "Enhanced accuracy in varying conditions",
        "Adaptive learning algorithms"
      ]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Cross-Modal AI Integration",
      description: "Combining multiple data sources for superior detection",
      features: [
        "SAR and optical data fusion",
        "Real-time data processing",
        "Predictive analytics"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Infrastructure",
      description: "Building robust systems for reliable monitoring",
      features: [
        "Scalable cloud architecture",
        "Redundant backup systems",
        "Global data centers"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Research & Development Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <ResearchArea key={index} {...area} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}