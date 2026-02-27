import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SkillBadge from "../components/SkillBadge";
import { skills, skillCategories } from "../data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills" subtitle="My expertise" title="Skills & Technologies">
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? "text-white"
                : "text-gray-400 hover:text-white glass glass-hover"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeSkillTab"
                className="absolute inset-0 rounded-xl bg-primary-500/20 border border-primary-500/30"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
      >
        {filteredSkills.map((skill, i) => (
          <SkillBadge key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
      >
        {[
          { value: "3+", label: "Years Experience" },
          { value: "20+", label: "Projects Completed" },
          { value: "15+", label: "Technologies" },
          { value: "100%", label: "Commitment" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-2xl glass"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2"
            >
              {stat.value}
            </motion.div>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
