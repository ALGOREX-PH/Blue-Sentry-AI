import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface TierCardProps {
  tier: string;
  amount: string;
  features: string[];
  highlighted?: boolean;
}

function TierCard({ tier, amount, features, highlighted = false }: TierCardProps) {
  return (
    <Card className={`p-8 ${highlighted ? 'border-2 border-aqua' : ''}`}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-blue-100 mb-2">{tier}</h3>
        <div className="text-3xl font-bold text-aqua">{amount}</div>
        <div className="text-sm text-blue-200">Monthly</div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-blue-200">
            <span className="text-aqua">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button 
        variant={highlighted ? "primary" : "secondary"}
        className="w-full"
      >
        Select Plan
      </Button>
    </Card>
  );
}

export function ContributionTiers() {
  const tiers = [
    {
      tier: "Tier 1",
      amount: "$5,000",
      features: [
        "Satellite maintenance",
        "Basic monitoring tools"
      ]
    },
    {
      tier: "Tier 2",
      amount: "$10,000",
      features: [
        "AI tools development",
        "Advanced analytics",
        "24/7 Support"
      ],
      highlighted: true
    },
    {
      tier: "Tier 3",
      amount: "$25,000",
      features: [
        "Large-scale deployments",
        "Custom solutions",
        "Priority access"
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Contribution Tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <TierCard key={index} {...tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}