import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Cyfer-ap", icon: FiGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abhinav-pathak-cyferap/", icon: FiLinkedin },
  { name: "Email", url: "mailto:abhinavpathak789@gmail.com", icon: FiMail },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];
