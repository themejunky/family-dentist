import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Type definition for appointment data
interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kdjzrwyhffmewufjghqt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkanpyd3loZmZtZXd1ZmpnaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2ODI5MTksImV4cCI6MjA2MjI1ODkxOX0.UX9RanGQkxbO5zUm2JakzXTgqLt1Pl8lHFCWzm4jTYw';

// Create a supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: AppointmentData = await request.json();
    
    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Insert the appointment data into Supabase
    const { data: responseData, error } = await supabase
      .from('appointments')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message || '',
          created_at: new Date().toISOString(),
        },
      ])
      .select();
      
    // Handle any errors from Supabase
    if (error) {
      console.error('Error submitting appointment to Supabase:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      data: responseData,
      message: 'Appointment submitted successfully'
    });
    
  } catch (error) {
    console.error('Error processing appointment request:', error);
    return NextResponse.json(
      { success: false, error: 'Server error processing request' },
      { status: 500 }
    );
  }
}
