import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/socialLinks";
import { useScrollSpy } from "../hooks/useScrollSpy";

function scrollTo(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(
    navLinks.map((l) => l.to),
    200
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((to: string) => {
    scrollTo(to);
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="cursor-pointer bg-transparent border-none"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold text-gradient"
          >
            &lt;Dev /&gt;
          </motion.span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className="relative cursor-pointer bg-transparent border-none px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              <span
                className={
                  activeSection === link.to
                    ? "text-primary-400"
                    : "text-gray-400 hover:text-white"
                }
              >
                {link.name}
              </span>
              {activeSection === link.to && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-primary-500/10 border border-primary-500/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium cursor-pointer bg-transparent border-none transition-all duration-300 ${
                      activeSection === link.to
                        ? "bg-primary-500/20 text-primary-400"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
