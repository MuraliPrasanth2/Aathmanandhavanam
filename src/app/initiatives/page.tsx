'use client';

import Image from 'next/image';
import SlideReveal from '../components/SlideReveal';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function InitiativesPage() {
  return (
    <main className='min-h-screen bg-slate-950'>
      <Navigation />

      {/* Hero Section */}
      <section className='relative py-32 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Meditation.jpg'
            alt='Initiatives Background'
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
                Our Initiatives
              </h1>
            </SlideReveal>
            <SlideReveal width='100%' delay={0.2}>
              <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
                Discover how we are making a difference in communities through our various programs
                and initiatives.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* Siddha Vedic Education */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Promoting Siddha Vedic Education
            </h2>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300 mb-6'>
                At the core of our mission is the promotion of the Siddha Vedic lifestyle, which
                emphasizes spiritual growth, physical well-being, and mental peace. Through various
                educational programs, we offer insights into the practices and teachings that have
                guided generations of seekers.
              </p>
              <p className='text-lg text-slate-300'>
                We believe that by adopting a Siddha Vedic lifestyle, individuals can elevate their
                consciousness and experience a deeper connection with the universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Charity Services */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Community Charity Services
            </h2>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300'>
                In times of crisis, the foundation stands strong in its commitment to service.
                During the COVID-19 lockdown, the foundation provided more than 10,000 grocery
                packages and fresh vegetables to families in need across several tribal settlements,
                including Vellimudi, Nedungundram, Nagaruthu, and Kattupatti. Our commitment to the
                welfare of the marginalized and underserved communities continues to be one of the
                cornerstone activities of the foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kosala and Animal Welfare */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Kosala and Animal Welfare
            </h2>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300'>
                The foundation proudly maintains a Kosala (a sacred cow shelter), dedicated to the
                care and well-being of desi cows. We believe in the spiritual importance of
                protecting these sacred animals and ensuring their safe and healthy living.
              </p>
              <p className='text-lg text-slate-300'>
                The cow is considered a symbol of purity, prosperity, and divine energy in the
                Siddha and Vedic traditions, and our Kosala serves as a sanctuary for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tribal Outreach */}
      <section className='py-20 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Tribal Outreach and Empowerment
            </h2>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300'>
                We understand the importance of supporting the growth and development of tribal
                children. To this end, the foundation runs personality development and social
                awareness programs for children in tribal areas, helping them realize their
                potential and fostering self-confidence.
              </p>
              <p className='text-lg text-slate-300'>
                These initiatives aim to build strong, empowered individuals capable of contributing
                to society while staying connected to their cultural roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className='py-20 bg-slate-950'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
              Education: Nursery and Primary School
            </h2>
            <div className='prose prose-lg prose-invert mx-auto'>
              <p className='text-lg text-slate-300'>
                Our nursery and primary school provides quality education at a minimal cost of ₹5000
                per year. We believe that education is the key to transforming lives, and through
                this school, we offer children a blend of modern knowledge and traditional values,
                ensuring they grow up with a deep understanding of their heritage and a strong
                foundation for future success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Button */}
      <section className='py-12 bg-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <p className='text-lg text-slate-300 mb-8'>
              Want to learn more about our initiatives or get involved?
            </p>
            <Link
              href='/contact'
              className='inline-block px-8 py-3 bg-purple-900 text-slate-100 rounded-sm hover:bg-primary-gold/90 transition-colors font-semibold'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
