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

            {/* Photo */}
            <div className="absolute inset-4 rounded-2xl overflow-hidden">
              <img
                src="/my_photo.jpg"
                alt="Abhinav Pathak"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass text-sm font-medium text-primary-400"
            >
              ~1 Year Exp.
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass text-sm font-medium text-accent-400"
            >
              6+ Projects
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
            I'm Abhinav Pathak — a software developer and full-stack engineer based in India.
            Over the past year I've been building real-world projects across the stack, from
            responsive React front-ends to Node.js and Python back-ends, always chasing
            cleaner code and better user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            When I'm not shipping features, you'll find me exploring new frameworks,
            contributing to open-source, or diving into system design concepts. I thrive on
            continuous learning and love turning complex problems into simple, elegant
            solutions.
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
