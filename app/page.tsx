import HeroSlideshow from '@/components/HeroSlideshow';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import BookingCTA from '@/components/BookingCTA';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <AboutSection />
      <ServicesGrid />
      <BookingCTA />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
