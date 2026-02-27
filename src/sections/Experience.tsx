import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { experiences } from "../data/experience";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

export default function Experience() {
  return (
    <SectionWrapper id="experience" subtitle="My journey" title="Experience & Education">
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent" />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          const Icon = exp.type === "work" ? FiBriefcase : FiBookOpen;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-950 border-2 border-primary-500/50 flex items-center justify-center z-10">
                <Icon size={14} className="text-primary-400" />
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                }`}
              >
                <div className="glass glass-hover rounded-2xl p-6">
                  <span className="text-xs font-medium text-primary-400 tracking-wider uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-white mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent-400 mb-3">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-accent-400 no-underline"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-gray-500 flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500/60 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
