'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HERO } from '@/lib/data';

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const images = HERO.images;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrent(index);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Background slides */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
        >
          <div
            className="hero-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 gradient-hero-bottom" />
        </div>
      ))}

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full container-site flex flex-col justify-end pb-16 md:pb-24 lg:pb-28">
        {/* Subheading */}
        <div className="animate-fade-up mb-3">
          <span className="pill-badge">{HERO.subheading}</span>
        </div>

        {/* Heading */}
        <h1 className="animate-blur-in text-hero font-semibold text-white leading-[1.05] mb-4 max-w-[14ch]">
          {HERO.heading}
        </h1>

        {/* Body */}
        <p className="animate-fade-up text-white/70 text-sm md:text-base font-light leading-relaxed max-w-md mb-8" style={{ animationDelay: '0.3s' }}>
          {HERO.body}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.4s' }}>
          <Link href={HERO.cta_link} className="btn-primary">
            {HERO.cta_text}
          </Link>
          <Link href="/portfolio" className="btn-outline">
            View Portfolio
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-5 md:right-12 flex flex-col gap-3 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative w-2 flex items-center justify-center"
            >
              <span
                className={`block w-[3px] rounded-full transition-all duration-500 ${
                  i === current
                    ? 'h-10 bg-brand-red'
                    : 'h-3 bg-white/30 group-hover:bg-white/60'
                }`}
              />
            </button>
          ))}
          <span className="mt-2 text-[11px] font-light tracking-widest text-white/40">
            {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
    </section>
  );
}
