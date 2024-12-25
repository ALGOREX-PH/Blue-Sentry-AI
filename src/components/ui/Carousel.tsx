import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlayInterval?: number;
}

export function Carousel({ 
  children, 
  autoPlayInterval = 5000
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % children.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + children.length) % children.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      next();
    }
    if (touchStart - touchEnd < -75) {
      prev();
    }
  };

  useEffect(() => {
    const interval = setInterval(next, autoPlayInterval);
    if (isHovered) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [autoPlayInterval, isHovered]);

  return (
    <div 
      className="relative px-4 md:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-deep-900/80 text-aqua hover:bg-deep-900 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-aqua/20 hover:border-aqua/50"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-deep-900/80 text-aqua hover:bg-deep-900 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-aqua/20 hover:border-aqua/50"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-aqua scale-125' 
                : 'bg-deep-900/50 hover:bg-aqua/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}