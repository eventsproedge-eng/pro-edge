import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/data';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/book-online' },
  { label: 'Photo Albums', href: '/photo-albums' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: BRAND.socialLinks.facebook },
  { label: 'X / Twitter', href: BRAND.socialLinks.twitter },
  { label: 'Instagram', href: BRAND.socialLinks.instagram },
  { label: 'YouTube', href: BRAND.socialLinks.youtube },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      <div className="container-site section-pad-sm">
        <div className="flex justify-center mb-14">
          <Link href="/">
            <Image
              src={BRAND.logoFooter}
              alt="ProEdge Events"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-14">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="link-underline text-sm text-white/60 hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href={`mailto:${BRAND.contact.email}`} className="link-underline hover:text-white transition-colors w-fit">{BRAND.contact.email}</a>
              <a href={`tel:${BRAND.contact.phone1.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{BRAND.contact.phone1}</a>
              <p className="text-white/40 mt-2 leading-relaxed">{BRAND.contact.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-white/60 hover:text-white transition-colors w-fit">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30 tracking-wide">{BRAND.copyright}</p>
          <p className="text-[12px] text-white/20 tracking-wide">Serving Abuja and beyond</p>
        </div>
      </div>
    </footer>
  );
}
