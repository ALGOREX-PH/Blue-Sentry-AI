import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
  isActive: (path: string) => boolean;
}

export function MobileNav({ isOpen, onNavigate, isActive }: MobileNavProps) {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/mission', label: 'Mission' },
    { path: '/solution', label: 'Solution' },
    { path: '/services', label: 'Services' },
    { path: '/impact', label: 'Impact' },
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-deep-900/95 backdrop-blur-sm 
                    md:hidden border-b border-aqua/10 animate-fadeIn">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
        {navItems.map(({ path, label }) => (
          <button
            key={path}
            onClick={() => onNavigate(path)}
            className={`
              text-left px-4 py-3 rounded-lg transition-colors duration-200
              ${isActive(path) ? 'bg-aqua/10 text-aqua' : 'text-white hover:bg-aqua/5 hover:text-blue-300'}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}