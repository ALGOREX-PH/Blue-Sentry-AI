import React from 'react';
import { Card } from '../ui/Card';

interface CaseStudyProps {
  title: string;
  challenge: string;
  solution: string;
  outcome: string[];
  imageUrl: string;
}

function CaseStudy({ title, challenge, solution, outcome, imageUrl }: CaseStudyProps) {
  return (
    <Card className="overflow-hidden">
      <div
        className="h-40 sm:h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-100">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-blue-300 mb-2">Challenge</h4>
            <p className="text-sm sm:text-base text-blue-200">{challenge}</p>
          </div>
          <div>
            <h4 className="font-medium text-blue-300 mb-2">Solution</h4>
            <p className="text-sm sm:text-base text-blue-200">{solution}</p>
          </div>
          <div>
            <h4 className="font-medium text-blue-300 mb-2">Outcome</h4>
            <ul className="list-disc list-inside text-sm sm:text-base text-blue-200">
              {outcome.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SuccessStories() {
  const caseStudies = [
    {
      title: "Southeast Asia Coral Reef Rescue",
      challenge: "An oil spill threatened a delicate coral reef ecosystem, home to over 3,500 marine species.",
      solution: "Blue Sentry AI detected the spill within 30 minutes, enabling rapid response.",
      outcome: [
        "95% of coral reef protected",
        "$1.2M in cleanup costs avoided",
        "500+ coastal families' livelihoods secured"
      ],
      imageUrl: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Gulf of Mexico Intervention",
      challenge: "A tanker leak caused a massive oil spill threatening migratory whale habitats.",
      solution: "Our AI platform enabled cleanup crews to respond 70% faster than industry standards.",
      outcome: [
        "Spill contained within 48 hours",
        "Protected whale migration routes",
        "Minimized impact on marine ecosystem"
      ],
      imageUrl: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-900 to-marine">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-aqua mb-8 sm:mb-12 text-center">Success Stories</h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}