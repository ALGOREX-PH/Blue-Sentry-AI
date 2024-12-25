import React from 'react';
import { Target, Zap, Globe, BarChart } from 'lucide-react';
import { Card } from '../ui/Card';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <Card className="text-center hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function WhyPartner() {
  const reasons = [
    {
      icon: <Target className="w-12 h-12 mx-auto" />,
      title: "Unified Mission",
      description: "Join a global movement dedicated to ocean conservation through innovative solutions."
    },
    {
      icon: <Zap className="w-12 h-12 mx-auto" />,
      title: "AI Technology",
      description: "Access cutting-edge AI solutions for real-time monitoring and threat detection."
    },
    {
      icon: <Globe className="w-12 h-12 mx-auto" />,
      title: "Global Reach",
      description: "Scale your impact across borders with our comprehensive monitoring network."
    },
    {
      icon: <BarChart className="w-12 h-12 mx-auto" />,
      title: "Proven Results",
      description: "Achieve measurable impact with our proven track record of success."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Why Partner with Blue Sentry AI?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <ReasonCard key={index} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}