import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Achievements from "./components/Achievements";

// scroll-mt keeps section headings clear of the fixed navbar when jumping via links
// Each section fades and slides in once as it scrolls into view.
const Section = ({ id, children }) => (
  <section id={id} className="scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </section>
);

const App = () => {
  const [showTop, setShowTop] = useState(false);

  // Feed cursor position to the nearest .spotlight card
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="overflow-x-clip text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen
          bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      <Navbar />

      <div className="container mx-auto px-5 pb-20 pt-20 sm:px-8 lg:pb-0">
        <Section id="home"><Hero /></Section>
        <Section id="about"><About /></Section>
        <Section id="projects"><Projects /></Section>
        <Section id="experience"><Experience /></Section>
        <Section id="skills"><Technologies /></Section>
        <Section id="achievements"><Achievements /></Section>
        <Section id="education"><Education /></Section>
        <Section id="contact"><Contact /></Section>
      </div>

      <BottomNav />

      {showTop && (
        <a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 hidden h-11 w-11 lg:flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:bg-purple-500"
        >
          <FaArrowUp />
        </a>
      )}
    </div>
  );
};

export default App;
