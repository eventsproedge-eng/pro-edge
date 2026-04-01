import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services — ProEdge Events | Abuja, Nigeria',
  description:
    'Explore our professional photography and event services. Personal shoots, weddings, corporate, lifestyle, fashion, and product photography in Abuja.',
};

export default function BookOnlinePage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-near-black to-black" />
        <div className="relative z-10 container-site text-center">
          <span className="pill-badge mb-5 inline-block">Book Online</span>
          <h1 className="text-hero-sm md:text-hero font-semibold text-white text-balance">
            Our Services
          </h1>
          <p className="text-white/50 text-sm md:text-base font-light mt-4 max-w-lg mx-auto">
            Choose from our range of professional photography and event
            packages, tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad bg-black">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className="reveal group block bg-brand-near-black border border-white/5 hover:border-brand-red/30 transition-all duration-500"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-near-black via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-brand-red transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white/40 text-sm font-light mb-4">
                    {service.subtitle}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-[12px] text-white/30 uppercase tracking-wider border-t border-white/5 pt-4">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {service.duration}
                    </span>
                    <span className="text-brand-red font-medium">
                      {service.price}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-[13px] font-medium text-brand-red group-hover:gap-3 transition-all duration-300">
                    <span>More Info</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
