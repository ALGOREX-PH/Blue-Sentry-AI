import React from 'react';
import { Award, Users, Laptop } from 'lucide-react';
import { Card } from '../ui/Card';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: { value: string; label: string };
}

function ProgramCard({ icon, title, description, stats }: ProgramCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <div className="pt-4 border-t border-aqua/10">
        <div className="text-2xl font-bold text-aqua mb-1">{stats.value}</div>
        <div className="text-sm text-blue-200">{stats.label}</div>
      </div>
    </Card>
  );
}

export function NextGeneration() {
  const programs = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Student Competitions",
      description: "Hackathons and challenges for innovative ocean protection solutions",
      stats: { value: "500+", label: "Student Participants" }
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Internship Program",
      description: "Hands-on experience in AI and conservation technology",
      stats: { value: "50+", label: "Annual Internships" }
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Tech Workshops",
      description: "Practical training in AI and satellite data analysis",
      stats: { value: "24", label: "Workshops per Year" }
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Inspiring the Next Generation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}