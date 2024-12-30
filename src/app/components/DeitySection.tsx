import Image from 'next/image';

const deities = [
  {
    id: 1,
    name: 'Sri Kaalasamhara Bairavar',
    tamilName: 'ஸ்ரீ காலசம்ஹார பைரவர்',
    description:
      'The powerful form of Lord Shiva who conquered time itself, bestowing blessings and protection to devotees.',
    imagePath: '/images/KaalasamharaBairavar.jpeg',
  },
  {
    id: 2,
    name: 'Sri Samukthiyaambikai',
    tamilName: 'ஸ்ரீ சமுக்தியாம்பிகை',
    description:
      'The divine mother who grants liberation and spiritual enlightenment to her devotees.',
    imagePath: '/images/Samukthiyaambikai.jpeg',
  },
  {
    id: 3,
    name: 'Sri Aadhanaranaayaki & Aathisankarar',
    tamilName: 'ஸ்ரீ ஆதநாராயணகி & ஆதிசங்கரர்',
    description: 'The divine couple representing cosmic harmony and spiritual wisdom.',
    imagePath: '/images/AadhanaranayakiUdanamarAathisankarar.jpeg',
  },
  {
    id: 4,
    name: 'Sri Aathmavathanam',
    tamilName: 'ஸ்ரீ ஆத்மவதனம்',
    description:
      "The sacred shrine representing the soul's divine connection and spiritual awakening.",
    imagePath: '/images/AAthmavathanam.jpeg',
  },
];

export default function DeitySection() {
  return (
    <section id='deities' className='py-20 bg-slate-950'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title text-center text-white/50'>Our Deities</h2>
        <p className='text-center text-slate-300 mb-12 max-w-2xl mx-auto'>
          Experience the divine presence of our temple&apos;s sacred deities, each embodying unique
          aspects of spiritual enlightenment.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {deities.map((deity) => (
            <div
              key={deity.id}
              className='bg-slate-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300'
            >
              <div className='relative h-64'>
                <Image
                  src={deity.imagePath}
                  alt={deity.name}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-white/50 mb-2'>{deity.name}</h3>
                <p className='text-lg tamil-text text-md text-white/50 mb-3'>{deity.tamilName}</p>
                <p className='text-slate-300 text-sm'>{deity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
