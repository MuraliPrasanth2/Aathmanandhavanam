'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { smoothScroll } from '../utils/smoothScroll';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    smoothScroll(e);
    setIsOpen(false);
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
          className='w-6 h-6 text-text-brown'
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
        className={`fixed inset-0 bg-black/50 z-[50] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Content */}
      <div
        className={`fixed top-0 right-0 w-full min-h-screen bg-white z-[55] transform transition-transform duration-300 ease-in-out pt-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='h-full flex flex-col items-center justify-center space-y-8 p-4'>
          <Link
            href='#about'
            className='text-2xl font-bold text-text-brown hover:text-accent-red transition-colors'
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            href='#deities'
            className='text-2xl font-bold text-text-brown hover:text-accent-red transition-colors'
            onClick={handleClick}
          >
            Deities
          </Link>
          <Link
            href='#schedule'
            className='text-2xl font-bold text-text-brown hover:text-accent-red transition-colors'
            onClick={handleClick}
          >
            Schedule
          </Link>
          <Link
            href='#contact'
            className='text-2xl font-bold text-text-brown hover:text-accent-red transition-colors'
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
