import React from 'react';
import { Card } from '../ui/Card';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
}

function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <Card className="text-center">
      <div className="text-4xl font-bold text-aqua mb-2">{value}</div>
      <div className="text-xl font-medium text-blue-100 mb-2">{label}</div>
      <p className="text-blue-200 text-sm">{description}</p>
    </Card>
  );
}

export function ResponseMetrics() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <MetricCard
            value="30min"
            label="Average Detection Time"
            description="From incident to alert notification"
          />
          <MetricCard
            value="60%"
            label="Reduced Damage Footprint"
            description="Compared to traditional methods"
          />
          <MetricCard
            value="40%"
            label="Cleanup Cost Savings"
            description="Through early intervention"
          />
        </div>
      </div>
    </section>
  );
}