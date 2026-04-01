/* ──────────────────────────────────────────
   ProEdge — Shared Types & Static Data
   ────────────────────────────────────────── */

export interface Service {
  slug: string;
  name: string;
  duration: string;
  price: string;
  location: string;
  subtitle: string;
  description: string;
  image: string;
  contactEmail: string;
  contactPhone: string;
}

export interface PortfolioImage {
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface Album {
  id: string;
  title: string;
  date: string;
  coverImage: string;
}

/* ── Services ── */
export const SERVICES: Service[] = [
  {
    slug: 'personal-shoot',
    name: 'Personal Shoot',
    duration: '1 hr',
    price: '₦35,000',
    location: 'Regent Park Road',
    subtitle: 'Seamless photos that capture your essence',
    description:
      'Our personal shoot package is perfect for individuals looking for professional headshots, lifestyle imagery, or creative portraits. We work with you to create the perfect look and feel.',
    image:
      'https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
  {
    slug: 'wedding-photography-videography',
    name: 'Wedding Photography / Videography',
    duration: '6 hr',
    price: 'Contact for quote',
    location: 'On location',
    subtitle: 'Documenting the magic of your special day',
    description:
      'Our comprehensive wedding package covers every moment from preparation to reception. We combine photography and videography to tell your love story with cinematic precision.',
    image:
      'https://static.wixstatic.com/media/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
  {
    slug: 'corporate-professional',
    name: 'Corporate & Professional',
    duration: '1 hr',
    price: 'Contact for quote',
    location: 'Studio or on location',
    subtitle: 'Professional imagery for your brand',
    description:
      'Elevate your corporate image with professional headshots, team photos, and brand imagery. We understand the importance of first impressions in business.',
    image:
      'https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
  {
    slug: 'lifestyle-family',
    name: 'Lifestyle & Family',
    duration: '1 hr',
    price: 'Contact for quote',
    location: 'Studio or on location',
    subtitle: 'Natural moments with the ones you love',
    description:
      'Capture genuine family moments in a relaxed, natural setting. From maternity shoots to family reunions, we create images that tell your family story.',
    image:
      'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
  {
    slug: 'fashion-creative',
    name: 'Fashion & Creative',
    duration: '1 hr',
    price: 'Contact for quote',
    location: 'Studio or on location',
    subtitle: 'Bold, artistic imagery for creatives',
    description:
      'Push creative boundaries with fashion-forward concepts. Whether for a lookbook, magazine feature, or personal project, we bring artistic vision to every shot.',
    image:
      'https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
  {
    slug: 'events',
    name: 'Events',
    duration: '3 hr',
    price: 'Contact for quote',
    location: 'On location',
    subtitle: 'Covering events with a creative touch',
    description:
      'From corporate functions to private celebrations, our event coverage captures the energy, atmosphere, and key moments that make your event special.',
    image:
      'https://static.wixstatic.com/media/19b49ff409e84bafa7839ccc66bf5bd7.jpg/v1/fill/w_800,h_600,q_90/19b49ff409e84bafa7839ccc66bf5bd7.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
  {
    slug: 'product-photography',
    name: 'Product Photography',
    duration: '2 hr',
    price: 'Contact for quote',
    location: 'Studio',
    subtitle: 'Showcasing products with professional flair',
    description:
      'Professional product photography that sells. We create clean, compelling imagery for e-commerce, catalogues, and marketing materials.',
    image:
      'https://static.wixstatic.com/media/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg',
    contactEmail: 'aidris@proedge.events',
    contactPhone: '+234 806 135 0008',
  },
];

/* ── Portfolio images ── */
export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  { src: 'https://static.wixstatic.com/media/161c90_37b0966d496941f5a2ee289ea191d266~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_37b0966d496941f5a2ee289ea191d266~mv2.jpg', alt: 'Portrait shoot', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg', alt: 'Studio portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_8e80b7a67c004d4dba52708028558a14~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_8e80b7a67c004d4dba52708028558a14~mv2.jpg', alt: 'Creative portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_2cbcb038bb394aebb16df9035dc553e7~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_2cbcb038bb394aebb16df9035dc553e7~mv2.jpg', alt: 'Fashion shoot', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_b1c189672b004458af20d0a76d6abf79~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_b1c189672b004458af20d0a76d6abf79~mv2.jpg', alt: 'Lifestyle photography', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg', alt: 'Group portrait', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_51cdb6abbcb34770a42ae1a2d4923766~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_51cdb6abbcb34770a42ae1a2d4923766~mv2.jpg', alt: 'Traditional attire session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_fe5a97d7c5174602865c7f9014730837~mv2.jpg/v1/fill/w_600,h_840,q_90/161c90_fe5a97d7c5174602865c7f9014730837~mv2.jpg', alt: 'Maternity shoot', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg', alt: 'Professional portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_806c5a70496d41e38c8f8d6f7e443162~mv2.jpg/v1/fill/w_600,h_744,q_90/161c90_806c5a70496d41e38c8f8d6f7e443162~mv2.jpg', alt: 'Children portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_a2b7af9ca71d4afab3030de1ad68bf79~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_a2b7af9ca71d4afab3030de1ad68bf79~mv2.jpg', alt: 'Studio session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg/v1/fill/w_600,h_900,q_90/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg', alt: 'Portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg/v1/fill/w_800,h_600,q_90/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg', alt: 'Wedding shot', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg/v1/fill/w_980,h_680,q_90/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg', alt: 'Family session', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg/v1/fill/w_600,h_800,q_90/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg', alt: 'Elegant portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/7e6071_6fa0d1e0354d4e86b06fc4252549dd43~mv2.jpg/v1/fill/w_600,h_660,q_90/7e6071_6fa0d1e0354d4e86b06fc4252549dd43~mv2.jpg', alt: 'Outdoor portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg', alt: 'Product photography', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg/v1/fill/w_600,h_750,q_90/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg', alt: 'Fashion portrait', aspect: 'portrait' },
];

/* ── Albums ── */
export const ALBUMS: Album[] = [
  {
    id: 'arc-eni-ugot-70th',
    title: 'Arc. Eni Ugot 70th Birthday',
    date: 'December 22nd, 2022',
    coverImage:
      'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg/v1/fill/w_600,h_400,q_90/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg',
  },
  {
    id: 'tobi-opadeji-birthday',
    title: 'Tobi Opadeji Birthday',
    date: '2022',
    coverImage:
      'https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg/v1/fill/w_600,h_400,q_90/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg',
  },
  {
    id: 'lfc-children-church',
    title: 'LFC Children Church Lokogoma',
    date: 'December 3rd, 2022',
    coverImage:
      'https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg/v1/fill/w_600,h_400,q_90/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg',
  },
];
