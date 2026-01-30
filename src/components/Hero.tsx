import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-secondary flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Arch Shape */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="arch-shape w-full max-w-md aspect-[3/4] relative">
              <Image
                src="/images/hero-calm.jpg"
                alt="Peaceful therapy environment with natural light"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 id="hero-heading" className="text-text-primary mb-6">
              Santa Monica Psychologist for Anxiety, Trauma & Burnout
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
              You may look like you&apos;re managing on the outside, but inside
              feel exhausted, anxious, or constantly on edge. I offer a calm,
              collaborative space for adults in Santa Monica to work through
              anxiety, trauma, and burnout and begin feeling more grounded,
              clear, and connected to themselves again.
            </p>
            <Button
              href="#contact"
              variant="outline"
              ariaLabel="Schedule a consultation with Dr. Maya Reynolds"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
