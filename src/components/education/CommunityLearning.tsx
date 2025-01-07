import React from 'react';
import { Users, BookOpen, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function InitiativeCard({ icon, title, description, features }: InitiativeCardProps) {
  return (
    <Card className="p-8">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-blue-200">
            <span className="text-aqua">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function CommunityLearning() {
  const initiatives = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Training Programs",
      description: "Hands-on workshops and training for coastal communities",
      features: [
        "Satellite data interpretation",
        "Early warning systems",
        "Response coordination"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Learning Platforms",
      description: "Free online resources and courses",
      features: [
        "Multilingual content",
        "Interactive tutorials",
        "Mobile-friendly access"
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Education initiatives across regions",
      features: [
        "Local partnerships",
        "Cultural adaptation",
        "Community engagement"
      ]
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Community-Centered Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <InitiativeCard key={index} {...initiative} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}