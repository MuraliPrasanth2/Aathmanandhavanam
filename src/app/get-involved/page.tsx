'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import SlideReveal from '../components/SlideReveal';
import Footer from '../components/Footer';

export default function GetInvolvedPage() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-32 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Meditation.jpg'
            alt='Get Involved Background'
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
                Join Us in Serving Humanity
              </h1>
            </SlideReveal>
            <SlideReveal width='100%' delay={0.2}>
              <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
                Together we can create a world where compassion, wisdom, and peace reign supreme.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300 mb-12'>
                The Yagava Guru Foundation welcomes all those who are interested in exploring the
                profound teachings of the Siddhas while making a tangible impact in the world.
                Whether through our educational programs, charity initiatives, or spiritual
                retreats, we offer various avenues for individuals to grow and contribute.
              </p>
              <p className='text-lg text-slate-300 mb-12'>
                By following the principles of selfless service, spiritual growth, and holistic
                well-being, we believe that together we can create a world where compassion, wisdom,
                and peace reign supreme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Ways to Get Involved
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-slate-900/50 p-8 rounded-lg'>
                <h3 className='text-xl text-primary-gold mb-4'>Donate</h3>
                <p className='text-slate-300'>
                  Support our charity initiatives, including the distribution of food packages and
                  care for animals.
                </p>
              </div>
              <div className='bg-slate-900/50 p-8 rounded-lg'>
                <h3 className='text-xl text-primary-gold mb-4'>Volunteer</h3>
                <p className='text-slate-300'>
                  Join us in our outreach programs, helping communities in need.
                </p>
              </div>
              <div className='bg-slate-900/50 p-8 rounded-lg'>
                <h3 className='text-xl text-primary-gold mb-4'>Learn</h3>
                <p className='text-slate-300'>
                  Attend our workshops and classes on the Siddha Vedic lifestyle, or enroll in our
                  educational programs.
                </p>
              </div>
              <div className='bg-slate-900/50 p-8 rounded-lg'>
                <h3 className='text-xl text-primary-gold mb-4'>Spread the Word</h3>
                <p className='text-slate-300'>
                  Help us spread awareness of the foundation&apos;s work and mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Contact Us
            </h2>
            <p className='text-lg text-slate-300 text-center mb-12'>
              To learn more about our programs, or to contribute in any way, please get in touch
              with us through our contact details below:
            </p>
            <div className='bg-slate-900/50 p-8 rounded-lg'>
              <div className='space-y-4'>
                <p className='flex items-start gap-3 text-slate-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 flex-shrink-0 text-accent-red'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                  </svg>
                  <span>
                    19C Jeyaprakash Street
                    <br />
                    Chellamuthu Nagar
                    <br />
                    Kottur Malayandipattanam
                    <br />
                    Pollachi, Tamil Nadu - 642114
                  </span>
                </p>

                <p className='flex items-center gap-3 text-slate-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 flex-shrink-0 text-accent-red'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                    />
                  </svg>
                  <a href='tel:+918870744988' className='hover:text-primary-gold transition-colors'>
                    +91 8870744988
                  </a>
                </p>

                <p className='flex items-center gap-3 text-slate-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 flex-shrink-0 text-accent-red'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                  </svg>
                  <a
                    href='mailto:Yagavagurufoundation@gmail.com'
                    className='hover:text-primary-gold transition-colors'
                  >
                    Yagavagurufoundation@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className='text-center mt-12'>
              <p className='text-lg text-slate-300'>
                We welcome you to reach out for any inquiries or to get involved with our programs
                and initiatives. We look forward to connecting with you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
