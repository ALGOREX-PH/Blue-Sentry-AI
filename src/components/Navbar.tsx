import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-aqua' : 'text-white hover:text-blue-300';
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-deep-900/95 backdrop-blur-sm text-white py-4 fixed w-full top-0 z-50 border-b border-aqua/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-aqua" />
          <span className="text-xl font-bold">Blue Sentry AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/mission" className={isActive('/mission')}>Mission</Link>
          <Link to="/solution" className={isActive('/solution')}>Solution</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/impact" className={isActive('/impact')}>Impact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-aqua"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-deep-900/95 backdrop-blur-sm md:hidden border-b border-aqua/10">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => handleNavigation('/')} className={`text-left ${isActive('/')}`}>Home</button>
              <button onClick={() => handleNavigation('/mission')} className={`text-left ${isActive('/mission')}`}>Mission</button>
              <button onClick={() => handleNavigation('/solution')} className={`text-left ${isActive('/solution')}`}>Solution</button>
              <button onClick={() => handleNavigation('/services')} className={`text-left ${isActive('/services')}`}>Services</button>
              <button onClick={() => handleNavigation('/impact')} className={`text-left ${isActive('/impact')}`}>Impact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}