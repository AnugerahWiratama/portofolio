export type ProjectCategory = 'All' | 'Venture & EdTech' | 'Enterprise PMO' | 'Speaking & Advocacy';

export interface CaseStudy {
  id: string;
  index: string;
  category: Exclude<ProjectCategory, 'All'>;
  categoryLabel: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  organization: string;
  status: string;
  theme: 'dark' | 'charcoal' | 'stone';
  summary: string;
  challenge: string;
  execution: string[];
  outcomes: { label: string; value: string }[];
  deliverables: string[];
}

export interface Alliance {
  id: string;
  index: string;
  domain: string;
  name: string;
  collaboration: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  type: 'experience' | 'education';
  period: string;
  title: string;
  organization: string;
  description: string;
}

export interface Achievement {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  recognition: string;
}

export const HERO_METRICS = [
  {
    value: '0',
    label: 'Speaking Events',
    sublabel: 'Nationwide Reach',
  },
  {
    value: 'PMO',
    label: 'PLN Icon Plus',
    sublabel: 'Strategic Technology',
  },
  {
    value: 'MBA',
    label: 'VIT India',
    sublabel: 'Cohort 2024—2026',
  },
  {
    value: 'ID',
    label: 'Bantaeng',
    sublabel: 'South Sulawesi, ID',
  },
];

export const DISCIPLINE_PILLARS = [
  {
    index: '01',
    kicker: 'Discipline',
    title: 'Project Management',
    description:
      'Structured execution, enterprise agile governance, planning, and cross-functional technology delivery.',
  },
  {
    index: '02',
    kicker: 'Education',
    title: 'IT Edu Content',
    description:
      'Educational technology storytelling, modern digital literacy tutorials, and community knowledge sharing.',
  },
  {
    index: '03',
    kicker: 'Advocacy',
    title: 'Public Speaking',
    description:
      '50+ keynotes and panel masterclasses on technology careers, personal branding, and youth self development.',
  },
  {
    index: '04',
    kicker: 'Ecosystem',
    title: 'Venture & Community',
    description:
      'Founding Kidilent and grassroots initiatives empowering regional next-generation digital creators.',
  },
];

export const ALLIANCES: Alliance[] = [
  {
    id: 'pln-icon-plus',
    index: '01',
    domain: 'Enterprise',
    name: 'PLN Icon Plus',
    collaboration: 'Project Management Office governance, cross-unit agile delivery, and strategic digital transformation roadmaps.',
    location: 'Indonesia',
  },
  {
    id: 'vit-india',
    index: '02',
    domain: 'Academia',
    name: 'VIT India',
    collaboration: 'Master of Business Administration (MBA) research in international business, technology strategy, and global operations.',
    location: 'Vellore, India',
  },
  {
    id: 'kidilent',
    index: '03',
    domain: 'Venture',
    name: 'Kidilent',
    collaboration: 'Founded youth digital education ecosystem delivering practical IT curricula, mentorship, and creative tech workshops.',
    location: 'South Sulawesi & National',
  },
  {
    id: 'bantaeng-youth',
    index: '04',
    domain: 'Regional',
    name: 'Bantaeng Youth Tech',
    collaboration: 'Grassroots regional outreach connecting secondary and university students with foundational technology skills.',
    location: 'Bantaeng, South Sulawesi',
  },
  {
    id: 'women-in-tech',
    index: '05',
    domain: 'Advocacy',
    name: 'Women In Tech ID',
    collaboration: 'Advocacy keynotes and leadership workshops supporting equitable career pathways and personal branding in technology.',
    location: 'Indonesia',
  },
  {
    id: 'gdsc',
    index: '06',
    domain: 'Global Tech',
    name: 'GDSC Chapters',
    collaboration: 'Guest speaker across university developer chapters covering product thinking, project scoping, and early career growth.',
    location: 'Multi-Campus Indonesia',
  },
  {
    id: 'kemendikbud',
    index: '07',
    domain: 'Ministry',
    name: 'Kemendikbud',
    collaboration: 'Educational alignment and national student-facing talks bridging academic curricula with industry technology practices.',
    location: 'Jakarta & Regional Hubs',
  },
  {
    id: 'digital-talents',
    index: '08',
    domain: 'Accelerator',
    name: 'Digital Talents ID',
    collaboration: 'Mentorship and structured upskilling sessions guiding emerging practitioners from classroom theory to delivery readiness.',
    location: 'Indonesia',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kidilent-learning',
    index: '01',
    category: 'Venture & EdTech',
    categoryLabel: 'EdTech Venture',
    title: 'Kidilent Digital Learning',
    subtitle: 'Digital Learning Ecosystem',
    role: 'Founder & Lead',
    period: '2023 — Present',
    organization: 'Kidilent',
    status: 'Expanding',
    theme: 'dark',
    summary:
      'Empowering next-gen tech creators and digital literacies through hands-on learning models, interactive code curricula, and mentorship programs for youth across regional hubs.',
    challenge:
      'Students outside metropolitan tech centers often lack structured, approachable pathways into modern software, product thinking, and digital creation.',
    execution: [
      'Designed modular, project-based IT curricula tailored for regional youth and first-time builders.',
      'Built hybrid mentorship cohorts pairing technical foundations with communication and personal branding habits.',
      'Produced accessible educational media content translating complex engineering concepts into everyday language.',
    ],
    outcomes: [
      { label: 'Focus', value: 'Youth IT Curriculum' },
      { label: 'Delivery Mode', value: 'Hybrid Workshops & Media' },
      { label: 'Stage', value: 'Active Expansion' },
    ],
    deliverables: ['Curriculum Architecture', 'Mentorship Playbook', 'Educational Video Series', 'Community Operations'],
  },
  {
    id: 'pln-icon-pmo',
    index: '02',
    category: 'Enterprise PMO',
    categoryLabel: 'Enterprise Management',
    title: 'PLN Icon Plus Enterprise PMO',
    subtitle: 'Enterprise Governance & PMO',
    role: 'Project Management Officer',
    period: '2024 — Present',
    organization: 'PLN Icon Plus',
    status: 'Active Tenure',
    theme: 'charcoal',
    summary:
      'Cross-functional digital transformation & strategic infrastructure governance. Ensuring milestone integrity, cross-departmental roadmap synchronization, and resource alignment.',
    challenge:
      'Large-scale infrastructure and digital transformation programs require tight coordination across engineering, business, and operational stakeholders without slowing execution velocity.',
    execution: [
      'Established structured milestone tracking, risk registers, and executive visibility cadences across active initiatives.',
      'Aligned cross-functional engineering and business units using pragmatic Scrum and hybrid governance frameworks.',
      'Standardized project scoping, escalation protocols, and post-delivery audit documentation.',
    ],
    outcomes: [
      { label: 'Scope', value: 'Strategic Technology' },
      { label: 'Methodology', value: 'Hybrid Agile Governance' },
      { label: 'Status', value: 'Active Tenure' },
    ],
    deliverables: ['Governance Frameworks', 'Risk & Dependency Matrix', 'Cross-Team Roadmaps', 'Executive Reporting'],
  },
  {
    id: 'national-speaking-circuit',
    index: '03',
    category: 'Speaking & Advocacy',
    categoryLabel: 'Keynote Circuit',
    title: '50+ National Tech & Branding Keynotes',
    subtitle: 'Technology Careers & Empowerment',
    role: 'Keynote Speaker & Moderator',
    period: '2021 — Present',
    organization: 'Universities & National Forums',
    status: 'Ongoing',
    theme: 'stone',
    summary:
      'Delivered over 50 speaking sessions across Indonesia covering technology career navigation, personal branding, self-development, and women’s empowerment.',
    challenge:
      'Bridging the confidence and information gap for students and young professionals transitioning into competitive technology and leadership roles.',
    execution: [
      'Crafted structured keynote decks blending industry PMO realities with actionable personal branding frameworks.',
      'Partnered with campus developer chapters, advocacy groups, and national talent programs for interactive Q&A clinics.',
      'Extended session reach through short-form IT educational content and structured post-event learning resources.',
    ],
    outcomes: [
      { label: 'Engagements', value: '50+ Events' },
      { label: 'Core Themes', value: 'Tech, Branding & Empowerment' },
      { label: 'Reach', value: 'Nationwide Indonesia' },
    ],
    deliverables: ['Keynote Masterclasses', 'Panel Moderation', 'Personal Branding Playbooks', 'Edu Content Clips'],
  },
  {
    id: 'it-edu-content',
    index: '04',
    category: 'Venture & EdTech',
    categoryLabel: 'Digital Media & Literacy',
    title: 'IT Edu Content & Career Storytelling',
    subtitle: 'Public Technology Literacy',
    role: 'Creator & Educator',
    period: '2022 — Present',
    organization: 'Independent Digital Channels',
    status: 'Published Weekly',
    theme: 'dark',
    summary:
      'Translating enterprise IT concepts, project management frameworks, and study strategies into clear, relatable educational media for aspiring tech practitioners.',
    challenge:
      'Technical education online often skews either overly academic or superficial, leaving learners unsure how roles like PMO, product, and engineering fit together.',
    execution: [
      'Structured recurring content pillars covering IT fundamentals, career strategy, and MBA learning reflections.',
      'Applied high-clarity visual pacing and storytelling frameworks to sustain learner retention.',
      'Connected online audience questions directly into live campus workshops and Kidilent community modules.',
    ],
    outcomes: [
      { label: 'Format', value: 'Short & Long-Form Edu' },
      { label: 'Topics', value: 'IT, PMO & Self-Growth' },
      { label: 'Cadence', value: 'Continuous Series' },
    ],
    deliverables: ['Editorial Scripts', 'Visual Explainers', 'Career Roadmaps', 'Community Q&A'],
  },
];

export const EXPERIENCE_INDEX: ExperienceItem[] = [
  {
    id: 'exp-pln',
    type: 'experience',
    period: '2024 — Present',
    title: 'Project Management Officer',
    organization: 'PLN Icon Plus',
    description:
      'Spearheading strategic technology initiatives, enterprise agile workflow delivery, risk management, and operational cross-functional excellence.',
  },
  {
    id: 'exp-kidilent',
    type: 'experience',
    period: '2022 — Present',
    title: 'Founder & Creative Lead',
    organization: 'Kidilent',
    description:
      'Developing youth IT education curriculum, workshops, and creative tech mentorship programs designed for regional students and aspiring innovators.',
  },
  {
    id: 'exp-speaker',
    type: 'experience',
    period: '2021 — 2024',
    title: 'Keynote Speaker & Content Creator',
    organization: 'Self-Employed / Independent',
    description:
      'Delivered 50+ speaking sessions across Indonesia on personal branding, tech careers, modern digital literacy, and youth empowerment.',
  },
  {
    id: 'edu-vit',
    type: 'education',
    period: '2024 — 2026',
    title: 'Master of Business Administration (MBA)',
    organization: 'Vellore Institute of Technology (VIT) India',
    description:
      'Focus on International Business, Strategic Management, Global Market Dynamics, and Technology Leadership.',
  },
  {
    id: 'edu-bsc',
    type: 'education',
    period: 'Graduated',
    title: 'Bachelor Degree in Information Technology',
    organization: 'Undergraduate Honors',
    description:
      'Graduated with honors; led student tech organizations, organized multi-campus hackathons, and spearheaded community digital literacy outreach.',
  },
];

export const HARD_SKILLS = [
  'Project Planning & Scoping',
  'Scrum / Agile Frameworks',
  'Risk Governance & Auditing',
  'Tech Curriculum Design',
  'Public Speaking & Moderation',
  'Digital Content Production',
];

export const DAILY_TOOLKIT = [
  { name: 'Jira & Confluence', role: 'Atlassian' },
  { name: 'Notion Workspace', role: 'Ops & Wiki' },
  { name: 'Figma UI/UX', role: 'Prototyping' },
  { name: 'Trello & Asana', role: 'Sprint Ops' },
  { name: 'Adobe Creative Cloud', role: 'Media Suite' },
  { name: 'Python & SQL Basics', role: 'Data Queries' },
];

export const SOFT_SKILLS = [
  'Cross-Functional Leadership',
  'Stakeholder Alignment',
  'Strategic Empathy',
  'High-Stakes Storytelling',
  'Conflict Resolution',
  'Grassroots Community Building',
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-speaking',
    index: '01',
    category: 'Keynote Influence',
    title: '50+ National Speaking Engagements',
    description:
      'Delivered keynote lectures across leading Indonesian state universities, tech forums, and digital career panels focusing on personal branding and professional agility.',
    recognition: 'Nationwide Recognition',
  },
  {
    id: 'ach-pmo',
    index: '02',
    category: 'Credential',
    title: 'Certified Project Management Specialist',
    description:
      'Professional framework credentials honoring rigorous agile execution, workflow optimization, and multi-tier enterprise governance systems.',
    recognition: 'Industry Certification',
  },
  {
    id: 'ach-impact',
    index: '03',
    category: 'Social Impact',
    title: 'Community Impact Award',
    description:
      'Recognized for grassroots digital literacy initiatives, regional youth mentorship programs, and expanding technology access through Kidilent.',
    recognition: 'Foundation Honor',
  },
];

export const CORE_FOCUS_DOMAINS = [
  'Project Management',
  'Tech Education',
  'Youth Empowerment',
  'Digital Strategy',
  'Keynote Speaking',
];
