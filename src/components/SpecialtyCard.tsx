import React from "react";
import Image from "next/image";

interface SpecialtyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SpecialtyCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: SpecialtyCardProps) {
  return (
    <article className="text-center px-6 py-10 border border-border-light/50 rounded-2xl bg-background/50">
      {/* More space between heading and description */}
      <h3 className="text-text-primary mb-6">{title}</h3>
      {/* More space between description and image */}
      <p className="text-text-secondary mb-8 leading-relaxed">{description}</p>
      {/* Circle images - responsive sizing */}
      <div className="circle-image w-48 h-48 sm:w-56 sm:h-56 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 224px"
        />
      </div>
    </article>
  );
}
