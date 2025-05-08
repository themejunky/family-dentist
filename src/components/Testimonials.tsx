"use client";

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    role: 'Patient',
    quote: "The best dental experience I've ever had! Dr. SmileCare was gentle, thorough, and explained everything clearly. The staff was friendly and the office is beautiful.",
    imageSrc: '/img/reviews/aiony-haust-3TLl_97HNJo-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    role: 'Patient',
    quote: 'I was nervous about my root canal, but the team made me feel comfortable and the procedure was painless. I highly recommend this practice to anyone looking for quality dental care.',
    imageSrc: '/img/reviews/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    role: 'Patient',
    quote: "My children love coming here! The staff is patient and kind with kids, and they make dental visits fun instead of scary. We've found our family dentist for life.",
    imageSrc: '/img/reviews/ivana-cajina-_7LbC5J-jw4-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Cristian Munteanu',
    role: 'Patient',
    quote: 'After years of avoiding the dentist due to anxiety, I finally found a practice where I feel comfortable. The team is professional and the results are amazing!',
    imageSrc: '/img/reviews/charles-etoroma-95UF6LXe-Lo-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Andreea Stanescu',
    role: 'Patient',
    quote: 'The teeth whitening treatment exceeded my expectations. My smile looks natural and bright. Thank you for the excellent service and care!',
    imageSrc: '/img/reviews/ian-dooley-d1UPkiFd04A-unsplash.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="container">
      <h2 className="section-title">What Our Patients Say</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image 
                  src={testimonial.imageSrc} 
                  alt={testimonial.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="mb-4 flex-grow">
              <svg className="h-6 w-6 text-primary opacity-50 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
            
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#contact" className="btn btn-primary">
          Book Your Appointment Today
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
