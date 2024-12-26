import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function BiodiversityCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Stand with Blue Sentry AI
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join our mission to protect biodiversity and ensure the survival of our oceans.
          </p>
          <Button className="mx-auto">Join Our Mission</Button>
        </Card>
      </div>
    </section>
  );
}