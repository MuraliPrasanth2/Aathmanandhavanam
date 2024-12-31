'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { smoothScroll } from '../utils/smoothScroll';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.currentTarget.href.includes('#')) {
      smoothScroll(e);
    }
    setIsOpen(false);
  };

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-2xl font-bold transition-colors ${
      isActive ? 'text-primary-gold' : 'text-white/80 hover:text-primary-gold'
    }`;
  };

  return (
    <div className='block md:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative z-[60] p-2'
        aria-label='Toggle navigation menu'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-white'
        >
          {isOpen ? (
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Content */}
      <div
        className={`fixed top-0 right-0 w-full min-h-screen bg-black/90 backdrop-blur-md z-[55] transform transition-transform duration-300 ease-in-out pt-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='h-full flex flex-col items-center justify-center space-y-8 p-4'>
          <Link href='/' className={getLinkClass('/')} onClick={handleSectionClick}>
            Home
          </Link>
          <Link href='/about' className={getLinkClass('/about')} onClick={handleSectionClick}>
            About Founder
          </Link>
          <Link
            href='/initiatives'
            className={getLinkClass('/initiatives')}
            onClick={handleSectionClick}
          >
            Initiatives
          </Link>
          <Link
            href='/get-involved'
            className={getLinkClass('/get-involved')}
            onClick={handleSectionClick}
          >
            Get Involved
          </Link>
          <Link href='/contact' className={getLinkClass('/contact')} onClick={handleSectionClick}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
