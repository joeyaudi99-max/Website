export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'paidia',
    title: 'Audiovisual Technician',
    company: 'Paidia - Tampere University, Nokia Arena',
    location: 'Tampere, Finland',
    period: '12/2022 - 05/2023',
    description: 'Supported gaming and event experiences in the Paidia space, optimizing 40 high-end PCs, creating visuals with Adobe CC, and guiding guests through consoles and VR setups.'
  },
  {
    id: 'onepress',
    title: 'Content Editor (Remote)',
    company: 'Onepress TV',
    period: '07/2024 - 12/2024',
    description: 'Managed video editing and content workflows for 5+ social media channels, ensuring timely delivery and consistent visual quality across 60+ videos per month.'
  },
  {
    id: 'clint',
    title: 'Vice-Chairman & Event Coordinator',
    company: 'Club International Tampere (CLINT)',
    location: 'Tampere, Finland',
    period: '12/2023 - 12/2025',
    description: 'Coordinated 30+ events annually with a volunteer team of 30, securing €9,000 in sponsorships and hosting international events for up to 600 participants.'
  },
  {
    id: 'graalonline',
    title: 'Customer Support Agent (Remote)',
    company: 'GraalOnline',
    period: '01/2015 - 07/2018',
    description: 'Provided community and player support for an online game with 3,000+ daily players, resolving issues, enforcing guidelines, and relaying feedback to the development team.'
  },
  {
    id: 'bachelor',
    title: 'Bachelor\'s Degree, Interactive Media and Game Production',
    company: 'Tampere University of Applied Sciences',
    period: '08/2020 - 07/2025',
    description: 'Focused on interactive media, game production, and audiovisual storytelling through practical projects and collaborations.'
  },
  {
    id: 'film-education',
    title: 'Education in Audiovisual Arts, Film and Cinema',
    company: 'Saint Joseph University of Beirut',
    period: '01/2018 - 12/2021',
    description: 'Developed strong foundations in film production, cinematography, and visual storytelling.'
  },
  {
    id: 'economic-sciences',
    title: 'Degree in Economic Sciences',
    company: 'Collège Des Soeurs Du Rosaire - Mountazah',
    period: '01/2003 - 12/2017',
    description: 'Built analytical and organizational skills that support budgeting, planning, and sponsorship management for events.'
  }
];
