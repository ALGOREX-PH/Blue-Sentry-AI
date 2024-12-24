import React from 'react';
import { Map, Activity, AlertCircle, Timer } from 'lucide-react';
import { Card } from '../ui/Card';

interface RiskZoneProps {
  x: number;
  y: number;
  size: number;
  intensity: 'low' | 'medium' | 'high';
}

function RiskZone({ x, y, size, intensity }: RiskZoneProps) {
  const colors = {
    low: 'bg-yellow-500/20',
    medium: 'bg-orange-500/30',
    high: 'bg-red-500/40'
  };

  return (
    <div
      className={`absolute rounded-full animate-pulse ${colors[intensity]}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}

export function HeatmapVisualization() {
  const riskZones = [
    { x: 25, y: 30, size: 80, intensity: 'high' as const },
    { x: 45, y: 60, size: 60, intensity: 'medium' as const },
    { x: 75, y: 40, size: 40, intensity: 'low' as const },
    { x: 60, y: 20, size: 50, intensity: 'medium' as const }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Heatmap Visualization</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <Map className="w-8 h-8 text-aqua mb-4" />
            <h3 className="text-lg font-semibold text-blue-100 mb-2">Global Coverage</h3>
            <p className="text-blue-200">24/7 monitoring of critical ocean regions</p>
          </Card>
          
          <Card>
            <Activity className="w-8 h-8 text-aqua mb-4" />
            <h3 className="text-lg font-semibold text-blue-100 mb-2">Risk Analysis</h3>
            <p className="text-blue-200">Real-time risk assessment and prediction</p>
          </Card>
          
          <Card>
            <Timer className="w-8 h-8 text-aqua mb-4" />
            <h3 className="text-lg font-semibold text-blue-100 mb-2">Historical Data</h3>
            <p className="text-blue-200">Pattern analysis from past incidents</p>
          </Card>
        </div>
        
        <div className="mb-12 relative">
          <Card className="aspect-video bg-deep-900 relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                alt="World map"
                className="w-full h-full object-cover opacity-20"
              />
              {riskZones.map((zone, index) => (
                <RiskZone key={index} {...zone} />
              ))}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <span className="text-sm text-blue-200">Low Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500/30" />
                <span className="text-sm text-blue-200">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <span className="text-sm text-blue-200">High Risk</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-100 mb-4">High-Risk Zone Analysis</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span>Identification of high-traffic maritime routes</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span>Analysis of historical spill patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Weather pattern impact assessment</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-100 mb-4">Risk Projections</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-aqua flex-shrink-0 mt-1" />
                <span>AI-powered risk prediction algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-aqua flex-shrink-0 mt-1" />
                <span>Real-time maritime traffic monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-aqua flex-shrink-0 mt-1" />
                <span>Environmental condition analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}