import { createClient } from '@supabase/supabase-js';
const URL = 'https://afxnibqjdgwggcagogsi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmeG5pYnFqZGd3Z2djYWdvZ3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MjY5NTgsImV4cCI6MjAwNjUwMjk1OH0.doRo4EJL6zR4ERQzHnxKwPZjmZJmkBKaKVqw2gvYYFM';

export const supabase = createClient(URL, API_KEY);