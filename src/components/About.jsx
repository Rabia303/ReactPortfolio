import AboutImage from "../assets/imga.jpeg";
import { ABOUT_TEXT } from "..";
import { 
  FaUser, 
  FaCode, 
  FaTrophy, 
  FaRocket, 
  FaMobile, 
  FaDatabase, 
  FaGlobe,
  FaAward,
  FaGraduationCap,
  FaStar,
  FaHeart,
  FaDownload,
  FaExternalLinkAlt
} from "react-icons/fa";

const About = () => {
  const getIcon = (title) => {
    switch (title) {
      case "Who I Am": return <FaUser className="text-purple-400" />;
      case "What I Do": return <FaCode className="text-blue-400" />;
      case "Achievements & Recognitions": return <FaTrophy className="text-yellow-400" />;
      case "What I'm Working On": return <FaRocket className="text-red-400" />;
      case "Hackathon Adventures": return <FaHeart className="text-pink-400" />;
      default: return <FaStar className="text-green-400" />;
    }
  };

  const getSubIcon = (text) => {
    if (text.includes("Full-Stack")) return <FaCode className="text-green-400" />;
    if (text.includes("Mobile")) return <FaMobile className="text-indigo-400" />;
    if (text.includes("Data & AI")) return <FaDatabase className="text-orange-400" />;
    if (text.includes("Cross-Tech")) return <FaGlobe className="text-teal-400" />;
    if (text.includes("Nominated")) return <FaAward className="text-yellow-500" />;
    if (text.includes("Selected")) return <FaGraduationCap className="text-blue-500" />;
    return <FaStar className="text-purple-400" />;
  };

  // Function to handle resume download
  const handleDownloadResume = () => {

    const resumeUrl = "https://drive.google.com/file/d/1wBHbFucXe7wGGTzr2n2ya5Wbh5hjqrbQ/view?usp=sharing";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "RabiaImtiaz_Resume.pdf";
    link.click();
  };

  return (
    <section id="about" className="border-b border-neutral-800 pb-8 bg-gradient-to-br from-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4">
        {/* Enhanced Heading */}
        <div className="my-16 text-center">
          <h1 className="text-4xl font-bold mb-3">
            About <span className="text-neutral-400">Me</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Mobile Version */}
        <div className="block lg:hidden">
          {/* Image Section */}
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  className="rounded-2xl w-48 h-48 object-cover border-4 border-neutral-700 shadow-2xl"
                  src={AboutImage}
                  alt="A personal photo or representation"
                />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <FaCode className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Sections as Cards */}
          <div className="space-y-6">
            {ABOUT_TEXT.split("\n\n").map((paragraph, index) => {
              const lines = paragraph.split("\n");
              const titleLine = lines[0];
              const titleMatch = titleLine.match(/[^👩‍💻📱🎯🚀\s].+/);
              const title = titleMatch ? titleMatch[0] : "";

              return (
                <div key={index} className="group">
                  <div className="bg-neutral-800/60 rounded-2xl p-5 border border-neutral-700/50 shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95">
                    {/* Section Header with Icon */}
                    <div className="flex items-center mb-4 pb-3 border-b border-neutral-700/50">
                      <div className="w-10 h-10 bg-neutral-700/50 rounded-full flex items-center justify-center mr-3">
                        {getIcon(title)}
                      </div>
                      <h2 className="text-xl font-bold text-neutral-200">
                        {title}
                      </h2>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      {lines.slice(1).map((line, lineIndex) => {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) return null;

                        if (trimmedLine.startsWith("-") || trimmedLine.endsWith(".")) {
                          const content = trimmedLine.startsWith("-") 
                            ? trimmedLine.slice(1).trim() 
                            : trimmedLine;

                          const parts = content.split(":");
                          if (parts.length > 1) {
                            return (
                              <div key={lineIndex} className="flex items-start space-x-3 bg-neutral-700/30 p-3 rounded-lg">
                                <span className="text-lg mt-0.5 text-purple-400 flex-shrink-0">
                                  {getSubIcon(content)}
                                </span>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                  <strong className="font-semibold text-neutral-200">
                                    {parts[0]}:
                                  </strong>{" "}
                                  {parts.slice(1).join(":")}
                                </p>
                              </div>
                            );
                          }

                          return (
                            <div key={lineIndex} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <p className="text-neutral-300 text-sm leading-relaxed">
                                {content}
                              </p>
                            </div>
                          );
                        }

                        return (
                          <p key={lineIndex} className="text-neutral-300 text-sm leading-relaxed bg-neutral-700/20 p-3 rounded-lg">
                            {trimmedLine}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Tags */}
          <div className="mt-8 p-5 bg-neutral-800/40 rounded-2xl border border-neutral-700/40">
            <h3 className="text-lg font-semibold text-neutral-200 mb-4 flex items-center justify-center">
              <FaCode className="mr-2 text-blue-400" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["React", "Node.js", "MongoDB", "Flutter", ".NET Core", "Python", "AI/ML", "Big Data", "SQL", "Flask"].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-neutral-300 rounded-xl text-sm border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center mx-auto"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Desktop Version - Enhanced */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-stretch gap-8">
            {/* Image Section (Left) - Enhanced */}
            <div className="w-full lg:w-2/5">
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    className="rounded-2xl w-80 h-80 object-cover border-4 border-neutral-700 shadow-2xl"
                    src={AboutImage}
                    alt="A personal photo or representation"
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                </div>
              </div>

              {/* Download Resume Button for Desktop */}
              <div className="mt-8 text-center lg:text-left">
                <button 
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center lg:inline-flex"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </button>
              </div>
            </div>

            {/* Text Section (Right) - Enhanced */}
            <div className="w-full lg:w-3/5">
              <div className="space-y-6">
                {ABOUT_TEXT.split("\n\n").map((paragraph, index) => {
                  const lines = paragraph.split("\n");
                  const titleLine = lines[0];
                  const titleMatch = titleLine.match(/[^👩‍💻📱🎯🚀\s].+/);
                  const title = titleMatch ? titleMatch[0] : "";

                  return (
                    <div key={index} className="group">
                      <div className="bg-neutral-800/60 rounded-2xl p-6 border border-neutral-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-neutral-800/70 hover:border-neutral-600/50 hover:transform hover:-translate-y-1">
                        {/* Section Header with Icon */}
                        <div className="flex items-center mb-4 pb-3 border-b border-neutral-700/50">
                          <div className="w-12 h-12 bg-neutral-700/50 rounded-full flex items-center justify-center mr-4">
                            {getIcon(title)}
                          </div>
                          <h2 className="text-2xl font-bold text-neutral-200">
                            {title}
                          </h2>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-4">
                          {lines.slice(1).map((line, lineIndex) => {
                            const trimmedLine = line.trim();
                            if (!trimmedLine) return null;

                            if (trimmedLine.startsWith("-") || trimmedLine.endsWith(".")) {
                              const content = trimmedLine.startsWith("-") 
                                ? trimmedLine.slice(1).trim() 
                                : trimmedLine;

                              const parts = content.split(":");
                              if (parts.length > 1) {
                                return (
                                  <div key={lineIndex} className="flex items-start space-x-4 bg-neutral-700/30 p-4 rounded-xl hover:bg-neutral-700/40 transition-colors duration-300">
                                    <span className="text-xl mt-0.5 text-purple-400 flex-shrink-0">
                                      {getSubIcon(content)}
                                    </span>
                                    <p className="text-neutral-300 leading-relaxed">
                                      <strong className="font-semibold text-neutral-200">
                                        {parts[0]}:
                                      </strong>{" "}
                                      {parts.slice(1).join(":")}
                                    </p>
                                  </div>
                                );
                              }

                              return (
                                <div key={lineIndex} className="flex items-start space-x-4 hover:bg-neutral-700/20 p-2 rounded-lg transition-colors duration-300">
                                  <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <p className="text-neutral-300 leading-relaxed">
                                    {content}
                                  </p>
                                </div>
                              );
                            }

                            return (
                              <p key={lineIndex} className="text-neutral-300 leading-relaxed bg-neutral-700/20 p-4 rounded-xl hover:bg-neutral-700/30 transition-colors duration-300">
                                {trimmedLine}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Skills Tags for Desktop */}
              <div className="mt-8 p-6 bg-neutral-800/40 rounded-2xl border border-neutral-700/40 hover:border-neutral-600/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4 flex items-center">
                  <FaCode className="mr-3 text-blue-400" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB", "Flutter", ".NET Core", "Python", "AI/ML", "Big Data", "SQL", "Flask"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-neutral-300 rounded-xl text-base border border-purple-500/40 hover:border-purple-400/60 hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;