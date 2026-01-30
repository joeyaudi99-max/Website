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
    description: 'Bachelor\'s thesis research exploring virtual production techniques and green screen workflows. This project demonstrates advanced compositing skills, virtual set design, and understanding of modern film production pipelines. Includes before/after comparisons, matte views, and final composited scenes.',
    tags: ['Virtual Production', 'Green Screen', 'Compositing', 'Research', 'Thesis Work']
  },
  {
    id: 'chocolate-fondant',
    category: 'video',
    categories: 'video,renders',
    mediaType: 'youtube',
    youtubeId: 'Kumu1b_2Rrk',
    title: 'Chocolate Fondant Tutorial',
    categoryLabel: '3D Animation · Video Editing',
    description: 'This recipe is amazing, and to share it with the world, I made a 3D animation, edited it in Adobe Premiere Pro. I hope you can grasp the simplicity through the animation.',
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
    description: 'A professionally crafted promotional video showcasing creative storytelling and video production expertise.',
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
    description: 'A creative video project showcasing my production and editing capabilities with clear storytelling and visual communication.',
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
    description: 'A 3D rendered advertisement showcasing product visualization and motion graphics expertise.',
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
    description: 'Experimenting with AutoDesk Maya, the trees were made in VR, the rest was made from scratch and using the rules of composition, I added a cinematic feel and rendered it with Arnold renderer.',
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
    description: 'For a course task I had to create a movie poster using Photoshop, so I\'ve decided to put myself in space. I\'ve colored myself green, added planets, dissolved my head into the emptiness of space and added lighting effects.',
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
    description: 'Creating a fake scenery using world generation and Blender, while using composition and grayscale colors to provide a 4K render of realistic mountains.',
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
    description: 'In an attempt to create crossyroad game characters, I have made, using Blender, and following the game\'s aesthetic seemingly proper and useable characters. Navigate through different character views and models.',
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
    description: 'Complete visual identity for a Minecraft-themed sitsit event, including Instagram posts, story graphics, patch design, and promotional materials. The before/after comparison showcases the transformation from initial concept to final polished design. Scroll through to see additional event materials including patches, teasers, and songbook designs.',
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
    description: 'Comprehensive branding for the CLINT CRUISE event, featuring Instagram promotional graphics, custom patch designs, and a themed songbook. This project combines graphic design with 3D rendering to create a cohesive visual identity for a memorable student event experience.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Event Branding', '3D Renders']
  }
];

export const portfolioFilters = [
  { value: 'all', label: 'All' },
  { value: 'video', label: 'Video' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'renders', label: '3D Renders' },
  { value: 'research', label: 'Research' }
];
