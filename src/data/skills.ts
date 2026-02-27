import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGraphql,
  SiAmazonwebservices,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: "Frontend" | "Backend" | "Tools" | "Database";
}

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Django", icon: SiPython, color: "#3776AB", category: "Backend" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", category: "Backend" },
  { name: "Express.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "FastAPI", icon: SiPython, color: "#3776AB", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Database" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", category: "Database" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Tools" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900", category: "Tools" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "Tools" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Tools"] as const;
