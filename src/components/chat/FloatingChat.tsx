import React, { useState } from 'react';
import { MessageCircle, Waves, Shield, Satellite } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { Button } from '../ui/Button';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="absolute bottom-0 right-0 w-96 rounded-lg shadow-2xl animate-in slide-in-from-bottom-5">
          <ChatWindow onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <div className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-16 h-16 p-0 shadow-glow bg-gradient-to-r from-marine to-purple hover:scale-110 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-aqua" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full animate-spin-slow opacity-20">
                  <Waves className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 text-aqua" />
                  <Shield className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 text-aqua" />
                  <Satellite className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-aqua" />
                </div>
              </div>
            </div>
          </Button>
          
          {isHovered && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-deep-900/95 text-aqua px-4 py-2 rounded-lg text-sm border border-aqua/20 backdrop-blur-sm animate-fade-in">
              Chat with Blue Sentry AI
            </div>
          )}
        </div>
      )}
    </div>
  );
}