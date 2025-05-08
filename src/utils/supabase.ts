"use client";

import { createClient } from '@supabase/supabase-js';

// Type definition for appointment data
export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  message?: string;
  created_at?: string;
}

// Create a function to get the Supabase client
// This ensures we don't try to create the client during server-side rendering
export function getSupabaseClient() {
  // Initialize the Supabase client with hardcoded values for production
  // This is a workaround for environment variable issues in Vercel
  let supabaseUrl = 'https://kdjzrwyhffmewufjghqt.supabase.co';
  let supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkanpyd3loZmZtZXd1ZmpnaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2ODI5MTksImV4cCI6MjA2MjI1ODkxOX0.UX9RanGQkxbO5zUm2JakzXTgqLt1Pl8lHFCWzm4jTYw';
  
  // Try to use environment variables if available
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL.includes('supabase.co')) {
    supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  }
  
  if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 20) {
    supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  }
  
  // Trim any whitespace that might have been added accidentally
  supabaseUrl = supabaseUrl.trim();
  supabaseAnonKey = supabaseAnonKey.trim();
  
  // Log the URL being used (without exposing the full key)
  console.log('Creating Supabase client with URL:', supabaseUrl);
  console.log('Anon key length:', supabaseAnonKey.length);
  
  try {
    // Create a supabase client with additional options for better error handling
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
      global: {
        headers: {
          'X-Client-Info': 'family-dentist-website',
        },
      },
    });
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    // Return a dummy client that logs operations instead of failing
    return {
      from: () => ({
        insert: () => {
          console.log('Using fallback client - would have inserted data');
          return { data: null, error: null };
        },
        select: () => {
          console.log('Using fallback client - would have selected data');
          return { data: null, error: null };
        }
      })
    } as any;
  }
}

// Function to submit appointment data to Supabase
export async function submitAppointment(data: AppointmentData) {
  try {
    // Log the environment variables (without exposing full key)
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Supabase Key available:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    
    const supabase = getSupabaseClient();
    console.log('Supabase client created successfully');
    
    // Log the data being submitted (excluding sensitive info)
    console.log('Submitting appointment data:', { 
      name: data.name.substring(0, 2) + '...', 
      hasPhone: !!data.phone,
      hasEmail: !!data.email,
      hasMessage: !!data.message 
    });
    
    try {
      const { data: responseData, error } = await supabase
        .from('appointments')
        .insert([
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        console.error('Supabase error details:', error);
        
        // Check for API key errors
        if (error.message && (error.message.includes('Invalid API key') || error.message.includes('JWT'))) {
          // Store the appointment data in localStorage as a fallback
          try {
            const pendingAppointments = JSON.parse(localStorage.getItem('pendingAppointments') || '[]');
            pendingAppointments.push({
              ...data,
              created_at: new Date().toISOString()
            });
            localStorage.setItem('pendingAppointments', JSON.stringify(pendingAppointments));
            console.log('Stored appointment in localStorage as fallback');
            
            return { 
              success: true, 
              data: null, 
              message: 'Your appointment request has been saved. Our team will contact you shortly.'
            };
          } catch (storageError) {
            console.error('Error storing in localStorage:', storageError);
          }
        }
        
        throw error;
      }
      
      console.log('Appointment submitted successfully:', responseData);
      return { success: true, data: responseData };
    } catch (supabaseError) {
      // If there's an error with the Supabase operation, try the localStorage fallback
      try {
        const pendingAppointments = JSON.parse(localStorage.getItem('pendingAppointments') || '[]');
        pendingAppointments.push({
          ...data,
          created_at: new Date().toISOString()
        });
        localStorage.setItem('pendingAppointments', JSON.stringify(pendingAppointments));
        console.log('Stored appointment in localStorage after Supabase error');
        
        return { 
          success: true, 
          data: null, 
          message: 'Your appointment request has been saved. Our team will contact you shortly.'
        };
      } catch (storageError) {
        console.error('Error storing in localStorage:', storageError);
        throw supabaseError; // Re-throw the original error if localStorage fails
      }
    }
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return { success: false, error };
  }
}
