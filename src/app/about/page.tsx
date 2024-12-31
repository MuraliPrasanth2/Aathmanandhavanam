'use client';

import Image from 'next/image';
import SlideReveal from '../components/SlideReveal';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-32 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/founder.jpg'
            alt='Founder Background'
            fill
            className='object-cover'
            priority
            quality={100}
            sizes='100vw'
            style={{
              objectPosition: '50% 50%',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center'>
            <SlideReveal width='100%'>
              <h1 className='text-4xl md:text-6xl font-semibold text-white/50 mb-8 font-montserrat'>
                About Our Founder
              </h1>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8 items-center mb-12'>
              <div className='relative h-[400px] rounded-lg overflow-hidden'>
                <Image
                  src='/images/founder.jpg'
                  alt='Madhuyagav - Founder of Yagava Guru Foundation'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div>
                <p className='text-lg text-slate-300 mb-6'>
                  The Yagava Guru Foundation is the realization of the vision and spiritual guidance
                  of Madhuyagav, a man whose life has been a profound journey of spiritual awakening
                  and selfless service. Chosen by Guru Yaagavar at the age of 14, Madhuyagav has
                  dedicated himself to carrying forward the timeless teachings of the Siddha
                  tradition.
                </p>
                <p className='text-lg text-slate-300'>
                  Under the guidance of Guru Yaagavar, who exists in his astral body, Madhuyagav has
                  become a beacon of light for those seeking spiritual growth and well-being.
                </p>
              </div>
            </div>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300 mb-6'>
                He believes that true spirituality is not just about personal enlightenment, but
                about serving others, fostering community development, and creating a society where
                compassion, wisdom, and peace are the guiding principles.
              </p>
              <p className='text-lg text-slate-300 mb-6'>
                His unwavering commitment to the Siddha Vedic lifestyle is rooted in his deep
                spiritual wisdom, compassionate heart, and desire to uplift humanity. Through years
                of dedicated practice and service, he has developed a profound understanding of the
                ancient wisdom traditions and their relevance to modern life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
            Our Mission
          </h2>
          <div className='max-w-4xl mx-auto'>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300 mb-6'>
                At the Yagava Guru Foundation, we believe that true well-being is achieved when
                body, mind, and soul are in harmony. We are dedicated to teaching the profound
                wisdom of the Siddha tradition to the masses, enabling them to align with their true
                essence and embrace a healthier, more fulfilling lifestyle.
              </p>
              <p className='text-lg text-slate-300 mb-6'>
                Our programs and initiatives are designed to help individuals connect with their
                divine nature while fostering community development and social service. Through our
                various educational programs, charity services, and outreach initiatives, we strive
                to create positive change in society.
              </p>
              <p className='text-lg text-slate-300'>
                We understand the importance of preserving and promoting the ancient wisdom of the
                Siddha tradition while making it accessible and relevant to contemporary life. Our
                approach combines traditional teachings with modern understanding, creating a bridge
                between ancient wisdom and present-day needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
            Our Legacy
          </h2>
          <div className='max-w-4xl mx-auto'>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300 mb-6'>
                Madhuyagav's legacy is one of service, compassion, and spiritual transformation.
                Through the Yagava Guru Foundation, he continues to inspire individuals worldwide to
                live harmoniously, spiritually, and with a sense of responsibility toward the world
                around them.
              </p>
              <p className='text-lg text-slate-300'>
                The foundation's work extends beyond spiritual teachings to include practical
                initiatives that address the needs of communities, particularly focusing on
                education, healthcare, and social welfare. We believe that spiritual growth goes
                hand in hand with service to humanity, and this belief guides all our activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
