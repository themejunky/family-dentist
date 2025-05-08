# Family Dentist Landing Page

A professional, elegant landing page for a family dentist practice, built with Next.js and Tailwind CSS.

## Features

- Responsive design with blue and white color scheme
- Text-based "SmileCare" logo
- Top bar with social media profiles, phone number, and address
- Sticky bottom bar with call-to-action phone number
- Appointment booking form powered by Supabase
- Services and pricing section
- Testimonials with real patient photos
- Google Maps integration
- Smooth scrolling navigation

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and App Router
- **Styling**: Tailwind CSS
- **Form Backend**: Supabase
- **Deployment**: Vercel (via GitHub)

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dentist
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Supabase Setup

1. Create a new Supabase project
2. Create a new table called `appointments` with the following schema:
   ```sql
   create table appointments (
     id uuid default uuid_generate_v4() primary key,
     name text not null,
     phone text not null,
     email text not null,
     message text,
     created_at timestamp with time zone default now() not null
   );
   ```
3. Set up Row Level Security (RLS) policies as needed
4. Copy your Supabase URL and anon key to your `.env.local` file

## Deployment

### GitHub Setup

1. Create a new GitHub repository
2. Push your code to the repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Vercel Deployment

1. Sign up or log in to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure the project:
   - Framework Preset: Next.js
   - Environment Variables: Add the same variables from your `.env.local` file
4. Deploy

## Project Structure

- `/docs` - Documentation including PRD
- `/public` - Static assets
- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/img` - Image assets for the website
- `/img/reviews` - Testimonial images

## Customization

- Colors: Edit the `tailwind.config.js` file to change the primary and secondary colors
- Content: Update the text in the component files
- Images: Replace images in the `/img` directory with your own

## License

This project is licensed under the MIT License.
