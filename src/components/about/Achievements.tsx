import React from 'react';
import { Card } from '../ui/Card';
import { Award, Trophy, Star } from 'lucide-react';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
}

function AchievementCard({ icon, title, description, year }: AchievementCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-aqua">{icon}</div>
        <div>
          <div className="text-sm text-aqua mb-1">{year}</div>
          <h3 className="text-lg font-semibold text-blue-100 mb-2">{title}</h3>
          <p className="text-blue-200">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function Achievements() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "National Innovators Award",
      description: "Recognized for groundbreaking advancements in satellite-based environmental monitoring",
      year: "2050"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Top 100 Under 30 Tech Leaders",
      description: "Highlighted for excellence in AI development and sustainable innovation",
      year: "2100"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "StackLeague Grand Champion",
      description: "Three-time champion showcasing technical expertise in coding and AI competitions",
      year: "2021-2023"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Awards & Recognition
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}