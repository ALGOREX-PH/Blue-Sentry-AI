import React from 'react';
import { Card } from '../ui/Card';
import { Carousel } from '../ui/Carousel';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

function Testimonial({ quote, author, role, organization }: TestimonialProps) {
  return (
    <Card className="mx-auto max-w-2xl p-8">
      <div className="mb-6">
        <p className="text-blue-200 text-lg leading-relaxed italic">"{quote}"</p>
      </div>
      <div>
        <p className="font-semibold text-blue-100">{author}</p>
        <p className="text-sm text-blue-200">{role}</p>
        <p className="text-sm text-blue-200">{organization}</p>
      </div>
    </Card>
  );
}

export function PartnerTestimonials() {
  const testimonials = [
    {
      quote: "Blue Sentry AI's satellite oil spill detection model has transformed how we respond to maritime emergencies. The speed and accuracy of their technology have allowed us to intercept spills before they escalate.",
      author: "Dr. Sarah Chen",
      role: "Director of Maritime Authority",
      organization: "Southeast Asia"
    },
    {
      quote: "The partnership with Blue Sentry AI has provided invaluable insights into our marine protected areas. With their support, we can track ecosystem changes in real-time.",
      author: "James Wilson",
      role: "Executive Director",
      organization: "Global Marine Conservation NGO"
    },
    {
      quote: "Integrating Blue Sentry AI's monitoring tools into our offshore operations has set a new benchmark for environmental accountability.",
      author: "Maria Rodriguez",
      role: "Environmental Manager",
      organization: "International Energy Firm"
    }
  ];

  return (
    <section className="py-20 bg-deep-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-aqua mb-12 text-center">
            Partner Testimonials
          </h2>
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}