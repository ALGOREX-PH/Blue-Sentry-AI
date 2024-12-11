import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Crisis } from './components/Crisis';
import { Solution } from './components/Solution';
import { Services } from './components/Services';
import { Vision } from './components/Vision';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-900">
      <div className="fixed inset-0 bg-gradient-radial -z-10" />
      <Navbar />
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
    </div>
  );
}

export default App;