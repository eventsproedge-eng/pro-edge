import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/book-online' },
  { label: 'Photo Albums', href: '/photo-albums' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/ProEdge.Events' },
  { label: 'X / Twitter', href: 'https://x.com/ProEdgeEvents' },
  { label: 'Instagram', href: 'https://www.instagram.com/proedge.events' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ProEdge-q4n' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="container-site section-pad-sm">
        {/* Logo */}
        <div className="flex justify-center mb-14">
          <Link href="/">
            <Image
              src="https://static.wixstatic.com/media/ea6cbc_93f8078409814267b89f5bc0a48f7224~mv2.png"
              alt="ProEdge Events"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-14">
          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-underline text-sm text-white/60 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a
                href="mailto:aidris@proedge.events"
                className="link-underline hover:text-white transition-colors w-fit"
              >
                aidris@proedge.events
              </a>
              <a
                href="tel:+2348061350008"
                className="hover:text-white transition-colors"
              >
                +234 806 135 0008
              </a>
              <a
                href="tel:+2347064739934"
                className="hover:text-white transition-colors"
              >
                +234 706 473 9934
              </a>
              <p className="text-white/40 mt-2 leading-relaxed">
                10 Regent Park, Minfa 1 Estate,
                <br />
                Lokogoma District, Abuja, Nigeria
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-white/60 hover:text-white transition-colors w-fit"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30 tracking-wide">
            © {new Date().getFullYear()} Proactive Edge Events. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20 tracking-wide">
            Serving Abuja and beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
