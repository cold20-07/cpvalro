# Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name**: cpeval-contacts (or any name)
   - **Database Password**: (generate a strong password)
   - **Region**: Choose closest to your users
5. Click "Create new project" (takes ~2 minutes)

## Step 2: Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Paste this SQL and click "Run":

```sql
-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  practice TEXT,
  case_volume TEXT,
  message TEXT
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (for admin panel later)
CREATE POLICY "Allow authenticated reads" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX contacts_created_at_idx ON contacts(created_at DESC);
CREATE INDEX contacts_email_idx ON contacts(email);
```

## Step 3: Get Your API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

## Step 4: Update Environment Variables

### For Local Development:
Update `frontend/.env`:
```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### For Vercel Production:
1. Go to your Vercel project
2. Settings → Environment Variables
3. Add these two variables:
   - `REACT_APP_SUPABASE_URL` = `https://your-project.supabase.co`
   - `REACT_APP_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
4. Redeploy your project

## Step 5: Test the Form

1. Start your local dev server: `npm start`
2. Fill out the contact form
3. Submit it
4. Check Supabase dashboard → **Table Editor** → **contacts** table
5. You should see your submission!

## Step 6: View Submissions (Admin Panel)

To view all contact submissions:

1. Go to Supabase dashboard
2. Click **Table Editor** → **contacts**
3. You'll see all submissions with timestamps

### Optional: Set up Email Notifications

If you want to receive emails when someone submits the form:

1. Go to **Database** → **Webhooks**
2. Create a new webhook
3. Use a service like:
   - **Zapier** (easiest)
   - **Make.com** (free tier)
   - **Supabase Edge Functions** (more technical)

## Security Notes

✅ **Row Level Security (RLS)** is enabled
✅ **Public can only INSERT** (submit forms)
✅ **Only authenticated users can READ** (view submissions)
✅ **anon key is safe to expose** in frontend code

## Database Schema

```
contacts
├── id (UUID, Primary Key)
├── created_at (Timestamp)
├── name (Text, Required)
├── email (Text, Required)
├── phone (Text, Optional)
├── practice (Text, Optional)
├── case_volume (Text, Optional)
└── message (Text, Optional)
```

## Troubleshooting

**Error: "Failed to fetch"**
- Check if SUPABASE_URL and SUPABASE_ANON_KEY are set correctly
- Make sure you're using the anon key, not the service_role key

**Error: "new row violates row-level security policy"**
- Make sure you ran the RLS policy SQL commands
- Check that the "Allow public inserts" policy exists

**Submissions not showing up**
- Check browser console for errors
- Verify the table name is exactly "contacts"
- Check Supabase logs in dashboard

## Next Steps

- ✅ Backend removed (no longer needed)
- ✅ Contact form connected to Supabase
- ✅ Data stored securely
- 🔜 Set up email notifications (optional)
- 🔜 Build admin panel to view submissions (optional)

## Cost

**Supabase Free Tier includes:**
- 500 MB database space
- 50,000 monthly active users
- 2 GB bandwidth
- Unlimited API requests

This is more than enough for a contact form!
