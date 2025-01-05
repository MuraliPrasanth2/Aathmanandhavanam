'use client';

import { Contact } from '../components/Contact';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function SacredSpaces() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative h-[50vh] md:h-[60vh] overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/images/Meditation.jpg'
            alt='Sacred Spaces'
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
              Sacred Sanctuary
            </h1>
            <p className='text-xl text-white/80'>A Spiritual Retreat in the Western Ghats</p>
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          {/* Location Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='prose prose-lg prose-invert max-w-none'>
                <p className='text-slate-300 mb-6'>
                  Aathmanathavanam is nestled in the serene foothills of Thadakai Malai, a region
                  within the Western Ghats. Surrounded by the natural beauty and tranquility of the
                  Western Ghats, this sacred space provides the perfect environment for spiritual
                  seekers to immerse themselves in the profound teachings of the Siddha tradition.
                </p>
                <p className='text-slate-300'>
                  Located in a peaceful and remote area, Aathmanathavanam offers an ideal sanctuary
                  for those wishing to reconnect with their true essence amidst nature&apos;s
                  purity. The foothills of Thadakai Malai enhance the spiritual energy of the
                  center, further enriching its sacred atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Prayer Complex Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/Samukthiyaambikai.jpeg'
                    alt='Samukthiyambikai'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div>
                  <h2 className='text-2xl text-primary-gold mb-6'>The Sacred Prayer Complex</h2>
                  <div className='prose prose-lg prose-invert max-w-none'>
                    <p className='text-slate-300 mb-6'>
                      Aathmanathavanam houses a sacred prayer complex consecrated to
                      Samukthiyambikai, a divine disciple of Guru Nataraja Yagavar. Samukthiyambikai
                      is believed to have lived around 700 years ago as a princess, and now she
                      exists in her astral body. Her divine presence continues to inspire and guide
                      all those who visit Aathmanathavanam.
                    </p>
                    <p className='text-slate-300'>
                      Alongside Samukthiyambikai, the deities of Kaalasamhaara Bairavar and
                      Sarabeeswarar have been consecrated in the complex. These deities hold deep
                      significance within the Siddha and Shaiva traditions, offering blessings of
                      protection, spiritual strength, and liberation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divine Statues Section */}
          <div className='max-w-4xl mx-auto mb-20'>
            <div className='bg-slate-900/50 rounded-lg p-8'>
              <h2 className='text-2xl text-primary-gold mb-6'>Sacred Statues</h2>

              <div className='grid md:grid-cols-2 gap-8 items-start mb-12'>
                <div className='prose prose-lg prose-invert'>
                  <div className='mb-12'>
                    <h3 className='text-xl text-primary-gold font-semibold mb-4'>
                      Aadhi Amaranayaki: Divine Manifestation of Compassion
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
                      Aadhisankarar: Divine Presence of Wisdom
                    </h3>
                    <p className='text-slate-300 mb-6'>
                      The Aadhisankarar statue, consecrated by Guru Yaagavar, is the central deity
                      of the temple. It represents eternal wisdom, spiritual authority, and the
                      transformative power of the Siddha tradition. Aadhisankarar, embodying the
                      essence of Adi Sankara, holds the key to unlocking deep spiritual truths and
                      guiding seekers toward enlightenment.
                    </p>
                    <p className='text-slate-300'>
                      Many devotees who meditate before this statue experience profound spiritual
                      awakenings, inner peace, and guidance on their personal journeys. The statue
                      radiates an extraordinary divine vibration, offering devotees a direct channel
                      for blessings, divine guidance, and protection.
                    </p>
                  </div>
                </div>

                <div className='relative h-[600px] rounded-lg overflow-hidden'>
                  <Image
                    src='/images/AadhanaranayakiUdanamarAathisankarar.jpeg'
                    alt='Aadhi Amaranayaki and Aadhisankarar'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>

              {/* Divine Connection Section */}
              <div>
                <h2 className='text-2xl text-primary-gold mb-6'>The Divine Union</h2>
                <div className='prose prose-lg prose-invert'>
                  <p className='text-slate-300'>
                    The statues of Aadhi Amaranayaki and Aadhisankarar are inseparable in their
                    divine purpose. Together, they represent the eternal union of Shakti (divine
                    feminine energy) and Shiva (divine masculine energy), symbolizing the cosmic
                    balance that sustains the universe. Their divine union in the temple guides
                    devotees toward spiritual harmony, inner peace, and self-realization.
                  </p>
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
