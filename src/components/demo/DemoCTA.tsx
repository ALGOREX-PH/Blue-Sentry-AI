import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function DemoCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Join Us in Protecting the Oceans
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Ready to see how Blue Sentry AI can transform your ocean conservation efforts?
          </p>
          <Button className="mx-auto">Request Demo</Button>
        </Card>
      </div>
    </section>
  );
}