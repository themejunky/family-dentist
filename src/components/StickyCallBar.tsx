"use client";

import React from 'react';

interface StickyCallBarProps {
  phoneNumber: string;
  message: string;
}

const StickyCallBar: React.FC<StickyCallBarProps> = ({ phoneNumber, message }) => {
  // Format phone number for the tel: link (remove dots and spaces)
  const formattedPhone = phoneNumber.replace(/[\s.]/g, '');
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white py-3 shadow-lg z-50">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <p className="font-medium mb-2 sm:mb-0">{message}</p>
        <a 
          href={`tel:${formattedPhone}`}
          className="btn bg-white text-primary hover:bg-secondary-dark transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
