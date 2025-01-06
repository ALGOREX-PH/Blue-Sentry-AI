import React from 'react';
import { Button } from '../ui/Button';

export function JoinMissionHero() {
  return (
    <section className="relative min-h-[60vh] pt-32 pb-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&w=1920&q=80"
          alt="Ocean waves"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Protecting Oceans Requires All of Us
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Join our mission to safeguard the blue heart of our planet through innovative AI technology and collective action.
          </p>
          <Button>Join the Mission</Button>
        </div>
      </div>
    </section>
  );
}