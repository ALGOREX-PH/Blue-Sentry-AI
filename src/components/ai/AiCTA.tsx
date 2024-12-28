import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function AiCTA() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl font-bold text-aqua mb-6">
            Protect Our Oceans with AI
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Be Part of the Solution – Unlock the power of AI-driven marine conservation and redefine the way your organization safeguards the environment.
          </p>
          <Button className="mx-auto">Contact Us Today</Button>
        </Card>
      </div>
    </section>
  );
}