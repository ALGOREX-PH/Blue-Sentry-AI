import React from 'react';
import { Card } from '../ui/Card';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-aqua/20 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-aqua" />
      <div className="text-aqua font-bold mb-2">{year}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-2">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </div>
  );
}

export function InnovationTimeline() {
  const milestones = [
    {
      year: "2024",
      title: "Launch of Advanced AI Detection",
      description: "Deployment of next-generation neural networks achieving 98% accuracy"
    },
    {
      year: "2025",
      title: "Global Coverage Milestone",
      description: "Expansion to monitor 70% of world's oceans with real-time detection"
    },
    {
      year: "2026",
      title: "Predictive Analytics Integration",
      description: "Implementation of AI-driven forecasting for preventive action"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Innovation Timeline
          </h2>
          <Card className="p-8">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} {...milestone} />
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}