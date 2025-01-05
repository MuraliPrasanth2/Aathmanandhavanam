'use client';

import { Contact } from '../components/Contact';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function About() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-[50vh] md:h-[60vh] overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/founder.jpeg'
            alt='Guru Nataraja Yagava'
            fill
            className='object-cover'
            priority
            quality={100}
            sizes='100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/60'></div>
        </div>
        <div className='relative z-10 h-full flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-semibold text-white/50 text-center'>
            Our Divine Legacy
          </h1>
        </div>
      </section>

      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          {/* Guru Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <h2 className='text-3xl text-primary-gold mb-8'>
                Guru Nataraja Yagava: The Eternal Siddhar and Divine Guide
              </h2>
              <div className='prose prose-lg prose-invert max-w-none'>
                <p className='text-slate-300 mb-6'>
                  Guru Nataraja Yagava is a revered Siddhar, widely regarded as a timeless spiritual
                  master. A direct disciple of Thirumoolar, one of the most esteemed saints in the
                  Siddha tradition, Guru Nataraja Yagava transcends the physical realm, existing in
                  his astral body. This extraordinary state of being has enabled him to live for
                  over 3,000 years. His teachings continue to inspire and guide countless seekers,
                  regardless of their background or path.
                </p>
                <p className='text-slate-300'>
                  Guru Nataraja Yagava&apos;s teachings are deeply rooted in the Siddha tradition,
                  blending spiritual enlightenment with holistic healing. His profound connection to
                  Thirumoolar serves as the foundation of his wisdom, allowing him to guide humanity
                  with an unbroken connection to the divine.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>The Chosen Disciple</h2>
                  <div className='prose prose-lg prose-invert max-w-none'>
                    <p className='text-slate-300 mb-6'>
                      At just 14 years old, Guru Nataraja Yagava selected Madhuyaagavar as his
                      disciple, recognizing his rare spiritual potential and deep connection to the
                      Siddha lineage. Under his Guru&apos;s guidance, Madhuyaagavar was chosen to
                      carry forward these sacred teachings, ensuring that the profound wisdom of the
                      Siddhas continues to enlighten and heal generations to come.
                    </p>
                    <p className='text-slate-300'>
                      Guided by the teachings of his Guru, Madhuyaagavar continues to share the
                      timeless insights of the Siddha tradition, helping individuals explore the
                      profound connections between the body, mind, and soul. His work honors the
                      sacred lineage of Siddhas, ensuring that this ancient wisdom remains
                      accessible to modern seekers.
                    </p>
                  </div>
                </div>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/founder.jpeg'
                    alt='Madhuyaagavar'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <h2 className='text-2xl text-primary-gold mb-6'>A Path to Spiritual Enlightenment</h2>
              <div className='prose prose-lg prose-invert'>
                <p className='text-slate-300'>
                  Aathmanathavanam is more than just a place of learning; it is a spiritual retreat
                  for individuals on a quest for holistic well-being. The Siddha philosophy
                  integrates spiritual teachings with practices that promote physical, mental, and
                  emotional health. Under Madhuyaagavar&apos;s leadership, Aathmanathavanam serves
                  as a transformative path for those who wish to unlock the full potential of their
                  consciousness and align with their true essence.
                </p>
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
