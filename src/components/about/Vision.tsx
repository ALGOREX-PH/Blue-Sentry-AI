import React from 'react';
import { Card } from '../ui/Card';

export function Vision() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-aqua mb-6">Vision & Leadership</h2>
            <div className="mb-8">
              <p className="text-blue-200 mb-6 leading-relaxed">
                Danielle's leadership philosophy is deeply rooted in the belief that technology should serve humanity and the planet. Through Blue Sentry AI, she advocates for the use of generative AI and satellite technology to foster global collaboration in protecting marine biodiversity.
              </p>
              <blockquote className="border-l-4 border-aqua pl-4 py-2 mb-6">
                <p className="text-xl text-blue-100 italic">
                  "AI isn't just about automation—it's about creating solutions that safeguard our most precious ecosystems. Our oceans are the lifeblood of our planet, and at Blue Sentry AI, we're committed to ensuring their longevity."
                </p>
                <footer className="text-blue-200 mt-2">
                  – Danielle Bagaforo Meer
                </footer>
              </blockquote>
            </div>
            <div className="bg-surface-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Other Ventures</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-blue-100 mb-2">LeafGuard AI</h4>
                  <p className="text-blue-200">
                    An AI-powered platform for detecting apple leaf diseases and protecting crops, demonstrating Danielle's broader commitment to agricultural sustainability.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}