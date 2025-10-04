'use client';

import { ArrowRight } from "lucide-react";
import { ParticlesField } from "@/components/ParticlesField";
import dynamic from 'next/dynamic';

const TextType = dynamic(
  () => import('@/components/TextType').then((mod) => mod.default),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesField /> 
          
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-screen z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight tracking-tight">
            <div className="mb-4">Smarter IT Solutions for a</div>
            <TextType
              text={[
                'Smarter Future',
                'Digital Transformation',
                'Connected Business',
                'Better Tomorrow'
              ]}
              as="span"
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className="text-foreground dark:text-primary-foreground inline-block"
              showCursor={true}
              cursorClassName="text-blue-700 dark:text-blue-300"
              hideCursorWhileTyping={true}
            />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From HRIS & CRM integration to AI automation, we build reliable systems that scale with your business.
          </p>
        </div>
        </div>
      
    </section>
  );
}