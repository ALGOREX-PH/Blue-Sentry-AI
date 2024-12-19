import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ImpactCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-aqua mb-4 sm:mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8">
            Join Blue Sentry AI in protecting our oceans, marine life, and coastal communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto">Partner With Us</Button>
            <Button variant="secondary" className="w-full sm:w-auto">Request Demo</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}