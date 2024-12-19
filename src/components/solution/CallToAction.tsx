import React from 'react';
import { Button } from '../ui/Button';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-aqua mb-6">
          Shape the Future of Ocean Conservation
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Join us in revolutionizing how we protect our marine environments. Experience firsthand how BlueSentry AI can transform your environmental protection capabilities.
        </p>
        <Button className="mx-auto">Request Live Demo</Button>
      </div>
    </section>
  );
}