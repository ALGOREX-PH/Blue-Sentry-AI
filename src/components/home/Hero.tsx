import React from 'react';
import { Search, Play, Handshake } from 'lucide-react';
import { Button } from '../ui/Button';
import { Counter } from '../Counter';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-shine mix-blend-overlay animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/90 via-marine/50 to-deep-900/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-aqua mb-8 text-glow relative">
            Empowering Humanity to Protect Our Oceans
            <div className="absolute -inset-1 bg-gradient-shine opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-16 leading-relaxed">
            Advanced AI-powered solutions for real-time oil spill detection and marine ecosystem protection
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
            <Link to= "/explore-technology">
            <Button className="group hover:scale-105 transition-transform">
              <Search className="w-5 h-5" />
              Explore Our Technology
            </Button>
            </Link>
            <Link to="/demo">
            <Button variant="secondary" className="group hover:scale-105 transition-transform">
              <Play className="w-5 h-5" />
              See It in Action
            </Button>
            </Link>
            <Link to="/partner">
            <Button variant="secondary" className="group hover:scale-105 transition-transform">
              <Handshake className="w-5 h-5" />
              Partner with Us
            </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-900 to-transparent"></div>
    </section>
  );
}