import React from 'react';
import { Droplet, Leaf, Globe, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface VisionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function VisionCard({ icon, title, description }: VisionCardProps) {
  return (
    <Card className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-aqua">{icon}</div>
        <h3 className="text-xl font-semibold text-blue-100">{title}</h3>
      </div>
      <p className="text-blue-200 mb-6">{description}</p>
      <Button variant="secondary">Learn More</Button>
    </Card>
  );
}

export function LongTermVision() {
  const visions = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Zero Untreated Oil Spills",
      description: "By 2035, we aim to achieve an 80% reduction in oil spill-related environmental damage through our monitoring and rapid response systems."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Marine Habitat Restoration",
      description: "Support the restoration of 10,000 square kilometers of marine habitats by 2030 through prevention and protection efforts."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accountability",
      description: "Reinforce international ocean conservation policies by 2030 with AI-driven monitoring networks."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Empowerment",
      description: "Deploy detection systems to 100 coastal communities by 2028, protecting local waters and livelihoods."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Our Long-Term Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {visions.map((vision, index) => (
              <VisionCard key={index} {...vision} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}