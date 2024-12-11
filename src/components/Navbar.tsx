import React from 'react';
import { Waves, Shield } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">Blue Sentry AI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#mission" className="hover:text-blue-300 transition-colors">Mission</a>
          <a href="#solution" className="hover:text-blue-300 transition-colors">Solution</a>
          <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
          <a href="#impact" className="hover:text-blue-300 transition-colors">Impact</a>
        </div>
      </div>
    </nav>
  );
}