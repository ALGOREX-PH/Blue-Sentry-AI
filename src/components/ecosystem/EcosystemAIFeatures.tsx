import React from 'react';
import { Brain, LineChart, AlertTriangle, Database } from 'lucide-react';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
}

function FeatureCard({ icon, title, description, metrics }: FeatureCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-aqua/10">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="text-2xl font-bold text-aqua mb-1">{metric.value}</div>
            <div className="text-sm text-blue-200">{metric.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function EcosystemAIFeatures() {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Predictive Analysis",
      description: "AI-powered prediction of potential ecosystem threats",
      metrics: [
        { label: "Prediction Accuracy", value: "94%" },
        { label: "Advance Warning", value: "72h" }
      ]
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Ecosystem Monitoring",
      description: "Real-time tracking of marine ecosystem health",
      metrics: [
        { label: "Coverage Area", value: "500M km²" },
        { label: "Update Frequency", value: "15min" }
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Threat Detection",
      description: "Automated identification of environmental risks",
      metrics: [
        { label: "Detection Rate", value: "99.8%" },
        { label: "Response Time", value: "<30min" }
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Analysis",
      description: "Deep learning analysis of ecosystem patterns",
      metrics: [
        { label: "Data Points", value: "1B+" },
        { label: "Processing Speed", value: "500TB/h" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-4 text-center">
            AI-Powered Protection
          </h2>
          <p className="text-xl text-blue-200 mb-12 text-center max-w-3xl mx-auto">
            Our advanced AI systems work tirelessly to monitor and protect marine ecosystems
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}