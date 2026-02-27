import { socialLinks } from "../data/socialLinks";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Built with <FiHeart className="text-primary-400" size={14} /> using React & Tailwind
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-400 transition-colors duration-300"
                aria-label={link.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
