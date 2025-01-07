import React from 'react';
import { Globe, Building2, Users, Shield } from 'lucide-react';
import { Card } from '../ui/Card';

interface PartnershipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PartnershipCard({ icon, title, description }: PartnershipCardProps) {
  return (
    <Card className="p-8 hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function GlobalPartnerships() {
  const partnerships = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Impact",
      description: "Collaborating with international organizations to extend our reach and impact"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "NGO Partners",
      description: "Working alongside environmental organizations to protect marine ecosystems"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community",
      description: "Empowering local communities with tools and knowledge for conservation"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Protection",
      description: "United efforts to safeguard our oceans and marine life"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Building Global Partnerships
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partnerships.map((partnership, index) => (
            <PartnershipCard key={index} {...partnership} />
          ))}
        </div>
      </div>
    </section>
  );
}