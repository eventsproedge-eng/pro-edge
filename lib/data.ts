/* ──────────────────────────────────────────
   ProEdge — Real Site Data (extracted Apr 2026)
   ────────────────────────────────────────── */

export interface HeroData {
  heading: string;
  subheading: string;
  body: string;
  cta_text: string;
  cta_link: string;
  images: string[];
}

export interface AboutData {
  heading: string;
  paragraphs: string[];
  image: string;
  cta_text: string;
  cta_link: string;
}

export interface ServiceGridItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

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
  contactAddress: string;
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
  images: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  event: string;
}

export interface ContactInfo {
  email: string;
  phone1: string;
  phone2: string;
  address: string;
  addressFull: string;
  googleMapsUrl: string;
}

export interface BrandData {
  logoHeader: string;
  logoFooter: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  contact: ContactInfo;
  copyright: string;
}

export const BRAND: BrandData = {
  logoHeader: 'https://static.wixstatic.com/media/161c90_073cc9f67ab24386afff675784717018~mv2.png',
  logoFooter: 'https://static.wixstatic.com/media/ea6cbc_b6f3a7dde02d4a57810be2f3806de8f8~mv2.png',
  socialLinks: {
    facebook: 'https://www.facebook.com/ProEdge.Events',
    twitter: 'https://x.com/ProEdgeEvents',
    instagram: 'https://www.instagram.com/proedge.events',
    youtube: 'https://www.youtube.com/@ProEdge-q4n',
  },
  contact: {
    email: 'aidris@proedge.events',
    phone1: '+234 806 135 0008',
    phone2: '08061350008',
    address: '10 Regent Park, Minfa 1 Garden Estate, Lokogoma District.',
    addressFull: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria',
    googleMapsUrl: 'https://www.google.com.ng/maps/place/Proactive+Edge+Nigeria+Limited/@8.9747467,7.4630016,17z',
  },
  copyright: '© 2025 Proactive Edge Events',
};

export const HERO: HeroData = {
  heading: 'Vibrant and Dynamic Imagery',
  subheading: 'Recent Works',
  body: 'Passionately creating unforgettable images',
  cta_text: 'Book Now',
  cta_link: '/book-online',
  images: [
    'https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg',
    'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg',
    'https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg',
    'https://static.wixstatic.com/media/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg',
    'https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg',
    'https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg',
    'https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg',
  ],
};

export const ABOUT: AboutData = {
  heading: 'About',
  paragraphs: [
    "Welcome to ProEdge, your trusted photo studio in Lokogoma, Abuja, where passion for photography meets the art of event management. We are dedicated to capturing your most cherished moments and turning them into timeless memories you'll treasure forever.",
    "At ProEdge, we believe photography is more than just taking pictures — it's about telling stories. From weddings and family portraits to lifestyle shoots and private events, we approach every project with creativity, care, and professionalism.",
    "Our team combines years of experience in photography and event planning, ensuring not only stunning visuals but also a stress-free and enjoyable experience for you.",
    "With ProEdge, your moments aren't just documented — they're transformed into masterpieces.",
  ],
  image: 'https://static.wixstatic.com/media/7e6071_6fa0d1e0354d4e86b06fc4252549dd43~mv2.jpg',
  cta_text: 'View Portfolio',
  cta_link: '/portfolio',
};

export const SERVICES_GRID: ServiceGridItem[] = [
  { title: 'Events', description: 'Covering a wide range of events and occasions with a creative touch', image: 'https://static.wixstatic.com/media/161c90_bd70d8e1811d403fa3054dc73ef8243f~mv2.jpg', link: '/book-online' },
  { title: 'Product Photography', description: 'Showcasing products with professional flair', image: 'https://static.wixstatic.com/media/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg', link: '/book-online' },
  { title: 'Portraits', description: 'Capturing personalities with finesse', image: 'https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg', link: '/portfolio' },
  { title: 'Weddings', description: 'Documenting the magic of weddings in every frame', image: 'https://static.wixstatic.com/media/161c90_c2561d749c9746d3b8641422b2e23af8~mv2.jpg', link: '/book-online' },
];

export const SERVICES: Service[] = [
  { slug: 'personal-shoot', name: 'Personal Shoot', duration: '1 hr', price: '₦35,000', location: 'Regent Park Road', subtitle: 'Seamless photos', description: 'Our personal shoot package is perfect for individuals looking for professional headshots, lifestyle imagery, or creative portraits.', image: 'https://static.wixstatic.com/media/161c90_b2cd1fe35a9248a08d6619fe5c163f92~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
  { slug: 'wedding-photography-videography', name: 'Wedding Photography / Videography', duration: '6 hr', price: 'Contact for quote', location: 'Regent Park Road', subtitle: 'Capturing Love, Framing Forever', description: 'Our comprehensive wedding package covers every moment from preparation to reception.', image: 'https://static.wixstatic.com/media/161c90_c2561d749c9746d3b8641422b2e23af8~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
  { slug: 'real-estate-photography-videography', name: 'Real Estate Photography / Videography', duration: '3 hr', price: 'Contact for quote', location: 'Regent Park Road', subtitle: 'Framing Properties, Elevating Value', description: 'Professional real estate photography and videography that showcases properties at their best.', image: 'https://static.wixstatic.com/media/161c90_e6eef46b71c14ddc9d1e7aa7f4a598c3~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
  { slug: 'corporate-professional', name: 'Corporate & Professional', duration: '1 hr', price: 'Contact for quote', location: 'Regent Park Road', subtitle: "Sharpening Your Brand's Visual Edge", description: 'Events, Branding, Interviews. Elevate your corporate image with professional headshots and brand imagery.', image: 'https://static.wixstatic.com/media/161c90_ea111215221e4786a34356190791a5e1~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
  { slug: 'lifestyle-family', name: 'Lifestyle & Family', duration: '1 hr', price: 'Contact for quote', location: 'Regent Park Road', subtitle: "Moments Fade. Memories Don't.", description: 'Capture genuine family moments in a relaxed, natural setting.', image: 'https://static.wixstatic.com/media/161c90_03342e44b55a466991ec560868efb52c~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
  { slug: 'fashion-creative', name: 'Fashion & Creative', duration: '1 hr', price: 'Contact for quote', location: 'Regent Park Road', subtitle: 'Capturing Trends, Creating Timelessness', description: 'Push creative boundaries with fashion-forward concepts.', image: 'https://static.wixstatic.com/media/161c90_9508baf9f4ac478d8a2c3b82b3d39d6e~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
  { slug: 'events', name: 'Events', duration: '3 hr', price: 'Contact for quote', location: 'Regent Park Road', subtitle: 'Covering events with a creative touch', description: 'From corporate functions to private celebrations, our event coverage captures the energy and key moments.', image: 'https://static.wixstatic.com/media/161c90_bd70d8e1811d403fa3054dc73ef8243f~mv2.jpg', contactEmail: 'aidris@proedge.events', contactPhone: '08061350008', contactAddress: 'Minfa 1 Garden Estate, Regent, Park Road, Abuja, Nigeria' },
];

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  { src: 'https://static.wixstatic.com/media/161c90_37b0966d496941f5a2ee289ea191d266~mv2.jpg', alt: 'Portrait session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_55befe84317c4edea98788da259f84ff~mv2.jpg', alt: 'Studio portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_8e80b7a67c004d4dba52708028558a14~mv2.jpg', alt: 'Creative portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_2cbcb038bb394aebb16df9035dc553e7~mv2.jpg', alt: 'Fashion shoot', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_b1c189672b004458af20d0a76d6abf79~mv2.jpg', alt: 'Lifestyle photography', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_50e0878c1dfd4af7bb11818e3966e776~mv2.jpg', alt: 'Group portrait', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_51cdb6abbcb34770a42ae1a2d4923766~mv2.jpg', alt: 'Traditional attire session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_fe5a97d7c5174602865c7f9014730837~mv2.jpg', alt: 'Elegant portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_1ab0b7a8b9bf4f2f9ec6ebed89a8bdd0~mv2.jpg', alt: 'Professional portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_806c5a70496d41e38c8f8d6f7e449d93~mv2.jpg', alt: 'Children portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_8b649d9d199849c688dd7932e0b73e94~mv2.jpg', alt: 'Fashion portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_69c0925ef212435aa97b26b52891c88c~mv2.jpg', alt: 'Studio session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_92a5e676009948f49bc70ceb2d6bcaff~mv2.jpg', alt: 'Outdoor portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_7e928ab2851e4fb1abb49f8b6c7c5ecd~mv2.jpg', alt: 'Product photography', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_c2aac9cc9d464159b20b22cc1ddb6f5c~mv2.jpg', alt: 'Wedding photography', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_b2cd1fe35a9248a08d6619fe5c163f92~mv2.jpg', alt: 'Personal shoot', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_c2561d749c9746d3b8641422b2e23af8~mv2.jpg', alt: 'Wedding session', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_e6eef46b71c14ddc9d1e7aa7f4a598c3~mv2.jpg', alt: 'Real estate photography', aspect: 'square' },
  { src: 'https://static.wixstatic.com/media/161c90_ea111215221e4786a34356190791a5e1~mv2.jpg', alt: 'Corporate photography', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_9508baf9f4ac478d8a2c3b82b3d39d6e~mv2.jpg', alt: 'Fashion creative', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/161c90_bd70d8e1811d403fa3054dc73ef8243f~mv2.jpg', alt: 'Event coverage', aspect: 'landscape' },
  { src: 'https://static.wixstatic.com/media/7e6071_6fa0d1e0354d4e86b06fc4252549dd43~mv2.jpg', alt: 'Portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_4fc0c5498c9e4413b8b3bcf2e2a09f64~mv2.jpg', alt: 'Studio portrait', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_3d7e13c3c1a347bdaf12bba6c5d24c97~mv2.jpg', alt: 'Creative session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_ae15c1db96674c6fbf3e8f6b5a32e70f~mv2.jpg', alt: 'Portrait session', aspect: 'portrait' },
  { src: 'https://static.wixstatic.com/media/161c90_3e13fdce35694aba9ce069e3b2f9b6a5~mv2.jpg', alt: 'Creative portrait', aspect: 'portrait' },
];

export const ALBUMS: Album[] = [
  { id: 'arc-eni-ugot-70th', title: 'Arc. Eni Ugot 70th Birthday', date: 'December 22nd, 2022', coverImage: 'https://static.wixstatic.com/media/7e6071_3edc10292a24477fb87c60c8ffdec17f~mv2.jpg', images: ['https://static.wixstatic.com/media/7e6071_e907e6686c724e629d384460c36ef4e4~mv2.jpg','https://static.wixstatic.com/media/7e6071_9399789d9eee4d7a9f22f58ef5d3fb0c~mv2.jpg','https://static.wixstatic.com/media/8bb438_3ae04589aef4480e89a24d7283c69798~mv2_d_2869_3586_s_4_2.jpg','https://static.wixstatic.com/media/8bb438_734b8f436e944886b4185aa6f72b5cad~mv2_d_3000_2000_s_2.jpg'] },
  { id: 'tobi-opadeji-birthday', title: 'Tobi Opadeji Birthday', date: '2022', coverImage: 'https://static.wixstatic.com/media/7e6071_1e7c6e09db5141a2a455072d8ef0ebb2~mv2.jpeg', images: [] },
  { id: 'lfc-children-church', title: 'LFC Children Church Lokogoma', date: 'December 3rd, 2022', coverImage: 'https://static.wixstatic.com/media/7e6071_de3de9fe32e0413f9530aff62ec92b53~mv2.jpg', images: [] },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'ProEdge transformed our wedding into an absolute dream. Every detail was handled with such care and professionalism. The photography captured moments we will treasure forever.', name: 'Mr & Mrs Adeyemi', event: 'Wedding Reception, 2024' },
  { quote: 'Working with the ProEdge team for our corporate gala was a seamless experience. The stage lighting was spectacular and the DJ kept everyone engaged all evening.', name: 'Zenith Corporate Events', event: 'Annual Gala Dinner, 2023' },
  { quote: 'From concept to execution, ProEdge delivered beyond our expectations. Their attention to detail and creative vision made our event truly unforgettable.', name: 'The Ugot Family', event: '70th Birthday Celebration, 2022' },
];
