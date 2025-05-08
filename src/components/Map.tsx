"use client";

import React from 'react';

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className="container">
      <h2 className="section-title">Visit Our Clinic</h2>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Location</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">0720.123.123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-gray-600">Saturday: 9:00 - 14:00</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="h-96 md:h-full w-full relative bg-gray-100 flex flex-col items-center justify-center p-4">
              {/* Static map representation with a link to Google Maps */}
              <div className="w-full h-full bg-blue-50 rounded-lg shadow-inner flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" className="text-primary"/>
                    <circle cx="50" cy="50" r="30" fill="currentColor" className="text-primary"/>
                    <circle cx="50" cy="50" r="20" fill="white"/>
                    <circle cx="50" cy="50" r="10" fill="currentColor" className="text-primary"/>
                  </svg>
                </div>
                
                <svg className="h-16 w-16 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                
                <h3 className="text-xl font-bold text-primary mb-2">SmileCare Dental Clinic</h3>
                <p className="text-gray-600 text-center mb-6">{address}</p>
                
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
