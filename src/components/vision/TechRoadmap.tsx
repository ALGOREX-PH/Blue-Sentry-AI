import React from 'react';
import { Satellite, Brain, Shield } from 'lucide-react';
import { Card } from '../ui/Card';

interface RoadmapCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function RoadmapCard({ icon, title, description }: RoadmapCardProps) {
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

export function TechRoadmap() {
  const roadmap = [
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Satellite Integration",
      description: "Comprehensive satellite coverage with multi-satellite integration for global coverage"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to prevent environmental disasters before they occur"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Conservation AI",
      description: "Advanced algorithms for comprehensive marine threat detection"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Our Technological Roadmap
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((item, index) => (
              <RoadmapCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}