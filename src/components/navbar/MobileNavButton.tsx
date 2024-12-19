import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileNavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileNavButton({ isOpen, onClick }: MobileNavButtonProps) {
  return (
    <button 
      className="md:hidden relative group p-2 rounded-lg border border-transparent 
                 hover:border-aqua/20 transition-colors duration-200"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="text-aqua transition-transform duration-200 group-hover:scale-110">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </div>
    </button>
  );
}