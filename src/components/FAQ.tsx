"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-border-light">
      <button
        className="w-full py-5 flex items-center justify-between text-left cursor-pointer hover:bg-secondary/50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-text-primary font-medium pr-4">{question}</span>
        <span
          className={`text-primary transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What can I expect in our first session?",
    answer:
      "Our first session is an opportunity for us to get to know each other. I'll ask about what brings you to therapy, your background, and what you're hoping to work on. It's also a chance for you to ask questions and see if we feel like a good fit. There's no pressure. The first session is about understanding your needs and goals.",
  },
  {
    question: "Do you offer telehealth sessions?",
    answer:
      "Yes, I offer secure telehealth sessions for clients located anywhere in California. Many clients find video sessions to be just as effective as in-person meetings, with the added convenience of being able to attend from home or work.",
  },
  {
    question: "What are your rates?",
    answer:
      "I'm happy to discuss rates during our initial consultation. I believe in transparency about costs and can also discuss options if finances are a concern. Some clients choose to use out-of-network insurance benefits, and I can provide documentation for reimbursement.",
  },
  {
    question: "How long does therapy typically take?",
    answer:
      "The duration of therapy varies based on individual needs and goals. Some clients find relief within a few months, while others benefit from longer-term work. We'll regularly check in about your progress and adjust our approach as needed. My goal is to help you develop lasting skills, not to keep you in therapy indefinitely.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section bg-secondary py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="circle-image w-72 h-72 md:w-96 md:h-96 relative shadow-lg">
              <Image
                src="/images/faq-calm.jpg"
                alt="Peaceful natural setting representing calm and reflection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>

          <div>
            <h2 id="faq-heading" className="text-text-primary mb-8">
              FAQs
            </h2>
            <div>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
