'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg)' }} />
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 container-site">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="pill-badge mb-10 inline-block">Testimonials</span>
          <div className="text-brand-red/30 text-[120px] md:text-[160px] font-serif leading-none -mb-16 md:-mb-20 select-none">&ldquo;</div>
          <blockquote key={current} className="animate-blur-in text-xl md:text-2xl lg:text-[28px] font-light leading-relaxed text-white/90 text-balance">
            {TESTIMONIALS[current].quote}
          </blockquote>
          <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-brand-red font-medium text-sm tracking-wide">{TESTIMONIALS[current].name}</div>
            <div className="text-white/40 text-[13px] mt-1">{TESTIMONIALS[current].event}</div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} aria-label="Previous testimonial" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-brand-red transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-red w-6' : 'bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-brand-red transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
