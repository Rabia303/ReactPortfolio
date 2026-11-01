import { FaHome, FaUser, FaLaptopCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import useActiveSection from "./useActiveSection";

// Thumb-reach navigation for phones and tablets.
const TABS = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "projects", label: "Projects", icon: FaLaptopCode },
  { id: "experience", label: "Work", icon: FaBriefcase },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const IDS = ["home", "about", "projects", "experience", "skills", "achievements", "education", "contact"];

const BottomNav = () => {
  const active = useActiveSection(IDS);

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-800 bg-neutral-950/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-md justify-around">
        {TABS.map(({ id, label, icon: Icon }) => {
          const on = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`flex min-w-[64px] flex-col items-center gap-1 py-2.5 text-[11px] transition-colors ${
                on ? "text-purple-300" : "text-neutral-500"
              }`}
            >
              <span className={`flex h-7 w-12 items-center justify-center rounded-full text-base transition ${on ? "bg-purple-500/20" : ""}`}>
                <Icon />
              </span>
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
