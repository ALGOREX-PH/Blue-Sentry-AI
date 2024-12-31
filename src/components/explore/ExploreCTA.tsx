import React from 'react';
import { Button } from '../ui/Button';

export function ExploreCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-aqua mb-6">
          Ready to Experience the Power of AI?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Upload Image</Button>
          <Button variant="secondary">Request Demo</Button>
        </div>
      </div>
    </section>
  );
}