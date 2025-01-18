import React from 'react';
import { Card } from '../ui/Card';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <Link to = {link}>
    <Card className="hover:bg-surface-800 transition-all duration-300">
      <div className="text-aqua mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-100 mb-2">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </Card>
    </Link>
  );
}