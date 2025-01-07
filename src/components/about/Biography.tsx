import React from 'react';
import { Card } from '../ui/Card';
import { Brain, Globe, Shield } from 'lucide-react';

export function Biography() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-aqua mb-6">About Danielle</h2>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Danielle Bagaforo Meer is the visionary founder and CEO of Blue Sentry AI, a pioneering company leveraging artificial intelligence to protect marine ecosystems and promote environmental sustainability. Known for seamlessly blending advanced technology with ecological responsibility, Danielle stands at the forefront of AI-driven environmental solutions.
            </p>
            <p className="text-blue-200 leading-relaxed">
              As a tech innovator, Danielle specializes in satellite image analysis and real-time oil spill detection, ensuring that Blue Sentry AI plays a critical role in safeguarding marine life and preserving global maritime health.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Brain className="w-12 h-12 text-aqua mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-100 mb-2">AI Expert</h3>
              <p className="text-blue-200">Pioneering AI solutions for environmental protection</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-12 h-12 text-aqua mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Global Leader</h3>
              <p className="text-blue-200">Driving international collaboration in ocean conservation</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-aqua mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-100 mb-2">Tech Innovator</h3>
              <p className="text-blue-200">Creating cutting-edge solutions for marine protection</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}