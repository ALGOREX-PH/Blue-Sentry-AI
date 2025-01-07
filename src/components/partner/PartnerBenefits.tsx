import React from 'react';
import { Globe, Clock, Shield, LineChart } from 'lucide-react';
import { Card } from '../ui/Card';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function BenefitCard({ icon, title, description, features }: BenefitCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-blue-200">
            <span className="text-aqua">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function PartnerBenefits() {
  const benefits = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Monitoring Network",
      description: "Access comprehensive satellite surveillance across major maritime zones",
      features: [
        "24/7 ocean monitoring",
        "Multiple satellite integration",
        "Complete global coverage"
      ]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Real-Time Detection",
      description: "Reduce response times by up to 70% with instant alerts",
      features: [
        "Instant detection alerts",
        "Rapid response coordination",
        "Early warning system"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Regulatory Compliance",
      description: "Simplify compliance with international maritime regulations",
      features: [
        "MARPOL compliance",
        "Automated reporting",
        "Risk mitigation"
      ]
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Environmental Stewardship",
      description: "Demonstrate leadership in sustainability and marine conservation",
      features: [
        "ESG enhancement",
        "Impact reporting",
        "Conservation metrics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Why Partner with Blue Sentry AI?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}