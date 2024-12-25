import React from 'react';
import { Shield, Clock, Target, Zap } from 'lucide-react';
import { Card } from '../ui/Card';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: { value: string; label: string };
}

function BenefitCard({ icon, title, description, stats }: BenefitCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <div className="pt-4 border-t border-aqua/10">
        <div className="text-2xl font-bold text-aqua mb-1">{stats.value}</div>
        <div className="text-sm text-blue-200">{stats.label}</div>
      </div>
    </Card>
  );
}

export function ResponseBenefits() {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enhanced Protection",
      description: "Comprehensive monitoring system that safeguards marine ecosystems",
      stats: { value: "98%", label: "Detection Rate" }
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Rapid Response",
      description: "Swift detection and notification system for immediate action",
      stats: { value: "30min", label: "Average Response Time" }
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Precise Detection",
      description: "Highly accurate identification of potential threats",
      stats: { value: "99.8%", label: "Accuracy Rate" }
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Real-Time Monitoring",
      description: "Continuous surveillance of vast ocean areas",
      stats: { value: "24/7", label: "Coverage" }
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Benefits of Rapid Response
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}