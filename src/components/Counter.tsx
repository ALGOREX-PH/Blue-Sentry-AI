import React from 'react';

interface CounterProps {
  value: number;
  label: string;
  description: string;
}

export function Counter({ value, label, description }: CounterProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">{value.toLocaleString()}</div>
      <div className="text-blue-300 font-medium mb-1">{label}</div>
      <div className="text-sm text-blue-200/80">{description}</div>
    </div>
  );
}