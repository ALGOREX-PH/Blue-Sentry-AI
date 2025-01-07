import React from 'react';
import { Button } from '../ui/Button';

export function EducationCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join our educational initiatives and become a force for ocean conservation
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Whether you're a student, professional, or community leader, there's a place for you in our mission to protect the oceans through education and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Get Involved</Button>
          <Button variant="secondary">Partner with Us</Button>
        </div>
      </div>
    </section>
  );
}