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

  // Case Study properties
  caseStudy?: {
    subtitle: string;
    role: string;
    challenge: string;
    solution: string;
    impact: string[];
    tools: string[];
    images: string[];
    thesisLink?: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'nokia-arena-operations',
    category: 'video',
    categories: 'video,graphic-design',
    mediaType: 'image',
    imageSrc: '/Media/Profile.jpg',
    lightboxGroup: 'nokia-arena',
    title: 'Nokia Arena Operations',
    categoryLabel: 'AV Systems · Customer Experience',
    description: 'Role: Audiovisual Technician at Nokia Arena\'s Paidia Gaming Space. Challenge: Maintain operational excellence for 40 high-performance gaming PCs, VR equipment, and console stations while providing exceptional customer service to 100+ weekly visitors. Solution: Implemented systematic technical maintenance using GGLeap optimization software, developed troubleshooting protocols for VR equipment, created promotional graphics using Adobe Creative Suite, and provided hands-on technical support. Impact: Managed 40 gaming PCs with 99%+ uptime, served 100+ visitors weekly, created promotional content for social media, maintained professional customer service standards with zero major technical failures during tenure.',
    tags: ['GGLeap', 'Adobe Photoshop', 'Adobe Premiere Pro', 'VR Equipment', 'Technical Support', 'AV Systems'],
    caseStudy: {
      subtitle: 'Large-Scale AV & Customer Experience Management',
      role: 'Audiovisual Technician',
      challenge: 'Maintain operational excellence for 40 high-performance gaming PCs, VR equipment, and console stations while providing exceptional customer service to 100+ weekly visitors at Nokia Arena\'s flagship gaming space.',
      solution: 'Implemented systematic technical maintenance using GGLeap optimization software, developed troubleshooting protocols for VR equipment, created promotional graphics using Adobe Creative Suite, and provided hands-on technical support. Ensured smooth operations during high-traffic periods.',
      impact: [
        'Managed 40 gaming PCs with 99%+ uptime',
        'Served 100+ visitors weekly',
        'Created promotional content for social media',
        'Zero major technical failures during tenure',
        'Maintained professional customer service standards'
      ],
      tools: ['GGLeap', 'Adobe Photoshop', 'Adobe Premiere Pro', 'VR Equipment', 'Technical Support', 'AV Systems'],
      images: ['/Media/Profile.jpg']
    }
  },
  {
    id: 'virtual-production-research',
    category: 'research',
    categories: 'research,renders',
    mediaType: 'beforeAfter',
    beforeImage: '/Media/Thesis/Before_green_screen.jpg',
    afterImage: '/Media/Thesis/After_green_screen.png',
    lightboxGroup: 'virtual-production',
    secondaryImages: [
      { src: '/Media/Thesis/Final_key_without_grading.png', alt: 'Virtual Production - Final Key Without Grading' },
      { src: '/Media/Thesis/Magic_mask.png', alt: 'Virtual Production - Magic Mask Tracking' },
      { src: '/Media/Thesis/Matte view_.png', alt: 'Virtual Production - Matte View' },
      { src: '/Media/Thesis/Post_virtual.jpg', alt: 'Virtual Production - Final Post Result' },
      { src: '/Media/Thesis/Techvis_Setup.png', alt: 'Virtual Production - Techvis Setup in Unreal Engine' },
      { src: '/Media/Thesis/Green_Screen_Setup.png', alt: 'Virtual Production - Green Screen Setup' },
      { src: '/Media/Thesis/Small_Rig_Setup.png', alt: 'Virtual Production - Small Rig Setup' }
    ],
    title: 'Virtual Production Research',
    categoryLabel: 'Research · Virtual Production',
    description: 'Role: Researcher & Technical Author for Bachelor\'s Thesis at Tampere University of Applied Sciences. Challenge: Document and validate modern virtual production workflows for academic and industry application. Solution: Conducted comprehensive research on virtual production techniques including green screen compositing, advanced matte extraction, magic mask technology, and virtual set integration. Methodology: Practical testing of VP workflows, technical documentation, and analysis of production environment implementations. Impact: Produced academically rigorous thesis contributing to VP knowledge base, demonstrated technical understanding of cutting-edge production methodologies.',
    tags: ['Virtual Production', 'Green Screen', 'Compositing', 'Research', 'Thesis Work'],
    caseStudy: {
      subtitle: 'Practice-Based Exploration of Green Screen Virtual Production',
      role: 'Bachelor\'s Thesis Researcher at Tampere University of Applied Sciences',
      challenge: 'Systematically explore the application of virtual production workflows to indie short film creation with limited consumer-grade equipment, testing if accessible tools like Unreal Engine and DaVinci Resolve can achieve professional results while documenting technical requirements and creative possibilities.',
      solution: 'Conducted comprehensive research on VP evolution and techniques (Previs, Techvis, Simulcam, ICVFX, VR Location Scouting). Built experimental scene using green screen, iPhone motion tracking via LiveLink, and Blackmagic Cinema Camera 4K. Implemented complete workflow: VR virtual scouting → Techvis → Production with real-time compositing → Post-production in DaVinci Resolve. Utilized Unreal Engine 5.5 with Nanite/Lumen, Take Recorder, and Movie Render Queue. Applied advanced keying (3D Keyer), Magic Mask tracking, and node-based color grading to integrate live-action and virtual elements.',
      impact: [
        'Produced academically rigorous 69-page thesis accepted by Tampere UAS',
        'Published to Finnish academic repository (URN:NBN:fi:amk-2025060520810)',
        'Demonstrated that consumer equipment can achieve convincing VP results with proper workflow',
        'Identified key limitations: wireless latency, lighting challenges, render times (24hrs per 800 frames)',
        'Provided practical guidance for indie filmmakers implementing VP techniques',
        'Contributed to VP knowledge base for independent film contexts'
      ],
      tools: ['Unreal Engine 5.5', 'DaVinci Resolve 20', 'Blackmagic Pocket Cinema Camera 4K', 'iPhone 12 Pro Max', 'LiveLink', 'Meta Quest 2', 'RTX 5080 GPU', 'Green Screen Compositing'],
      images: [
        '/Media/Thesis/Before_green_screen.jpg',
        '/Media/Thesis/After_green_screen.png',
        '/Media/Thesis/Final_key_without_grading.png',
        '/Media/Thesis/Magic_mask.png',
        '/Media/Thesis/Matte view_.png',
        '/Media/Thesis/Post_virtual.jpg',
        '/Media/Thesis/Techvis_Setup.png',
        '/Media/Thesis/Green_Screen_Setup.png',
        '/Media/Thesis/Small_Rig_Setup.png'
      ]
    }
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
    description: 'Role: Photographer & Creative Director. Challenge: Capture authentic, natural expressions while maintaining visual consistency across multiple setups and lighting scenarios. Solution: Directed portrait session using professional studio lighting techniques, managed pose direction, and maintained consistent aesthetic throughout the shoot across 5+ different setups. Impact: Produced cohesive portfolio-quality portrait series demonstrating technical photography skills and ability to direct subjects for natural, compelling imagery.',
    tags: ['Photography', 'Portrait', 'Studio', 'Model Photography', 'Lighting']
  },
  {
    id: 'minecraft-sitsit',
    category: 'graphic-design',
    categories: 'graphic-design,renders',
    mediaType: 'beforeAfter',
    beforeImage: '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_POST_FINAL_1.jpg',
    afterImage: '/Media/Minecraft_Sitsit/INSTA_POST_MC_SITSIT_BEFORE.jpg',
    lightboxGroup: 'minecraft-sitsit',
    secondaryImages: [
      { src: '/Media/Minecraft_Sitsit/songbook_and_patch.jpg', alt: 'Minecraft Sitsit Songbook and Patch' },
      { src: '/Media/Minecraft_Sitsit/Songbook_screenshot.png', alt: 'Minecraft Sitsit Songbook Screenshot' },
      { src: '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_POST_FINAL_1.jpg', alt: 'Minecraft Sitsit - Before Version' },
      { src: '/Media/Minecraft_Sitsit/INSTA_POST_MC_SITSIT_BEFORE.jpg', alt: 'Minecraft Sitsit - Final Version' },
      { src: '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_STORY_FINAL_FIX.jpg', alt: 'Minecraft Sitsit Instagram Story' },
      { src: '/Media/Minecraft_Sitsit/MCSITSIT_patch_2_1.jpg', alt: 'Minecraft Sitsit Patch Design' },
      { src: '/Media/Minecraft_Sitsit/MCsitsit_Teaser.jpg', alt: 'Minecraft Sitsit Teaser' }
    ],
    title: 'Minecraft Sitsit Event Branding',
    categoryLabel: 'Graphic Design · 3D Renders',
    description: 'Role: Lead Designer & Event Coordinator. Challenge: Create cohesive visual identity for 200-person student event with limited budget and tight 6-week timeline. Solution: Designed complete branding package using Adobe Photoshop, Illustrator, and Blender—including Instagram graphics, physical merchandise, songbook, and promotional materials. Coordinated venue logistics and led volunteer team. Impact: Event sold out within 48 hours, secured event sponsorships, and maintained brand consistency across 7+ deliverables.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Event Branding', 'Social Media Design', '3D Renders'],
    caseStudy: {
      subtitle: 'Full-Scale Event Branding & Coordination',
      role: 'Main Organizer & Lead Designer',
      challenge: 'Create cohesive visual identity for 200-person student event with limited budget and tight 6-week timeline while coordinating all event operations.',
      solution: 'As main organizer, managed complete event lifecycle from concept to execution. Designed complete branding package using Adobe Photoshop, Illustrator, and Blender—including Instagram graphics, physical merchandise patches, custom songbook design, and promotional materials. Simultaneously coordinated venue logistics, managed volunteer team, and secured event sponsorships.',
      impact: [
        'Event sold out within 48 hours',
        'Secured event sponsorships',
        'Maintained brand consistency across 7+ deliverables',
        '200 attendees, zero operational issues'
      ],
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Event Management', 'Team Leadership'],
      images: [
        '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_POST_FINAL_1.jpg',
        '/Media/Minecraft_Sitsit/songbook_and_patch.jpg',
        '/Media/Minecraft_Sitsit/Songbook_screenshot.png',
        '/Media/Minecraft_Sitsit/MCSITSIT_patch_2_1.jpg',
        '/Media/Minecraft_Sitsit/INSTA_POST_MC_SITSIT_BEFORE.jpg',
        '/Media/Minecraft_Sitsit/MC_SITSIT_INSTA_STORY_FINAL_FIX.jpg',
        '/Media/Minecraft_Sitsit/MCsitsit_Teaser.jpg'
      ]
    }
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
    description: 'Role: Vice-Chairman & Lead Designer at Club International Tampere. Challenge: Create compelling brand identity for flagship annual cruise event to attract 150+ international students and secure sponsorships. Solution: Designed comprehensive branding package including Instagram graphics, physical merchandise patches, and promotional materials using Adobe Creative Suite and Blender for 3D renders. Impact: Contributed to successful ticket sales, secured €2,000 in event-specific sponsorships, and established recognizable visual identity for annual event series.',
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender', 'Event Branding', '3D Renders'],
    caseStudy: {
      subtitle: 'Event Leadership & Sponsorship Management',
      role: 'Vice-Chairman & Lead Event Coordinator at CLINT',
      challenge: 'Secure substantial sponsorships and coordinate 30+ annual events for international student community of 600+ members while maintaining quality and engagement. Create compelling brand identity for flagship CLINT CRUISE event.',
      solution: 'Developed comprehensive sponsorship pitch decks, negotiated contracts with local businesses, led volunteer team of 30 members, and implemented systematic event planning processes. Created complete event branding for CLINT CRUISE including Instagram graphics, physical merchandise, and promotional materials using Adobe Creative Suite and Blender.',
      impact: [
        'Secured €9,000 in annual sponsorships (€2,000 for CLINT CRUISE specifically)',
        'Successfully coordinated 30+ events',
        'Managed events for up to 600 attendees',
        'Led team of 30 volunteers',
        'Established sustainable event processes and recognizable brand identity'
      ],
      tools: ['Event Coordination', 'Sponsorship Negotiation', 'Team Leadership', 'Budget Management', 'Adobe Photoshop', 'Adobe Illustrator', 'Blender'],
      images: [
        '/Media/CLINT_CRUISE/CLINT_CRUISE_Insta_Final.jpg',
        '/Media/CLINT_CRUISE/CLINT_CRUISE_patchv2.jpg'
      ]
    }
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
    description: 'Role: VFX Artist & Technical Pipeline Developer. Challenge: Integrate computer-generated 3D elements seamlessly into live aerial drone footage using modern VFX workflows. Solution: Developed 3D scanning pipeline by processing photogrammetry point cloud data from drone footage, integrated CG assets in post-production, and performed precise lighting/color matching to achieve photorealistic blend between synthetic and practical elements. Tools: Industry-standard compositing software, 3D scanning tools, and color grading systems. Impact: Demonstrated technical proficiency in modern VFX pipelines and photorealistic integration techniques.',
    tags: ['VFX', '3D Scanning', 'Compositing', 'Color Grading', 'Drone Footage']
  },
  {
    id: 'chocolate-fondant',
    category: 'video',
    categories: 'video,renders',
    mediaType: 'youtube',
    youtubeId: 'Kumu1b_2Rrk',
    title: 'Chocolate Fondant Tutorial',
    categoryLabel: '3D Animation · Video Editing',
    description: 'Role: 3D Animator & Video Editor. Challenge: Make technical recipe content more accessible and visually engaging for social media audience. Solution: Combined 3D animation in Blender with professional video editing in Adobe Premiere Pro to create stylized, easy-to-follow recipe tutorial. Applied motion graphics principles to enhance viewer comprehension. Impact: Transformed traditional cooking content into modern, visual storytelling format that increases viewer engagement and retention.',
    tags: ['3D Animation', 'Adobe Premiere Pro', 'Food Styling']
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
    description: 'Role: 3D Environment Artist. Challenge: Create cinematic post-apocalyptic scene demonstrating cross-platform 3D workflow proficiency. Solution: Built complete 3D environment in Autodesk Maya using VR-sculpted tree assets and environmental elements. Applied advanced composition principles and rendered using Arnold for photorealistic lighting. Demonstrated technical pipeline integration between VR sculpting tools, Maya, and production-grade Arnold renderer. Impact: Showcased ability to work across multiple 3D platforms and achieve cinematic-quality results with professional rendering systems.',
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
    description: 'Role: Student Animator & VFX Artist at Tampere University of Applied Sciences. Challenge: Compile diverse academic work into cohesive demonstration reel showcasing technical range. Solution: Curated and edited compilation of best animation work including 3D character animation, motion graphics, VFX compositing, and rendering projects completed during university studies. Demonstrated proficiency across multiple software packages (Blender, After Effects, Maya) and technical disciplines. Impact: Created professional showreel demonstrating versatility and technical competency across full animation pipeline.',
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
