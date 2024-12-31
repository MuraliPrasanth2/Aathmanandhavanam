'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from './components/ContactSection';
import LoadingAnimation from './components/LoadingAnimation';
import Navigation from './components/Navigation';
import SlideReveal from './components/SlideReveal';
import { smoothScroll } from './utils/smoothScroll';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <main className='min-h-screen'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Meditation.jpg'
            alt='Meditation Background'
            fill
            className='object-cover'
            priority
            quality={100}
            sizes='100vw'
            style={{
              objectPosition: '50% 50%',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/60'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center'>
            <SlideReveal width='100%'>
              <h1 className='text-[2.8rem] md:text-7xl font-semibold text-white/50 mb-8 font-montserrat'>
                Yagava Guru Foundation
              </h1>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.2}>
              <p className='text-2xl md:text-3xl mb-6 text-white/60'>
                Empowering Lives, Preserving Traditions, Serving Humanity
              </p>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.4}>
              <p className='text-sm md:text-xl text-white/70 max-w-2xl mx-auto mb-8'>
                The Yagava Guru Foundation was established by Madhuyagav, a revered spiritual leader
                and disciple of the timeless Siddha master, Guru Yaagavar. Our foundation is
                committed to spreading the wisdom of the ancient Siddha Vedic lifestyle.
              </p>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.6}>
              <div className='flex justify-center gap-4'>
                <Link href='#contact' className='btn-shine opacity-80' onClick={smoothScroll}>
                  <div className='text-slate-100'>Contact Us</div>
                </Link>
              </div>
            </SlideReveal>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        {/* <div className='absolute top-1/4 left-10 floating'>
          <div className='w-16 h-16 text-primary-gold opacity-80'>ॐ</div>
        </div>
        <div className='absolute bottom-1/4 right-10 floating' style={{ animationDelay: '-1.5s' }}>
          <div className='w-16 h-16 text-primary-gold opacity-80'>ॐ</div>
        </div> */}
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white/50 mb-12'>About Our Founder</h2>
          <div className='max-w-4xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='relative h-[400px] rounded-lg overflow-hidden'>
                <Image
                  src='/images/founder.jpeg'
                  alt='Madhuyagav'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div>
                <p className='text-md font-montserrat text-slate-300 mb-6'>
                  The Yagava Guru Foundation is the realization of the vision and spiritual guidance
                  of Madhuyagav, a man whose life has been a profound journey of spiritual awakening
                  and selfless service.
                </p>
                <p className='text-md text-slate-300 mb-6'>
                  Chosen by Guru Yaagavar at the age of 14, Madhuyagav has dedicated himself to
                  carrying forward the timeless teachings of the Siddha tradition.
                </p>
                <p className='text-md text-slate-300'>
                  His legacy is one of service, compassion, and spiritual transformation, inspiring
                  individuals worldwide to live harmoniously and spiritually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white/50 mb-12'>Our Mission</h2>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-md font-montserrat text-slate-300 mb-6'>
              At the Yagava Guru Foundation, we believe that true well-being is achieved when body,
              mind, and soul are in harmony. We are dedicated to teaching the profound wisdom of the
              Siddha tradition to the masses, enabling them to align with their true essence and
              embrace a healthier, more fulfilling lifestyle.
            </p>
            <p className='text-md text-slate-300'>
              Our programs and initiatives are designed to help individuals connect with their
              divine nature while fostering community development and social service.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section id='initiatives' className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white/50 mb-12'>Key Initiatives</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Siddha Vedic Education</h3>
              <p className='text-slate-300'>
                Promoting spiritual growth, physical well-being, and mental peace through various
                educational programs and teachings.
              </p>
            </div>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Community Charity Services</h3>
              <p className='text-slate-300'>
                Providing support to families in need through grocery packages and essential
                supplies across tribal settlements.
              </p>
            </div>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Kosala and Animal Welfare</h3>
              <p className='text-slate-300'>
                Maintaining a sacred cow shelter dedicated to the care and well-being of desi cows.
              </p>
            </div>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Tribal Outreach</h3>
              <p className='text-slate-300'>
                Running personality development and social awareness programs for children in tribal
                areas.
              </p>
            </div>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Education</h3>
              <p className='text-slate-300'>
                Operating a nursery and primary school providing quality education at minimal cost.
              </p>
            </div>
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/initiatives'
              className='inline-block px-8 py-3 bg-purple-900 text-slate-100 rounded-sm hover:bg-primary-gold/90 transition-colors font-semibold'
            >
              Learn More About Our Initiatives
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id='get-involved' className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white/50 mb-12'>Get Involved</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            <div className='text-center'>
              <h3 className='text-xl text-primary-gold mb-4'>Donate</h3>
              <p className='text-slate-300'>
                Support our charity initiatives and make a difference.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl text-primary-gold mb-4'>Volunteer</h3>
              <p className='text-slate-300'>
                Join our outreach programs and help communities in need.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl text-primary-gold mb-4'>Learn</h3>
              <p className='text-slate-300'>
                Attend workshops and classes on Siddha Vedic lifestyle.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl text-primary-gold mb-4'>Spread the Word</h3>
              <p className='text-slate-300'>Help us spread awareness of our mission and work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className='bg-slate-950 py-6'>
        <div className='container mx-auto px-4'>
          <div className='text-center text-slate-400'>
            <p>© 2024 Yagava Guru Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
