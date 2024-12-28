import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function SarCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Empower Your Ocean Surveillance Capabilities
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Discover how Blue Sentry AI can help protect our oceans and enhance maritime security today.
          </p>
          <Button className="mx-auto">Get Started Now</Button>
        </Card>
      </div>
    </section>
  );
}