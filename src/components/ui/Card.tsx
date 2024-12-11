import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass-card p-6 rounded-lg ${className}`}>
      {children}
    </div>
  );
}