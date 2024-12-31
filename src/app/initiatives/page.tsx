'use client';

import Image from 'next/image';
import SlideReveal from '../components/SlideReveal';
import Navigation from '../components/Navigation';

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
              Siddha Vedic Education
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
                consciousness and experience a deeper connection with the universe. Our programs
                include meditation workshops, spiritual discourses, and practical sessions on
                incorporating ancient wisdom into modern life.
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
              <p className='text-lg text-slate-300 mb-6'>
                In times of crisis, the foundation stands strong in its commitment to service.
                During the COVID-19 lockdown, we provided more than 10,000 grocery packages and
                fresh vegetables to families in need across several tribal settlements, including
                Vellimudi, Nedungundram, Nagaruthu, and Kattupatti.
              </p>
              <p className='text-lg text-slate-300'>
                Our commitment to the welfare of marginalized and underserved communities continues
                to be one of the cornerstone activities of the foundation. We regularly organize
                food distribution drives, medical camps, and other support services for those in
                need.
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
              <p className='text-lg text-slate-300 mb-6'>
                The foundation proudly maintains a Kosala (a sacred cow shelter), dedicated to the
                care and well-being of desi cows. We believe in the spiritual importance of
                protecting these sacred animals and ensuring their safe and healthy living.
              </p>
              <p className='text-lg text-slate-300'>
                The cow is considered a symbol of purity, prosperity, and divine energy in the
                Siddha and Vedic traditions, and our Kosala serves as a sanctuary for them. We
                provide proper care, nutrition, and medical attention to all the animals in our
                shelter.
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
              <p className='text-lg text-slate-300 mb-6'>
                We understand the importance of supporting the growth and development of tribal
                children. To this end, the foundation runs personality development and social
                awareness programs for children in tribal areas, helping them realize their
                potential and fostering self-confidence.
              </p>
              <p className='text-lg text-slate-300'>
                These initiatives aim to build strong, empowered individuals capable of contributing
                to society while staying connected to their cultural roots. Our programs focus on
                education, skill development, and cultural preservation.
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
              <p className='text-lg text-slate-300 mb-6'>
                Our nursery and primary school provides quality education at a minimal cost of ₹5000
                per year. We believe that education is the key to transforming lives, and through
                this school, we offer children a blend of modern knowledge and traditional values.
              </p>
              <p className='text-lg text-slate-300'>
                Our curriculum ensures that children grow up with a deep understanding of their
                heritage while gaining a strong foundation for future success. We focus on holistic
                development, combining academic excellence with character building and cultural
                awareness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
