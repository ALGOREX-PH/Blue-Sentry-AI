import React from 'react';
import { Button } from '../ui/Button';

export function TransparencyCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Transparency isn't just a value—it's the key to stronger partnerships
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join us in building a future where trust and transparency drive effective ocean protection.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Learn More</Button>
          <Button variant="secondary">View Our Reports</Button>
        </div>
      </div>
    </section>
  );
}