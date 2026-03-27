export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  sourceUrl?: string;
  demoUrl?: string;
  screenshot?: string;
  comingSoon?: boolean;
}

export interface TimelineEntry {
  dateRange: string;
  title: string;
  organization: string;
  description: string;
  active: boolean;
}

export interface ContactLink {
  label: string;
  value: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: "miejscownik-pl",
    name: "MIEJSCOWNIK.PL",
    description:
      "Real-time popularity rankings of locations in Warsaw by aggregating dynamic data from social media platforms. Full-stack web application with interactive maps and live data.",
    tech: ["React", "Next.js", "Maps API", "Tailwind"],
    sourceUrl: "https://github.com/Cypreean/miejscownik",
    demoUrl: "https://miejscownik.pl",
  },
  {
    id: "miejscownik-mobile",
    name: "MIEJSCOWNIK MOBILE",
    description:
      "Native iOS & Android mobile app for Miejscownik.pl — real-time location popularity rankings on the go with push notifications and interactive maps.",
    tech: ["React Native", "Expo", "TypeScript", "Maps SDK"],
    sourceUrl: "https://github.com/Cypreean/miejscownik-app",
  },
  {
    id: "miejscownik-ext",
    name: "MIEJSCOWNIK EXT",
    description:
      "Chrome browser extension companion for Miejscownik.pl — quick access to location popularity rankings directly from your browser toolbar.",
    tech: ["Chrome API", "JavaScript", "HTML/CSS"],
    sourceUrl: "https://github.com/Cypreean/miejscownik-extension",
  },
  {
    id: "new-project",
    name: "NEW PROJECT",
    description: "",
    tech: [],
    comingSoon: true,
  },
];

export const timeline: TimelineEntry[] = [
  {
    dateRange: "APR 2025 - PRESENT",
    title: "Air Traffic Trainee",
    organization: "PANSA",
    description:
      "Safety-critical environment requiring exceptional attention to detail, spatial awareness, and real-time analytical decision-making.",
    active: true,
  },
  {
    dateRange: "OCT 2025 - PRESENT",
    title: "Founder & Developer",
    organization: "Miejscownik.pl",
    description:
      "Architected and launched a web app providing real-time popularity rankings using AI-assisted development with Google Gemini and Claude Code.",
    active: true,
  },
  {
    dateRange: "APR 2024 - APR 2025",
    title: "CS & IT Instructor",
    organization: "High School & University",
    description:
      "Designed curricula for programming, data structures, and software engineering. Evaluated student code and guided debugging processes.",
    active: false,
  },
  {
    dateRange: "DEC 2023 - DEC 2024",
    title: "IT Specialist",
    organization: "Medi Horizon Clinic",
    description:
      "Managed IT infrastructure, maintained web presence with WordPress/HTML/CSS, implemented SEO and SMO strategies.",
    active: false,
  },
  {
    dateRange: "2022 - 2026",
    title: "B.Sc. Computer Science",
    organization: "PJATK Warsaw",
    description:
      "Focus areas: Software Engineering, Database Systems, Algorithmic Problem Solving.",
    active: false,
  },
];

export const contacts: ContactLink[] = [
  {
    label: "email",
    value: "ratynskicyprian@gmail.com",
    url: "mailto:ratynskicyprian@gmail.com",
  },
  {
    label: "linkedin",
    value: "cyprian-ratynski",
    url: "https://www.linkedin.com/in/cyprian-raty%C5%84ski-749a78269",
  },
  {
    label: "github",
    value: "Cypreean",
    url: "https://github.com/Cypreean",
  },
];
