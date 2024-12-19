import React from 'react';
import { Satellite, Brain, Activity, Bell } from 'lucide-react';
import { Card } from '../ui/Card';

export function Approach() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Our Revolutionary Approach</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <Card>
            <Satellite className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Sentinel-1 Integration</h3>
            <p className="text-blue-200">High-resolution radar imagery with day/night operation</p>
          </Card>
          
          <Card>
            <Brain className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">AI/ML Models</h3>
            <p className="text-blue-200">Proprietary algorithms with 98% detection accuracy</p>
          </Card>
          
          <Card>
            <Activity className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Real-Time Analytics</h3>
            <p className="text-blue-200">30-minute processing time with predictive insights</p>
          </Card>
          
          <Card>
            <Bell className="w-12 h-12 text-aqua mb-4" />
            <h3 className="text-xl font-semibold text-blue-100 mb-2">Automated Alerts</h3>
            <p className="text-blue-200">Instant stakeholder notification system</p>
          </Card>
        </div>
      </div>
    </section>
  );
}