import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardData {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const SERVICES: ServiceCardData[] = [
  {
    title: 'Events',
    subtitle: 'Covering a wide range of events and occasions with a creative touch',
    image: 'https://static.wixstatic.com/media/19b49ff409e84bafa7839ccc66bf5bd7.jpg/v1/fill/w_980,h_600,q_90/19b49ff409e84bafa7839ccc66bf5bd7.jpg',
    href: '/book-online',
  },
  {
    title: 'Portraits',
    subtitle: 'Capturing personalities with finesse and artistic vision',
    image: 'https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg/v1/fill/w_980,h_600,q_90/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg',
    href: '/portfolio',
  },
  {
    title: 'Weddings',
    subtitle: 'Documenting the magic of weddings in every frame',
    image: 'https://static.wixstatic.com/media/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg/v1/fill/w_980,h_600,q_90/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg',
    href: '/book-online',
  },
  {
    title: 'Product Photography',
    subtitle: 'Showcasing products with professional flair',
    image: 'https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg/v1/fill/w_980,h_600,q_90/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg',
    href: '/book-online',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative section-pad bg-brand-near-black">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="pill-badge mb-5 inline-block">What We Do</span>
          <h2 className="text-section font-semibold text-white text-balance">
            Something for Every
            <span className="text-brand-red"> Occasion</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light mt-4 max-w-lg mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life
            with world-class execution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`service-card group relative block aspect-[16/10] md:aspect-[16/9] reveal reveal-delay-${i + 1}`}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="card-image object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Default dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover overlay */}
              <div className="card-overlay absolute inset-0 bg-brand-red-dark/80 flex items-center justify-center">
                <span className="btn-outline text-[12px] py-2.5 px-6 border-white/50">
                  View Media
                </span>
              </div>

              {/* Title always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-500">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm font-light mt-1 group-hover:opacity-0 transition-opacity duration-500">
                  {service.subtitle}
                </p>
              </div>

              {/* Red accent bar at bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
