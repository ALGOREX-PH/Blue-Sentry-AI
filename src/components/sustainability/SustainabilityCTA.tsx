import React from 'react';
import { Button } from '../ui/Button';

export function SustainabilityCTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join Us in Safeguarding the Future
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Together, we can protect our oceans and create a sustainable future for generations to come
        </p>
        <Button>Contact Us Today</Button>
      </div>
    </section>
  );
}