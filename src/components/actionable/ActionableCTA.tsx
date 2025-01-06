import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ActionableCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Empower your operations with real-time insights
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Protect marine ecosystems and drive smarter, faster spill response
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button>Request Demo</Button>
            <Button variant="secondary">Download Case Study</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}