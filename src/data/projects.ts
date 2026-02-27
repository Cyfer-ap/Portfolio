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
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    longDescription:
      "Built a scalable e-commerce platform featuring product catalog, shopping cart, secure checkout with Stripe, user authentication, and an admin dashboard for inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app powered by AI with natural language processing.",
    longDescription:
      "Developed an intelligent chat application using OpenAI API, featuring real-time messaging via WebSockets, conversation history, and context-aware responses.",
    techStack: ["Next.js", "TypeScript", "OpenAI", "WebSocket", "PostgreSQL"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Kanban-style project management tool with drag-and-drop functionality.",
    longDescription:
      "Created a productivity tool with drag-and-drop task boards, real-time collaboration, deadline tracking, and team workload analytics.",
    techStack: ["React", "TypeScript", "Firebase", "DnD Kit", "Chart.js"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Beautiful weather app with 7-day forecasts and interactive maps.",
    longDescription:
      "Designed a visually stunning weather application featuring real-time data, interactive radar maps, hourly/daily forecasts, and location-based alerts.",
    techStack: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Dashboard for tracking and analyzing social media performance metrics.",
    longDescription:
      "Built an analytics dashboard that aggregates data from multiple social platforms, providing insights on engagement, growth trends, and audience demographics.",
    techStack: ["Python", "FastAPI", "React", "D3.js", "Redis"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-first fitness app with workout logging and progress visualization.",
    longDescription:
      "Developed a comprehensive fitness tracking application with workout templates, progress charts, calorie tracking, and social features for sharing achievements.",
    techStack: ["React Native", "TypeScript", "Supabase", "Expo"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
