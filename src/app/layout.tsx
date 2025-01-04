import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yagava Guru Foundation',
  description: 'Empowering Lives, Preserving Traditions, Serving Humanity',
  keywords: [
    'Yagava Guru Foundation',
    'Siddha Vedic Education',
    'Community Service',
    'Spiritual Foundation',
    'Madhuyagav',
  ],
  openGraph: {
    title: 'Yagava Guru Foundation',
    description: 'Empowering Lives, Preserving Traditions, Serving Humanity',
    type: 'website',
    siteName: 'Yagava Guru Foundation',
  },
  metadataBase: new URL('https://yaagavaguru.com'),
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
