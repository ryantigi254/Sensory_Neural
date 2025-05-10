/*
  # Create waitlist table for storing signup information

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `user_type` (text, required)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
    - Add policy for admins to view all entries
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  user_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new entries
CREATE POLICY "Anyone can add themselves to waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated admins can view entries
CREATE POLICY "Admins can view waitlist entries"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' IN (
    'admin@sensoryneural.com'  -- Replace with actual admin emails
  ));