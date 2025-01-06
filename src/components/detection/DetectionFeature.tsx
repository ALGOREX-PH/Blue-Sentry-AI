import React from 'react';
import { Bell, Globe, Map, Shield } from 'lucide-react';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function DetectionFeatures() {
  const features = [
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Immediate Detection & Alerts",
      description: "Reduce spill response times by up to 70% with our automated alert system and real-time ocean scanning technology."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Coverage",
      description: "Monitor oceans worldwide with localized precision, from vast trade routes to specific marine sanctuaries."
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: "Geospatial Tracking",
      description: "Generate detailed, real-time maps with spill size, location, and projected drift paths for optimal resource deployment."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Compliance Ready",
      description: "Full adherence to IMO protocols and international maritime regulations for comprehensive reporting."
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}