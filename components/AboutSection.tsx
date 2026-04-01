import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative section-pad overflow-hidden">
      {/* Background subtle accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/[0.03] to-transparent pointer-events-none" />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg/v1/fill/w_800,h_1000,q_90/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg"
                alt="ProEdge Events — Premium event styling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Red accent frame */}
              <div className="absolute inset-0 border border-brand-red/20" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-red/30" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-red/10" />
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <span className="pill-badge mb-6 inline-block">About Us</span>

            <h2 className="text-section font-semibold text-white mb-6 text-balance">
              Committed to
              <span className="text-brand-red"> Excellence</span>
            </h2>

            <div className="space-y-5 text-white/60 text-[15px] leading-[1.8] font-light text-measure-wide">
              <p>
                Proactive Edge Events is a one-stop resource for unique,
                beautifully designed and expertly executed events. Based in
                FCT-Abuja, Nigeria.
              </p>
              <p>
                With close partnerships with top vendors, we pride ourselves on
                crafting exceptional events that are not easily forgotten. Our
                design-savvy, passionate team excels at interpreting your vision
                and ideas, seamlessly bringing them to life.
              </p>
              <p>
                From logistics and lighting to entertainment and hors d&apos;oeuvres,
                we take care of every detail. Go ahead and enjoy — we&apos;ve got it
                covered.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-brand-red">15+</div>
                <div className="text-[12px] text-white/40 uppercase tracking-wider mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-brand-red">500+</div>
                <div className="text-[12px] text-white/40 uppercase tracking-wider mt-1">
                  Events Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-brand-red">100%</div>
                <div className="text-[12px] text-white/40 uppercase tracking-wider mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
