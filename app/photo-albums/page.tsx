import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ALBUMS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Photo Albums — ProEdge Events | Abuja, Nigeria',
  description: 'Browse our event photo albums from weddings, birthdays, and celebrations in Abuja, Nigeria.',
};

export default function PhotoAlbumsPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-near-black to-black" />
        <div className="relative z-10 container-site text-center">
          <span className="pill-badge mb-5 inline-block">Events</span>
          <h1 className="text-hero-sm md:text-hero font-semibold text-white text-balance">
            Photo Albums
          </h1>
          <p className="text-white/50 text-sm md:text-base font-light mt-4 max-w-lg mx-auto">
            Relive the moments — browse through our curated event albums.
          </p>
        </div>
      </section>

      {/* Albums grid */}
      <section className="section-pad bg-black">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ALBUMS.map((album, i) => (
              <div
                key={album.id}
                className="reveal group relative overflow-hidden bg-brand-near-black border border-white/5 hover:border-brand-red/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Cover image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-near-black via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-red-dark/0 group-hover:bg-brand-red-dark/50 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="btn-outline text-[12px] py-2 px-5 border-white/50">
                        View Album
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white group-hover:text-brand-red transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-white/30 text-[13px] mt-1.5 flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {album.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state or more coming */}
          {ALBUMS.length > 0 && (
            <div className="text-center mt-16 reveal">
              <p className="text-white/30 text-sm">
                More albums coming soon. Follow us on social media for the latest.
              </p>
              <div className="mt-6">
                <Link href="/#contact" className="btn-outline text-[12px]">
                  Get in Touch
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
