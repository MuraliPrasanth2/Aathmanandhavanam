'use client';

export default function ContactSection() {
  return (
    <section id='contact' className='py-20 bg-slate-950'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-semibold text-white/50 mb-12 text-center'>
          Contact Us
        </h2>
        <p className='text-lg text-slate-300 text-center mb-12'>
          To learn more about our programs, or to contribute in any way, please get in touch with us
          through our contact details below:
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
          {/* Foundation Information */}
          <div className='bg-slate-900 rounded-sm shadow-lg p-8'>
            <h3 className='text-2xl font-bold text-white/50 mb-6'>
              Foundation Contact Information
            </h3>
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

          <div className='bg-slate-900 rounded-sm shadow-lg p-8'>
            <p className='text-slate-300'>
              We welcome you to reach out for any inquiries or to get involved with our programs and
              initiatives. We look forward to connecting with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
