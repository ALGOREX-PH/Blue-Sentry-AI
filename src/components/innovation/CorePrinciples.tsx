import React from 'react';
import { Brain, Globe, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: { value: string; label: string };
}

function PrincipleCard({ icon, title, description, stats }: PrincipleCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <div className="pt-4 border-t border-aqua/10">
        <div className="text-2xl font-bold text-aqua mb-1">{stats.value}</div>
        <div className="text-sm text-blue-200">{stats.label}</div>
      </div>
    </Card>
  );
}

export function CorePrinciples() {
  const principles = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Pioneering AI Solutions",
      description: "Transforming oceanic data into actionable intelligence with state-of-the-art neural networks",
      stats: { value: "10min", label: "Average Detection Time" }
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Coverage",
      description: "Monitoring the unseen and protecting the unreachable through satellite technology",
      stats: { value: "70%", label: "Ocean Coverage" }
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Real-Time Analysis",
      description: "Instant processing and alerts for rapid response to environmental threats",
      stats: { value: "24/7", label: "Continuous Monitoring" }
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Core Innovation Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <PrincipleCard key={index} {...principle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}