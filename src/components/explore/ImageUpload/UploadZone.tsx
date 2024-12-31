import React from 'react';
import { Image as ImageIcon, X, Upload, AlertTriangle } from 'lucide-react';
import { Card } from '../../ui/Card';

interface UploadZoneProps {
  selectedImage: string | null;
  onClear: () => void;
}

export function UploadZone({ selectedImage, onClear }: UploadZoneProps) {
  return (
    <Card className="aspect-video relative flex items-center justify-center group overflow-hidden border-2 border-dashed border-aqua/30 hover:border-aqua/50 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-900/90 via-marine/20 to-deep-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse" />
      
      {selectedImage ? (
        <>
          <img
            src={selectedImage}
            alt="Uploaded satellite"
            className="w-full h-full object-cover rounded-lg transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-900/90 via-deep-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-20 transition-all duration-700" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-900 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-blue-200">Image Loaded</span>
              </div>
              <button
                onClick={onClear}
                className="p-2 bg-deep-900/80 rounded-full text-aqua hover:bg-deep-900 hover:text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="relative text-center p-8 z-10">
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Outer rings */}
            <div className="absolute inset-0 bg-aqua/5 rounded-full animate-ping" />
            <div className="absolute inset-0 border-2 border-aqua/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 border-2 border-aqua/20 rounded-full animate-spin-reverse" />
            <div className="absolute inset-4 border-2 border-aqua/30 rounded-full animate-pulse" />
            <div className="absolute inset-6 border-2 border-aqua/40 rounded-full animate-spin-slow" />
            
            {/* Center icon container */}
            <div className="absolute inset-8 bg-deep-900/80 rounded-full backdrop-blur-sm border border-aqua/30 flex items-center justify-center">
              <div className="relative">
                <Upload className="w-12 h-12 text-aqua/70" />
                <div className="absolute -inset-4 bg-gradient-radial from-aqua/10 to-transparent animate-pulse" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -inset-2 bg-gradient-radial from-aqua/5 to-transparent animate-pulse" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-aqua/30 to-transparent" />
          </div>

          <div className="relative space-y-4">
            <div>
              <h3 className="text-2xl text-blue-200 mb-2 font-semibold">
                Drop your satellite image here
              </h3>
              <p className="text-blue-200/60">or click to browse</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {['.jpg', '.png', '.tif'].map((format) => (
                <span 
                  key={format} 
                  className="px-4 py-1.5 rounded-full bg-surface-900/80 text-sm text-blue-200/80 border border-aqua/10 hover:border-aqua/30 hover:bg-surface-800 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {format}
                </span>
              ))}
            </div>

            <div className="pt-6 flex justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-blue-200/60">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Real-time Analysis
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200/60">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                98% Accuracy
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 justify-center text-yellow-400/80 text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Maximum file size: 50MB</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}