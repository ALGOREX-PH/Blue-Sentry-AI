import React from 'react';
import { Card } from '../ui/Card';

interface ComparisonRowProps {
  feature: string;
  traditional: string;
  blueSentry: string;
}

function ComparisonRow({ feature, traditional, blueSentry }: ComparisonRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-aqua/10">
      <div className="font-medium text-blue-100">{feature}</div>
      <div className="text-blue-200">{traditional}</div>
      <div className="text-aqua">{blueSentry}</div>
    </div>
  );
}

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Detection Time",
      traditional: "24-48 hours",
      blueSentry: "Under 30 minutes"
    },
    {
      feature: "Coverage",
      traditional: "Limited zones",
      blueSentry: "Global monitoring"
    },
    {
      feature: "Accuracy",
      traditional: "75%",
      blueSentry: "98%"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Comparison: Traditional vs Blue Sentry AI
          </h2>
          <Card className="p-8">
            <div className="grid grid-cols-3 gap-4 pb-4 border-b border-aqua/10">
              <div className="font-bold text-aqua">Feature</div>
              <div className="font-bold text-aqua">Traditional Methods</div>
              <div className="font-bold text-aqua">Blue Sentry AI</div>
            </div>
            {comparisons.map((comparison, index) => (
              <ComparisonRow key={index} {...comparison} />
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}