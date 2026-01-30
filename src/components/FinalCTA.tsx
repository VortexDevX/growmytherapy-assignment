import React from "react";
import Button from "./Button";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="section bg-dark-bg"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto text-center">
        <h2 id="cta-heading" className="text-dark-text mb-6">
          Take the first step today
        </h2>
        <p className="text-dark-text/80 max-w-2xl mx-auto mb-8 text-lg">
          Ready to begin your journey toward feeling more calm, grounded, and
          connected? I offer a free initial consultation to discuss your needs
          and see if we&apos;re a good fit.
        </p>
        <Button
          href="mailto:contact@drmayareynolds.com"
          variant="outline-light"
          ariaLabel="Get in touch with Dr. Maya Reynolds"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
