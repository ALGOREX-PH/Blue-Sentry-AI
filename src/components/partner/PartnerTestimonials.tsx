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
    <Card className="mx-auto max-w-2xl p-4 md:p-8">
      <div className="mb-6">
        <p className="text-blue-200 text-lg md:text-xl leading-relaxed">{quote}</p>
      </div>
      <div>
        <p className="font-semibold text-blue-100 text-base md:text-lg mb-1">{author}</p>
        <p className="text-sm text-blue-200">{role}</p>
        <p className="text-sm text-blue-200">{organization}</p>
      </div>
    </Card>
  );
}

export function PartnerTestimonials() {
  const testimonials = [
    {
      quote: "Blue Sentry AI has transformed our ability to protect marine ecosystems with real-time monitoring.",
      author: "Dr. Sarah Chen",
      role: "Director of Marine Conservation",
      organization: "Ocean Research Institute"
    },
    {
      quote: "The partnership has enabled us to reduce response times by 60% and prevent countless environmental incidents.",
      author: "James Wilson",
      role: "Head of Maritime Operations",
      organization: "Global Shipping Alliance"
    },
    {
      quote: "Their AI technology has revolutionized how we approach ocean conservation and research.",
      author: "Dr. Michael Rodriguez",
      role: "Lead Researcher",
      organization: "Marine Science Agency"
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
          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}