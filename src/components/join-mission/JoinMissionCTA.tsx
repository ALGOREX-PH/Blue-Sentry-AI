import React from 'react';
import { Button } from '../ui/Button';

export function JoinMissionCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the Mission Today
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Together, we can safeguard the oceans and create a future where marine ecosystems thrive.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Partner with Us</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
}