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
    description: 'Operated and maintained AV systems for Nokia Arena\'s gaming hub, including 40 high-end gaming PCs (optimized with GGLeap), console stations, and VR equipment. Created visual content with Adobe CC and provided technical support to 100+ weekly visitors.'
  },
  {
    id: 'onepress',
    title: 'Content Editor (Remote)',
    company: 'Onepress TV',
    period: '07/2024 - 12/2024',
    description: 'Managed video editing pipeline for 5+ social platforms, delivering 60+ finished videos monthly. Maintained consistent quality standards, met daily deadlines, and coordinated with remote team across multiple time zones.'
  },
  {
    id: 'clint',
    title: 'Vice-Chairman & Event Coordinator',
    company: 'Club International Tampere (CLINT)',
    location: 'Tampere, Finland',
    period: '12/2023 - 12/2025',
    description: 'Secured €9,000 in annual sponsorships and coordinated 30+ events for up to 600 international students. Managed a volunteer team of 30, handled venue negotiations, and oversaw event logistics from planning to execution.'
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
