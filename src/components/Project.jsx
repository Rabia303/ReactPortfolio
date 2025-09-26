import { PROJECTS } from "../index";

const Projects = () => {
  return (
    <div >
      <h2 className="my-20 text-center text-4xl text-purple-500">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                <img
                  src={project.image}
                  alt={project.title}
                  className="transition-transform transform hover:scale-105 rounded-lg shadow-lg border-4 border-transparent hover:border-purple-500 mb-6"
                  style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-4 font-semibold text-xl text-purple-500">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
