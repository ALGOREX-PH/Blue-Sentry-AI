import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ServicesCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Ready to Protect Our Oceans?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Contact us to begin your journey toward a healthier, more sustainable ocean ecosystem.
          </p>
          <Button className="mx-auto">Contact Us</Button>
        </Card>
      </div>
    </section>
  );
}