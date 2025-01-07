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
    primary: 'bg-gradient-to-r from-marine to-purple border border-aqua/20 hover:border-aqua hover:shadow-glow text-aqua hover:text-white relative overflow-hidden group',
    secondary: 'bg-surface-800 text-aqua hover:bg-surface-700 border border-aqua/10 hover:border-aqua/30 relative overflow-hidden group',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-radial from-aqua/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={classes}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-radial from-aqua/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </button>
  );
}