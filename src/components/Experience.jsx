import { useState } from "react";
import { EXPERIENCE } from "..";
import SectionHeading from "./SectionHeading";
import { Timeline, TimelineItem } from "./Timeline";

const MOBILE_BULLETS = 2;

// On phones only the first two bullets show until "Show more" is tapped.
const Highlights = ({ items = [] }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className="mb-2 space-y-2 text-sm text-neutral-400">
        {items.map((point, i) => (
          <li key={i} className={`gap-3 ${!open && i >= MOBILE_BULLETS ? "hidden md:flex" : "flex"}`}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {items.length > MOBILE_BULLETS && (
        <button onClick={() => setOpen((o) => !o)} className="mb-4 py-1 text-sm text-purple-400 md:hidden">
          {open ? "Show less" : `Show ${items.length - MOBILE_BULLETS} more`}
        </button>
      )}
      <div className="hidden md:mb-4 md:block" />
    </>
  );
};

const Experience = () => {
  return (
    <div className="py-16">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />

      <Timeline>
        {EXPERIENCE.map((exp, index) => (
          <TimelineItem key={index} date={exp.year} current={exp.year.includes("Present")}>
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <p className="mb-3 text-sm text-purple-300">{exp.company}</p>
            <p className="mb-4 text-neutral-400">{exp.description}</p>
            <Highlights items={exp.highlights} />
            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech) => (
                <span key={tech} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-purple-400">
                  {tech}
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
