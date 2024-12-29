'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DeitySection from './components/DeitySection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
import MobileNav from './components/MobileNav';
import LoadingAnimation from './components/LoadingAnimation';
import SlideReveal from './components/SlideReveal';
import { smoothScroll } from './utils/smoothScroll';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <main className='min-h-screen'>
      {/* Header/Navigation */}
      <header
        className={`fixed w-full z-[40] transition-all duration-300 ${
          isScrolled ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className='container mx-auto px-4 py-4 flex justify-end items-center'>
          <div className='hidden md:flex items-center gap-6'>
            <Link
              href='#about'
              className='text-white hover:text-primary-gold transition-colors duration-300'
              onClick={smoothScroll}
            >
              About
            </Link>
            <Link
              href='#deities'
              className='text-white hover:text-primary-gold transition-colors duration-300'
              onClick={smoothScroll}
            >
              Deities
            </Link>
            <Link
              href='#schedule'
              className='text-white hover:text-primary-gold transition-colors duration-300'
              onClick={smoothScroll}
            >
              Schedule
            </Link>
            <Link
              href='#contact'
              className='text-white hover:text-primary-gold transition-colors duration-300'
              onClick={smoothScroll}
            >
              Contact
            </Link>
          </div>
          <div className='md:ml-6'>
            <MobileNav />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/AAthmavathanam.jpeg'
            alt='Aathmavathanam Background'
            fill
            className='object-cover'
            priority
            quality={100}
            sizes='100vw'
            style={{
              objectPosition: '50% 30%',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center'>
            <SlideReveal width='100%'>
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>
                Sri Yaagavaguru Temple
              </h1>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.2}>
              <p className='text-2xl md:text-3xl tamil-text mb-8 text-white/90'>
                ஸ்ரீ யாகவகுரு கோயில்
              </p>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.4}>
              <p className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8'>
                A sacred place of worship and spiritual enlightenment
              </p>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.6}>
              <div className='flex justify-center gap-4'>
                <Link
                  href='#schedule'
                  className='px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition-colors'
                  onClick={smoothScroll}
                >
                  View Schedule
                </Link>
                <Link
                  href='#contact'
                  className='px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors'
                  onClick={smoothScroll}
                >
                  Contact Us
                </Link>
              </div>
            </SlideReveal>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className='absolute top-1/4 left-10 floating'>
          <div className='w-16 h-16 text-primary-gold opacity-80'>ॐ</div>
        </div>
        <div className='absolute bottom-1/4 right-10 floating' style={{ animationDelay: '-1.5s' }}>
          <div className='w-16 h-16 text-primary-gold opacity-80'>ॐ</div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white'>About Our Temple</h2>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-lg text-white/80 mb-6'>
              Sri Yaagavaguru Temple is a sacred place where devotees come to seek divine blessings
              and find spiritual peace. Our temple is dedicated to preserving and promoting the rich
              cultural and spiritual heritage of Hinduism.
            </p>
            <p className='text-lg text-white/80'>
              We welcome devotees from all walks of life to experience the divine presence and
              participate in our daily rituals and special ceremonies.
            </p>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <DeitySection />
      <ScheduleSection />
      <ContactSection />

      {/* Footer */}
      <footer className='bg-text-brown py-8'>
        <div className='container mx-auto px-4'>
          <div className='text-center text-white/80'>
            <p className='mb-2'>© 2024 Sri Yaagavaguru Temple. All rights reserved.</p>
            <p>Website developed with devotion and care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
