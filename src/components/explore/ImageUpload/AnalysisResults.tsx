import React from 'react';
import { CheckCircle2, AlertCircle, Activity, Map, FileCheck } from 'lucide-react';
import { Card } from '../../ui/Card';

interface AnalysisResultsProps {
  isAnalyzing: boolean;
  results: {
    status: string;
    confidence: number;
    area: number;
  } | null;
}

export function AnalysisResults({ isAnalyzing, results }: AnalysisResultsProps) {
  return (
    <Card className="p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.1),transparent_70%)]" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-blue-100">Analysis Results</h3>
          {results && (
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Analysis Complete</span>
            </div>
          )}
        </div>

        {isAnalyzing ? (
          <div className="text-center py-12">
            <div className="relative w-32 h-32 mx-auto mb-8">
              {/* Complex loading animation */}
              <div className="absolute inset-0 border-4 border-aqua/10 rounded-full animate-pulse" />
              <div className="absolute inset-2 border-4 border-aqua/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border-4 border-aqua/30 rounded-full animate-spin" />
              <div className="absolute inset-6 border-4 border-aqua/40 rounded-full animate-ping" />
              <div className="absolute inset-8 border-4 border-aqua/50 rounded-full animate-spin-reverse" />
              <div className="absolute inset-0 bg-gradient-radial from-aqua/5 to-transparent animate-pulse" />
              
              {/* Center activity indicator */}
              <div className="absolute inset-10 bg-deep-900/80 rounded-full backdrop-blur-sm border border-aqua/30 flex items-center justify-center">
                <Activity className="w-8 h-8 text-aqua animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl text-blue-200">Processing Image</p>
              
              <div className="flex flex-col items-center gap-2">
                <p className="text-blue-200/60">Our CNN model is analyzing the data...</p>
                
                <div className="flex items-center gap-6 text-sm text-blue-200/40 mt-4">
                  {['Processing', 'Analyzing', 'Validating'].map((stage, index) => (
                    <div key={stage} className="flex flex-col items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-aqua animate-ping" style={{ animationDelay: `${index * 200}ms` }} />
                      <span>{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : results ? (
          <div className="space-y-8">
            {/* Status indicator */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg text-blue-200 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  Status
                </span>
                <span className="text-lg text-green-400 font-semibold">{results.status}</span>
              </div>
              <div className="h-3 bg-deep-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-aqua via-blue-400 to-purple animate-slide-right relative"
                  style={{ width: '100%' }}
                >
                  <div className="absolute inset-0 bg-gradient-shine animate-slide-right" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>

            {/* Confidence score */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg text-blue-200">Confidence Score</span>
                <span className="text-lg text-aqua font-semibold">{results.confidence}%</span>
              </div>
              <div className="h-3 bg-deep-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-aqua to-blue-400 transition-all duration-1000 ease-out relative"
                  style={{ width: `${results.confidence}%` }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] animate-shine" />
                </div>
              </div>
            </div>

            {/* Area affected */}
            <div className="bg-surface-900 p-6 rounded-lg border border-aqua/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-aqua/5 to-transparent opacity-30" />
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg text-blue-200 flex items-center gap-2">
                    <Map className="w-5 h-5 text-aqua" />
                    Area Affected
                  </span>
                  <span className="text-2xl text-aqua font-bold">{results.area} km²</span>
                </div>
                <p className="text-sm text-blue-200/60 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  Estimated surface area of detected oil spill
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <AlertCircle className="w-20 h-20 text-blue-400/30 mx-auto mb-6" />
            <p className="text-2xl text-blue-200 mb-3">No Image Uploaded</p>
            <p className="text-blue-200/60 max-w-sm mx-auto">
              Upload a satellite image to see our AI detection system in action
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}