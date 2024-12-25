import React from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

function StatCard({ value, label, description }: StatCardProps) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-bold text-aqua mb-2">{value}</div>
      <div className="text-xl font-medium text-blue-100 mb-2">{label}</div>
      <p className="text-blue-200 text-sm">{description}</p>
    </Card>
  );
}

export function EcosystemStats() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard
            value="70%"
            label="Success Rate"
            description="Of marine ecosystems protected through early detection"
          />
          <StatCard
            value="1M+"
            label="Species Protected"
            description="Marine species safeguarded by our technology"
          />
          <StatCard
            value="24/7"
            label="Monitoring"
            description="Continuous surveillance of critical marine areas"
          />
        </div>
      </div>
    </section>
  );
}