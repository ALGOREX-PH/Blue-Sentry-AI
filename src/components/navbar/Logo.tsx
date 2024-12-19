import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 group relative"
    >
      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-aqua transition-all duration-300 group-hover:scale-110" />
      <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-aqua via-blue-400 to-purple bg-clip-text text-transparent">
        Blue Sentry AI
      </span>
    </Link>
  );
}