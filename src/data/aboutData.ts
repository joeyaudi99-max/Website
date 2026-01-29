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
    label: 'Participants Reached Per Event'
  },
  {
    count: 9000,
    label: '€ Sponsorship Raised'
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
    description: 'Audiovisual operations for a modern gaming and event hub inside Nokia Arena, including PC optimization with GGLeap, live tech support, and visual content created with Adobe CC.',
    tags: ['Audiovisual Systems', 'Adobe CC', 'GGLeap', 'VR & Consoles'],
    link: 'https://www.linkedin.com/in/joeyaudi'
  },
  {
    id: 'onepress',
    title: 'Multichannel News & Social Content',
    image: 'Onepress TV',
    description: 'Remote video editing and content coordination for a news channel, managing structured workflows for 5+ social platforms and 60+ videos per month.',
    tags: ['Video Editing', 'Content Strategy', 'Social Media'],
    link: 'https://www.linkedin.com/in/joeyaudi'
  },
  {
    id: 'clint-community',
    title: 'CLINT & GraalOnline Communities',
    image: 'Community Events',
    description: 'Community-focused projects ranging from international student events to online game moderation, emphasizing inclusivity, responsiveness, and long-term engagement.',
    tags: ['Event Management', 'Community Support', 'Sponsorships'],
    link: 'https://www.linkedin.com/in/joeyaudi'
  }
];

export const aboutFilters = [
  { value: 'all', label: 'All' },
  { value: 'overview', label: 'Overview' },
  { value: 'skills', label: 'Skills' },
  { value: 'work', label: 'Work' },
  { value: 'experience', label: 'Experience' }
];
