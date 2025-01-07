import React from 'react';
import { Activity } from 'lucide-react';

export function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative w-32 h-32 mb-8">
        {/* Outer rings */}
        <div className="absolute inset-0 border-4 border-aqua/10 rounded-full animate-pulse" />
        <div className="absolute inset-2 border-4 border-aqua/20 rounded-full animate-spin-slow" />
        <div className="absolute inset-4 border-4 border-aqua/30 rounded-full animate-spin-reverse" />
        <div className="absolute inset-6 border-4 border-aqua/40 rounded-full animate-pulse" />
        
        {/* Center activity indicator */}
        <div className="absolute inset-8 bg-deep-900/80 rounded-full backdrop-blur-sm border border-aqua/30 flex items-center justify-center">
          <Activity className="w-8 h-8 text-aqua animate-pulse" />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-aqua">Analyzing Image</h3>
        <p className="text-blue-200">Processing satellite data with AI...</p>
      </div>

      {/* Progress indicators */}
      <div className="flex items-center gap-8 mt-8">
        {['Processing', 'Analyzing', 'Validating'].map((stage, index) => (
          <div key={stage} className="flex flex-col items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full bg-aqua animate-ping" 
              style={{ animationDelay: `${index * 200}ms` }}
            />
            <span className="text-sm text-blue-200">{stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}