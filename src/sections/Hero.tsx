import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

function scrollTo(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* ...existing code... */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">
            Abhinav
          </span>
          <br />
          <span className="text-gray-400">
            I build{" "}
            <span className="text-white">
              full-stack solutions
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          A software developer & full-stack engineer turning ideas into
          polished, performant web applications with clean code and modern tech.
        </motion.p>

        {/* Status badge — positioned below subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500" />
          </span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group cursor-pointer px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 flex items-center gap-2 border-none"
          >
            View My Work
            <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-xl glass glass-hover text-gray-300 hover:text-white font-semibold flex items-center gap-2 no-underline"
          >
            <FiDownload size={18} />
            Resume
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Cyfer-ap"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass glass-hover text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-pathak-cyferap/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass glass-hover text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
