import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-radial opacity-5" />
      <div className="relative z-10">
      {children}
      </div>
    </section>
  );
}