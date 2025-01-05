'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Divine Legacy' },
    { href: '/sacred-spaces', label: 'Sacred Sanctuary' },
    { href: '/temple', label: 'Aadhisankarar Temple' },
    { href: '/contact', label: 'Visit & Contact' },
  ];

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className='fixed w-full z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link href='/' className='relative h-12 w-12'>
            <Image
              src='/images/logo.png'
              alt='Aathmanathavanam Logo'
              fill
              className='object-contain'
              sizes='48px'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isCurrentPage(link.href)
                    ? 'text-primary-gold font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary-gold after:rounded-full'
                    : 'text-slate-300 hover:text-primary-gold hover:after:w-full after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-gold/50 after:rounded-full after:transition-all after:duration-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-slate-300 hover:text-primary-gold transition-colors duration-300'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              {isOpen ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden bg-slate-950/95 backdrop-blur-sm border-t border-slate-800/50'>
          <div className='container mx-auto px-4 py-4'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isCurrentPage(link.href)
                      ? 'text-primary-gold font-semibold pl-4 border-l-2 border-primary-gold bg-primary-gold/5'
                      : 'text-slate-300 hover:text-primary-gold pl-4 hover:border-l-2 hover:border-primary-gold/50 hover:bg-primary-gold/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
