import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-12 px-6 border-t border-border-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg text-text-primary mb-4">
              Dr. Maya Reynolds, PsyD
            </h3>
            <address className="not-italic text-text-secondary text-sm space-y-2">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="pt-2">
                <a
                  href="mailto:contact@drmayareynolds.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@drmayareynolds.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+13105551234"
                  className="hover:text-primary transition-colors"
                >
                  (310) 555-1234
                </a>
              </p>
            </address>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="font-serif text-lg text-text-primary mb-4">
              Office Hours
            </h3>
            <div className="text-text-secondary text-sm space-y-2">
              <p>Monday – Friday</p>
              <p>9:00 AM – 6:00 PM</p>
              <p className="pt-2 text-text-light">
                Telehealth available for California residents
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-text-primary mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="text-text-secondary text-sm space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border-light text-center">
          <p className="text-text-light text-sm">
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights
            reserved.
          </p>
          <p className="text-text-light text-xs mt-2">
            Licensed Clinical Psychologist in California
          </p>
        </div>
      </div>
    </footer>
  );
}
