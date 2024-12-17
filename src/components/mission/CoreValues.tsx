import React from 'react';
import { Rocket, Globe2, Users, Search, BookOpen } from 'lucide-react';
import { Card } from '../ui/Card';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="hover:bg-ocean-800/30 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function CoreValues() {
  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation for Impact",
      description: "Revolutionizing oil spill detection and mitigation with cutting-edge AI."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Sustainability at the Core",
      description: "Promoting eco-conscious solutions to protect the environment."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Collaboration",
      description: "Partnering with stakeholders worldwide to amplify conservation efforts."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Transparency",
      description: "Ensuring trust and delivering precise, actionable insights."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Raising awareness and equipping communities with knowledge."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-800 to-deep-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}