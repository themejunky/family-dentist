"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import type { AppointmentData } from '@/utils/supabase';

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
      console.log('Form submission started');
      
      // Submit appointment data using the API route
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log('Form submission successful');
        // Success message
        setFormStatus({
          type: 'success',
          message: result.message || 'Thank you! Your appointment request has been sent. We will contact you shortly.'
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        // Handle API errors
        console.error('Form submission failed:', result);
        
        let errorMessage = 'There was an error submitting your request. Please try again or call us directly.';
        
        if (result.error) {
          errorMessage = `Error: ${result.error}`;
        }
        
        setFormStatus({
          type: 'error',
          message: errorMessage
        });
        
        // If it's a server error, provide alternative contact method with email data if available
        if (response.status >= 500) {
          if (result.emailData) {
            setFormStatus({
              type: 'error',
              message: `We're experiencing technical issues. Please copy the information below and email it to info@smilecare.com:\n\n${result.emailData}`
            });
          } else {
            setFormStatus({
              type: 'error',
              message: `We're experiencing technical issues. Please call us at (123) 456-7890 or email us at info@smilecare.com with your appointment request.`
            });
          }
        }
      }
    } catch (error) {
      console.error('Exception in form submission:', error);
      setFormStatus({
        type: 'error',
        message: 'There was a network error submitting your request. Please try again or call us directly.'
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
              {formStatus.message.includes('\n') ? (
                <pre className="whitespace-pre-wrap font-sans text-sm">{formStatus.message}</pre>
              ) : (
                formStatus.message
              )}
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
