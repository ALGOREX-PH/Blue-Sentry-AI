import React from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-bold text-aqua mb-2">{value}</div>
      <div className="text-sm text-blue-200">{label}</div>
    </Card>
  );
}

export function CaseStudy() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Case Study: Southeast Asia Success
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StatCard
              value="500,000m²"
              label="Fisheries Protected"
            />
            <StatCard
              value="$10M+"
              label="Losses Avoided"
            />
            <StatCard
              value="1 Month"
              label="Recovery Time"
            />
          </div>
        </div>
      </div>
    </section>
  );
}