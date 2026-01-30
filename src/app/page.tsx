"use client";

import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Specialties from "@/components/Specialties";
import PainPoints from "@/components/PainPoints";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import OurOffice from "@/components/OurOffice";
import FinalCTA from "@/components/FinalCTA";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      {/* Hero doesn't need scroll animation - it's above the fold */}
      <Hero />

      <ScrollAnimation>
        <Introduction />
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <Specialties />
      </ScrollAnimation>

      <ScrollAnimation>
        <PainPoints />
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <About />
      </ScrollAnimation>

      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <OurOffice />
      </ScrollAnimation>

      <ScrollAnimation>
        <FinalCTA />
      </ScrollAnimation>
    </>
  );
}
