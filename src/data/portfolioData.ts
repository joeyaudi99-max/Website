export interface PortfolioItem {
  id: string;
  category: string;
  categories: string; // For multiple categories
  mediaType: 'youtube' | 'video' | 'image' | 'carousel' | 'beforeAfter' | 'multiImage';
  title: string;
  categoryLabel: string;
  description: string;
  tags: string[];
  
  // Media properties
  youtubeId?: string;
  videoSrc?: string;
  posterImage?: string;
  imageSrc?: string;
  lightboxGroup?: string;
  
  // Carousel properties
  carouselImages?: Array<{
    src: string;
    alt: string;
  }>;
  autoRotate?: boolean;
  
  // Before/After properties
  beforeImage?: string;
  afterImage?: string;
  secondaryImages?: Array<{
    src: string;
    alt: string;
  }>;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'virtual-production-research',
    category: 'research',
    categories: 'research,renders',
    mediaType: 'multiImage',
    lightboxGroup: 'virtual-production',
    carouselImages: [
      { src: '/Media/Thesis/Before after green screen.png', alt: 'Virtual Production - Green Screen Comparison' },
      { src: '/Media/Thesis/Final key without grading.png', alt: 'Virtual Production - Final Key' },
      { src: '/Media/Thesis/Magic mask.png', alt: 'Virtual Production - Magic Mask' },
      { src: '/Media/Thesis/Matte view_.png', alt: 'Virtual Production - Matte View' },
      { src: '/Media/Thesis/Post virtual.png', alt: 'Virtual Production - Post Virtual' }
    ],
    title: 'Virtual Production Research',
    categoryLabel: 'Research · Virtual Production',
    description: 'Bachelor\'s thesis exploring virtual production workflows—specifically green screen compositing, matte work, and virtual set integration. This project demonstrates my ability to learn emerging tech independently and document technical processes clearly.',
    tags: ['Virtual Production', 'Green Screen', 'Compositing', 'Research', 'Thesis Work']
  },
  {
    id: 'ioana-model-photoshoot',
    category: 'photography',
    categories: 'photography',
    mediaType: 'multiImage',
    lightboxGroup: 'ioana-model',
    carouselImages: [
      { src: '/Media/Photography/Ioana Model/Ioana 1.jpg', alt: 'Ioana Model Photoshoot - Portrait 1' },
      { src: '/Media/Photography/Ioana Model/Ioana 2.jpg', alt: 'Ioana Model Photoshoot - Portrait 2' },
      { src: '/Media/Photography/Ioana Model/Ioana 3.jpg', alt: 'Ioana Model Photoshoot - Portrait 3' },
      { src: '/Media/Photography/Ioana Model/Ioana 4.jpg', alt: 'Ioana Model Photoshoot - Portrait 4' },
      { src: '/Media/Photography/Ioana Model/Ioana 5.jpg', alt: 'Ioana Model Photoshoot - Portrait 5' }
    ],
    title: 'Ioana Model Photoshoot',
    categoryLabel: 'Photography · Portrait',
    description: 'Professional portrait session demonstrating studio lighting techniques, direction, and composition. This series captures natural expressions while maintaining consistent quality across different poses and setups.',
    tags: ['Photography', 'Portrait', 'Studio', 'Model Photography', 'Lighting']
  },
  {
    id: 'chocolate-fondant',
    category: 'video',
    categories: 'video,renders',
    mediaType: 'youtube',
    youtubeId: 'Kumu1b_2Rrk',
    title: 'Chocolate Fondant Tutorial',
    categoryLabel: '3D Animation · Video Editing',
    description: 'Combined 3D animation with video editing to create a recipe tutorial. Made in Blender and edited in Adobe Premiere Pro, this project shows how I approach making technical content accessible and visually engaging.',
    tags: ['3D Animation', 'Adobe Premiere Pro', 'Food Styling']
  },
  {
    id: 'promo-video',
    category: 'video',
    categories: 'video',
    mediaType: 'youtube',
    youtubeId: 'LHb02g-2eqg',
    title: 'Promotional Video',
    categoryLabel: 'Video Production · Promotional',
    description: 'Promotional video project demonstrating cinematography and editing skills for brand storytelling.',
    tags: ['Video Production', 'Cinematography', 'Editing']
  },
  {
    id: 'wine-hack',
    category: 'video',
    categories: 'video',
    mediaType: 'video',
    videoSrc: '/Media/Wine Hack Subtitles.mp4',
    title: 'Wine Hack Tutorial',
    categoryLabel: 'Video Production · Tutorial',
    description: 'Short-form video tutorial showing my approach to quick, engaging content with clear subtitling and tight editing. Produced for social media distribution.',
    tags: ['Video Editing', 'Production', 'Subtitling']
  },
  {
    id: 'martian-hat',
    category: 'renders',
    categories: 'renders,video',
    mediaType: 'video',
    videoSrc: '/Media/Martian hat render ad.mp4',
    title: 'Martian Hat Render Advertisement',
    categoryLabel: '3D Render · Advertisement',
    description: '3D product visualization and motion graphics for a promotional ad. Rendered with realistic materials and animated for social media distribution.',
    tags: ['3D Rendering', 'Product Visualization', 'Motion Graphics']
  },
  {
    id: 'post-apocalyptic',
    category: 'renders',
    categories: 'renders',
    mediaType: 'image',
    imageSrc: '/Media/PostApocalyptic Render.jpg',
    lightboxGroup: 'post-apocalyptic',
    title: 'Post Apocalyptic Environment',
    categoryLabel: '3D Environment · Arnold Renderer',
    description: 'Created in AutoDesk Maya with VR-sculpted trees and environmental assets. Used composition principles and Arnold renderer to achieve a cinematic atmosphere. This project demonstrates my ability to work across different 3D tools and rendering pipelines.',
    tags: ['AutoDesk Maya', 'VR', 'Arnold Renderer', 'Composition']
  },
  {
    id: 'photo-manipulation',
    category: 'graphic-design',
    categories: 'graphic-design',
    mediaType: 'image',
    imageSrc: '/Media/JoeyAudi_PhotoManipulation.jpg',
    lightboxGroup: 'photo-manipulation',
    title: 'Photo Manipulation - Space Movie Poster',
    categoryLabel: 'Graphic Design · Photo Manipulation',
    description: 'Course project creating a sci-fi movie poster using Photoshop compositing techniques. Combined multiple elements, color grading, and lighting effects to create a cohesive space-themed design.',
    tags: ['Adobe Photoshop', 'Photo Manipulation', 'Movie Poster']
  },
  {
    id: 'mountain-environment',
    category: 'renders',
    categories: 'renders',
    mediaType: 'image',
    imageSrc: '/Media/Mountain 4320px.jpg',
    lightboxGroup: 'mountain',
    title: 'Mountain Environment',
    categoryLabel: '3D Environment · Blender',
    description: 'Procedurally generated mountain landscape created in Blender with world generation tools. Rendered at 4K resolution with a focus on composition and atmospheric perspective using grayscale color grading.',
    tags: ['Blender', 'World Generation', '4K Rendering', 'Composition']
  },
  {
    id: 'crossyroad-characters',
    category: 'renders',
    categories: 'renders',
    mediaType: 'carousel',
    autoRotate: true,
    lightboxGroup: 'crossyroad',
    carouselImages: [
      { src: '/Media/CROSSROAD CHARACTER 1 JOEY.png', alt: 'Crossyroad game character - View 1' },
      { src: '/Media/CROSSROAD CHARACTER 2 JOEY.png', alt: 'Crossyroad game character - View 2' },
      { src: '/Media/CROSSROAD CHARACTER 3 JOEY.png', alt: 'Crossyroad game character - View 3' },
      { src: '/Media/chickencrossyjoey.png', alt: 'Crossyroad game character - Chicken' }
    ],
    title: 'Crossyroad Character Collection',
    categoryLabel: '3D Character · Game Asset',
    description: 'Low-poly game characters modeled in Blender following the Crossy Road aesthetic. Created multiple character variations and views to demonstrate understanding of game asset optimization and style matching.',
    tags: ['Blender', 'Character Modeling', 'Game Asset', 'Low Poly']
  },
  {
    id: 'minecraft-sitsit',
    category: 'graphic-design renders',
    categories: 'graphic-design,renders',
    mediaType: 'beforeAfter',
    beforeImage: '/Media/Minecraft Sitsit/INSTA POST MC SITSIT BEFORE.jpg',
    afterImage: '/Media/Minecraft Sitsit/MC SITSIT INSTA POST FINAL (1).png',
    lightboxGroup: 'minecraft-sitsit',
    secondaryImages: [
      { src: '/Media/Minecraft Sitsit/INSTA POST MC SITSIT BEFORE.jpg', alt: 'Minecraft Sitsit - Before Version' },
      { src: '/Media/Minecraft Sitsit/MC SITSIT INSTA POST FINAL (1).png', alt: 'Minecraft Sitsit - Final Version' },
      { src: '/Media/Minecraft Sitsit/MC SITSIT INSTA STORY FINAL FIX.png', alt: 'Minecraft Sitsit Instagram Story' },
      { src: '/Media/Minecraft Sitsit/MCSITSIT patch 2 (1).png', alt: 'Minecraft Sitsit Patch Design' },
      { src: '/Media/Minecraft Sitsit/MCsitsit Teaser.JPG', alt: 'Minecraft Sitsit Teaser' },
      { src: '/Media/Minecraft Sitsit/songbook and patch.jpg', alt: 'Minecraft Sitsit Songbook and Patch' },
      { src: '/Media/Minecraft Sitsit/Songbook screenshot.png', alt: 'Minecraft Sitsit Songbook Screenshot' }
    ],
    title: 'Minecraft Sitsit Event Branding',
    categoryLabel: 'Graphic Design · 3D Renders',
    description: 'Complete visual identity for a 200-person student event, including Instagram posts, patches, and printed songbooks. Coordinated with venue, sponsors, and volunteers to ensure consistent branding across all touchpoints. Event sold out in 48 hours.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Event Branding', 'Social Media Design', '3D Renders']
  },
  {
    id: 'clint-cruise',
    category: 'graphic-design renders',
    categories: 'graphic-design,renders',
    mediaType: 'carousel',
    autoRotate: true,
    lightboxGroup: 'clint-cruise',
    carouselImages: [
      { src: '/Media/CLINT CRUISE/CLINT CRUISE Insta Final.png', alt: 'CLINT CRUISE Instagram Post' },
      { src: '/Media/CLINT CRUISE/CLINT CRUISE patchv2.png', alt: 'CLINT CRUISE Patch Design' }
    ],
    title: 'CLINT CRUISE Event Branding',
    categoryLabel: 'Graphic Design · 3D Renders',
    description: 'Branding for CLINT\'s flagship cruise event. Created Instagram graphics, patch designs, and promotional materials that helped drive ticket sales and secure €2,000 in sponsorships. This event has become an annual tradition with 150+ international students participating.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Event Branding', '3D Renders']
  }
];

export const portfolioFilters = [
  { value: 'all', label: 'All' },
  { value: 'video', label: 'Video' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'renders', label: '3D Renders' },
  { value: 'research', label: 'Research' },
  { value: 'photography', label: 'Photography' }
];
