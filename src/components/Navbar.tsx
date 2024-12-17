import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-aqua' : 'text-white hover:text-blue-300';
  };

  return (
    <nav className="bg-deep-900/95 backdrop-blur-sm text-white py-4 fixed w-full top-0 z-50 border-b border-aqua/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-aqua" />
          <span className="text-xl font-bold">Blue Sentry AI</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/mission" className={isActive('/mission')}>Mission</Link>
          <a href="#solution" className="hover:text-blue-300 transition-colors">Solution</a>
          <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
          <a href="#impact" className="hover:text-blue-300 transition-colors">Impact</a>
        </div>
      </div>
    </nav>
  );
}