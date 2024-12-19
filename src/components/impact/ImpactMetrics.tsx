import React from 'react';
import { Droplet, Clock, Fish } from 'lucide-react';
import { Card } from '../ui/Card';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

function MetricCard({ icon, value, label, description }: MetricCardProps) {
  return (
    <Card className="text-center">
      <div className="text-aqua mb-4">{icon}</div>
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-xl font-medium text-blue-300 mb-2">{label}</div>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function ImpactMetrics() {
  const metrics = [
    {
      icon: <Droplet className="w-12 h-12 mx-auto" />,
      value: "500+",
      label: "Oil Spills Detected",
      description: "Early detection ensuring timely interventions"
    },
    {
      icon: <Clock className="w-12 h-12 mx-auto" />,
      value: "70%",
      label: "Response Time Reduction",
      description: "Faster alerts to authorities and cleanup teams"
    },
    {
      icon: <Fish className="w-12 h-12 mx-auto" />,
      value: "10,000+",
      label: "Marine Species Protected",
      description: "Safeguarding biodiversity through swift action"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}