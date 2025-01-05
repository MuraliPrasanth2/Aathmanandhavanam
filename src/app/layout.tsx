import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aathmanathavanam',
  description:
    'A sacred spiritual sanctuary in the Western Ghats, offering ancient Siddha wisdom, divine blessings, and transformative spiritual experiences through the teachings of Guru Nataraja Yagava.',
  keywords: [
    'Aathmanathavanam',
    'Guru Nataraja Yagava',
    'Siddha Tradition',
    'Spiritual Sanctuary',
    'Western Ghats',
    'Thadakai Malai',
    'Aadhisankarar Temple',
    'Samukthiyambikai',
    'Spiritual Retreat',
    'Divine Blessings',
    'Meditation Center',
    'Sacred Space',
  ],
  openGraph: {
    title: 'Aathmanathavanam - Sacred Path to Spiritual Enlightenment',
    description:
      'Experience profound spiritual transformation at our sacred sanctuary in the Western Ghats, guided by ancient Siddha wisdom and divine blessings.',
    type: 'website',
    siteName: 'Aathmanathavanam',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aathmanathavanam Logo',
      },
    ],
  },
  metadataBase: new URL('https://aathmanathavanam.org'),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
    other: {
      rel: 'icon',
      url: '/images/logo.png',
    },
  },
  alternates: {
    canonical: 'https://aathmanathavanam.org',
  },
  authors: [{ name: 'Madhuyaagavar' }],
  category: 'Spiritual Center',
  themeColor: '#B8860B',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
