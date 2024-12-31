import React from 'react';
import { Footer } from '../Footer';
import { FloatingChat } from '../chat/FloatingChat';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-deep-900">
      <div className="fixed inset-0 bg-gradient-radial from-ocean-800/20 via-deep-900/50 to-deep-900 -z-10" />
      <main>{children}</main>
      <Footer />
      <FloatingChat />
    </div>
  );
}