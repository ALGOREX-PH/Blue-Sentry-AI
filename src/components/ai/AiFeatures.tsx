import React from 'react';
import { Brain, Zap, Target, Activity } from 'lucide-react';
import { Card } from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-blue-200">
            <span className="text-aqua">•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function AiFeatures() {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Advanced Neural Networks",
      description: "Sophisticated AI trained on extensive real-world data",
      benefits: [
        "98% detection accuracy",
        "Minimal false positives",
        "Early detection capabilities"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Adaptive Machine Learning",
      description: "Self-improving system that evolves with new data",
      benefits: [
        "Continuous learning",
        "Pattern recognition",
        "Refined detection"
      ]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Real-Time Processing",
      description: "Instant analysis and alert generation",
      benefits: [
        "Immediate detection",
        "Rapid response",
        "24/7 monitoring"
      ]
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Pattern Differentiation",
      description: "Precise distinction between threats and natural phenomena",
      benefits: [
        "Reduced false alarms",
        "Accurate classification",
        "Enhanced reliability"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Key Features and Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}