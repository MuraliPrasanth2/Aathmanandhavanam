const scheduleItems = [
  {
    id: 1,
    time: '6:00 AM',
    name: 'Morning Puja',
    tamilName: 'காலை பூஜை',
    description: 'Start your day with divine blessings',
  },
  {
    id: 2,
    time: '8:00 AM',
    name: 'Abhishekam',
    tamilName: 'அபிஷேகம்',
    description: 'Sacred bathing ceremony of the deities',
  },
  {
    id: 3,
    time: '12:00 PM',
    name: 'Noon Aarti',
    tamilName: 'நண்பகல் ஆரத்தி',
    description: 'Midday prayer and blessing ceremony',
  },
  {
    id: 4,
    time: '6:00 PM',
    name: 'Evening Puja',
    tamilName: 'மாலை பூஜை',
    description: 'Evening prayer and blessing ceremony',
  },
  {
    id: 5,
    time: '8:00 PM',
    name: 'Night Aarti',
    tamilName: 'இரவு ஆரத்தி',
    description: 'Final prayer of the day',
  },
];

export default function ScheduleSection() {
  return (
    <section id='schedule' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title text-center'>Daily Schedule</h2>
        <p className='text-center text-text-brown/80 mb-12 max-w-2xl mx-auto'>
          Join us in our daily rituals and ceremonies to experience divine blessings and spiritual
          peace.
        </p>

        <div className='max-w-4xl mx-auto'>
          {scheduleItems.map((item) => (
            <div
              key={item.id}
              className='bg-white rounded-lg shadow-md mb-4 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-lg transition-shadow'
            >
              <div className='md:w-32 flex-shrink-0'>
                <span className='text-lg font-bold text-accent-red'>{item.time}</span>
              </div>

              <div className='flex-grow'>
                <h3 className='text-xl font-bold text-text-brown mb-1'>{item.name}</h3>
                <p className='text-lg tamil-text text-text-brown/90 mb-2'>{item.tamilName}</p>
                <p className='text-text-brown/80'>{item.description}</p>
              </div>

              <div className='md:w-32 flex-shrink-0 flex justify-end'>
                <div className='w-3 h-3 rounded-full bg-primary-gold'></div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='text-text-brown/80 mb-4'>* Temple opens at 5:30 AM and closes at 8:30 PM</p>
          <p className='text-text-brown/80'>
            Special puja timings may vary during festivals and special occasions
          </p>
        </div>
      </div>
    </section>
  );
}
