import React from 'react';
import { Button } from '../ui/Button';

export function PartnershipCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Your Partnership is Key to Ocean Protection
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          The future of marine conservation depends on collective action. Your organization has the power to drive that change.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Contact Our Partnership Team</Button>
          <Button variant="secondary">Download Partnership Guide</Button>
        </div>
      </div>
    </section>
  );
}