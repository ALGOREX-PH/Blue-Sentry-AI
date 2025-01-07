import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass-card p-6 rounded-lg relative group hover:shadow-glow transition-all duration-300 ${className}`}>
      <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-radial from-aqua/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
      {children}
      </div>
    </div>
  );
}