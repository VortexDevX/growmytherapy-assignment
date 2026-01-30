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
    <article className="text-center px-4 py-10">
      {/* More space between heading and description */}
      <h3 className="text-text-primary mb-8">{title}</h3>
      {/* More space between description and image */}
      <p className="text-text-secondary mb-10 leading-relaxed">{description}</p>
      {/* Larger circle images - 15% bigger */}
      <div className="circle-image w-56 h-56 md:w-64 md:h-64 mx-auto relative shadow-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 224px, 256px"
        />
      </div>
    </article>
  );
}
