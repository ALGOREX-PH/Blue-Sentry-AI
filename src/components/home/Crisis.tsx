import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';

interface ImpactCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function ImpactCard({ title, description, imageUrl }: ImpactCardProps) {
  return (
    <Card className="overflow-hidden">
      <div 
        className="h-48 bg-cover bg-center rounded-t-lg" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-100">{title}</h3>
        <p className="text-blue-200">{description}</p>
      </div>
    </Card>
  );
}

export function Crisis() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-4">The Crisis at Hand</h2>
            <p className="text-xl text-blue-200">Understanding the impact of oil spills on our oceans</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link to="/biodiversity">
            <ImpactCard
              title="Biodiversity Loss"
              description="Devastating effects on marine ecosystems and wildlife populations"
              imageUrl="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80"
            />
            </Link>
            <Link to="/economic-impact">
            <ImpactCard
              title="Economic Impact"
              description="Severe consequences for coastal communities and maritime industries"
              imageUrl="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80"
            />
            </Link>
            <Link to="/">
            <ImpactCard
              title="Environmental Damage"
              description="Long-lasting effects on water quality and marine habitats"
              imageUrl="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80"
            />
            </Link>
          </div>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-100">Challenges with Current Methods</h3>
                <p className="text-blue-200 mb-4">
                  "It takes an average of 24-48 hours to detect oil spills using traditional methods, leading to irreversible damage to ecosystems."
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-surface-900 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-blue-100">Traditional Methods</h4>
                    <ul className="text-blue-200 space-y-2">
                      <li>• Manual surveillance</li>
                      <li>• Limited coverage area</li>
                      <li>• Slow response times</li>
                    </ul>
                  </div>
                  <div className="bg-ocean-800/30 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-blue-100">Blue Sentry AI</h4>
                    <ul className="text-blue-200 space-y-2">
                      <li>• AI-powered detection</li>
                      <li>• Global coverage</li>
                      <li>• Real-time alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}