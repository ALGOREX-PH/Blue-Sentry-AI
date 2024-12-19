import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function NavLink({ to, isActive, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`
        relative px-3 py-2 transition-colors duration-200
        ${isActive ? 'text-aqua' : 'text-white hover:text-blue-300'}
        after:content-[''] after:absolute after:bottom-0 after:left-0 
        after:w-full after:h-0.5 after:bg-aqua
        after:transform after:scale-x-0 after:transition-transform
        after:duration-200 hover:after:scale-x-100
        ${isActive ? 'after:scale-x-100' : ''}
      `}
    >
      {children}
    </Link>
  );
}