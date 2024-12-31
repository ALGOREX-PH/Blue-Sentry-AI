import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface StatusBadgeProps {
  type: 'success' | 'warning' | 'info';
  text: string;
}

function StatusBadge({ type, text }: StatusBadgeProps) {
  const colors = {
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    info: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm border ${colors[type]}`}>
      {text}
    </span>
  );
}

export function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<{
    status: string;
    confidence: number;
    area: number;
  } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    // Simulate CNN analysis
    setTimeout(() => {
      setAnalysisResults({
        status: 'Oil Spill Detected',
        confidence: 98.5,
        area: 2.7
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setAnalysisResults(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aqua mb-4 text-glow">
              Upload Your Satellite Image
            </h2>
            <p className="text-xl text-blue-200">
              Experience our AI detection system in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="aspect-video relative flex items-center justify-center group overflow-hidden border-2 border-dashed border-aqua/30 hover:border-aqua/50 transition-colors">
                {selectedImage ? (
                  <>
                    <img
                      src={selectedImage}
                      alt="Uploaded satellite"
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <button
                      onClick={clearImage}
                      className="absolute top-4 right-4 p-2 bg-deep-900/80 rounded-full text-aqua hover:bg-deep-900 hover:text-white transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <div className="text-center p-8 animate-pulse">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 bg-aqua/10 rounded-full animate-ping" />
                      <div className="relative bg-deep-900/80 rounded-full p-4 backdrop-blur-sm border border-aqua/30">
                        <ImageIcon className="w-full h-full text-aqua/70" />
                      </div>
                    </div>
                    <p className="text-xl text-blue-200 mb-2">Drop your satellite image here</p>
                    <p className="text-blue-200/60 text-sm">Supported formats: .jpg, .png, .tif</p>
                  </div>
                )}
              </Card>
              
              <div className="mt-6 flex justify-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative overflow-hidden group"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Image
                  <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-30 transition-opacity" />
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-blue-100">Analysis Results</h3>
                  {analysisResults && (
                    <StatusBadge 
                      type="success" 
                      text="Analysis Complete"
                    />
                  )}
                </div>
                {isAnalyzing ? (
                  <div className="text-center py-8">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 border-4 border-aqua/20 rounded-full animate-pulse" />
                      <div className="absolute inset-2 border-4 border-aqua/30 rounded-full animate-spin" />
                      <div className="absolute inset-4 border-4 border-aqua/40 rounded-full animate-spin-slow" />
                    </div>
                    <p className="text-xl text-blue-200 mb-2">Processing Image</p>
                    <p className="text-blue-200/60">Our CNN model is analyzing the data...</p>
                  </div>
                ) : analysisResults ? (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-200 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                          Status
                        </span>
                        <span className="text-green-400 font-semibold">{analysisResults.status}</span>
                      </div>
                      <div className="h-2 bg-deep-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-aqua to-purple animate-slide-right" 
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-200">Confidence Score</span>
                        <span className="text-aqua font-semibold">{analysisResults.confidence}%</span>
                      </div>
                      <div className="h-2 bg-deep-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-aqua transition-all duration-1000 ease-out" 
                          style={{ width: `${analysisResults.confidence}%` }} 
                        />
                      </div>
                    </div>
                    <div className="bg-surface-900 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-blue-200">Area Affected</span>
                        <span className="text-aqua font-semibold">{analysisResults.area} km²</span>
                      </div>
                      <p className="text-sm text-blue-200/60">
                        Estimated surface area of detected oil spill
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <AlertCircle className="w-16 h-16 text-blue-400/50 mx-auto mb-4" />
                    <p className="text-xl text-blue-200 mb-2">No Image Uploaded</p>
                    <p className="text-blue-200/60">
                      Upload a satellite image to see AI detection in action
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-blue-200/60">
              Don't have a satellite image? Try our demo data below
            </p>
            <Button variant="secondary" className="mt-4">
              Load Demo Image
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}