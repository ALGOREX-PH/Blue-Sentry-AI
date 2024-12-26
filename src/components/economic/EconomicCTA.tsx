import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function EconomicCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Protect Your Coastal Economy
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join the growing network of coastal communities protected by Blue Sentry AI's advanced detection system.
          </p>
          <Button className="mx-auto">Get Started Today</Button>
        </Card>
      </div>
    </section>
  );
}