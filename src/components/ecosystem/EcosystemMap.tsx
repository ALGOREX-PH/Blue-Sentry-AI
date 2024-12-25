import React from 'react';
import { Card } from '../ui/Card';

interface HotspotProps {
  x: number;
  y: number;
  size: number;
  intensity: 'low' | 'medium' | 'high';
}

function Hotspot({ x, y, size, intensity }: HotspotProps) {
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

export function EcosystemMap() {
  const hotspots = [
    { x: 25, y: 30, size: 80, intensity: 'high' as const },
    { x: 45, y: 60, size: 60, intensity: 'medium' as const },
    { x: 75, y: 40, size: 40, intensity: 'low' as const }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-4 text-center">
            Global Ecosystem Monitoring
          </h2>
          <p className="text-xl text-blue-200 mb-12 text-center max-w-3xl mx-auto">
            Real-time visualization of marine ecosystem health and potential threats
          </p>
          
          <Card className="aspect-[21/9] relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
                alt="World map"
                className="w-full h-full object-cover opacity-20"
              />
              {hotspots.map((hotspot, index) => (
                <Hotspot key={index} {...hotspot} />
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-4">
              <div className="flex items-center gap-2 bg-deep-900/80 px-3 py-1 rounded-full">
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <span className="text-sm text-blue-200">Low Risk</span>
              </div>
              <div className="flex items-center gap-2 bg-deep-900/80 px-3 py-1 rounded-full">
                <div className="w-3 h-3 rounded-full bg-orange-500/30" />
                <span className="text-sm text-blue-200">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2 bg-deep-900/80 px-3 py-1 rounded-full">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <span className="text-sm text-blue-200">High Risk</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}