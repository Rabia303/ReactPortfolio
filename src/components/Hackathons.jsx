import { HACKATHONS } from "..";
import { FaGithub } from "react-icons/fa";

const Hackathons = ({ hideHeader = false }) => {
  return (
    <div className="py-12">
      {!hideHeader && (
      <h2 className="text-3xl font-bold text-center mb-10">
        🏆 Hackathon Experience
      </h2>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {HACKATHONS.map((hack, index) => {
          const Icon = hack.icon;

          return (
            <div
              key={index}
              className="spotlight rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.45)]"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-neutral-800 p-3">
                  <Icon className="text-purple-400 text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-white">{hack.title}</h3>
              </div>

              {/* Role */}
              <p className="text-neutral-400 text-sm mb-2 italic">
                {hack.role}
              </p>

              {/* Description */}
              <p className="text-neutral-300 mb-4">{hack.description}</p>

              {/* Tech stack tags (uniform style) */}
              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {hack.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {hack.link && (
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hackathons;
