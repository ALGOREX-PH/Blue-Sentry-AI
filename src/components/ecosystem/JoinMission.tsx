import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function JoinMission() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Be part of the solution in protecting our marine ecosystems for future generations.
          </p>
          <Button className="mx-auto">Get Started</Button>
        </Card>
      </div>
    </section>
  );
}