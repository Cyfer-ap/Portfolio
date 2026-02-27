import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: FiGithub },
  { name: "LinkedIn", url: "https://linkedin.com", icon: FiLinkedin },
  { name: "Twitter", url: "https://twitter.com", icon: FiTwitter },
  { name: "Email", url: "mailto:hello@example.com", icon: FiMail },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];
