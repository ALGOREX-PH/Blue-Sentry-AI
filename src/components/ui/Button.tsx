import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  to?: string;
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick,
  to
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2';
  const variants = {
    primary: 'bg-gradient-to-r from-marine to-purple border border-aqua/20 hover:border-aqua hover:shadow-glow text-aqua hover:text-white',
    secondary: 'bg-surface-800 text-aqua hover:bg-surface-700 border border-aqua/10 hover:border-aqua/30',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}