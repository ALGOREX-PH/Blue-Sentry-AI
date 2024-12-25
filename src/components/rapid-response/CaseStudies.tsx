import React from 'react';
import { Card } from '../ui/Card';

interface CaseStudyProps {
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  imageUrl: string;
}

function CaseStudy({ title, description, metrics, imageUrl }: CaseStudyProps) {
  return (
    <Card className="overflow-hidden">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-100 mb-3">{title}</h3>
        <p className="text-blue-200 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-aqua mb-1">{metric.value}</div>
              <div className="text-sm text-blue-200">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function CaseStudies() {
  const studies = [
    {
      title: "Gulf Coast Protection",
      description: "Rapid response prevented major ecosystem damage in sensitive coastal area",
      metrics: [
        { label: "Detection Time", value: "15min" },
        { label: "Area Protected", value: "50km²" },
        { label: "Cost Saved", value: "$2.5M" },
        { label: "Species Saved", value: "1000+" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mediterranean Success",
      description: "Early detection enabled swift containment of potential disaster",
      metrics: [
        { label: "Detection Time", value: "20min" },
        { label: "Area Protected", value: "35km²" },
        { label: "Cost Saved", value: "$1.8M" },
        { label: "Species Saved", value: "800+" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {studies.map((study, index) => (
              <CaseStudy key={index} {...study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}