import React from 'react';
import { Sunrise, ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export function Vision() {
  return (
    <Section className="bg-gradient-to-b from-deep-900 to-purple/20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-aqua mb-4 text-glow">
              Our Vision
            </h2>
            <p className="text-xl text-blue-200">
              Shaping the future of ocean protection through innovation
            </p>
          </div>
          
          <Card className="relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-shine opacity-20"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 p-4 rounded-full bg-purple/20 border border-purple/30">
                  <Sunrise className="w-full h-full text-aqua" />
                </div>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                  We dream of a world where cutting-edge technology restores our oceans to their 
                  pristine beauty, empowering communities and businesses to thrive without fear of 
                  environmental disasters.
                </p>
              </div>
              
              <div className="relative h-64 rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1497290756760-23ac55edf36f?auto=format&fit=crop&w=1920&q=80"
                  alt="Ocean sunrise"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple/50 to-transparent" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Button className="w-full md:w-auto">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="secondary" className="w-full md:w-auto">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:bg-purple/10">
              <h3 className="text-lg font-semibold mb-3 text-aqua">Innovation</h3>
              <p className="text-blue-200">Pioneering AI technology for ocean protection</p>
            </Card>
            <Card className="text-center hover:bg-purple/10">
              <h3 className="text-lg font-semibold mb-3 text-aqua">Sustainability</h3>
              <p className="text-blue-200">Creating lasting positive impact on marine ecosystems</p>
            </Card>
            <Card className="text-center hover:bg-purple/10">
              <h3 className="text-lg font-semibold mb-3 text-aqua">Community</h3>
              <p className="text-blue-200">Empowering global collaboration for ocean conservation</p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}