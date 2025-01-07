import React from 'react';
import { Database, Share2, Users } from 'lucide-react';
import { Card } from '../ui/Card';

interface AccessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics: { value: string; label: string };
}

function AccessCard({ icon, title, description, metrics }: AccessCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <div className="pt-4 border-t border-aqua/10">
        <div className="text-2xl font-bold text-aqua mb-1">{metrics.value}</div>
        <div className="text-sm text-blue-200">{metrics.label}</div>
      </div>
    </Card>
  );
}

export function OpenAccess() {
  const features = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Open Data Access",
      description: "Complete access to oil spill detection data and environmental assessments for partners",
      metrics: { value: "100%", label: "Data Transparency" }
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Shared Knowledge",
      description: "Collaborative platform for sharing insights and best practices",
      metrics: { value: "24/7", label: "Access Available" }
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Stakeholder Access",
      description: "Direct access to reports and analytics for all stakeholders",
      metrics: { value: "500+", label: "Active Users" }
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Open Access for All
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AccessCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}