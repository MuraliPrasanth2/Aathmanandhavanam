'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MobileNav from './MobileNav';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-lg transition-colors ${
      isActive ? 'text-primary-gold' : 'text-white/80 hover:text-primary-gold'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logo.png'
              alt='Aathmanathavanam Logo'
              width={40}
              height={40}
              className='rounded-full'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <Link href='/' className={getLinkClass('/')}>
              Home
            </Link>
            <Link href='/about' className={getLinkClass('/about')}>
              Divine Legacy
            </Link>
            <Link href='/sacred-spaces' className={getLinkClass('/sacred-spaces')}>
              Sacred Sanctuary
            </Link>
            <Link href='/temple' className={getLinkClass('/temple')}>
              Aadhisankarar Temple
            </Link>
            <Link href='/contact' className={getLinkClass('/contact')}>
              Visit & Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
