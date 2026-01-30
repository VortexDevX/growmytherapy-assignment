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
    <article className="text-center p-6">
      <h3 className="text-xl md:text-2xl text-text-primary mb-4">{title}</h3>
      <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
      <div className="circle-image w-32 h-32 mx-auto relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
    </article>
  );
}
