import React from 'react';
import { Building2, Heart, Anchor, GraduationCap } from 'lucide-react';
import { Card } from '../ui/Card';

interface PartnershipTypeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

function PartnershipType({ icon, title, description, benefits }: PartnershipTypeProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-blue-200 flex items-start gap-2">
            <span className="text-aqua">•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function PartnershipTypes() {
  const types = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Government Partnerships",
      description: "Empower national and regional agencies with advanced monitoring capabilities.",
      benefits: [
        "Implement AI-powered monitoring systems",
        "Advance legislative frameworks",
        "Strengthen international collaboration"
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "NGO Collaborations",
      description: "Enhance conservation efforts with data-driven insights and tools.",
      benefits: [
        "Amplify advocacy campaigns",
        "Improve conservation projects",
        "Bridge public-private partnerships"
      ]
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Maritime Industry",
      description: "Transform maritime operations with sustainable solutions.",
      benefits: [
        "Prevent environmental incidents",
        "Reduce operational costs",
        "Enhance brand reputation"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Research Institutions",
      description: "Collaborate on groundbreaking marine conservation research.",
      benefits: [
        "Access exclusive datasets",
        "Joint research initiatives",
        "Shape future innovations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <PartnershipType key={index} {...type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}