import type { Metadata } from 'next';
import { Montserrat, Noto_Sans_Tamil } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-tamil',
});

export const metadata: Metadata = {
  title: 'Sri  Yaagavaguru',
  description:
    'Official website of Sri Yaagavaguru Temple - A sacred place of worship and spiritual enlightenment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${notoSansTamil.variable} font-sans`}>
        {children}
        <div id='portal'></div>
      </body>
    </html>
  );
}
