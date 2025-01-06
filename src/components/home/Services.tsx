import React from 'react';
import { AlertTriangle, Activity, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress?: number;
}

function ServiceCard({ icon, title, description, progress }: ServiceCardProps) {
  return (
    <Card className="p-6">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      {progress && (
        <div className="w-full bg-deep-700 rounded-full h-2">
          <div 
            className="bg-blue-400 h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </Card>
  );
}

export function Services() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Services Offered</h2>
            <p className="text-xl text-blue-200">Comprehensive solutions for marine protection</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to = "/real-time-detection">
            <ServiceCard
              icon={<AlertTriangle className="w-12 h-12" />}
              title="Real-Time Oil Spill Detection"
              description="Identify and respond to oil spills within minutes, minimizing damage to ecosystems and reducing cleanup costs."
              progress={85}
            />
            </Link>
            <ServiceCard
              icon={<Activity className="w-12 h-12" />}
              title="Impact Assessment Tools"
              description="Understand the ecological and economic risks with advanced mapping and predictive tools tailored to your needs."
            />
          </div>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Success Story</h3>
            </div>
            <p className="text-blue-200">
              "In 2024, Blue Sentry AI helped a major NGO detect a spill within 12 minutes, reducing cleanup costs by 40%."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}