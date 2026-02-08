export interface SkillWithLevel {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'creative' | 'soft';
}

export const skillsWithLevels: SkillWithLevel[] = [
  { name: 'Event Coordination & Logistics', level: 95, category: 'soft' },
  { name: 'Audiovisual Systems & Live Tech', level: 90, category: 'technical' },
  { name: 'Cinematography & Filming', level: 85, category: 'creative' },
  { name: 'Video Editing & Post-Production', level: 90, category: 'creative' },
  { name: 'Adobe Premiere Pro & After Effects', level: 90, category: 'creative' },
  { name: 'Adobe Photoshop & Illustrator', level: 85, category: 'creative' },
  { name: 'Content Creation for Social Media', level: 88, category: 'creative' },
  { name: 'Community Management & Support', level: 92, category: 'soft' },
  { name: 'VR & Gaming Console Onboarding', level: 85, category: 'technical' },
  { name: 'Technical Troubleshooting', level: 87, category: 'technical' },
  { name: 'Cross-cultural Communication', level: 90, category: 'soft' },
  { name: 'Team Leadership & Sponsorship Outreach', level: 88, category: 'soft' }
];

export const skills = [
  'Event Coordination & Logistics',
  'Audiovisual Systems & Live Tech',
  'Cinematography & Filming',
  'Video Editing & Post-Production',
  'Adobe Premiere Pro & After Effects',
  'Adobe Photoshop & Illustrator',
  'Content Creation for Social Media',
  'Community Management & Support',
  'VR & Gaming Console Onboarding',
  'Technical Troubleshooting',
  'Cross-cultural Communication',
  'Team Leadership & Sponsorship Outreach'
];

export interface Stat {
  count: number;
  label: string;
}

export const stats: Stat[] = [
  {
    count: 30,
    label: 'Events Coordinated Annually'
  },
  {
    count: 600,
    label: 'Max Event Attendance'
  },
  {
    count: 3,
    label: 'Languages (EN, AR, FR)'
  },
  {
    count: 60,
    label: 'Videos Edited Per Month'
  },
  {
    count: 40,
    label: 'Gaming PCs Managed'
  },
  {
    count: 9000,
    label: 'Sponsorship Raised (€)'
  }
];

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'paidia',
    title: 'Paidia - Nokia Arena Gaming & Event Space',
    image: 'Paidia Event Space',
    description: 'Managed audiovisual operations for Nokia Arena\'s gaming hub, maintaining 40 high-performance PCs with GGLeap optimization software, VR equipment, and console stations. Created visual content using Adobe Photoshop and Premiere Pro while providing technical support services.',
    tags: ['Audiovisual Systems', 'Adobe CC', 'GGLeap', 'VR & Consoles'],
    link: 'https://www.linkedin.com/in/joeyaudi'
  },
  {
    id: 'onepress',
    title: 'Multichannel News & Social Content',
    image: 'Onepress TV',
    description: 'Remote video editor managing multi-platform content workflows for news channel. Delivered 60+ edited videos monthly across five social platforms while coordinating with distributed production team.',
    tags: ['Video Editing', 'Content Strategy', 'Social Media'],
    link: 'https://www.linkedin.com/in/joeyaudi'
  },
  {
    id: 'clint-community',
    title: 'CLINT & GraalOnline Communities',
    image: 'Community Events',
    description: 'Community work ranging from international student events to online game moderation. I focused on keeping people engaged, responding quickly to issues, and building long-term relationships.',
    tags: ['Event Management', 'Community Support', 'Sponsorships'],
    link: 'https://www.linkedin.com/in/joeyaudi'
  }
];

export const aboutFilters = [
  { value: 'all', label: 'All' },
  { value: 'overview', label: 'Overview' },
  { value: 'skills', label: 'Skills' },
  { value: 'work', label: 'Projects' },
  { value: 'experience', label: 'Experience' }
];
