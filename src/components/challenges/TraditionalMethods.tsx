import React from 'react';
import { Users, Map, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  issues: string[];
}

function MethodCard({ icon, title, issues }: MethodCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <ul className="space-y-2">
        {issues.map((issue, index) => (
          <li key={index} className="text-blue-200 flex items-start gap-2">
            <span className="text-aqua">•</span>
            {issue}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function TraditionalMethods() {
  const methods = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Manual Surveillance",
      issues: [
        "Human error",
        "Resource intensive",
        "Delayed detection"
      ]
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: "Limited Coverage",
      issues: [
        "Under-monitored regions",
        "Cost prohibitions",
        "Limited focus areas"
      ]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Slow Response",
      issues: [
        "24-48 hour delay",
        "Increased damage",
        "Higher costs"
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            The Flaws and Limitations of Traditional Oil Spill Detection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <MethodCard key={index} {...method} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}