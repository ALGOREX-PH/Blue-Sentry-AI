import React from 'react';
import { Button } from '../ui/Button';

export function DetectionCTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Be the first to know. Be the first to act.
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Protect oceans, reduce costs, and lead the way in environmental stewardship with Blue Sentry AI's real-time detection services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Schedule Demo</Button>
          <Button variant="secondary">Contact Specialist</Button>
        </div>
      </div>
    </section>
  );
}