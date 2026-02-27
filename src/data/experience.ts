export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  highlights: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2025 — Present",
    description:
      "Building full-stack web applications independently, from concept to deployment, using React, Node.js, and Python.",
    highlights: [
      "Developed and shipped 6+ end-to-end web applications",
      "Implemented responsive UIs with React, Tailwind CSS, and Framer Motion",
      "Built RESTful APIs with Node.js/Express and Python/FastAPI",
    ],
    type: "work",
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "GitHub Community",
    companyUrl: "https://github.com/Cyfer-ap",
    period: "2024 — Present",
    description:
      "Contributing to open-source projects and building publicly available tools and libraries.",
    highlights: [
      "Contributed bug fixes and feature additions to community projects",
      "Maintained personal open-source repositories with documentation",
      "Collaborated with developers globally through pull requests and code reviews",
    ],
    type: "work",
  },
  {
    id: 3,
    role: "B.Tech Computer Science",
    company: "University",
    period: "2023 — 2027",
    description:
      "Pursuing a degree in Computer Science with a focus on software engineering, data structures, and web technologies.",
    highlights: [
      "Core coursework in DSA, DBMS, OS, and Computer Networks",
      "Built multiple academic and personal projects across the stack",
      "Active member of the coding and tech community on campus",
    ],
    type: "education",
  },
];
