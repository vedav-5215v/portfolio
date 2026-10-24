/**
 * Central portfolio data for P. Mukteswara.
 * Only confirmed details are included. Add further education, project details,
 * achievements, certifications and dates when Mukteswara provides them.
 */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'P. Mukteswara',
  displayName: 'P. Mukteswara',
  firstName: 'MUKTESWARA',
  seriesTag: 'DESIGN ENGINEER · THE SERIES',
  originalLabel: 'A MUKTESWARA ORIGINAL',
  role: 'Aspiring Design Engineer',
  tagline: ['Aspiring Design Engineer', 'Mechanical Design', 'Product Development'],
  intro: 'A B.E Mechanical Engineering student at Saveetha University, interested in mechanical design, CAD modelling, simulation and analysis, and product development.',
  location: 'India',
  email: 'mukesh171524@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mukteswara-p-747291331/',
    github: '',
  },
  resumePdf: '/mukteswara-resume.pdf',
  
  portrait: {
    src: '/assets/mukteswara.png',
    srcSet: '/assets/mukteswara.png',
    alt: 'P. Mukteswara - Design Engineer',
  },

  interests: ['Mechanical Design', 'CAD Modelling', 'Simulation & Analysis', 'Product Development'],
};

export const education = [
  {
    school: 'Saveetha University',
    place: 'Tamil Nadu, India',
    degree: 'Bachelor of Technology — Mechanical Engineering',
    period: 'Currently pursuing',
    score: 'B.E',
  },
];


export const experience: {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
}[] = [
  {
    company: "Corizo",
    role: "Intern",
    place: "India",
    period: "6 Months",
    points: [
      "Completed a six-month internship at Corizo focused on Data Structures through AI Mode.",
      "Gained exposure to data structures and AI-assisted learning."
    ]
  }
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string; stack: string[];
  build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };

export const projects: Project[] = [
  {
    id: 'gesture-controlled-car', title: 'Gesture-Controlled Car', year: 'Academic Project',
    genre: 'Embedded Systems · Gesture Control',
    logline: 'A project exploring gesture-based control of a car.',
    stack: ['Arduino IDE'],
    build: ['Project title and general concept supplied by Mukteswara. Add the sensor, controller, communication method and implementation details when confirmed.'],
    features: ['Gesture-based control'], metrics: [], palette: { ...ocean }, motif: 'flow',
  },
  {
    id: 'figma-ui-ux', title: 'UI/UX Design Using Figma', year: 'Design Project',
    genre: 'UI/UX · Interface Design',
    logline: 'A UI/UX design project created using Figma.',
    stack: ['Figma'],
    build: ['Project title and tool supplied by Mukteswara. Add the product concept, screens and design process when confirmed.'],
    features: ['User interface design', 'User experience design'], metrics: [], palette: { ...violet }, motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };


export const achievements: Achievement[] = [
  {
    id: 'smart-india-hackathon',
    title: 'Human Augumentation',
    org: 'Smart India Hackathon',
    detail: 'Selected for the second round of the Smart India Hackathon.',
    laurel: 'HACKATHON',
  },
  {
    id: 'india-design-week-2026',
    title: 'India Design Week 2026 Workshop',
    org: 'ICT Academy in collaboration with Autodesk',
    detail: 'Participated in a three-day workshop conducted as part of India Design Week 2026.',
    laurel: 'DESIGN WORKSHOP',
  },
];


export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'mechanical', title: 'Mechanical', subtitle: 'Mechanical design and development', skills: [
    { name: 'CAD Modelling', mono: 'CAD' }, { name: 'Simulation & Analysis', mono: 'SA' },
    { name: 'Product Development', mono: 'PD' }, { name: 'Machine Operation', mono: 'MO' },
  ]},
  { id: 'tools', title: 'Tools', subtitle: 'Software and technical tools', skills: [
    { name: 'Python', mono: 'Py' }, { name: 'Arduino IDE', mono: 'Ar' },
    { name: 'Generative Design', mono: 'GD' }, { name: 'Proteus', mono: 'Pr' }, { name: 'Figma', mono: 'Fi' },
  ]},
  { id: 'soft-skills', title: 'Soft Skills', subtitle: 'Ways of working', skills: [
    { name: 'Leadership', mono: 'Le' }, { name: 'Time Management', mono: 'TM' }, { name: 'Teamwork', mono: 'Tw' },
  ]},
];
export const skillEvidence: Record<string, string[]> = {};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: 'B.E', synopsis: 'Mechanical Engineering at Saveetha University.', episodes: [
    { code: 'S01 E01', title: 'The Engineer', description: 'Currently pursuing a B.E in Mechanical Engineering at Saveetha University.', tags: ['B.E', 'Mechanical Engineering'], runtime: 'Currently pursuing', palette: amber },
  ]},
  { number: 2, title: 'Learning to Build', period: 'Projects', synopsis: 'Hands-on interests spanning gesture-controlled systems and UI/UX design.', episodes: [
    { code: 'S02 E01', title: 'Gesture-Controlled Car', description: 'A project exploring gesture-based car control.', tags: ['Arduino IDE', 'Gesture Control'], runtime: 'Project', palette: ocean },
    { code: 'S02 E02', title: 'UI/UX Using Figma', description: 'A UI/UX design project created using Figma.', tags: ['UI/UX', 'Figma'], runtime: 'Design project', palette: violet },
  ]},
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Mechanical skill', title: 'CAD Modelling', detail: 'Mechanical design', palette: amber },
  { label: 'Analysis', title: 'Simulation', detail: 'Simulation & analysis', palette: ocean },
  { label: 'Product focus', title: 'Development', detail: 'Product development', palette: jade },
  { label: 'Project', title: 'Gesture Car', detail: 'Gesture-controlled car', palette: crimson },
  { label: 'Design', title: 'UI/UX', detail: 'Designed using Figma', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.E · Mechanical', lines: ['Saveetha University', 'Currently pursuing'], chips: ['Mechanical Engineering'] },
  { kicker: 'Mechanical Skills', title: 'Design to development.', lines: ['CAD modelling · Simulation and analysis', 'Product development · Machine operation'], chips: ['CAD', 'Simulation', 'Product Development'] },
  { kicker: 'Tools', title: 'Tools of the trade', lines: ['Python · Arduino IDE', 'Generative Design · Proteus · Figma'] },
  { kicker: 'Projects', title: 'Projects in progress', lines: ['Gesture-controlled car', 'UI/UX design using Figma'] },
  { kicker: 'Working style', title: 'Built with teamwork', lines: ['Leadership · Time management · Teamwork'] },
  { kicker: 'Current mission', title: 'Aspiring Design Engineer', lines: ['Mechanical design · CAD · Product development'] },
];

export type ProfileId = 'mukteswara' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'mukteswara', name: 'Mukteswara', blurb: 'The full series, in order', color: '#ffb547', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Education, projects & skills first', color: '#4cc9ff', order: ['story', 'skills', 'originals', 'about', 'journey', 'picks', 'moments'] },
  { id: 'developer', name: 'Project viewer', blurb: 'Projects and tools first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'about', 'picks', 'story', 'moments'] },
  { id: 'creative', name: 'Creative', blurb: 'Design work and highlights first', color: '#b98bff', order: ['journey', 'picks', 'originals', 'about', 'skills', 'moments', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Skills and projects', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Achievements', card: 'Achievements', meta: 'Awards and certifications', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume preview', palette: violet },
};
