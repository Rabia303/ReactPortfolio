import AboutImage from "../assets/imga.jpeg";
import { ABOUT } from "..";
import SectionHeading from "./SectionHeading";
import { FaCode, FaBrain, FaMobileAlt, FaDatabase, FaTrophy, FaRocket } from "react-icons/fa";

const FOCUS_ICONS = [FaCode, FaBrain, FaMobileAlt, FaDatabase];

const About = () => {
  return (
    <div className="py-16">
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5">
        {/* Photo */}
        <div className="lg:col-span-2">
          <div className="relative mx-auto w-64 sm:w-72 lg:w-full lg:max-w-sm">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-indigo-600/30 via-purple-600/25 to-pink-500/20 blur-3xl" />
            <img
              src={AboutImage}
              alt="Rabia at work"
              className="relative aspect-[4/5] w-full rounded-3xl border border-neutral-800 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-neutral-800 bg-neutral-900/90 px-4 py-2 text-sm text-neutral-200 shadow-xl backdrop-blur">
              <FaRocket className="text-purple-400" /> Building with AI
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-3">
          <div className="space-y-4 text-lg leading-relaxed text-neutral-300">
            {ABOUT.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* What I do */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {ABOUT.focus.map((f, i) => {
              const Icon = FOCUS_ICONS[i];
              return (
                <div
                  key={f.title}
                  className="spotlight flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 transition hover:border-purple-500/40"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-medium text-white">{f.title}</p>
                    <p className="text-sm text-neutral-400">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlights */}
          <ul className="mt-8 space-y-3">
            {ABOUT.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-neutral-300">
                <FaTrophy className="shrink-0 text-amber-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Now */}
          <div className="mt-8 border-l-2 border-purple-500 pl-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">Right now</p>
            <p className="text-neutral-300">{ABOUT.now}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
