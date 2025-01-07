import React from 'react';
import { Button } from '../ui/Button';
import { Mail, Linkedin, Github, Facebook } from 'lucide-react';

export function AboutCTA() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Connect with Danielle to explore collaboration opportunities and join the mission to protect our oceans.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="min-w-[160px] hover:scale-105 transition-transform">
            <Mail className="w-5 h-5 mr-2" />
            Email
          </Button>
          <Button variant="secondary" className="min-w-[160px] hover:scale-105 transition-transform">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button variant="secondary" className="min-w-[160px] hover:scale-105 transition-transform">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="secondary" className="min-w-[160px] hover:scale-105 transition-transform">
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </Button>
        </div>
        <div className="mt-12 text-blue-200/60">
          Available for speaking engagements and consultations
        </div>
      </div>
    </section>
  );
}