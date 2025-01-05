'use client';

import Link from 'next/link';
import Image from 'next/image';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import SlideReveal from './components/SlideReveal';
import { smoothScroll } from './utils/smoothScroll';

export default function Home() {
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
                Welcome to Aathmanathavanam
              </h1>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.2}>
              <p className='text-2xl md:text-3xl mb-6 text-white/60'>
                A Sacred Path to Spiritual Enlightenment
              </p>
            </SlideReveal>

            <SlideReveal width='100%' delay={0.4}>
              <p className='text-sm md:text-xl text-white/70 max-w-2xl mx-auto mb-8'>
                Nestled in the serene foothills of Thadakai Malai in the Western Ghats,
                Aathmanathavanam is a spiritual sanctuary where ancient wisdom meets modern seekers.
                Experience the profound teachings of the Siddha tradition in a space of divine
                tranquility.
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
          <h2 className='section-title text-center text-white/50 mb-12'>Our Divine Legacy</h2>
          <div className='max-w-4xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='relative h-[400px] rounded-lg overflow-hidden'>
                <Image
                  src='/images/founder.jpeg'
                  alt='Madhuyaagavar'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              <div>
                <h3 className='text-xl text-primary-gold mb-4'>Guru Nataraja Yagava</h3>
                <p className='text-md font-montserrat text-slate-300 mb-6'>
                  A revered Siddhar and timeless spiritual master, Guru Nataraja Yagava is a direct
                  disciple of Thirumoolar. Transcending the physical realm in his astral body, he
                  has guided seekers for over 3,000 years.
                </p>
                <h3 className='text-xl text-primary-gold mb-4'>Madhuyaagavar</h3>
                <p className='text-md text-slate-300 mb-6'>
                  Chosen at the age of 14 by Guru Nataraja Yagava, Madhuyaagavar carries forward the
                  sacred teachings of the Siddha tradition, helping individuals explore the profound
                  connections between body, mind, and soul.
                </p>
                <div className='flex justify-start mt-8'>
                  <Link
                    href='/about'
                    className='inline-block px-6 py-2 bg-purple-900 text-slate-100 rounded-sm hover:bg-primary-gold/90 transition-colors font-semibold'
                  >
                    Learn More About Our Legacy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white/50 mb-12'>Our Sacred Purpose</h2>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-md font-montserrat text-slate-300 mb-6'>
              Aathmanathavanam is more than just a place of learning; it is a spiritual retreat for
              individuals on a quest for holistic well-being. The Siddha philosophy integrates
              spiritual teachings with practices that promote physical, mental, and emotional
              health.
            </p>
            <p className='text-md text-slate-300'>
              Under Madhuyaagavar's leadership, Aathmanathavanam serves as a transformative path for
              those who wish to unlock the full potential of their consciousness and align with
              their true essence.
            </p>
          </div>
        </div>
      </section>

      {/* Sacred Spaces Section */}
      <section id='initiatives' className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title text-center text-white/50 mb-12'>Sacred Spaces</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Prayer Complex</h3>
              <p className='text-slate-300'>
                A sacred space consecrated to Samukthiyambikai, housing divine deities including
                Kaalasamhaara Bairavar and Sarabeeswarar.
              </p>
            </div>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Aadhisankarar Temple</h3>
              <p className='text-slate-300'>
                Located in Kottur Malayandipattanam, this temple serves as the spiritual foundation
                of Aathmanathavanam, radiating divine energy and blessings.
              </p>
            </div>
            <div className='bg-slate-900/50 p-6 rounded-lg'>
              <h3 className='text-xl text-primary-gold mb-4'>Sacred Statues</h3>
              <p className='text-slate-300'>
                Divine embodiments of Aadhi Amaranayaki and Aadhisankarar, offering blessings and
                spiritual guidance to devotees.
              </p>
            </div>
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/sacred-spaces'
              className='inline-block px-8 py-3 bg-purple-900 text-slate-100 rounded-sm hover:bg-primary-gold/90 transition-colors font-semibold'
            >
              Explore Our Sacred Spaces
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className='py-20 bg-slate-950' id='get-involved'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12'>
              Join Us on the Path to Enlightenment
            </h2>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300 mb-12'>
                Aathmanathavanam welcomes all seekers who wish to explore the profound teachings of
                the Siddha tradition. Whether you seek spiritual guidance, inner peace, or a deeper
                connection with the divine, our sacred spaces offer a sanctuary for your journey.
              </p>
              <p className='text-lg text-slate-300 mb-12'>
                Through meditation, prayer, and the blessings of our divine deities, we invite you
                to experience the transformative power of ancient wisdom in a space where spiritual
                enlightenment flourishes.
              </p>
              <h3 className='text-2xl text-white/50 mb-8'>Ways to Connect</h3>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-slate-900/50 p-6 rounded-lg'>
                  <h3 className='text-xl text-primary-gold mb-4'>Visit the Temple</h3>
                  <p className='text-slate-300'>
                    Experience the divine presence at the Aadhisankarar Temple and receive blessings
                    from our sacred deities.
                  </p>
                </div>
                <div className='bg-slate-900/50 p-6 rounded-lg'>
                  <h3 className='text-xl text-primary-gold mb-4'>Spiritual Guidance</h3>
                  <p className='text-slate-300'>
                    Seek guidance and wisdom through our spiritual programs and teachings.
                  </p>
                </div>
                <div className='bg-slate-900/50 p-6 rounded-lg'>
                  <h3 className='text-xl text-primary-gold mb-4'>Sacred Rituals</h3>
                  <p className='text-slate-300'>
                    Participate in divine ceremonies and experience the transformative power of
                    ancient rituals.
                  </p>
                </div>
                <div className='bg-slate-900/50 p-6 rounded-lg'>
                  <h3 className='text-xl text-primary-gold mb-4'>Community</h3>
                  <p className='text-slate-300'>
                    Join our spiritual community and connect with fellow seekers on the path to
                    enlightenment.
                  </p>
                </div>
              </div>
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
            <p>© 2024 Aathmanathavanam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
