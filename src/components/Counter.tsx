import React from 'react';

import { Card } from './ui/Card';

interface CounterProps {
  value: number;
  label: string;
  description: string;
}

export function Counter({ value, label, description }: CounterProps) {
  return (
    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
      <Card className="p-6 bg-surface-900/50 backdrop-blur-sm border border-aqua/10 hover:border-aqua/30">
        <div className="text-4xl font-bold text-aqua mb-3 group-hover:text-glow">{value.toLocaleString()}</div>
        <div className="text-lg text-blue-300 font-medium mb-2">{label}</div>
        <div className="text-sm text-blue-200/80">{description}</div>
      </Card>
    </div>
  );
}