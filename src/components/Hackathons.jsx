import { HACKATHONS } from "..";
import { FaGithub } from "react-icons/fa";

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-12 border-b border-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        🏆 Hackathon Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {HACKATHONS.map((hack, index) => {
          const Icon = hack.icon;

          return (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition transform"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-neutral-700 rounded-lg">
                  <Icon className="text-yellow-400 text-lg" />
                </div>
                <h3 className="text-xl font-semibold">{hack.title}</h3>
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
                    className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-700 text-yellow-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link with logo */}
              {hack.link && (
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-300 hover:text-yellow-400"
                >
                  <FaGithub className="text-lg" /> View on GitHub
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hackathons;
