'use client';

import { Contact } from '../components/Contact';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function Temple() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-[50vh] md:h-[60vh] overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/Aathmavathanam.jpeg'
            alt='Aadhisankarar Temple'
            fill
            className='object-cover'
            priority
            quality={100}
            sizes='100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/60'></div>
        </div>
        <div className='relative z-10 h-full flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-semibold text-white/50 mb-4'>
              Aadhisankarar Temple
            </h1>
            <p className='text-xl text-white/80'>
              The Root of Aathmanathavanam&apos;s Divine Energy
            </p>
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          {/* Temple Introduction */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>The Root of Divine Energy</h2>
                  <div className='prose prose-lg prose-invert max-w-none'>
                    <p className='text-slate-300 mb-6'>
                      Located just 7 kilometers from Aathmanathavanam, in Kottur Malayandipattanam,
                      the Aadhisankarar Temple (Moola Kovil) serves as the spiritual foundation from
                      which Aathmanathavanam emanates its divine energy. This ancient temple is
                      deeply intertwined with the teachings and blessings of Guru Yaagavar, marking
                      the beginning of the sacred journey that has culminated in the spiritual
                      sanctuary of Aathmanathavanam.
                    </p>
                  </div>
                </div>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/AadhanaranayakiUdanamarAathisankarar.jpeg'
                    alt='Aadhisankarar Temple'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sacred Statues Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <h2 className='text-2xl text-primary-gold mb-6'>Sacred Statues</h2>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div className='prose prose-lg prose-invert'>
                  <div className='mb-12'>
                    <h3 className='text-xl text-primary-gold font-semibold mb-4'>
                      The Sacred Statue of Aadhi Amaranayaki
                    </h3>
                    <p className='text-slate-300 mb-6'>
                      Aadhi Amaranayaki, the divine consort of Aadhisankarar, is represented in a
                      consecrated statue that radiates love, compassion, and maternal grace. She
                      embodies the cosmic energy of creation, nurturing, and protection, acting as a
                      spiritual mother who guides devotees with unconditional love.
                    </p>
                    <p className='text-slate-300'>
                      Many have reported transformative experiences while praying before her statue,
                      receiving emotional healing, inner peace, and divine comfort. Aadhi
                      Amaranayaki represents the feminine aspect of the divine, offering spiritual
                      nourishment and guidance to all who approach her with reverence.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-xl text-primary-gold font-semibold mb-4'>
                      The Sacred Statue of Aadhisankarar
                    </h3>
                    <p className='text-slate-300'>
                      The Aadhisankarar statue, consecrated by Guru Yaagavar, is the central deity
                      of the temple. It represents eternal wisdom, spiritual authority, and the
                      transformative power of the Siddha tradition. Aadhisankarar, embodying the
                      essence of Adi Sankara, holds the key to unlocking deep spiritual truths and
                      guiding seekers toward enlightenment.
                    </p>
                  </div>
                </div>
                <div className='relative h-[600px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/Samukthiyaambikai.jpeg'
                    alt='Sacred Statues'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Miracles Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <h2 className='text-2xl text-primary-gold mb-6'>Miracles and Divine Blessings</h2>
              <div className='prose prose-lg prose-invert'>
                <p className='text-slate-300 mb-6'>
                  The Aadhisankarar Temple is renowned for its miraculous occurrences and the divine
                  blessings it bestows upon its devotees. One of the most extraordinary miracles is
                  the manifestation of a divine Jothi (sacred light) on the statue of Aadhisankarar
                  during the 4th Kala Pooja of MahaShivaratri. This ethereal flame is visible to all
                  during the ceremony and is regarded by devotees as a sacred sign of divine
                  protection and grace.
                </p>
                <p className='text-slate-300'>
                  Many seekers who visit the temple share testimonies of miraculous healings,
                  spiritual awakenings, and divine guidance. The energy of the temple helps
                  individuals transcend their limitations, experience profound inner transformation,
                  and receive divine blessings on their path to spiritual liberation.
                </p>
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className='max-w-4xl mx-auto'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <h2 className='text-2xl text-primary-gold mb-6'>The Legacy of Guru Yaagavar</h2>
              <div className='prose prose-lg prose-invert'>
                <p className='text-slate-300'>
                  The spiritual vision of Guru Yaagavar has been instrumental in shaping the
                  Aadhisankarar Temple into a sacred beacon of divine light. Through his teachings,
                  the temple has become a center of wisdom and spiritual power, offering seekers a
                  transformative space for self-realization and spiritual growth. His guidance has
                  preserved the ancient wisdom of the Siddha tradition, providing a profound path
                  for all those who are drawn to the temple&apos;s divine presence.
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
