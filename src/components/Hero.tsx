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
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="arch-shape w-full max-w-xl aspect-3/4 relative shadow-2xl">
              <Image
                src="/images/hero-calm.jpg"
                alt="Peaceful therapy environment with natural light"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center">
            <h1 id="hero-heading" className="text-text-primary mb-8">
              Santa Monica Psychologist for Anxiety, Trauma & Burnout
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I offer a calm, collaborative space for adults in Santa Monica to
              work through anxiety, trauma, and burnout, and begin feeling more
              grounded of themselves again.
            </p>
            <div>
              <Button
                href="#contact"
                variant="outline"
                ariaLabel="Schedule a consultation with Dr. Maya Reynolds"
              >
                SCHEDULE A CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
