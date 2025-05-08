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
  
  // Create a supabase client
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Function to submit appointment data to Supabase
export async function submitAppointment(data: AppointmentData) {
  try {
    const supabase = getSupabaseClient();
    
    const { error } = await supabase
      .from('appointments')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return { success: false, error };
  }
}
