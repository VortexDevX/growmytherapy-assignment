import React from "react";
import Button from "./Button";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="section bg-primary py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto text-center">
        <h2 id="cta-heading" className="mb-8" style={{ color: "#ffffff" }}>
          Take the first step today
        </h2>
        <p
          className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          Ready to begin your journey toward feeling more calm, grounded, and
          connected? I offer a free initial consultation to discuss your needs
          and see if we&apos;re a good fit.
        </p>
        <Button
          href="mailto:contact@drmayareynolds.com"
          variant="outline-light"
          ariaLabel="Get in touch with Dr. Maya Reynolds"
          className="px-10 py-4 text-base"
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
}
