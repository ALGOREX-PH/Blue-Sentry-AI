import React from 'react';
import { Brain, Satellite, Bell } from 'lucide-react';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';
interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <Card>
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-100">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
  );
}

export function Solution() {
  return (
    <section className="py-20 bg-deep-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-100 mb-4">Our Solution: AI-Powered Marine Protection</h2>
            <p className="text-xl text-blue-200">Cutting-edge technology for immediate detection and response</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link to="/sar-technology">
            <SolutionCard
              icon={<Satellite className="w-12 h-12" />}
              title="Sentinel-1 SAR Data"
              description="Advanced satellite imagery for comprehensive ocean monitoring"
            />
            </Link>
            <Link to="/ai-technology">
            <SolutionCard
              icon={<Brain className="w-12 h-12" />}
              title="Proprietary AI Algorithms"
              description="Cutting-edge AI for accurate oil detection"
            />
            </Link>
            <SolutionCard
              icon={<Bell className="w-12 h-12" />}
              title="Actionable Insights"
              description="Real-time data and analytics for informed decision-making"
            />
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-100">How It Works</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <Satellite className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <p className="font-medium text-blue-200">Satellite Data Integration</p>
              </div>
              <div className="hidden md:block text-blue-400">→</div>
              <div className="text-center">
                <Brain className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <p className="font-medium text-blue-200">AI Detection</p>
              </div>
              <div className="hidden md:block text-blue-400">→</div>
              <div className="text-center">
                <Bell className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <p className="font-medium text-blue-200">Instant Alerts</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}