import React from 'react';
import { Droplet, BarChart2, Settings, FileText } from 'lucide-react';
import { ServiceCard } from './ServiceCard';



export function CoreServices() {
  const services = [
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Real-Time Oil Spill Detection",
      description: "State-of-the-art AI-driven models continuously scan satellite and aerial imagery to detect oil spills as they emerge.",
      link : "/real-time-detection"
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Impact Assessment Tools",
      description: "Comprehensive analytics for understanding environmental impact and planning mitigation strategies.", 
      link : "/impact-assessment"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Customized Monitoring",
      description: "Bespoke monitoring platforms tailored to your specific operational needs.",
      link : "/actionable-insights"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Sustainability Reporting",
      description: "Automated documentation and reporting for environmental compliance.",
      link : "/sustainability"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-aqua mb-12">Core Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}