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
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    period: "2024 — Present",
    description:
      "Leading the frontend team in building scalable web applications using React and TypeScript.",
    highlights: [
      "Architected a micro-frontend system serving 50K+ daily users",
      "Reduced bundle size by 40% through code splitting and lazy loading",
      "Mentored 3 junior developers and established coding standards",
    ],
    type: "work",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    period: "2023 — 2024",
    description:
      "Built and maintained multiple client-facing applications with React, Node.js, and PostgreSQL.",
    highlights: [
      "Developed a real-time analytics dashboard used by 200+ businesses",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Integrated third-party APIs including Stripe, Twilio, and SendGrid",
    ],
    type: "work",
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "DigitalAgency",
    companyUrl: "https://example.com",
    period: "2022 — 2023",
    description:
      "Collaborated with designers and backend developers to build responsive web applications.",
    highlights: [
      "Converted 15+ Figma designs into pixel-perfect React components",
      "Improved website Lighthouse score from 65 to 95",
      "Built a reusable component library used across 4 projects",
    ],
    type: "work",
  },
  {
    id: 4,
    role: "B.S. Computer Science",
    company: "State University",
    period: "2018 — 2022",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and web technologies.",
    highlights: [
      "Dean's List — All semesters",
      "Senior capstone: AI-powered study planner (React + Python)",
      "Teaching assistant for Web Development course",
    ],
    type: "education",
  },
];
