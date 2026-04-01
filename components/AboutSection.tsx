import Image from 'next/image';
import Link from 'next/link';
import { ABOUT } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="relative section-pad overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/[0.03] to-transparent pointer-events-none" />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={ABOUT.image}
                alt="ProEdge Events — Premium photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-brand-red/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-red/30" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-red/10" />
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <span className="pill-badge mb-6 inline-block">{ABOUT.heading}</span>

            <h2 className="text-section font-semibold text-white mb-6 text-balance">
              Your Trusted Photo Studio in
              <span className="text-brand-red"> Abuja</span>
            </h2>

            <div className="space-y-5 text-white/60 text-[15px] leading-[1.8] font-light text-measure-wide">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={ABOUT.cta_link} className="btn-primary">
                {ABOUT.cta_text}
              </Link>
              <Link href="/book-online" className="btn-outline">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
