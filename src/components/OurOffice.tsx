import React from "react";
import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="section bg-secondary" aria-labelledby="office-heading">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="office-heading" className="text-text-primary mb-4">
            A Calm Space for Healing
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            My Santa Monica office is designed to feel calm and grounding, with
            natural light and a comfortable, uncluttered environment. Clients
            often share that the space itself helps them feel more at ease when
            they arrive.
          </p>
        </div>

        {/* Office Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/office1.jpeg"
              alt="Therapy office with comfortable seating and natural light in Santa Monica"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              alt="Welcoming therapy space with calming decor and private atmosphere"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-text-primary mb-2">
              Santa Monica, CA
            </h3>
            <p className="text-text-secondary text-sm">
              Conveniently located in Santa Monica with easy access and parking
              available.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-text-primary mb-2">
              Privacy & Comfort
            </h3>
            <p className="text-text-secondary text-sm">
              A quiet, private space where you can feel safe to explore and
              reflect.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-text-primary mb-2">
              In-Person & Telehealth
            </h3>
            <p className="text-text-secondary text-sm">
              Choose between in-person sessions or secure video therapy from
              anywhere in California.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
