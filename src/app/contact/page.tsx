'use client';

import Image from 'next/image';
import SlideReveal from '../components/SlideReveal';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-32 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Meditation.jpg'
            alt='Contact Background'
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
                Contact Us
              </h1>
            </SlideReveal>
            <SlideReveal width='100%' delay={0.2}>
              <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
                We welcome your inquiries and look forward to connecting with you. Reach out to us
                to learn more about our programs or to get involved with our initiatives.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Additional Information */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Ways to Get Involved
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-slate-800/50 p-8 rounded-lg'>
                <h3 className='text-2xl text-primary-gold mb-4'>Volunteer With Us</h3>
                <p className='text-slate-300 mb-4'>
                  Join our team of dedicated volunteers and help make a difference in the community.
                  We have various opportunities available across our different initiatives.
                </p>
                <ul className='text-slate-300 list-disc list-inside space-y-2'>
                  <li>Community service programs</li>
                  <li>Educational initiatives</li>
                  <li>Animal welfare activities</li>
                  <li>Tribal outreach programs</li>
                </ul>
              </div>
              <div className='bg-slate-800/50 p-8 rounded-lg'>
                <h3 className='text-2xl text-primary-gold mb-4'>Support Our Cause</h3>
                <p className='text-slate-300 mb-4'>
                  Your support helps us continue our mission of serving humanity and preserving
                  ancient wisdom. There are many ways you can contribute:
                </p>
                <ul className='text-slate-300 list-disc list-inside space-y-2'>
                  <li>Make a donation</li>
                  <li>Sponsor our programs</li>
                  <li>Provide resources</li>
                  <li>Share our message</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Visit Our Foundation
            </h2>
            <div className='text-center'>
              <p className='text-lg text-slate-300 mb-6'>
                We welcome visitors to our foundation to learn more about our work and participate
                in our programs.
              </p>
              <div className='inline-block text-left'>
                <p className='text-slate-300 mb-2'>
                  <strong className='text-primary-gold'>Address:</strong>
                  <br />
                  19C Jeyaprakash Street
                  <br />
                  Chellamuthu Nagar
                  <br />
                  Kottur Malayandipattanam
                  <br />
                  Pollachi, Tamil Nadu - 642114
                </p>
                <p className='text-slate-300 mb-2'>
                  <strong className='text-primary-gold'>Phone:</strong>{' '}
                  <a href='tel:+918870744988' className='hover:text-primary-gold transition-colors'>
                    +91 8870744988
                  </a>
                </p>
                <p className='text-slate-300'>
                  <strong className='text-primary-gold'>Email:</strong>{' '}
                  <a
                    href='mailto:Yagavagurufoundation@gmail.com'
                    className='hover:text-primary-gold transition-colors'
                  >
                    Yagavagurufoundation@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
