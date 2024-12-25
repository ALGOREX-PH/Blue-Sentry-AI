import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function TechCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Explore the technology driving ocean conservation.
          </p>
          <Button className="mx-auto">Discover More</Button>
        </Card>
      </div>
    </section>
  );
}