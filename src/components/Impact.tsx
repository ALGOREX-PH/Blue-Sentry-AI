import React from 'react';

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Impact Beyond Detection</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1464925257126-6450e871c667?auto=format&fit=crop&w=800&q=80"
              alt="Marine life"
              className="rounded-lg shadow-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Protecting Marine Biodiversity</h3>
            <p className="text-blue-100">
              Our solutions help preserve natural habitats and support the countless species that depend on healthy oceans for survival.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=800&q=80"
              alt="Coastal community"
              className="rounded-lg shadow-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Supporting Coastal Communities</h3>
            <p className="text-blue-100">
              By enabling rapid response to environmental threats, we help protect the livelihoods of communities that depend on clean oceans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}