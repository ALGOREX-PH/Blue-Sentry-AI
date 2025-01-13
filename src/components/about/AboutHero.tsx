import React from 'react';

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-900 via-marine to-deep-900 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-aqua/20 shadow-glow relative group">
            <img
              src="https://raw.githubusercontent.com/ALGOREX-PH/Blue-Sentry-AI/refs/heads/main/src/components/about/Meer.jpg"
              alt="Danielle Bagaforo Meer"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-radial from-aqua/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-aqua mb-4 text-glow">
            Danielle Bagaforo Meer
          </h1>
          <p className="text-xl text-blue-200 mb-4">
            CEO, Blue Sentry AI
          </p>
          <p className="text-lg text-blue-200/80">
            Protector of the Seas through AI Innovation
          </p>
        </div>
      </div>
    </section>
  );
}