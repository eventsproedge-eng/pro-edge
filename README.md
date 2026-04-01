# ProEdge Events — Website Rebuild

**Stack:** Next.js 14 (App Router) · Tailwind CSS · TypeScript · Framer Motion · Supabase (ready)

A cinematic, premium website for Proactive Edge Events — event management, photography, videography, sound/DJ, and stage & lighting based in Abuja, Nigeria.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero slideshow, About, Services grid, Booking CTA, Testimonials, Contact |
| `/portfolio` | Masonry photo gallery |
| `/book-online` | Services listing with cards |
| `/service/[slug]` | Individual service detail page |
| `/photo-albums` | Event album gallery |

## Project Structure

```
app/
  page.tsx              # Homepage
  layout.tsx            # Root layout (Navbar + Footer)
  globals.css           # Design system + animations
  portfolio/page.tsx    # Portfolio gallery
  book-online/page.tsx  # Services listing
  service/[slug]/page.tsx # Service detail
  photo-albums/page.tsx # Event albums

components/
  Navbar.tsx            # Sticky header + mobile menu
  Footer.tsx            # Premium footer
  HeroSlideshow.tsx     # Cinematic hero with auto-rotate
  AboutSection.tsx      # Brand statement
  ServicesGrid.tsx      # 2×2 hover cards
  BookingCTA.tsx        # Full-width CTA
  TestimonialsSection.tsx # Quote carousel
  ContactSection.tsx    # Form + info + map
  SectionLabel.tsx      # Red pill badge
  ScrollRevealProvider.tsx # Intersection Observer reveals

lib/
  data.ts               # Types + static data (services, portfolio, albums)
```

## Brand Tokens

- **Red accent:** `#ED1C24`
- **CTA red:** `#CF1E15`
- **Background:** `#000000` / `#1a1a1a`
- **Text:** `#FFFFFF`
- **Font:** Poppins (300, 400, 500, 600, 700)

## Next Steps

- [ ] Set up Supabase project and wire contact form
- [ ] Deploy to Vercel
- [ ] Add lightbox to portfolio gallery
- [ ] Add CMS for services/albums via Supabase
- [ ] Add WhatsApp CTA button
- [ ] SEO meta tags per page
- [ ] Analytics (Vercel Analytics or GA4)

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel
```

---

© 2025 Proactive Edge Events
