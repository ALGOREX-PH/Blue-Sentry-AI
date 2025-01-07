import React from 'react';
import { Building2, GraduationCap } from 'lucide-react';
import { Card } from '../ui/Card';

export function IndustryEducation() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Industry-Focused Education
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <Building2 className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-4">
                Corporate Workshops
              </h3>
              <div className="space-y-4">
                <p className="text-blue-200">
                  Comprehensive training programs for maritime industry professionals
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-blue-200">
                    <span className="text-aqua">•</span>
                    Best practices for spill mitigation
                  </li>
                  <li className="flex items-start gap-2 text-blue-200">
                    <span className="text-aqua">•</span>
                    Early AI adoption strategies
                  </li>
                  <li className="flex items-start gap-2 text-blue-200">
                    <span className="text-aqua">•</span>
                    Environmental compliance training
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <GraduationCap className="w-12 h-12 text-aqua mb-4" />
              <h3 className="text-xl font-semibold text-blue-100 mb-4">
                Academic Partnerships
              </h3>
              <div className="space-y-4">
                <p className="text-blue-200">
                  Collaborations with universities to advance marine conservation
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-blue-200">
                    <span className="text-aqua">•</span>
                    Joint research programs
                  </li>
                  <li className="flex items-start gap-2 text-blue-200">
                    <span className="text-aqua">•</span>
                    Student mentorship
                  </li>
                  <li className="flex items-start gap-2 text-blue-200">
                    <span className="text-aqua">•</span>
                    Innovation workshops
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}