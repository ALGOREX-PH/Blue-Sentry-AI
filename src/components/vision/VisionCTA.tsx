import React from 'react';
import { Button } from '../ui/Button';

export function VisionCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Shape the Future With Us
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Partner with Blue Sentry AI to pioneer a new era of ocean conservation. Together, we can restore balance to the seas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Become a Partner</Button>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}