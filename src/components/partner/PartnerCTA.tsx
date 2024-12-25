import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function PartnerCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Be Part of the Change – The Oceans Need You
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            The path to sustainable oceans begins with bold action. Partner with Blue Sentry AI today and let's drive meaningful change together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Contact Us</Button>
            <Button variant="secondary">Schedule Consultation</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}