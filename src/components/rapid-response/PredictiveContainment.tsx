import React from 'react';
import { Wind, Waves, Navigation, AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';

interface RiskZoneProps {
  x: number;
  y: number;
  size: number;
  risk: 'high' | 'medium' | 'low';
}

function RiskZone({ x, y, size, risk }: RiskZoneProps) {
  const colors = {
    high: 'bg-red-500/30',
    medium: 'bg-yellow-500/30',
    low: 'bg-green-500/30'
  };

  return (
    <div
      className={`absolute rounded-full animate-pulse ${colors[risk]}`}
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

export function PredictiveContainment() {
  const riskZones = [
    { x: 30, y: 40, size: 100, risk: 'high' as const },
    { x: 60, y: 30, size: 80, risk: 'medium' as const },
    { x: 75, y: 60, size: 60, risk: 'low' as const }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-4 text-center">
            Predictive Containment System
          </h2>
          <p className="text-xl text-blue-200 mb-12 text-center max-w-3xl mx-auto">
            AI-powered forecasting for optimal spill containment
          </p>

          <Card className="mb-12 aspect-video relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                alt="Ocean map"
                className="w-full h-full object-cover opacity-20"
              />
              {riskZones.map((zone, index) => (
                <RiskZone key={index} {...zone} />
              ))}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-4">
              <div className="flex items-center gap-2 bg-deep-900/80 px-3 py-1 rounded-full">
                <Wind className="w-4 h-4 text-aqua" />
                <span className="text-sm text-blue-200">Wind: 15 knots NE</span>
              </div>
              <div className="flex items-center gap-2 bg-deep-900/80 px-3 py-1 rounded-full">
                <Waves className="w-4 h-4 text-aqua" />
                <span className="text-sm text-blue-200">Wave Height: 2.5m</span>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <Navigation className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-3">Drift Forecasting</h3>
              <p className="text-blue-200">Advanced modeling of spill movement based on currents and winds</p>
            </Card>
            <Card>
              <AlertTriangle className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-3">Risk Zone Mapping</h3>
              <p className="text-blue-200">Real-time identification of areas at highest risk</p>
            </Card>
            <Card>
              <Waves className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-3">Optimal Containment</h3>
              <p className="text-blue-200">AI-recommended boom placement and skimming zones</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}