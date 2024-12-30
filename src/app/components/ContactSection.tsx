'use client';

import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters long';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters long';
        break;
    }
    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      setIsSubmitting(true);
      try {
        // Add timestamp to the form data
        const submissionData = {
          ...formData,
          timestamp: new Date(),
          status: 'new',
        };

        // Add to Firebase
        await addDoc(collection(db, 'contact_submissions'), submissionData);

        // Show success message
        setShowSuccess(true);
        setSubmitError(null);

        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        setErrors({});

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(
          'There was an error submitting your message. Please try again later or contact us directly via phone.'
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        message: true,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  return (
    <section id='contact' className='py-20 bg-slate-950'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title text-center text-white'>Contact Us</h2>
        <p className='text-center text-slate-300 mb-12 max-w-2xl mx-auto'>
          Get in touch with us for any inquiries about temple services, special pujas, or general
          information.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-slate-900 rounded-lg shadow-lg p-8'>
            <h3 className='text-2xl font-bold text-white mb-6'>Send us a Message</h3>

            {/* Success Message */}
            {showSuccess && (
              <div className='mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg'>
                <p className='text-green-400 text-center'>
                  Thank you for your message! We will get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className='mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg'>
                <p className='text-red-400 text-center'>{submitError}</p>
              </div>
            )}

            <form className='space-y-6' onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor='name' className='block text-slate-300 mb-2'>
                  Name
                </label>
                {touched.name && errors.name && (
                  <p className='text-red-400 text-sm mb-1'>{errors.name}</p>
                )}
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-slate-400 ${
                    touched.name && errors.name ? 'border-red-500' : 'border-slate-700'
                  }`}
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-slate-300 mb-2'>
                  Email
                </label>
                {touched.email && errors.email && (
                  <p className='text-red-400 text-sm mb-1'>{errors.email}</p>
                )}
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-slate-400 ${
                    touched.email && errors.email ? 'border-red-500' : 'border-slate-700'
                  }`}
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-slate-300 mb-2'>
                  Message
                </label>
                {touched.message && errors.message && (
                  <p className='text-red-400 text-sm mb-1'>{errors.message}</p>
                )}
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  rows={4}
                  className={`w-full px-4 py-2 bg-slate-800 border rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-slate-400 ${
                    touched.message && errors.message ? 'border-red-500' : 'border-slate-700'
                  }`}
                ></textarea>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full bg-primary-gold text-slate-900 py-3 rounded-lg transition-colors font-semibold ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-gold/90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Temple Information */}
          <div className='space-y-8'>
            <div className='bg-slate-900 rounded-lg shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>Temple Location</h3>
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
                  123 Temple Street, City Name, State - PIN Code
                </p>
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
                      d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                    />
                  </svg>
                  +91 7397 183 125
                </p>
              </div>
            </div>

            <div className='bg-slate-900 rounded-lg shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>Temple Hours</h3>
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
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  Monday - Sunday: 5:30 AM - 8:30 PM
                </p>
                <p className='text-slate-300 pl-9'>
                  * Special timings during festivals and special occasions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
