import React from 'react';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { Crisis } from '../components/Crisis';
import { Solution } from '../components/Solution';
import { Services } from '../components/Services';
import { Vision } from '../components/Vision';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Mission />
        <Crisis />
        <Solution />
        <Services />
        <Vision />
        <Features />
      </main>
      <Footer />
    </>
  );
}