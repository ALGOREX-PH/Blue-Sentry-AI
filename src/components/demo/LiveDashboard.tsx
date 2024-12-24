import React from 'react';
import { Globe, AlertTriangle, Activity, Navigation, Waves, Wind } from 'lucide-react';
import { Card } from '../ui/Card';

interface AlertProps {
  severity: 'low' | 'medium' | 'high';
  location: string;
  timestamp: string;
  coordinates: string;
}

function Alert({ severity, location, timestamp, coordinates }: AlertProps) {
  const severityColors = {
    low: 'border-yellow-500/50 bg-yellow-500/10',
    medium: 'border-orange-500/50 bg-orange-500/10',
    high: 'border-red-500/50 bg-red-500/10'
  };

  return (
    <div className={`p-4 rounded-lg border ${severityColors[severity]} mb-4`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-blue-100 font-medium">{location}</span>
        <span className="text-sm text-blue-200">{timestamp}</span>
      </div>
      <div className="text-sm text-blue-200">{coordinates}</div>
    </div>
  );
}

export function LiveDashboard() {
  const alerts: AlertProps[] = [
    {
      severity: 'high',
      location: 'Gulf of Mexico',
      timestamp: '2 minutes ago',
      coordinates: '29.7604° N, 95.3698° W'
    },
    {
      severity: 'medium',
      location: 'South China Sea',
      timestamp: '15 minutes ago',
      coordinates: '14.5995° N, 115.5943° E'
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Live Dashboard Simulation</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card className="aspect-video bg-deep-900 relative overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                  alt="World map"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-32 h-32 text-aqua animate-pulse opacity-50" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-4">
                <div className="flex items-center gap-2 bg-deep-900/80 px-3 py-1 rounded-full">
                  <Navigation className="w-4 h-4 text-aqua" />
                  <span className="text-sm text-blue-200">Live Feed</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Active Alerts</h3>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <Alert key={index} {...alert} />
                ))}
              </div>
          </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card>
            <AlertTriangle className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Detection Alerts</h3>
            <p className="text-blue-200">Real-time notifications when spills are detected</p>
          </Card>
          
          <Card>
            <Activity className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Live Monitoring</h3>
            <p className="text-blue-200">Continuous satellite data stream analysis</p>
          </Card>
          
          <Card>
            <Globe className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Global Coverage</h3>
            <p className="text-blue-200">Monitor oceans worldwide 24/7</p>
          </Card>
          
          <Card>
            <Waves className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Ocean Conditions</h3>
            <p className="text-blue-200">Real-time weather and current data</p>
          </Card>
        </div>
      </div>
    </section>
  );
}