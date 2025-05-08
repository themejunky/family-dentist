"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { submitAppointment, AppointmentData } from '@/utils/supabase';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    setFormStatus({
      type: 'submitting',
      message: 'Sending your appointment request...'
    });

    try {
      // Submit appointment data using our utility function
      await submitAppointment(formData as AppointmentData);
      
      // Success message
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your appointment request has been sent. We will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again or call us directly.'
      });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary font-serif">Book Your Appointment</h2>
      <p className="text-gray-600">
        Fill out the form below and we'll contact you to confirm your appointment.
      </p>
      
      {formStatus.type === 'success' ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          {formStatus.message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="form-input"
              placeholder="Tell us about your dental needs or preferred appointment time."
            ></textarea>
          </div>
          
          {formStatus.type === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {formStatus.message}
            </div>
          )}
          
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={formStatus.type === 'submitting'}
          >
            {formStatus.type === 'submitting' ? 'Sending...' : 'Send Request'}
          </button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
