import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { socialLinks } from "../data/socialLinks";
import { FiSend, FiMapPin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <SectionWrapper id="contact" subtitle="Get in touch" title="Let's Work Together">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm always excited to connect on new projects, creative ideas, or opportunities
            to be part of your vision. Let's create something extraordinary together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-5 rounded-2xl glass glass-hover">
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                <FiMail size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass glass-hover">
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="p-3 rounded-xl glass glass-hover text-gray-400 hover:text-primary-400"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form (mailto-based) */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            action="mailto:hello@example.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3.5 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300 bg-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3.5 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300 bg-transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-5 py-3.5 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300 bg-transparent resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-400 transition-colors duration-300 shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2"
            >
              Send Message
              <FiSend size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
