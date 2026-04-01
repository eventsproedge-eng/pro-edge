import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.name} — ProEdge Events`,
    description: service.subtitle,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 min-h-[60vh] flex items-end">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 gradient-hero-bottom" />
        </div>

        <div className="relative z-10 container-site pb-12 md:pb-20">
          <span className="pill-badge mb-4 inline-block">{service.duration}</span>
          <h1 className="text-hero-sm md:text-hero font-semibold text-white mb-3">
            {service.name}
          </h1>
          <p className="text-white/60 text-lg font-light">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-black">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Main content */}
            <div className="lg:col-span-2 reveal">
              <h2 className="text-2xl font-semibold text-white mb-6">
                About This Service
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.8] font-light text-measure-wide mb-8">
                {service.description}
              </p>
              <p className="text-white/60 text-[15px] leading-[1.8] font-light text-measure-wide">
                Our team combines years of experience with creative vision to
                deliver results that exceed expectations. Every project is
                approached with attention to detail, professionalism, and a
                genuine passion for our craft.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`mailto:${service.contactEmail}`} className="btn-primary">
                  Enquire Now
                </a>
                <a href={`tel:${service.contactPhone.replace(/\s/g, '')}`} className="btn-outline">
                  Call Us
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="reveal reveal-delay-2">
              <div className="bg-brand-near-black border border-white/5 p-6 md:p-8 space-y-6">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                  Service Details
                </h3>

                <div className="space-y-5">
                  <div className="border-b border-white/5 pb-4">
                    <div className="text-[12px] text-white/30 uppercase tracking-wider mb-1">
                      Duration
                    </div>
                    <div className="text-white font-medium">{service.duration}</div>
                  </div>
                  <div className="border-b border-white/5 pb-4">
                    <div className="text-[12px] text-white/30 uppercase tracking-wider mb-1">
                      Starting Price
                    </div>
                    <div className="text-brand-red font-semibold text-lg">
                      {service.price}
                    </div>
                  </div>
                  <div className="border-b border-white/5 pb-4">
                    <div className="text-[12px] text-white/30 uppercase tracking-wider mb-1">
                      Location
                    </div>
                    <div className="text-white/70 text-sm">{service.location}</div>
                  </div>
                  <div className="border-b border-white/5 pb-4">
                    <div className="text-[12px] text-white/30 uppercase tracking-wider mb-1">
                      Contact
                    </div>
                    <a
                      href={`mailto:${service.contactEmail}`}
                      className="link-underline text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {service.contactEmail}
                    </a>
                  </div>
                  <div>
                    <div className="text-[12px] text-white/30 uppercase tracking-wider mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${service.contactPhone.replace(/\s/g, '')}`}
                      className="text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {service.contactPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Back link */}
              <Link
                href="/book-online"
                className="mt-6 inline-flex items-center gap-2 text-white/40 text-sm hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
