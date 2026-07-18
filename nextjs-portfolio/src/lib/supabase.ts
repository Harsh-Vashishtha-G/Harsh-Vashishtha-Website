import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hzudltsybztkbkxwbifg.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dWRsdHN5Ynp0a2JreHdiaWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5OTg4ODAsImV4cCI6MjA5OTU3NDg4MH0.5UWQkSkCKa7uhCXnbsjhG3PdkYMxT8jKNG6Lk5snrKU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
