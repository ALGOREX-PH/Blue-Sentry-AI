import React from 'react';
import { Satellite, Brain, Bell } from 'lucide-react';
import { Card } from '../ui/Card';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <Card>
      <div className="text-aqua mb-4 mt-2">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Satellite Imagery Capture",
      description: "Regular sweeps over oceans capturing high-resolution SAR imagery of designated areas."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze imagery to detect and classify potential oil spills."
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Stakeholder Alerts",
      description: "Immediate notifications with comprehensive reports sent to relevant stakeholders."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}