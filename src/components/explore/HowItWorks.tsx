import React from 'react';
import { Upload, Brain, FileCheck } from 'lucide-react';
import { Card } from '../ui/Card';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <Card className="text-center hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-12 h-12" />,
      title: "Upload Images",
      description: "Upload your Sentinel-1 satellite images or use our demo data"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Processing",
      description: "Our CNN model analyzes the images in real-time"
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "View Results",
      description: "Get detailed detection reports with confidence scores"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}