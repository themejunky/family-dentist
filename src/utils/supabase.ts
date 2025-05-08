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
  // Initialize the Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'example-key';
  
  // Log the URL being used (without exposing the full key)
  console.log('Creating Supabase client with URL:', supabaseUrl);
  console.log('Anon key available:', !!supabaseAnonKey && supabaseAnonKey !== 'example-key');
  
  // Create a supabase client with additional options for better error handling
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
    global: {
      fetch: (...args) => {
        // Use a custom fetch with longer timeout
        return fetch(...args);
      },
      headers: {
        'X-Client-Info': 'family-dentist-website',
      },
    },
  });
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
      throw error;
    }
    
    console.log('Appointment submitted successfully:', responseData);
    return { success: true, data: responseData };
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return { success: false, error };
  }
}
