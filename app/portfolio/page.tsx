import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PORTFOLIO_IMAGES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Portfolio — ProEdge Events | Abuja, Nigeria',
  description:
    'Explore our portfolio of professional photography — weddings, portraits, events, fashion, and lifestyle shoots in Abuja, Nigeria.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-near-black to-black" />
        <div className="relative z-10 container-site text-center">
          <span className="pill-badge mb-5 inline-block">Our Work</span>
          <h1 className="text-hero-sm md:text-hero font-semibold text-white text-balance">
            My Portfolio
          </h1>
          <p className="text-white/50 text-sm md:text-base font-light mt-4 max-w-lg mx-auto">
            Passionately creating unforgettable images — from weddings and
            portraits to lifestyle and creative shoots.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad-sm bg-black">
        <div className="container-site">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {PORTFOLIO_IMAGES.map((img, i) => (
              <div
                key={i}
                className="reveal break-inside-avoid group relative overflow-hidden"
                style={{
                  transitionDelay: `${(i % 4) * 0.08}s`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.aspect === 'landscape' ? 800 : 600}
                  height={
                    img.aspect === 'landscape'
                      ? 600
                      : img.aspect === 'square'
                        ? 600
                        : 750
                  }
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      className="drop-shadow-lg"
                    >
                      <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-brand-near-black">
        <div className="container-site text-center reveal">
          <h2 className="text-section font-semibold text-white mb-4 text-balance">
            Like What You See?
          </h2>
          <p className="text-white/50 text-sm font-light mb-8 max-w-md mx-auto">
            Let&apos;s create something beautiful together. Book a session or get
            in touch to discuss your vision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/book-online" className="btn-primary">
              Book a Session
            </Link>
            <Link href="/#contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
