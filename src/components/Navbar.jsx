import { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { FaLinkedin, FaGithub, FaKaggle, FaEnvelope, FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import useActiveSection from "./useActiveSection";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const IDS = ["home", ...NAV_LINKS.map((l) => l.id)];

const SOCIALS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Rabia303" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rabia-imtiaz/" },
  { icon: FaEnvelope, label: "Email", href: "mailto:rabiaimtiaz203@gmail.com" },
  { icon: FaKaggle, label: "Kaggle", href: "https://www.kaggle.com/rabiaaaimtiaz" },
];

const Navbar = () => {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // hide the header while scrolling down, bring it back on scroll up
      setHidden(y > lastY && y > 300);
      lastY = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkClass = (id) =>
    `rounded-full px-3 py-1.5 text-sm transition-colors ${
      active === id ? "bg-purple-500/20 text-purple-300" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3 sm:px-8">
          <a href="#home" aria-label="Back to top" onClick={() => setOpen(false)}>
            <img className="h-11 w-auto sm:h-12" src={logo} alt="Rabia Imtiaz logo" />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={linkClass(id)}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xl text-white sm:gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="hidden h-10 w-10 items-center justify-center rounded-full hover:text-purple-400 sm:flex lg:hidden xl:flex"
              >
                <Icon />
              </a>
            ))}
            <a
              href="/Rabia_Imtiaz_Resume.pdf"
              download
              className="ml-1 hidden items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium transition hover:bg-purple-500 sm:inline-flex"
            >
              <FaFileDownload /> Resume
            </a>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full text-2xl lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500" style={{ width: `${progress}%` }} />
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pb-24 pt-20 [&>*:first-child]:mt-auto [&>*:last-child]:mb-auto">
          <div className="space-y-1">
            {NAV_LINKS.map(({ id, label }, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-xl font-medium transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                } ${active === id ? "bg-purple-500/15 text-purple-300" : "text-white"}`}
              >
                {label}
                {active === id && <span className="h-2 w-2 rounded-full bg-purple-400" />}
              </a>
            ))}
          </div>

          <a
            href="/Rabia_Imtiaz_Resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="mx-4 mt-6 flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-medium text-white"
          >
            <FaFileDownload /> Download Resume
          </a>
          <div className="mt-4 grid grid-cols-2 gap-3 px-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 py-3 text-sm text-neutral-300"
              >
                <Icon className="text-lg" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
