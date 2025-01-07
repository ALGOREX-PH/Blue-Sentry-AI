import React from 'react';
import { Button } from '../ui/Button';

export function InnovationCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Be Part of the Innovation Wave
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join us in shaping the future of marine conservation through groundbreaking technology
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Partner With Us</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}