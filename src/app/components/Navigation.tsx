'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import { smoothScroll } from '../utils/smoothScroll';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-slate-300/80 hover:text-primary-gold transition-colors duration-300 ${
      isActive ? 'text-primary-gold font-semibold' : ''
    }`;
  };

  return (
    <header
      className={`fixed w-full z-[40] transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.png'
            alt='Yagava Guru Foundation Logo'
            width={40}
            height={40}
            className='object-contain'
          />
        </Link>

        {/* Navigation Links */}
        <div className='flex items-center'>
          <div className='hidden md:flex items-center space-x-8'>
            <Link href='/' className={getLinkClass('/')}>
              Home
            </Link>
            <Link href='/about' className={getLinkClass('/about')}>
              About Founder
            </Link>
            <Link href='/initiatives' className={getLinkClass('/initiatives')}>
              Initiatives
            </Link>
            <Link href='/get-involved' className={getLinkClass('/get-involved')}>
              Get Involved
            </Link>
            <Link href='/contact' className={getLinkClass('/contact')}>
              Contact
            </Link>
          </div>
          <div className='md:ml-6'>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
