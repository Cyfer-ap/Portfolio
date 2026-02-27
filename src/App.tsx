import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="relative">
      <CustomCursor />

      <AnimatePresence>
        {loading && <Preloader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
