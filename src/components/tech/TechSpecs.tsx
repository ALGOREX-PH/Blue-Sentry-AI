import React from 'react';
import { Activity, Cpu, Database, Network } from 'lucide-react';
import { Card } from '../ui/Card';

interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  specs: Array<{ label: string; value: string }>;
}

function SpecCard({ icon, title, specs }: SpecCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-4">{title}</h3>
      <div className="space-y-3">
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-blue-200">{spec.label}</span>
            <span className="text-aqua font-mono">{spec.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function TechSpecs() {
  const specifications = [
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Performance Metrics",
      specs: [
        { label: "Detection Time", value: "< 30min" },
        { label: "Accuracy Rate", value: "98.5%" },
        { label: "False Positive Rate", value: "0.2%" }
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI Processing",
      specs: [
        { label: "Neural Networks", value: "15+" },
        { label: "Training Data", value: "500TB+" },
        { label: "Update Frequency", value: "24hrs" }
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Processing",
      specs: [
        { label: "Daily Volume", value: "2.5PB" },
        { label: "Processing Speed", value: "1TB/min" },
        { label: "Storage Capacity", value: "10PB" }
      ]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Network Coverage",
      specs: [
        { label: "Global Coverage", value: "98%" },
        { label: "Update Interval", value: "6hrs" },
        { label: "Resolution", value: "10m" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <SpecCard key={index} {...spec} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}