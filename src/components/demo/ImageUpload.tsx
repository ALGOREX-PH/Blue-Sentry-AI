import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
          Upload Your Satellite Image
        </h2>
        
        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-aqua/10 rounded-full animate-ping" />
              <div className="relative bg-deep-900/80 rounded-full p-4 backdrop-blur-sm border border-aqua/30">
                <Upload className="w-full h-full text-aqua" />
              </div>
            </div>
            <p className="text-lg text-blue-200 mb-2">
              Drag and drop your Sentinel-1 SAR image here
            </p>
            <p className="text-sm text-blue-200/60">
              Supported formats: .tif, .jpg, .png (Max: 50MB)
            </p>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Select File
            </Button>
            
            <div className="mt-8 flex items-center gap-2 text-yellow-400/80 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Don't have a Sentinel-1 SAR image? Try our demo data below</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}