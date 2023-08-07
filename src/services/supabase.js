import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjlyybgdudosxygrhpph.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqbHl5YmdkdWRvc3h5Z3JocHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNzc2NDEsImV4cCI6MjAwNjg1MzY0MX0.wSUNQ2FnO-osZe8SfNfFg0TmEJ3mSHDuuuI-r1MGrbg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
