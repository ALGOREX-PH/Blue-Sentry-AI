import React from 'react';
import { Button } from '../ui/Button';

export function JoinMission() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Shaping a Sustainable Future
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Together, we can protect our oceans and preserve marine ecosystems for generations to come.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Get Involved</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}