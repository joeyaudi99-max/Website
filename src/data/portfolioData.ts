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
      { src: '/Media/Thesis/Before_after_green_screen.png', alt: 'Virtual Production - Green Screen Comparison' },
      { src: '/Media/Thesis/Final_key_without_grading.png', alt: 'Virtual Production - Final Key' },
      { src: '/Media/Thesis/Magic_mask.png', alt: 'Virtual Production - Magic Mask' },
      { src: '/Media/Thesis/Matte view_.png', alt: 'Virtual Production - Matte View' },
      { src: '/Media/Thesis/Post_virtual.jpg', alt: 'Virtual Production - Post Virtual' }
    ],
    title: 'Virtual Production Research',
    categoryLabel: 'Research · Virtual Production',
    description: 'Bachelor\'s thesis researching virtual production workflows, focusing on green screen compositing, matte extraction, and virtual set integration. Documented comprehensive technical methodology for implementing modern VP techniques in production environments.',
    tags: ['Virtual Production', 'Green Screen', 'Compositing', 'Research', 'Thesis Work']
  },
  {
    id: 'ioana-model-photoshoot',
    category: 'photography',
    categories: 'photography',
    mediaType: 'multiImage',
    lightboxGroup: 'ioana-model',
    carouselImages: [
      { src: '/Media/Photography/Ioana_Model/Ioana_1.jpg', alt: 'Ioana Model Photoshoot - Portrait 1' },
      { src: '/Media/Photography/Ioana_Model/Ioana_2.jpg', alt: 'Ioana Model Photoshoot - Portrait 2' },
      { src: '/Media/Photography/Ioana_Model/Ioana_3.jpg', alt: 'Ioana Model Photoshoot - Portrait 3' },
      { src: '/Media/Photography/Ioana_Model/Ioana_4.jpg', alt: 'Ioana Model Photoshoot - Portrait 4' },
      { src: '/Media/Photography/Ioana_Model/Ioana_5.jpg', alt: 'Ioana Model Photoshoot - Portrait 5' }
    ],
    title: 'Ioana Model Photoshoot',
    categoryLabel: 'Photography · Portrait',
    description: 'Portrait session focused on capturing natural expressions. I worked with studio lighting and directed poses to keep the series consistent across different setups.',
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
    description: 'Combined 3D animation with video editing for a recipe tutorial. Made in Blender, edited in Premiere Pro. I wanted to make technical content feel more accessible and visually interesting.',
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
    description: 'Promo video project where I handled cinematography and editing for brand storytelling.',
    tags: ['Video Production', 'Cinematography', 'Editing']
  },
  {
    id: 'wine-hack',
    category: 'video',
    categories: 'video',
    mediaType: 'video',
    videoSrc: '/Media/Wine_Hack_Subtitles.mp4',
    posterImage: '/Media/Wine_Hack_Subtitles_poster.jpg',
    title: 'Wine Hack Tutorial',
    categoryLabel: 'Video Production · Tutorial',
    description: 'Short tutorial video with quick edits and clear subtitles. Made for social media, so I kept it tight and engaging.',
    tags: ['Video Editing', 'Production', 'Subtitling']
  },
  {
    id: 'martian-hat',
    category: 'renders',
    categories: 'renders,video',
    mediaType: 'video',
    videoSrc: '/Media/Martian_hat_render_ad.mp4',
    posterImage: '/Media/Martian_hat_render_ad_poster.jpg',
    title: 'Martian Hat Render Advertisement',
    categoryLabel: '3D Render · Advertisement',
    description: '3D product visualization with motion graphics for a promo ad. Rendered with realistic materials and animated for social distribution.',
    tags: ['3D Rendering', 'Product Visualization', 'Motion Graphics']
  },
  {
    id: 'post-apocalyptic',
    category: 'renders',
    categories: 'renders',
    mediaType: 'image',
    imageSrc: '/Media/PostApocalyptic_Render.jpg',
    lightboxGroup: 'post-apocalyptic',
    title: 'Post Apocalyptic Environment',
    categoryLabel: '3D Environment · Arnold Renderer',
    description: 'Made in Maya with VR-sculpted trees and environmental assets. I used composition principles and Arnold renderer to get a cinematic feel. Good practice working across different 3D tools and rendering systems.',
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
    description: 'Course project making a sci-fi movie poster in Photoshop. I combined multiple elements with color grading and lighting effects to build a cohesive space-themed design.',
    tags: ['Adobe Photoshop', 'Photo Manipulation', 'Movie Poster']
  },
  {
    id: 'mountain-environment',
    category: 'renders',
    categories: 'renders',
    mediaType: 'image',
    imageSrc: '/Media/Mountain_4320px.jpg',
    lightboxGroup: 'mountain',
    title: 'Mountain Environment',
    categoryLabel: '3D Environment · Blender',
    description: 'Procedurally generated mountain landscape in Blender using world generation tools. Rendered at 4K with focus on composition and atmospheric perspective. I went with grayscale color grading to keep attention on the forms.',
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
      { src: '/Media/CROSSROAD_CHARACTER_1_JOEY.jpg', alt: 'Crossyroad game character - View 1' },
      { src: '/Media/CROSSROAD_CHARACTER_2_JOEY.jpg', alt: 'Crossyroad game character - View 2' },
      { src: '/Media/CROSSROAD_CHARACTER_3_JOEY.jpg', alt: 'Crossyroad game character - View 3' },
      { src: '/Media/chickencrossyjoey.jpg', alt: 'Crossyroad game character - Chicken' }
    ],
    title: 'Crossyroad Character Collection',
    categoryLabel: '3D Character · Game Asset',
    description: 'Low-poly game characters modeled in Blender, matching the Crossy Road aesthetic. I made multiple character variations and views to practice game asset optimization and style matching.',
    tags: ['Blender', 'Character Modeling', 'Game Asset', 'Low Poly']
  },
  {
    id: 'minecraft-sitsit',
    category: 'graphic-design',
    categories: 'graphic-design,renders',
    mediaType: 'beforeAfter',
    beforeImage: '/Media/Minecraft_Sitsit/INSTA_POST_MC_SITSIT_BEFORE.jpg',
    afterImage: '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_POST_FINAL_1.jpg',
    lightboxGroup: 'minecraft-sitsit',
    secondaryImages: [
      { src: '/Media/Minecraft_Sitsit/INSTA_POST_MC_SITSIT_BEFORE.jpg', alt: 'Minecraft Sitsit - Before Version' },
      { src: '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_POST_FINAL_1.jpg', alt: 'Minecraft Sitsit - Final Version' },
      { src: '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_STORY_FINAL_FIX.jpg', alt: 'Minecraft Sitsit Instagram Story' },
      { src: '/Media/Minecraft_Sitsit/MCSITSIT_patch_2_1.jpg', alt: 'Minecraft Sitsit Patch Design' },
      { src: '/Media/Minecraft_Sitsit/MCsitsit_Teaser.jpg', alt: 'Minecraft Sitsit Teaser' },
      { src: '/Media/Minecraft_Sitsit/songbook_and_patch.jpg', alt: 'Minecraft Sitsit Songbook and Patch' },
      { src: '/Media/Minecraft_Sitsit/Songbook_screenshot.png', alt: 'Minecraft Sitsit Songbook Screenshot' }
    ],
    title: 'Minecraft Sitsit Event Branding',
    categoryLabel: 'Graphic Design · 3D Renders',
    description: 'Developed complete visual identity and managed event operations for 200-person student gathering. Coordinated venue logistics, secured sponsorships, and led volunteer team. Maintained cohesive Minecraft-themed branding across digital content, merchandise, and print materials. Event achieved sell-out status within 48 hours.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Event Branding', 'Social Media Design', '3D Renders']
  },
  {
    id: 'clint-cruise',
    category: 'graphic-design',
    categories: 'graphic-design,renders',
    mediaType: 'carousel',
    autoRotate: true,
    lightboxGroup: 'clint-cruise',
    carouselImages: [
      { src: '/Media/CLINT_CRUISE/CLINT_CRUISE_Insta_Final.jpg', alt: 'CLINT CRUISE Instagram Post' },
      { src: '/Media/CLINT_CRUISE/CLINT_CRUISE_patchv2.jpg', alt: 'CLINT CRUISE Patch Design' }
    ],
    title: 'CLINT CRUISE Event Branding',
    categoryLabel: 'Graphic Design · 3D Renders',
    description: 'Created comprehensive branding package for flagship annual cruise event serving 150+ international students. Designed Instagram graphics, physical merchandise, and promotional materials that contributed to ticket sales and secured €2,000 in event sponsorships.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Event Branding', '3D Renders']
  },
  {
    id: 'vfx-drone-test',
    category: 'renders',
    categories: 'renders,video',
    mediaType: 'multiImage',
    lightboxGroup: 'vfx-drone',
    carouselImages: [
      { src: '/Media/VFX_Test/Drone_Shot_Before.jpg', alt: 'VFX Test - Original Drone Footage' },
      { src: '/Media/VFX_Test/Point_Cloud_1.jpg', alt: 'VFX Test - 3D Point Cloud Scan 1' },
      { src: '/Media/VFX_Test/Point_Cloud_2.jpg', alt: 'VFX Test - 3D Point Cloud Scan 2' },
      { src: '/Media/VFX_Test/Point_Cloud_3.jpg', alt: 'VFX Test - 3D Point Cloud Scan 3' },
      { src: '/Media/VFX_Test/Final_Result_After.jpg', alt: 'VFX Test - Final Composite with 3D Elements' }
    ],
    title: 'VFX Drone Composite',
    categoryLabel: 'VFX · 3D Integration',
    description: '3D scanning workflow test integrating CG elements into live drone footage. Processed point cloud data from aerial shots, added 3D assets in post, and matched lighting/color grade to blend synthetic elements with practical footage.',
    tags: ['VFX', '3D Scanning', 'Compositing', 'Color Grading', 'Drone Footage']
  },
  {
    id: 'goodbye-animation',
    category: 'video',
    categories: 'video,renders',
    mediaType: 'video',
    videoSrc: '/Media/Goodbye_Joey_Audi.mp4',
    posterImage: '/Media/Goodbye_Joey_Audi_poster.jpg',
    title: 'Goodbye - Character Animation',
    categoryLabel: 'Animation · Motion Graphics',
    description: 'Character-driven animation combining Adobe After Effects motion graphics with Character Animator for real-time facial animation. Rigged custom character, recorded performance capture, and composited animated elements with kinetic typography.',
    tags: ['After Effects', 'Character Animator', 'Motion Graphics', '2D Animation']
  },
  {
    id: 'army-classic-animation',
    category: 'renders',
    categories: 'renders,video',
    mediaType: 'video',
    videoSrc: '/Media/Army_Classic.mp4',
    posterImage: '/Media/Army_Classic_poster.jpg',
    title: 'Army Classic Character Animation',
    categoryLabel: '3D Animation · Character Rigging',
    description: 'Character animation workflow using Mixamo rigging and Blender for animation refinement. Applied motion capture data to custom character rig, cleaned up keyframes, and rendered with cinematic camera work.',
    tags: ['Blender', 'Mixamo', 'Character Animation', '3D Animation']
  },
  {
    id: 'animation-showreel',
    category: 'video',
    categories: 'video,renders',
    mediaType: 'video',
    videoSrc: '/Media/Animation_Showreel.mp4',
    posterImage: '/Media/Animation_Showreel_poster.jpg',
    title: 'Animation Showreel 2023',
    categoryLabel: 'Showreel · 3D & Motion Graphics',
    description: 'Compilation of animation work completed during studies at Tampere University of Applied Sciences. Includes 3D character animation, motion graphics, VFX compositing, and rendering projects demonstrating technical range across multiple software packages.',
    tags: ['Showreel', '3D Animation', 'Motion Graphics', 'VFX', 'Academic Work']
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
