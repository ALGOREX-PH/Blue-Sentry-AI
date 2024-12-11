import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2';
  const variants = {
    primary: 'btn-primary text-aqua hover:text-white',
    secondary: 'bg-surface-800 text-aqua hover:bg-surface-700',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}