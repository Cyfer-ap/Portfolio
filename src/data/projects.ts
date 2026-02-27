export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wage Way",
    description: "A full-featured online marketplace for daily wage workers to find jobs and employers to find skilled labor.",
    longDescription:
      "Built a scalable e-marketplace for daily wage workers, featuring job listings, employer profiles, and secure payment integration.",
    techStack: ["React", "Django", "MongoDB", "Stripe", "Tailwind CSS", "Redis", "Render"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveUrl: "https://wageway.onrender.com/",
    githubUrl: "https://github.com/Cyfer-ap/WageWay",
    featured: true,
  },
  {
    id: 2,
    title: "AI Coding Assistant",
    description: "Real-time chat app powered by AI with natural language processing to help with coding assistance.",
    longDescription:
      "Developed an intelligent chat application using OpenAI API, featuring real-time messaging via WebSockets, conversation history, and context-aware responses.",
    techStack: ["Next.js", "TypeScript", "OpenAI", "WebSocket", "PostgreSQL", "API Routes"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    liveUrl: "https://huggingface.co/spaces/Cyfer-ap/AI-Coding-Tutor",
    githubUrl: "https://github.com/Cyfer-ap/Zenthic",
    featured: true,
  },
  {
    id: 3,
    title: "Fruit Cutter Game",
    description: "A simple fruit cutter game made only with HTML but covering several features.",
    longDescription:
      "Created a fun and interactive fruit cutter game using pure HTML, CSS, and JavaScript, featuring smooth animations, sound effects, and responsive design for all devices. Scores, pause and resume functionality, and multiple fruit types were implemented to enhance gameplay.",
    techStack: ["HTML", "CSS", "GitHub", "JS"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
    liveUrl: "https://cyfer-ap.github.io/Fruit-Cutter/",
    githubUrl: "https://github.com/Cyfer-ap/Fruit-Cutter",
    featured: true,
  },
  {
    id: 4,
    title: "Weatherly",
    description: "Developed a earthquake detection service for high risk areas with real sensor data and real-time alerts.",
    longDescription:
      "Built a real-time earthquake detection and alert system using sensor data, featuring a responsive offline first dashboard with interactive maps, messaging services, and alert system without relying on internet, built under 24 hours hackathon and secured top rank.",
    techStack: ["Leaflet", "HTML/CSS", "JS Dashboard UI", "Offline first APIs"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    githubUrl: "https://github.com/Cyfer-ap/Hack_The_Winter",
    featured: false,
  },
  {
    id: 5,
    title: "Blue Dot",
    description: "An API based web application made for satellite imagery and tracking system with real-time data visualization.",
    longDescription:
      "Built a satellite tracking dashboard with real-time data visualization, interactive maps, and historical data analysis using D3.js and Redis for caching along with several other features.",
    techStack: ["Python", "FastAPI", "React", "D3.js", "Redis"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    liveUrl: "https://n-sih-1.onrender.com/",
    githubUrl: "https://github.com/Cyfer-ap/N-SIH-1",
    featured: false,
  },
  {
    id: 6,
    title: "Skillify for Android",
    description: "A mobile app for teachers and students to connect and interact as per their needs.",
    longDescription:
      "Developed a mobile application for skill sharing and learning, featuring 1v1 lectures, course creation, real-time chat, and a secure payment system for premium content.",
    techStack: ["Kotlin", "Android Studio", "Database", "Material UI"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=800&q=80",
    githubUrl: "https://github.com/Cyfer-ap/Skillify-APK",
    featured: false,
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
