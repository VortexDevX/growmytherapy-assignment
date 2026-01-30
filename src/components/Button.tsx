import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
    "outline-light": "btn-outline-light",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}
