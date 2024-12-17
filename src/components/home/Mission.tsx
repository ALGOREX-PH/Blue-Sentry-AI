import React from 'react';
import { Shield, Waves, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function MissionCard({ icon, title, description }: MissionCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-colors">
      <div className="text-aqua mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-100">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function Mission() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 via-marine to-deep-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-aqua mx-auto mb-8" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-aqua mb-6 text-glow">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Blue Sentry AI is dedicated to leveraging advanced AI and satellite technology to protect marine ecosystems and ensure a sustainable future for our planet.
          </p>
          
          <p className="text-lg text-blue-200 mb-12">
            By detecting and preventing oceanic disasters, we enable stakeholders to safeguard biodiversity, reduce economic loss, and protect communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard
              icon={<Waves className="w-12 h-12" />}
              title="AI & Satellite Tech"
              description="Cutting-edge technology for ocean monitoring"
            />
            <MissionCard
              icon={<Shield className="w-12 h-12" />}
              title="Ecosystem Protection"
              description="Safeguarding marine life and habitats"
            />
            <MissionCard
              icon={<Globe className="w-12 h-12" />}
              title="Rapid Response"
              description="Minimizing damage through quick detection"
            />
          </div>
        </div>
      </div>
    </section>
  );
}