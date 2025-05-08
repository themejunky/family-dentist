# Deployment Guide for Family Dentist Website

This guide outlines the steps to deploy the Family Dentist website using GitHub and Vercel.

## Prerequisites

1. A [GitHub](https://github.com) account
2. A [Vercel](https://vercel.com) account (you can sign up with your GitHub account)
3. A [Supabase](https://supabase.com) account for the form backend

## Step 1: Set Up Supabase

1. Create a new Supabase project
2. Create a table for appointment submissions:

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

3. Set up Row Level Security (RLS) policies if needed
4. Copy your Supabase URL and anon key for later use

## Step 2: Push to GitHub

1. Create a new GitHub repository
2. Initialize Git in your local project (if not already done):

```bash
git init
git add .
git commit -m "Initial commit"
```

3. Connect your local repository to GitHub:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Log in to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: (leave as default)
   - Output Directory: (leave as default)
   
5. Add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Your Google Maps API key (if using)

6. Click "Deploy"

## Step 4: Verify Deployment

1. Once deployment is complete, Vercel will provide a URL to your live site
2. Test the website functionality:
   - Navigation
   - Form submission
   - Map display
   - Responsive design on different devices

## Step 5: Set Up Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow the instructions to configure DNS settings

## Continuous Deployment

With the GitHub and Vercel integration, any changes pushed to your main branch will automatically trigger a new deployment.

## Troubleshooting

- If images aren't displaying, check that they're properly located in the `/public/img` directory
- If form submissions aren't working, verify your Supabase credentials and table structure
- For other issues, check the Vercel deployment logs in your project dashboard

---

Remember to replace placeholder values with your actual GitHub username, repository name, and API keys before following these instructions.
