export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  skills?: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'paidia',
    title: 'Audiovisual Technician',
    company: 'Paidia - Tampere University, Nokia Arena',
    location: 'Tampere, Finland',
    period: '12/2022 - 05/2023',
    description: 'Operated audiovisual systems for Nokia Arena\'s gaming hub, managing 40 high-performance gaming PCs optimized through GGLeap, console stations, and VR equipment. Created visual content using Adobe Creative Suite and provided technical support to 100+ weekly visitors.',
    skills: ['Audiovisual Systems', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Technical Support', 'VR Equipment']
  },
  {
    id: 'onepress',
    title: 'Content Editor (Remote)',
    company: 'Onepress TV',
    period: '07/2024 - 12/2024',
    description: 'Managed remote video editing pipeline for multi-platform news distribution (YouTube, Instagram, TikTok, Facebook, LinkedIn), delivering 60+ finished videos monthly. Maintained consistent quality standards while meeting daily deadlines and coordinating with distributed team across multiple time zones.',
    skills: ['Video Editing', 'Adobe Premiere Pro', 'Content Creation', 'Social Media', 'Remote Work']
  },
  {
    id: 'clint',
    title: 'Vice-Chairman & Event Coordinator',
    company: 'Club International Tampere (CLINT)',
    location: 'Tampere, Finland',
    period: '12/2023 - 12/2025',
    description: 'Secured €9,000 in annual sponsorships and coordinated 30+ events for up to 600 international students. Led a volunteer team of 30, negotiated venue contracts, and managed complete event lifecycle from initial planning through post-event evaluation.',
    skills: ['Event Coordination', 'Team Leadership', 'Sponsorship Management', 'Venue Negotiation', 'Budget Management']
  },
  {
    id: 'graalonline',
    title: 'Customer Support Agent (Remote)',
    company: 'GraalOnline',
    period: '01/2015 - 07/2018',
    description: 'Provided community management and player support for online gaming platform with 3,000+ daily active users. Resolved technical and community issues, enforced platform guidelines, and communicated user feedback to development team.',
    skills: ['Community Management', 'Customer Support', 'Technical Troubleshooting', 'Communication']
  },
  {
    id: 'bachelor',
    title: 'Bachelor\'s Degree, Interactive Media and Game Production',
    company: 'Tampere University of Applied Sciences',
    period: '08/2020 - 07/2025',
    description: 'Focused on interactive media, game production, and audiovisual storytelling through hands-on projects and collaborations.',
    skills: ['Interactive Media', '3D Modeling', 'Blender', 'Game Production', 'Virtual Production']
  },
  {
    id: 'film-education',
    title: 'Education in Audiovisual Arts, Film and Cinema',
    company: 'Saint Joseph University of Beirut',
    period: '01/2018 - 12/2021',
    description: 'Built foundations in film production, cinematography, and visual storytelling.',
    skills: ['Cinematography', 'Film Production', 'Visual Storytelling', 'Adobe After Effects']
  },
  {
    id: 'economic-sciences',
    title: 'Degree in Economic Sciences',
    company: 'Collège Des Soeurs Du Rosaire - Mountazah',
    period: '01/2003 - 12/2017',
    description: 'Learned analytical and organizational skills that support budgeting, planning, and sponsorship management for events.',
    skills: ['Budget Management', 'Planning', 'Analytical Skills']
  }
];
