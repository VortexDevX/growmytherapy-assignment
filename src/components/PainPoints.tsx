import React from "react";
import Image from "next/image";

const painPoints = [
  "Constant worry or overthinking that you can't seem to turn off",
  "Tension in your body that won't go away",
  "Difficulty sleeping or feeling truly rested",
  "Feeling emotionally on edge or easily overwhelmed",
  "A sense that you're always bracing for something to go wrong",
  "Past experiences affecting your relationships or confidence",
  'Feeling "functional" but quietly struggling inside',
];

export default function PainPoints() {
  return (
    <section
      className="section bg-secondary"
      aria-labelledby="painpoints-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md aspect-[3/4] relative rounded-lg overflow-hidden">
              <Image
                src="/images/hope-nature.jpg"
                alt="Person looking up towards the sky, representing hope and possibility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 id="painpoints-heading" className="text-text-primary mb-6">
              You don&apos;t have to carry this alone
            </h2>
            <p className="text-text-secondary mb-6 text-lg">
              If you&apos;re experiencing any of these, there&apos;s hope:
            </p>
            <ul className="space-y-4" role="list">
              {painPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span
                    className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
