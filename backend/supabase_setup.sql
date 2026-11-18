-- ============================================================================
-- QUERY SQL UNTUK SUPABASE SQL EDITOR
-- Copy-paste query ini ke menu "SQL Editor" di Dashboard Supabase lalu klik RUN
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.destinations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  location VARCHAR(150) NOT NULL,
  tag VARCHAR(50) NOT NULL DEFAULT 'Alam',
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert 3 data awal Destinasi Wisata Indonesia (Jelajah)
INSERT INTO public.destinations (name, location, tag, image, description)
VALUES
  (
    'Raja Ampat',
    'Papua Barat Daya',
    'Laut',
    'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80',
    'Ratusan pulau karst di atas laut toska. Salah satu spot snorkeling dan diving terbaik di dunia, terumbu karangnya masih sangat terjaga.'
  ),
  (
    'Gunung Bromo',
    'Jawa Timur',
    'Gunung',
    'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
    'Sunrise di atas lautan pasir dan kabut. Berangkat dini hari ke Penanjakan, dijamin sepadan.'
  ),
  (
    'Candi Borobudur',
    'Magelang, Jawa Tengah',
    'Budaya',
    'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80',
    'Candi Buddha terbesar di dunia dengan ratusan stupa dan relief. Paling cantik saat pagi berkabut.'
  );
