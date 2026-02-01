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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-4/3 relative rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/images/calm-workspace.jpg"
                alt="A calm, organized workspace with natural elements"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-2 lg:order-1 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <h2 id="intro-heading" className="text-text-primary mb-8">
              Find relief from anxiety and overwhelm
            </h2>
            <p className="text-text-secondary mb-10 leading-relaxed">
              Many of the people I work with are high-achieving and
              self-aware—but internally feel exhausted, stuck in overthinking,
              or emotionally on edge. If this sounds familiar, you&apos;re not
              alone. Therapy can help you understand what&apos;s happening and
              develop practical tools to feel more grounded.
            </p>
            <Button
              href="#contact"
              variant="outline"
              ariaLabel="Get in touch to learn more about therapy services"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
