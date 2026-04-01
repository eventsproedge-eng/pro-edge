-- ═══════════════════════════════════════
-- ProEdge Events — Database Schema + Seed
-- Run this in Supabase SQL Editor
-- ═══════════════════════════════════════

-- ── Site Settings (key-value for hero text, about text, brand info) ──
create table if not exists site_settings (
  id uuid default gen_random_uuid() primary key,
  key text unique not null,
  value text not null,
  updated_at timestamptz default now()
);

-- ── Hero Slides ──
create table if not exists hero_slides (
  id uuid default gen_random_uuid() primary key,
  image_url text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ── Services ──
create table if not exists services (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  name text not null,
  duration text not null default '',
  price text,
  location text not null default '',
  subtitle text not null default '',
  description text not null default '',
  image_url text not null,
  contact_email text not null default 'aidris@proedge.events',
  contact_phone text not null default '08061350008',
  contact_address text not null default 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria',
  sort_order int default 0,
  show_on_homepage boolean default false,
  homepage_description text,
  created_at timestamptz default now()
);

-- ── Portfolio Images ──
create table if not exists portfolio_images (
  id uuid default gen_random_uuid() primary key,
  image_url text not null,
  alt text not null default '',
  aspect text not null default 'portrait',
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ── Photo Albums ──
create table if not exists albums (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  date text not null default '',
  cover_image_url text not null,
  images jsonb default '[]'::jsonb,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ── Testimonials ──
create table if not exists testimonials (
  id uuid default gen_random_uuid() primary key,
  quote text not null,
  name text not null,
  event text not null default '',
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ── Contact Form Submissions ──
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  first_name text not null,
  last_name text,
  email text not null,
  message text,
  created_at timestamptz default now()
);

-- ═══════════════════════════════════════
-- RLS Policies
-- ═══════════════════════════════════════

alter table site_settings enable row level security;
alter table hero_slides enable row level security;
alter table services enable row level security;
alter table portfolio_images enable row level security;
alter table albums enable row level security;
alter table testimonials enable row level security;
alter table contact_submissions enable row level security;

-- Public read for content tables
create policy "Public read" on site_settings for select using (true);
create policy "Public read" on hero_slides for select using (true);
create policy "Public read" on services for select using (true);
create policy "Public read" on portfolio_images for select using (true);
create policy "Public read" on albums for select using (true);
create policy "Public read" on testimonials for select using (true);

-- Public insert for contact form
create policy "Public insert" on contact_submissions for insert with check (true);

-- Service role can do everything (admin API routes use service key)
create policy "Service role full access" on site_settings for all using (auth.role() = 'service_role');
create policy "Service role full access" on hero_slides for all using (auth.role() = 'service_role');
create policy "Service role full access" on services for all using (auth.role() = 'service_role');
create policy "Service role full access" on portfolio_images for all using (auth.role() = 'service_role');
create policy "Service role full access" on albums for all using (auth.role() = 'service_role');
create policy "Service role full access" on testimonials for all using (auth.role() = 'service_role');
create policy "Service role full access" on contact_submissions for all using (auth.role() = 'service_role');

-- ═══════════════════════════════════════
-- SEED DATA
-- ═══════════════════════════════════════

-- Site Settings
insert into site_settings (key, value) values
  ('hero_heading', 'Vibrant and Dynamic Imagery'),
  ('hero_subheading', 'Recent Works'),
  ('hero_body', 'Passionately creating unforgettable images'),
  ('hero_cta_text', 'Book Now'),
  ('hero_cta_link', '/book-online'),
  ('about_heading', 'About'),
  ('about_paragraph_1', 'Welcome to ProEdge, your trusted photo studio in Lokogoma, Abuja, where passion for photography meets the art of event management. We are dedicated to capturing your most cherished moments and turning them into timeless memories you''ll treasure forever.'),
  ('about_paragraph_2', 'At ProEdge, we believe photography is more than just taking pictures — it''s about telling stories. From weddings and family portraits to lifestyle shoots and private events, we approach every project with creativity, care, and professionalism.'),
  ('about_paragraph_3', 'Our team combines years of experience in photography and event planning, ensuring not only stunning visuals but also a stress-free and enjoyable experience for you.'),
  ('about_paragraph_4', 'With ProEdge, your moments aren''t just documented — they''re transformed into masterpieces.'),
  ('about_image', 'https://static.wixstatic.com/media/7e6071_6fa0d1e0354d4e86b06fc4252549dd43~mv2.jpg'),
  ('contact_email', 'aidris@proedge.events'),
  ('contact_phone_1', '+234 806 135 0008'),
  ('contact_phone_2', '08061350008'),
  ('contact_address', '10 Regent Park, Minfa 1 Garden Estate, Lokogoma District.'),
  ('contact_address_full', 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria'),
  ('logo_header', 'https://static.wixstatic.com/media/161c90_073cc9f67ab24386afff675784717018~mv2.png'),
  ('logo_footer', 'https://static.wixstatic.com/media/ea6cbc_b6f3a7dde02d4a57810be2f3806de8f8~mv2.png'),
  ('social_facebook', 'https://www.facebook.com/ProEdge.Events'),
  ('social_twitter', 'https://x.com/ProEdgeEvents'),
  ('social_instagram', 'https://www.instagram.com/proedge.events'),
  ('social_youtube', 'https://www.youtube.com/@ProEdge-q4n')
on conflict (key) do nothing;

-- Hero Slides
insert into hero_slides (image_url, sort_order) values
  ('https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg', 0),
  ('https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg', 1),
  ('https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg', 2),
  ('https://static.wixstatic.com/media/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg', 3),
  ('https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg', 4),
  ('https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg', 5),
  ('https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg', 6);

-- Services
insert into services (slug, name, duration, price, location, subtitle, description, image_url, sort_order, show_on_homepage, homepage_description) values
  ('personal-shoot', 'Personal Shoot', '1 hr', '₦35,000', 'Regent Park Road', 'Seamless photos', 'Our personal shoot package is perfect for individuals looking for professional headshots, lifestyle imagery, or creative portraits.', 'https://static.wixstatic.com/media/161c90_b2cd1fe35a9248a08d6619fe5c163f92~mv2.jpg', 0, false, null),
  ('wedding-photography-videography', 'Wedding Photography / Videography', '6 hr', 'Contact for quote', 'Regent Park Road', 'Capturing Love, Framing Forever', 'Our comprehensive wedding package covers every moment from preparation to reception.', 'https://static.wixstatic.com/media/161c90_c2561d749c9746d3b8641422b2e23af8~mv2.jpg', 1, true, 'Documenting the magic of weddings in every frame'),
  ('real-estate-photography-videography', 'Real Estate Photography / Videography', '3 hr', 'Contact for quote', 'Regent Park Road', 'Framing Properties, Elevating Value', 'Professional real estate photography and videography that showcases properties at their best.', 'https://static.wixstatic.com/media/161c90_e6eef46b71c14ddc9d1e7aa7f4a598c3~mv2.jpg', 2, false, null),
  ('corporate-professional', 'Corporate & Professional', '1 hr', 'Contact for quote', 'Regent Park Road', 'Sharpening Your Brand''s Visual Edge', 'Events, Branding, Interviews. Elevate your corporate image with professional headshots and brand imagery.', 'https://static.wixstatic.com/media/161c90_ea111215221e4786a34356190791a5e1~mv2.jpg', 3, false, null),
  ('lifestyle-family', 'Lifestyle & Family', '1 hr', 'Contact for quote', 'Regent Park Road', 'Moments Fade. Memories Don''t.', 'Capture genuine family moments in a relaxed, natural setting.', 'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg', 4, false, null),
  ('fashion-creative', 'Fashion & Creative', '1 hr', 'Contact for quote', 'Regent Park Road', 'Capturing Trends, Creating Timelessness', 'Push creative boundaries with fashion-forward concepts.', 'https://static.wixstatic.com/media/161c90_9508baf9f4ac478d8a2c3b82b3d39d6e~mv2.jpg', 5, false, null),
  ('events', 'Events', '3 hr', 'Contact for quote', 'Regent Park Road', 'Covering events with a creative touch', 'From corporate functions to private celebrations, our event coverage captures the energy and key moments.', 'https://static.wixstatic.com/media/161c90_bd70d8e1811d403fa3054dc73ef8243f~mv2.jpg', 6, true, 'Covering a wide range of events and occasions with a creative touch');

-- Portfolio Images
insert into portfolio_images (image_url, alt, aspect, sort_order) values
  ('https://static.wixstatic.com/media/161c90_37b0966d496941f5a2ee289ea191d266~mv2.jpg', 'Portrait session', 'portrait', 0),
  ('https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg', 'Studio portrait', 'portrait', 1),
  ('https://static.wixstatic.com/media/161c90_8e80b7a67c004d4dba52708028558a14~mv2.jpg', 'Creative portrait', 'portrait', 2),
  ('https://static.wixstatic.com/media/161c90_2cbcb038bb394aebb16df9035dc553e7~mv2.jpg', 'Fashion shoot', 'portrait', 3),
  ('https://static.wixstatic.com/media/161c90_b1c189672b004458af20d0a76d6abf79~mv2.jpg', 'Lifestyle photography', 'portrait', 4),
  ('https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg', 'Group portrait', 'landscape', 5),
  ('https://static.wixstatic.com/media/161c90_51cdb6abbcb34770a42ae1a2d4923766~mv2.jpg', 'Traditional attire', 'portrait', 6),
  ('https://static.wixstatic.com/media/161c90_fe5a97d7c5174602865c7f9014730837~mv2.jpg', 'Elegant portrait', 'portrait', 7),
  ('https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg', 'Professional portrait', 'portrait', 8),
  ('https://static.wixstatic.com/media/161c90_806c5a70496d41e38c8f8d6f7e449d93~mv2.jpg', 'Children portrait', 'portrait', 9),
  ('https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg', 'Fashion portrait', 'portrait', 10),
  ('https://static.wixstatic.com/media/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg', 'Studio session', 'portrait', 11),
  ('https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg', 'Outdoor portrait', 'portrait', 12),
  ('https://static.wixstatic.com/media/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg', 'Product photography', 'portrait', 13),
  ('https://static.wixstatic.com/media/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg', 'Wedding photography', 'portrait', 14),
  ('https://static.wixstatic.com/media/161c90_b2cd1fe35a9248a08d6619fe5c163f92~mv2.jpg', 'Personal shoot', 'landscape', 15),
  ('https://static.wixstatic.com/media/161c90_c2561d749c9746d3b8641422b2e23af8~mv2.jpg', 'Wedding session', 'landscape', 16),
  ('https://static.wixstatic.com/media/161c90_e6eef46b71c14ddc9d1e7aa7f4a598c3~mv2.jpg', 'Real estate', 'square', 17),
  ('https://static.wixstatic.com/media/161c90_ea111215221e4786a34356190791a5e1~mv2.jpg', 'Corporate', 'landscape', 18),
  ('https://static.wixstatic.com/media/161c90_9508baf9f4ac478d8a2c3b82b3d39d6e~mv2.jpg', 'Fashion creative', 'landscape', 19),
  ('https://static.wixstatic.com/media/161c90_bd70d8e1811d403fa3054dc73ef8243f~mv2.jpg', 'Event coverage', 'landscape', 20),
  ('https://static.wixstatic.com/media/7e6071_6fa0d1e0354d4e86b06fc4252549dd43~mv2.jpg', 'Portrait', 'portrait', 21),
  ('https://static.wixstatic.com/media/161c90_4fc0c5498c9e4413b8b3bcf2e2a09f64~mv2.jpg', 'Studio portrait', 'portrait', 22),
  ('https://static.wixstatic.com/media/161c90_3d7e13c3c1a347bdaf12bba6c5d24c97~mv2.jpg', 'Creative session', 'portrait', 23),
  ('https://static.wixstatic.com/media/161c90_ae15c1db96674c6fbf3e8f6b5a32e70f~mv2.jpg', 'Portrait session', 'portrait', 24),
  ('https://static.wixstatic.com/media/161c90_3e13fdce35694aba9ce069e3b2f9b6a5~mv2.jpg', 'Creative portrait', 'portrait', 25);

-- Albums
insert into albums (title, date, cover_image_url, images, sort_order) values
  ('Arc. Eni Ugot 70th Birthday', 'December 22nd, 2022', 'https://static.wixstatic.com/media/7e6071_3edc10292a24477fb87c60c8ffdec17f~mv2.jpg', '["https://static.wixstatic.com/media/7e6071_e907e6686c724e629d384460c36ef4e4~mv2.jpg","https://static.wixstatic.com/media/7e6071_9399789d9eee4d7a9f22f58ef5d3fb0c~mv2.jpg","https://static.wixstatic.com/media/8bb438_3ae04589aef4480e89a24d7283c69798~mv2_d_2869_3586_s_4_2.jpg","https://static.wixstatic.com/media/8bb438_734b8f436e944886b4185aa6f72b5cad~mv2_d_3000_2000_s_2.jpg"]', 0),
  ('Tobi Opadeji Birthday', '2022', 'https://static.wixstatic.com/media/7e6071_1e7c6e09db5141a2a455072d8ef0ebb2~mv2.jpeg', '[]', 1),
  ('LFC Children Church Lokogoma', 'December 3rd, 2022', 'https://static.wixstatic.com/media/7e6071_de3de9fe32e0413f9530aff62ec92b53~mv2.jpg', '[]', 2);

-- Testimonials
insert into testimonials (quote, name, event, sort_order) values
  ('ProEdge transformed our wedding into an absolute dream. Every detail was handled with such care and professionalism. The photography captured moments we will treasure forever.', 'Mr & Mrs Adeyemi', 'Wedding Reception, 2024', 0),
  ('Working with the ProEdge team for our corporate gala was a seamless experience. The stage lighting was spectacular and the DJ kept everyone engaged all evening.', 'Zenith Corporate Events', 'Annual Gala Dinner, 2023', 1),
  ('From concept to execution, ProEdge delivered beyond our expectations. Their attention to detail and creative vision made our event truly unforgettable.', 'The Ugot Family', '70th Birthday Celebration, 2022', 2);
