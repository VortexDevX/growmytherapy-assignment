import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-secondary flex items-center pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image - Large Arch Shape */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="arch-shape w-full max-w-lg aspect-[3/4] relative shadow-2xl">
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

          {/* Text Content - Better vertical centering */}
          <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center">
            <h1 id="hero-heading" className="text-text-primary mb-8">
              Santa Monica Psychologist for Anxiety, Trauma & Burnout
            </h1>
            {/* Narrower max-width for better readability */}
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              You may look like you&apos;re managing on the outside, but inside
              feel exhausted, anxious, or constantly on edge. I offer a calm,
              collaborative space for adults in Santa Monica to work through
              anxiety, trauma, and burnout and begin feeling more grounded,
              clear, and connected to themselves again.
            </p>
            <div>
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
      </div>
    </section>
  );
}
