'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import SectionLabel from './SectionLabel';

interface HeroSlide {
  badge: string;
  heading: string;
  body: string;
  image: string;
}

const SLIDES: HeroSlide[] = [
  {
    badge: 'Event Management',
    heading: "Let's Plan Your\nSpecial Day",
    body: 'At Proactive Edge, we put our clients\' wishes at the forefront, customising unique events that are perfectly suited to their needs.',
    image: 'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg/v1/fill/w_1920,h_1080,q_90/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg',
  },
  {
    badge: 'Photography',
    heading: 'Vibrant &\nDynamic Imagery',
    body: 'Passionately creating unforgettable images. From weddings and family portraits to lifestyle shoots and private events.',
    image: 'https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg/v1/fill/w_1920,h_1080,q_90/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg',
  },
  {
    badge: 'Portraits',
    heading: 'Capturing\nPersonalities',
    body: "We believe photography is more than just taking pictures — it's about telling stories. Every project is approached with creativity and care.",
    image: 'https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg/v1/fill/w_1920,h_1080,q_90/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg',
  },
  {
    badge: 'Weddings & Events',
    heading: 'Document\nThe Big Day',
    body: 'Finding the right package for your event is key. We offer a variety of services to match any of your needs.',
    image: 'https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg/v1/fill/w_1920,h_1080,q_90/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1200);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Background slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
        >
          {/* Background image with Ken Burns */}
          <div
            className="hero-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 gradient-hero-bottom" />
        </div>
      ))}

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full container-site flex flex-col justify-end pb-16 md:pb-24 lg:pb-28">
        {/* Badge */}
        <div
          key={`badge-${current}`}
          className="animate-fade-up mb-5"
          style={{ animationDelay: '0.1s' }}
        >
          <SectionLabel>{SLIDES[current].badge}</SectionLabel>
        </div>

        {/* Heading */}
        <h1
          key={`heading-${current}`}
          className="animate-blur-in text-hero font-semibold text-white leading-[1.05] mb-6 whitespace-pre-line max-w-[14ch]"
          style={{ animationDelay: '0.2s' }}
        >
          {SLIDES[current].heading}
        </h1>

        {/* Body */}
        <p
          key={`body-${current}`}
          className="animate-fade-up text-white/70 text-sm md:text-base font-light leading-relaxed max-w-md mb-8"
          style={{ animationDelay: '0.4s' }}
        >
          {SLIDES[current].body}
        </p>

        {/* CTAs */}
        <div
          key={`cta-${current}`}
          className="animate-fade-up flex flex-wrap gap-4"
          style={{ animationDelay: '0.5s' }}
        >
          <Link href="/book-online" className="btn-primary">
            Book Now
          </Link>
          <Link href="/portfolio" className="btn-outline">
            View Portfolio
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-5 md:right-12 flex flex-col gap-3 items-center">
          {SLIDES.map((_, i) => (
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
          {/* Slide counter */}
          <span className="mt-2 text-[11px] font-light tracking-widest text-white/40">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Bottom gradient line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
    </section>
  );
}
