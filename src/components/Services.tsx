"use client";

import React from 'react';
import Image from 'next/image';

const servicesList = [
  {
    id: 1,
    title: 'General Checkup',
    description: 'Comprehensive examination of teeth, gums, and oral tissues with professional cleaning.',
    price: '250 RON',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatment to remove stains and discoloration for a brighter smile.',
    price: '800 RON',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Dental Fillings',
    description: 'Restore damaged or decayed teeth with tooth-colored composite materials.',
    price: '300-500 RON',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Root Canal Treatment',
    description: 'Procedure to treat infection at the center of a tooth, saving it from extraction.',
    price: '800-1200 RON',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Dental Crowns',
    description: 'Custom-made caps that cover damaged teeth to restore shape, size, and strength.',
    price: '1500-2000 RON',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look and function like natural teeth.',
    price: '3500-5000 RON',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div className="container">
      <h2 className="section-title">Our Services & Prices</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="text-primary mr-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="text-lg font-bold text-primary">
              {service.price}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image 
              src="/img/peter-kasprzyk-U1gvhqVQ2kQ-unsplash.jpg" 
              alt="Dental care"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Experienced dental professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>State-of-the-art equipment and techniques</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comfortable and relaxing environment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized treatment plans</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Flexible scheduling and emergency care</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
