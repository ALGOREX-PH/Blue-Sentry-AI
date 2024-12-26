import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function EnvironmentalCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Protect Our Oceans Today
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join us in safeguarding marine ecosystems through advanced technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Contact Sales</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}