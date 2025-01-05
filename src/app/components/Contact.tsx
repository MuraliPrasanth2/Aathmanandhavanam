'use client';

import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInfoCircle,
  FaMoon,
  FaCalendarAlt,
} from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-slate-950'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-slate-900/50 rounded-lg p-4 md:p-8 shadow-2xl border border-slate-800/50'>
            <div className='text-center mb-12 md:mb-16'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl text-primary-gold mb-4 font-semibold px-2'>
                Visit & Contact
              </h2>
              <div className='w-24 h-1 bg-primary-gold mx-auto rounded-full opacity-50'></div>
            </div>

            {/* Visitor Information */}
            <div className='mb-16'>
              <div className='flex items-center gap-3 mb-6'>
                <FaInfoCircle className='text-2xl text-primary-gold' />
                <h3 className='text-2xl text-white font-medium'>Visitor Permission</h3>
              </div>
              <div className='prose prose-lg prose-invert ml-9'>
                <p className='text-slate-300 mb-6 font-medium'>
                  Visitors are allowed only with prior permission.
                </p>
                <p className='text-slate-300'>
                  To ensure a serene and focused spiritual environment, we kindly request all
                  visitors to obtain prior permission before coming to Aathmanathavanam. This is to
                  maintain the sanctity of the sacred space and ensure that everyone has a
                  meaningful experience.
                </p>
              </div>
            </div>

            {/* Darshan Timings */}
            <div className='mb-16'>
              <div className='flex items-center gap-3 mb-6'>
                <FaClock className='text-2xl text-primary-gold' />
                <h3 className='text-2xl text-white font-medium'>Darshan Timings</h3>
              </div>
              <div className='space-y-6 text-slate-300 ml-9'>
                <div className='flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg'>
                  <FaClock className='text-xl text-primary-gold' />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 flex-1'>
                    <span className='font-medium'>Daily:</span>
                    <span>5:00 PM to 6:00 PM</span>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg'>
                  <FaMoon className='text-xl text-primary-gold' />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 flex-1'>
                    <span className='font-medium'>Full Moon Days:</span>
                    <span>5:00 PM to 8:30 PM</span>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg'>
                  <FaCalendarAlt className='text-xl text-primary-gold' />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 flex-1'>
                    <span className='font-medium'>Krishnapacha Ashtami Day:</span>
                    <span>11:00 AM to 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className='mb-16'>
              <div className='flex items-center gap-3 mb-6'>
                <FaPhoneAlt className='text-2xl text-primary-gold' />
                <h3 className='text-2xl text-white font-medium'>Contact Information</h3>
              </div>
              <div className='space-y-6 text-slate-300 ml-9'>
                <div className='flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg'>
                  <FaPhoneAlt className='text-xl text-primary-gold mt-1 shrink-0' />
                  <div className='space-y-2'>
                    <a
                      href='tel:+919489509305'
                      className='block hover:text-primary-gold transition'
                    >
                      +91 9489509305
                    </a>
                    <a
                      href='tel:+918870744988'
                      className='block hover:text-primary-gold transition'
                    >
                      +91 8870744988
                    </a>
                  </div>
                </div>
                <div className='flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg'>
                  <FaEnvelope className='text-xl text-primary-gold mt-1 shrink-0' />
                  <div className='break-words'>
                    <a
                      href='mailto:Aathmanathavanam@gmail.com'
                      className='hover:text-primary-gold transition inline-block'
                    >
                      Aathmanathavanam
                      <wbr />
                      @gmail.com
                    </a>
                  </div>
                </div>
                <div className='flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg'>
                  <FaMapMarkerAlt className='text-xl text-primary-gold mt-1 shrink-0' />
                  <address className='text-slate-300 not-italic'>
                    Aathmanathavanam
                    <br />
                    Thadakai Malai, Western Ghats
                    <br />
                    Near Kottur Malayandipattanam
                    <br />
                    Tamil Nadu, India
                  </address>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className='text-center bg-slate-800/30 p-6 rounded-lg'>
              <p className='text-slate-300'>
                Please make sure to contact us in advance to schedule your visit. We look forward to
                welcoming you and sharing the wisdom and tranquility of Aathmanathavanam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
