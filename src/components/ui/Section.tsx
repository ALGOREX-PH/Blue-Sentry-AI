import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      {children}
    </section>
  );
}