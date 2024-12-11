import React from 'react';
import { Search, Play, Handshake } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Counter } from './Counter';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-shine mix-blend-overlay"></div>
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-6 text-glow">
            Empowering Humanity to Protect Our Oceans
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            Advanced AI-powered solutions for real-time oil spill detection and marine ecosystem protection
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
            <Button>
              <Search className="w-5 h-5" />
              Explore Our Technology
            </Button>
            <Button variant="secondary">
              <Play className="w-5 h-5" />
              See It in Action
            </Button>
            <Button variant="secondary">
              <Handshake className="w-5 h-5" />
              Partner with Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Counter 
              value={1234}
              label="Oil Spills Detected"
              description="Oil spills detected since 2023"
            />
            <Counter 
              value={5678900}
              label="Area Monitored"
              description="Square kilometers monitored daily"
            />
            <Counter 
              value={45}
              label="Response Time"
              description="Average response time reduced (in minutes)"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}