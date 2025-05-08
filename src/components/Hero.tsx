"use client";

import React from 'react';
import Image from 'next/image';
import AppointmentForm from './AppointmentForm';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/img/jonathan-borba-v_2FRXEba94-unsplash.jpg" 
          alt="Dental care"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="container relative py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
              Professional Dental Care for Your Family
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              We provide comprehensive dental services with a gentle touch, 
              ensuring a comfortable experience for patients of all ages.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn bg-white text-primary hover:bg-secondary">
                Our Services
              </a>
              <a href="tel:0720123123" className="btn border border-white hover:bg-white/10">
                Call Now
              </a>
            </div>
          </div>
          
          <div id="contact" className="bg-white text-gray-900 rounded-lg shadow-xl p-6">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
