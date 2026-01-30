import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Santa Monica Psychologist for Anxiety, Trauma & Burnout",
  description:
    "You may look like you're managing on the outside, but inside feel exhausted, anxious, or constantly on edge. I offer a calm, collaborative space for adults in Santa Monica to work through anxiety, trauma, and burnout.",
  keywords:
    "psychologist Santa Monica, anxiety therapist Santa Monica, trauma therapy California, EMDR therapist, burnout therapy, telehealth therapy California",
  openGraph: {
    title:
      "Dr. Maya Reynolds, PsyD | Santa Monica Psychologist for Anxiety, Trauma & Burnout",
    description:
      "A calm, collaborative space for adults in Santa Monica to work through anxiety, trauma, and burnout.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Psychologist",
    description:
      "Therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
