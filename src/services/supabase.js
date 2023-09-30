import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://jirfkvddclwojpwymbnw.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppcmZrdmRkY2x3b2pwd3ltYm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDcyMTcsImV4cCI6MjAxMTU4MzIxN30.CNTgudek4BDDDY3vqVZWMvOsjWhydLPdwlGScJTcA74'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
