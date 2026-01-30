import React from "react";
import SpecialtyCard from "./SpecialtyCard";

const specialties = [
  {
    title: "Anxiety Therapy in Santa Monica",
    description:
      "Anxiety therapy in Santa Monica for adults who feel stuck in overthinking, chronic worry, or constant tension and want to feel calmer, more grounded, and in control again.",
    imageSrc: "/images/specialty-anxiety.jpg",
    imageAlt: "Calm hands holding a warm cup, representing anxiety relief",
  },
  {
    title: "Trauma Therapy in Santa Monica",
    description:
      "Trauma therapy in Santa Monica for adults navigating the effects of past experiences, using a paced, supportive approach that emphasizes safety, regulation, and healing.",
    imageSrc: "/images/specialty-trauma.jpg",
    imageAlt:
      "Peaceful sunrise over the ocean, symbolizing healing and new beginnings",
  },
  {
    title: "Burnout & Stress Therapy in Santa Monica",
    description:
      "Burnout and stress therapy in Santa Monica for high-achieving adults who feel exhausted, disconnected, or overwhelmed and want more sustainable ways of living and working.",
    imageSrc: "/images/specialty-burnout.jpg",
    imageAlt:
      "Person taking a mindful break in nature, representing recovery from burnout",
  },
];

export default function Specialties() {
  return (
    <section
      id="services"
      className="section bg-background"
      aria-labelledby="specialties-heading"
    >
      <div className="container mx-auto">
        <h2
          id="specialties-heading"
          className="text-center text-text-primary mb-16"
        >
          My Specialties
        </h2>

        {/* More gap between cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.title}
              title={specialty.title}
              description={specialty.description}
              imageSrc={specialty.imageSrc}
              imageAlt={specialty.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
