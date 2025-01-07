import React from 'react';
import { Button } from '../ui/Button';

export function DemoCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Protect Our Oceans?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join the future of ocean conservation with Blue Sentry AI's intelligent technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Contact Us</Button>
          <Button variant="secondary">Request Demo</Button>
        </div>
      </div>
    </section>
  );
}