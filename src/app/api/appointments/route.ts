import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Type definition for appointment data
interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

// Hardcoded Supabase credentials to ensure they work in Vercel environment
const SUPABASE_URL = 'https://kdjzrwyhffmewufjghqt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkanpyd3loZmZtZXd1ZmpnaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2ODI5MTksImV4cCI6MjA2MjI1ODkxOX0.UX9RanGQkxbO5zUm2JakzXTgqLt1Pl8lHFCWzm4jTYw';

// Function to get Supabase client
function getSupabaseClient() {
  try {
    // Try environment variables first
    let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // Fall back to hardcoded values if needed
    if (!url || !url.includes('supabase.co')) {
      url = SUPABASE_URL;
    }
    
    if (!key || key.length < 20) {
      key = SUPABASE_ANON_KEY;
    }
    
    // Create and return the client
    return createClient(url, key, {
      auth: {
        persistSession: false,
      }
    });
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    // Create with hardcoded values as last resort
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: false,
      }
    });
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: AppointmentData = await request.json();
    
    // Log the request (without sensitive data)
    console.log('Received appointment request:', {
      hasName: !!data.name,
      hasPhone: !!data.phone,
      hasEmail: !!data.email,
      hasMessage: !!data.message,
    });
    
    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    try {
      // Get Supabase client
      const supabase = getSupabaseClient();
      console.log('Supabase client created successfully');
      
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
        
        // Check if it's a table-related error
        if (error.code === '42P01') {
          return NextResponse.json(
            { success: false, error: 'Database configuration error. Please contact support.' },
            { status: 500 }
          );
        }
        
        // Check if it's a permissions error
        if (error.code === '42501') {
          return NextResponse.json(
            { success: false, error: 'Permission denied. Please contact support.' },
            { status: 403 }
          );
        }
        
        return NextResponse.json(
          { success: false, error: `Database error: ${error.message}` },
          { status: 500 }
        );
      }
      
      console.log('Appointment submitted successfully');
      
      // Return success response
      return NextResponse.json({
        success: true,
        data: responseData,
        message: 'Appointment submitted successfully'
      });
    } catch (supabaseError) {
      console.error('Supabase operation error:', supabaseError);
      
      // Create a simplified email version of the appointment data
      const emailBody = `
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Message: ${data.message || 'N/A'}
Submitted: ${new Date().toISOString()}
`;
      
      console.log('Email fallback data prepared:', emailBody.length, 'characters');
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database connection error', 
          emailData: emailBody 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing appointment request:', error);
    return NextResponse.json(
      { success: false, error: 'Server error processing request' },
      { status: 500 }
    );
  }
}
