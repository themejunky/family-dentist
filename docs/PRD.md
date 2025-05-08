# Family Dentist Landing Page PRD

## Overview
Create a professional, elegant landing page for a family dentist, themed in blue and white, using Next.js and Tailwind CSS. The site will serve as a showcase for services, prices, testimonials, and facilitate appointment bookings via a Supabase-powered form. Deployment will be via GitHub and Vercel.

## Goals & Objectives
- Attract new patients with a trustworthy, modern, and inviting online presence
- Clearly present services, prices, and contact options
- Make it easy for users to book appointments
- Build trust with testimonials and real images

## Features & Requirements

### Branding & Design
- Text-based logo (professional, elegant)
- Blue and white color palette
- Top bar: social media icons, phone number, address
- Sticky bottom bar: phone number (0720.123.123), message: “call to make an appointment”
- Responsive, mobile-friendly layout

### Navigation
- Main menu with smooth scroll to sections: Services, Prices, Appointment Form, Testimonials, Map

### Hero Section
- Headline and subheadline
- Appointment form with fields: name, phone, email, message, 'Send' button
- Prominent call-to-action

### Services & Prices
- List of dental services with prices
- Professional, easy-to-read layout

### Map
- Embedded map showing: Strada Maria Rosetti 26A, București 020487

### Testimonials
- Section with real patient photos (from /img/reviews) and testimonial quotes

### Imagery
- Use images from /img for main visuals
- Use /img/reviews for testimonial portraits

### Sticky Call Bar
- Fixed at bottom of viewport
- Displays phone number (0720.123.123) and “call to make an appointment”
- Click-to-call functionality on mobile

### Top Bar
- Social media icons (links provided or placeholders)
- Phone number and address

### Appointment Form
- Fields: name, phone, email, message
- Submit via Supabase (store in DB)
- Validation and success/error feedback

### Technical
- Next.js (latest)
- Tailwind CSS
- Supabase for form backend
- Image handling via Next.js
- Ready for GitHub/Vercel deployment

### Out of Scope
- No blog or news section
- No user authentication
- No admin dashboard

## Acceptance Criteria
- All required sections present and functional
- Form submits and stores data in Supabase
- Images load correctly from specified folders
- Responsive and visually appealing
- Smooth scrolling navigation
- Sticky top and bottom bars function as described
- Map displays correct address
- Ready for deployment

## Assets
- Main images: /img
- Testimonial images: /img/reviews
- Address: Strada Maria Rosetti 26A, București 020487
- Phone: 0720.123.123
- Socials: [to be provided or placeholder]

## Deployment
- GitHub repo for code
- Deployment via Vercel

---
