import { motion } from "framer-motion";
import type { Skill } from "../data/skills";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl glass glass-hover cursor-default"
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: skill.color }}
      />

      <Icon
        size={36}
        style={{ color: skill.color }}
        className="transition-transform duration-300 group-hover:scale-110 relative z-10"
      />
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors relative z-10">
        {skill.name}
      </span>
    </motion.div>
  );
}
