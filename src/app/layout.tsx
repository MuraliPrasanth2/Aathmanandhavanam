import type { Metadata } from 'next';
import { Inter, Noto_Sans_Tamil } from 'next/font/google';
import './globals.css';
import FireCursor from './components/FireCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-tamil',
});

export const metadata: Metadata = {
  title: 'Sri Yaagavaguru Temple',
  description:
    'Official website of Sri Yaagavaguru Temple - A sacred place of worship and spiritual enlightenment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${notoSansTamil.variable} font-sans`}>
        <FireCursor />
        {children}
      </body>
    </html>
  );
}
