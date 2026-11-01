import { HERO_CONTENT } from "..";
import profilePic from "../assets/imgb.jpeg";
import { FaFileDownload, FaMapMarkerAlt, FaBriefcase, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = ["AI Enthusiast", "Full-Stack Developer", "Data Builder"];

const STATS = [
  { value: "50+", label: "Projects built" },
  { value: "53", label: "Public GitHub repos" },
  { value: "100K+", label: "Dataset records" },
  { value: "2", label: "Award recognitions" },
];

const Hero = () => {
  const [role, setRole] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-16 pt-8 lg:pt-16">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to AI roles
            </span>

            <h1 className="mb-4 text-6xl font-thin tracking-tight text-white lg:text-8xl">
              Rabia Imtiaz
            </h1>
            <div className="mb-6 flex h-12 items-center text-3xl tracking-tight lg:text-4xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[role]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                >
                  {ROLES[role]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mb-5 max-w-xl text-lg font-light leading-relaxed text-neutral-300">
              {HERO_CONTENT}
            </p>
            <ul className="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-neutral-400 lg:justify-start">
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-purple-400" /> Karachi, Pakistan</li>
              <li className="flex items-center gap-2"><FaBriefcase className="text-purple-400" /> Full-time at CipherTronix</li>
              <li className="flex items-center gap-2"><FaSearch className="text-purple-400" /> Open to AI & full-stack roles in Karachi</li>
            </ul>

            <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#projects" className="rounded-full bg-purple-600 px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-6px_rgba(168,85,247,0.7)] transition hover:bg-purple-500">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-medium text-white transition hover:border-purple-500">
                Get in Touch
              </a>
              <a
                href="/Rabia_Imtiaz_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-medium text-white transition hover:border-purple-500"
              >
                <FaFileDownload /> Resume
              </a>
            </div>

            <div className="grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-center lg:text-left">
                  <div className="text-2xl font-semibold text-white">{s.value}</div>
                  <div className="text-xs text-neutral-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 w-full lg:mt-0 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Mobile: smaller, rounded. Desktop: original full-size photo. */}
            <img
              src={profilePic}
              alt="Rabia Imtiaz"
              className="w-72 rounded-3xl sm:w-80 lg:w-auto lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
