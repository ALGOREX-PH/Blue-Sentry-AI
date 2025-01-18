import React, { useState, useRef, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '../../ui/Button';
import { UploadZone } from './UploadZone';
import { AnalysisResults } from './AnalysisResults';
import { preprocessImage, loadModel, calculateSpillArea } from '../../../utils/imageProcessing';
import * as tf from '@tensorflow/tfjs';

export function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<{
    status: string;
    confidence: number;
    area: number;
  } | null>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  useEffect(() => {
    const initModel = async () => {
      try {
        const loadedModel = await loadModel();
        setModel(loadedModel);
      } catch (error) {
        console.error('Failed to load model:', error);
      }
    };
    initModel();
  }, []);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageUrl = e.target?.result as string;
        setSelectedImage(imageUrl);
        await analyzeImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (imageUrl: string) => {
    setIsAnalyzing(true);
    try {
      // Ensure model is loaded
      const activeModel = model || await loadModel();
      setModel(activeModel);

      // Use tf.tidy to automatically clean up tensors
      const result = await tf.tidy(async () => {
        const processedImage = await preprocessImage(imageUrl);
        const prediction = activeModel.predict(processedImage) as tf.Tensor;
        const probability = await prediction.data();
        return Math.round(probability[0]); // Round to 0 or 1
      });

      // Set results
      const area = calculateSpillArea(result);
      setAnalysisResults({
        status: result === 1 ? 'Oil Spill Detected' : 'No Oil Spill Detected',
        confidence: result === 1 ? 100 : 0,
        area: area
      });
    } catch (error) {
      console.error('Error analyzing image:', error);
      setAnalysisResults({
        status: 'Analysis Failed',
        confidence: 0,
        area: 0
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setAnalysisResults(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="py-20 bg-deep-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-aqua mb-4 text-glow">
              Upload Your Satellite Image
            </h2>
            <p className="text-xl text-blue-200">
              Experience our AI detection system in action
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <UploadZone 
                selectedImage={selectedImage}
                onClear={clearImage}
              />
              
              <div className="flex justify-center">
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

            <AnalysisResults 
              isAnalyzing={isAnalyzing}
              results={analysisResults}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-blue-200/60 mb-4">
              Don't have a satellite image? Try our demo data
            </p>
            <Button variant="secondary" className="mx-auto">
              Load Demo Image
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}