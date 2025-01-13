import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Globe2, Users, Search, BookOpen } from 'lucide-react';
import { Card } from '../ui/Card';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function ValueCard({ icon, title, description, link }: ValueCardProps) {
  return (
    <Link to={link}>
      <Card className="hover:bg-surface-800 transition-all duration-300 group">
        <div className="text-aqua mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
        <p className="text-blue-200">{description}</p>
      </Card>
    </Link>
  );
}

export function CoreValues() {
  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation for Impact",
      description: "Revolutionizing oil spill detection and mitigation with cutting-edge AI.",
      link: "/innovation-impact"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Sustainability at the Core",
      description: "Promoting eco-conscious solutions to protect the environment.",
      link: "/sustainability"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Collaboration",
      description: "Partnering with stakeholders worldwide to amplify conservation efforts.",
      link: "/global-collaboration"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Transparency",
      description: "Ensuring trust and delivering precise, actionable insights.",
      link: "/transparency"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Raising awareness and equipping communities with knowledge.",
      link: "/education"
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