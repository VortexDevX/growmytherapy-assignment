import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section
      id="about"
      className="section bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - slightly narrower for balance */}
          <div className="max-w-lg">
            <h2 id="about-heading" className="text-text-primary mb-8">
              Hi, I&apos;m Dr. Maya
            </h2>
            <p className="text-lg text-text-secondary mb-5 leading-relaxed">
              I&apos;m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults overwhelmed by anxiety,
              stress, or past experiences.
            </p>
            <p className="text-lg text-text-secondary mb-5 leading-relaxed">
              I take a warm, collaborative approach to therapy, integrating CBT,
              EMDR, and mindfulness-based practices. Sessions are structured yet
              leave space for reflection and depth.
            </p>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              My goal is not just symptom relief, but helping you develop
              insight, resilience, and a stronger relationship with yourself.
            </p>
            <Button
              href="#contact"
              variant="outline"
              ariaLabel="Work with Dr. Maya Reynolds"
            >
              Work With Me
            </Button>
          </div>

          {/* Image - Slightly larger for balance */}
          <div className="flex justify-center lg:justify-end">
            <div className="arch-shape w-full max-w-lg aspect-[3/4] relative shadow-xl">
              <Image
                src="/images/dr-maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
