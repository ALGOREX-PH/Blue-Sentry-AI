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
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "24/7 Satellite Surveillance",
      description: "Continuous monitoring of vast oceanic areas using advanced Sentinel-1 satellites"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Detection",
      description: "Real-time analysis and accurate detection using proprietary algorithms"
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Instant Alerts",
      description: "Immediate stakeholder notification with detailed incident data"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            How Blue Sentry AI Works
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