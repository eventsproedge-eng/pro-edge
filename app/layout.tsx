import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

export const metadata: Metadata = {
  title: 'ProEdge Events — Committed to Excellence | Abuja, Nigeria',
  description:
    'Proactive Edge Events is a one-stop resource for unique, beautifully designed and expertly executed events. Event management, photography, videography, sound/DJ, stage & lighting in Abuja, Nigeria.',
  openGraph: {
    title: 'ProEdge Events — Committed to Excellence',
    description:
      'Premium event management, photography, videography, sound/DJ, stage & lighting in Abuja, Nigeria.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <ScrollRevealProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
