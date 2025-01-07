import React from 'react';
import { Building2, Globe, Users, Shield } from 'lucide-react';
import { Card } from '../ui/Card';

interface PartnerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
}

function PartnerCard({ icon, title, description, metrics }: PartnerCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <div className="grid grid-cols-2 gap-4">
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

export function PartnershipNetwork() {
  const partners = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Maritime Agencies",
      description: "Working with national agencies to enhance monitoring and response capabilities",
      metrics: [
        { value: "5+", label: "Agencies" },
        { value: "24/7", label: "Coverage" }
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "NGOs & Reserves",
      description: "Collaborating with conservation organizations to protect marine habitats",
      metrics: [
        { value: "100+", label: "Protected Areas" },
        { value: "1000+", label: "Species Protected" }
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Research Partners",
      description: "Joint initiatives with academic institutions for continuous innovation",
      metrics: [
        { value: "15+", label: "Universities" },
        { value: "50+", label: "Research Projects" }
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Industry Leaders",
      description: "Partnerships with maritime industries for sustainable practices",
      metrics: [
        { value: "30+", label: "Companies" },
        { value: "90%", label: "Compliance Rate" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Our Global Partnership Network
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}