import React from 'react';
import { Globe, AlertTriangle, Activity } from 'lucide-react';
import { Card } from '../ui/Card';

export function LiveDashboard() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Live Dashboard Simulation</h2>
        
        <div className="mb-12">
          <Card className="aspect-video bg-deep-900 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-32 h-32 text-aqua animate-pulse" />
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
}