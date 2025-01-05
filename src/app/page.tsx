'use client';

import { Contact } from './components/Contact';
import Navigation from './components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-[90vh] overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/logo.png'
            alt='Aathmanathavanam'
            fill
            className='object-contain'
            priority
            quality={100}
            sizes='100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80'></div>
        </div>
        <div className='relative z-10 h-full flex items-center justify-center pt-32'>
          <div className='container mx-auto px-4 text-center space-y-12'>
            <div className='space-y-10'>
              <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white/60'>
                Welcome to Aathmanathavanam
              </h1>
              <p className='text-lg sm:text-xl md:text-2xl text-white/80 font-medium max-w-3xl mx-auto tracking-wide'>
                A Sacred Path to Spiritual Enlightenment
              </p>
            </div>
            <div className='max-w-xl mx-auto pt-6'>
              <p className='text-sm md:text-base text-white/70 leading-relaxed'>
                Nestled in the serene foothills of Thadakai Malai, Aathmanathavanam is a spiritual
                sanctuary where ancient wisdom meets modern seekers. Experience the profound
                teachings of the Siddha tradition in an environment of divine tranquility.
              </p>
            </div>
            <div className='pt-4'>
              <a
                href='#contact'
                className='inline-block px-6 py-2 bg-primary-gold text-slate-900 font-semibold rounded-md transition-colors duration-300 hover:bg-white hover:text-primary-gold shadow-md text-base'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/founder.jpeg'
                    alt='Guru Nataraja Yagava'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>Our Divine Legacy</h2>
                  <div className='prose prose-lg prose-invert'>
                    <p className='text-slate-300 mb-6'>
                      Guru Nataraja Yagava is a revered Siddhar and timeless spiritual master, a
                      direct disciple of Thirumoolar. Transcending the physical realm in his astral
                      body, he has guided seekers for over 3,000 years through profound spiritual
                      teachings.
                    </p>
                    <p className='text-slate-300 mb-6'>
                      Under Madhuyaagavar&apos;s leadership, chosen at age 14 by Guru Nataraja
                      Yagava, Aathmanathavanam continues this sacred lineage, offering
                      transformative teachings that integrate spiritual wisdom with holistic
                      well-being.
                    </p>
                    <Link
                      href='/about'
                      className='inline-block mt-4 text-primary-gold hover:text-white transition-colors duration-300'
                    >
                      Learn more about our Divine Legacy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Spaces Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>Sacred Spaces</h2>
                  <div className='prose prose-lg prose-invert'>
                    <p className='text-slate-300 mb-6'>
                      Our sacred prayer complex is home to Samukthiyambikai, a divine disciple of
                      Guru Nataraja Yagavar who lived as a princess 700 years ago and now exists in
                      her astral body. The complex is also blessed by the deities of Kaalasamhaara
                      Bairavar and Sarabeeswarar.
                    </p>
                    <p className='text-slate-300 mb-6'>
                      These sacred spaces provide a peaceful environment for meditation, prayer, and
                      divine connection, where the profound energies of these deities guide devotees
                      toward spiritual healing and enlightenment.
                    </p>
                    <Link
                      href='/sacred-spaces'
                      className='inline-block mt-4 text-primary-gold hover:text-white transition-colors duration-300'
                    >
                      Explore our Sacred Spaces →
                    </Link>
                  </div>
                </div>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/Samukthiyaambikai.jpeg'
                    alt='Sacred Prayer Complex'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/AadhanaranayakiUdanamarAathisankarar.jpeg'
                    alt='Aadhisankarar Temple'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>Aadhisankarar Temple</h2>
                  <div className='prose prose-lg prose-invert'>
                    <p className='text-slate-300 mb-6'>
                      Located just 7 kilometers away in Kottur Malayandipattanam, the Aadhisankarar
                      Temple (Moola Kovil) is our spiritual foundation. The temple houses the sacred
                      statues of Aadhi Amaranayaki and Aadhisankarar, embodying the divine union of
                      Shakti and Shiva.
                    </p>
                    <p className='text-slate-300 mb-6'>
                      Experience the miraculous manifestation of divine Jothi during MahaShivaratri
                      and witness the transformative power of ancient wisdom in this sacred space.
                    </p>
                    <Link
                      href='/temple'
                      className='inline-block mt-4 text-primary-gold hover:text-white transition-colors duration-300'
                    >
                      Visit the Aadhisankarar Temple →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Presence Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>Divine Presence</h2>
                  <div className='prose prose-lg prose-invert'>
                    <p className='text-slate-300 mb-6'>
                      The sacred statues of Aadhi Amaranayaki and Aadhisankarar are not mere idols
                      but divine embodiments that serve as vessels of grace, healing, and spiritual
                      enlightenment. Their powerful presence has brought profound transformation to
                      the lives of countless devotees.
                    </p>
                    <p className='text-slate-300 mb-6'>
                      Together, they represent the eternal union of Shakti (divine feminine energy)
                      and Shiva (divine masculine energy), symbolizing the cosmic balance that
                      sustains the universe. Their divine union guides devotees toward spiritual
                      harmony and self-realization.
                    </p>
                    <Link
                      href='/temple'
                      className='inline-block mt-4 text-primary-gold hover:text-white transition-colors duration-300'
                    >
                      Learn more about the Divine Statues →
                    </Link>
                  </div>
                </div>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/KaalasamharaBairavar.jpeg'
                    alt='Divine Statues'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Journey Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/Aathmavathanam.jpeg'
                    alt='Spiritual Journey'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>Your Spiritual Journey</h2>
                  <div className='prose prose-lg prose-invert'>
                    <p className='text-slate-300 mb-6'>
                      Whether you are new to spiritual practices or are on a lifelong journey of
                      self-discovery, we invite you to explore the profound teachings of the Siddhas
                      and experience the blessings of our sacred deities.
                    </p>
                    <p className='text-slate-300 mb-6'>
                      Let Aathmanathavanam be your sanctuary for spiritual growth, peace, and
                      transformation. Here, you can reconnect with your true essence amidst the
                      serene surroundings of the Western Ghats.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                      <Link
                        href='/sacred-spaces'
                        className='inline-block text-primary-gold hover:text-white transition-colors duration-300'
                      >
                        Discover Sacred Spaces →
                      </Link>
                      <Link
                        href='/contact'
                        className='inline-block text-primary-gold hover:text-white transition-colors duration-300'
                      >
                        Plan Your Visit →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
