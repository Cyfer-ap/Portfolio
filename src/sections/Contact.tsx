import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import { socialLinks } from "../data/socialLinks";
import { FiSend, FiMapPin, FiMail, FiCheck, FiAlertCircle } from "react-icons/fi";

// ── EmailJS configuration ──────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service  (e.g. Gmail) → copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Public Key from Account → API Keys
// 5. Paste the three values below:
const EMAILJS_SERVICE_ID  = "service_cr9isfv";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_sksdvn9";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY   = "44CvWXLR9gZ4AXhdh";   // e.g. "aBcDeFgHiJkLmN"

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

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
          <p className="text-gray-400 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
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
                  href="mailto:abhinavpathak789@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  abhinavpathak789@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass glass-hover">
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-400">India</p>
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

          {/* Contact Form (EmailJS-powered) */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3.5 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all duration-300 bg-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
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
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 rounded-xl font-semibold transition-colors duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                status === "success"
                  ? "bg-green-500 text-white shadow-green-500/25"
                  : status === "error"
                  ? "bg-red-500 text-white shadow-red-500/25"
                  : "bg-primary-500 text-white hover:bg-primary-400 shadow-primary-500/25"
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Send Message <FiSend size={18} />
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending…
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheck size={20} /> Message Sent!
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FiAlertCircle size={20} /> Failed – Try Again
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
