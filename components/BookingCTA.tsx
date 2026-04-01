import Link from 'next/link';

export default function BookingCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg/v1/fill/w_1920,h_1080,q_90/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-brand-red-dark/60" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 container-site text-center">
        <div className="max-w-2xl mx-auto reveal">
          <span className="pill-badge mb-6 inline-block">Ready to Start?</span>

          <h2 className="text-section font-semibold text-white mb-5 text-balance">
            Let&apos;s Create Something
            <span className="text-brand-red-light"> Extraordinary</span>
          </h2>

          <p className="text-white/60 text-[15px] font-light leading-relaxed max-w-lg mx-auto mb-10">
            Whether it&apos;s a wedding, corporate event, birthday celebration, or creative
            shoot — we bring your vision to life with precision, style, and heart.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/book-online" className="btn-primary">
              Explore Our Services
            </Link>
            <a
              href="tel:+2348061350008"
              className="btn-outline"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
