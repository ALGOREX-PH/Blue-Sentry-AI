import React from 'react';
import { Building2, Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface InvolvementCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
}

function InvolvementCard({ icon, title, features }: InvolvementCardProps) {
  return (
    <Card className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-aqua">{icon}</div>
        <h3 className="text-xl font-semibold text-blue-100">{title}</h3>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-blue-200">
            <span className="text-aqua">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="secondary" className="w-full">Partner With Us</Button>
    </Card>
  );
}

export function GetInvolved() {
  const options = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Corporate Partnerships",
      features: [
        "Embed spill detection technology",
        "Collaborate on policy development",
        "Support research initiatives"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "NGO Collaboration",
      features: [
        "Access real-time spill detection",
        "Monitor endangered marine zones",
        "Strengthen advocacy campaigns"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Ways to Get Involved
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {options.map((option, index) => (
              <InvolvementCard key={index} {...option} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}