import { useState } from "react";
import { PROJECTS } from "../index";
import { FaStar, FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";



const FILTERS = ["All", "AI", "Web", "Mobile"];
const INITIAL_COUNT = 6;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="spotlight group flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.45)]">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="w-fit rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs text-purple-300">
            {project.category}
          </span>
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-2.5 py-0.5 text-xs text-amber-300">
              <FaStar className="text-[10px]" /> {project.badge}
            </span>
          )}
        </div>
        <h3 className="mb-2 font-semibold text-white">{project.title}</h3>
        <p className={`text-sm text-neutral-400 ${expanded ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-1 w-fit text-xs text-purple-400 hover:text-purple-300"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
        {project.stats && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.stats.map((st) => (
              <div key={st.label} className="rounded-lg border border-neutral-800 bg-neutral-950/50 px-2 py-2 text-center">
                <div className="text-sm font-semibold text-white">{st.value}</div>
                <div className="text-[11px] text-neutral-400">{st.label}</div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-purple-400">
              {tech}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-neutral-800 px-3 py-1.5 text-sm text-neutral-300 transition hover:border-purple-500 hover:text-white"
          >
            <FaGithub /> View code
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <div className="py-16">
      <SectionHeading
        eyebrow="What I've built"
        title="Projects"
        subtitle="A selection from 50+ projects I've built across AI, web, and mobile"
      />

      <div className="mb-10 flex justify-center gap-2">
        {FILTERS.map((f) => {
          const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition sm:px-4 sm:text-sm ${
                filter === f
                  ? "bg-purple-600 text-white"
                  : "bg-neutral-900 text-neutral-400 hover:text-white"
              }`}
            >
              {f} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filtered.length > INITIAL_COUNT && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="rounded-full border border-purple-500/50 px-6 py-2 text-sm text-purple-300 transition hover:bg-purple-500/10"
          >
            {showAll ? "Show fewer projects" : `Show all ${filtered.length} projects`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
