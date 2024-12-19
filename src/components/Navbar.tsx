import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './navbar/Logo';
import { NavLink } from './navbar/NavLink';
import { MobileNav } from './navbar/MobileNav';
import { MobileNavButton } from './navbar/MobileNavButton';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed w-full top-0 z-50 transition-all duration-300
      ${isScrolled ? 'py-2 bg-deep-900/95 shadow-lg backdrop-blur-sm' : 'py-4 bg-transparent'}
      ${isScrolled ? 'border-b border-aqua/10' : ''}
    `}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/mission" isActive={isActive('/mission')}>Mission</NavLink>
          <NavLink to="/solution" isActive={isActive('/solution')}>Solution</NavLink>
          <NavLink to="/services" isActive={isActive('/services')}>Services</NavLink>
          <NavLink to="/impact" isActive={isActive('/impact')}>Impact</NavLink>
        </div>

        <MobileNavButton 
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <MobileNav 
          isOpen={isMenuOpen}
          onNavigate={handleNavigation}
          isActive={isActive}
        />
      </div>
    </nav>
  );
}