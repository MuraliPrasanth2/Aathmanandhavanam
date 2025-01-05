'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:hidden'>
      <button
        onClick={toggleMenu}
        className='p-2 text-white hover:text-primary-gold transition-colors'
        aria-label='Toggle Menu'
      >
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-16 6h16'
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-start justify-end'>
          {/* Backdrop */}
          <div className='fixed inset-0 bg-black/50' onClick={toggleMenu} aria-hidden='true' />

          {/* Menu Content */}
          <div className='relative w-64 h-[100dvh] overflow-y-auto bg-slate-900 shadow-lg'>
            <div className='flex flex-col h-full'>
              <div className='flex justify-end p-4'>
                <button
                  onClick={toggleMenu}
                  className='p-2 text-white hover:text-primary-gold transition-colors'
                  aria-label='Close Menu'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <nav className='flex-1 px-4 pb-4'>
                <ul className='space-y-4'>
                  <li>
                    <Link
                      href='/'
                      className='block py-2 text-lg text-white hover:text-primary-gold transition-colors'
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/about'
                      className='block py-2 text-lg text-white hover:text-primary-gold transition-colors'
                      onClick={toggleMenu}
                    >
                      Divine Legacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/sacred-spaces'
                      className='block py-2 text-lg text-white hover:text-primary-gold transition-colors'
                      onClick={toggleMenu}
                    >
                      Sacred Sanctuary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/temple'
                      className='block py-2 text-lg text-white hover:text-primary-gold transition-colors'
                      onClick={toggleMenu}
                    >
                      Aadhisankarar Temple
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='block py-2 text-lg text-white hover:text-primary-gold transition-colors'
                      onClick={toggleMenu}
                    >
                      Visit & Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
