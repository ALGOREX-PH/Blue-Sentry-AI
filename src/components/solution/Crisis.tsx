import React from 'react';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';
import { Card } from '../ui/Card';

export function Crisis() {
  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">The Environmental Crisis We Address</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="prose prose-invert">
            <p className="text-blue-200 leading-relaxed">
              The world's oceans are under constant threat from oil spills—sudden events that unleash toxic substances into marine ecosystems. These spills contaminate critical breeding grounds, poison fish and marine mammals, suffocate coral reefs, and disrupt entire food chains.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-100">Response Delays</h3>
                <p className="text-blue-200">24-72 hours response delay</p>
              </div>
            </Card>
            
            <Card className="flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-100">Economic Impact</h3>
                <p className="text-blue-200">$20B annual economic impact</p>
              </div>
            </Card>
            
            <Card className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-100">Human Error</h3>
                <p className="text-blue-200">Inconsistent manual oversight</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}