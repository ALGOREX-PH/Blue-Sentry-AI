import React from 'react';
import { Card } from '../ui/Card';

export function RealWorldCase() {
  return (
    <section className="py-20 bg-deep-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Real-World Impact
            </h2>
            <p className="text-blue-100 mb-8">
              During a critical incident in the Arctic Circle, our predictive tools enabled response teams to protect vital ecosystems and minimize economic damage.
            </p>
            <Card className="bg-white/10 border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">30%</div>
                  <p className="text-blue-100">Coastline Protected</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">$2.5M</div>
                  <p className="text-blue-100">Cost Savings</p>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?auto=format&fit=crop&w=1920&q=80"
              alt="Arctic case study"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}