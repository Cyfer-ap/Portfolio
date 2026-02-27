import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices and modern patterns.",
  },
  {
    icon: FiLayers,
    title: "Full Stack",
    description: "End-to-end development from responsive frontends to robust backend APIs.",
  },
  {
    icon: FiZap,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and exceptional user experiences.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" subtitle="Get to know me" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Photo / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-2xl" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-white/10" />

            {/* Image placeholder / abstract visual */}
            <div className="absolute inset-4 rounded-2xl glass overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-400 text-sm">Your photo here</p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass text-sm font-medium text-primary-400"
            >
              3+ Years Exp.
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass text-sm font-medium text-accent-400"
            >
              20+ Projects
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-semibold mb-4">
            Passionate about creating{" "}
            <span className="text-gradient">impactful</span> digital products
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a full-stack developer with a love for clean design and robust architecture.
            Over the past few years, I've worked on a diverse range of projects — from
            e-commerce platforms to AI-driven applications — always focusing on delivering
            exceptional user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sketching UI ideas in my notebook. I believe in
            continuous learning and pushing the boundaries of what's possible on the web.
          </p>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass glass-hover"
                >
                  <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-400 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
