import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Introduction() {
  return (
    <section
      className="section bg-background-alt"
      aria-labelledby="intro-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 id="intro-heading" className="text-text-primary mb-8">
              Find relief from anxiety and overwhelm
            </h2>
            <p className="text-text-secondary mb-6">
              Many of the people I work with are high-achieving, thoughtful, and
              self-aware—but internally feel exhausted, stuck in overthinking,
              or emotionally on edge. They appear "functional" on the outside
              while quietly struggling with constant worry, tension in their
              body, or difficulty sleeping.
            </p>
            <p className="text-text-secondary mb-10">
              If this sounds familiar, you're not alone. Therapy can help you
              understand what's happening beneath the surface and develop
              practical tools to feel more grounded in your daily life.
            </p>
            <Button
              href="#contact"
              variant="outline"
              ariaLabel="Get in touch to learn more about therapy services"
            >
              Get In Touch
            </Button>
          </div>

          {/* Image - Large rounded shape like Lilac */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/3] relative rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/images/calm-workspace.jpg"
                alt="A calm, organized workspace with natural elements"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
