// import AboutImage from "../assets/imga.jpeg";
// import { ABOUT_TEXT } from "..";
// import { 
//   FaUser, 
//   FaCode, 
//   FaTrophy, 
//   FaRocket, 
//   FaMobile, 
//   FaDatabase, 
//   FaGlobe,
//   FaAward,
//   FaGraduationCap
// } from "react-icons/fa";

// const About = () => {
//   const getIcon = (title) => {
//     switch (title) {
//       case "Who I Am": return <FaUser className="inline mr-3 text-purple-400" />;
//       case "What I Do": return <FaCode className="inline mr-3 text-blue-400" />;
//       case "Achievements & Recognitions": return <FaTrophy className="inline mr-3 text-yellow-400" />;
//       case "What I'm Working On": return <FaRocket className="inline mr-3 text-red-400" />;
//       default: return <FaUser className="inline mr-3" />;
//     }
//   };

//   const getSubIcon = (text) => {
//     if (text.includes("Full-Stack")) return <FaCode className="inline mr-2 text-green-400" />;
//     if (text.includes("Mobile")) return <FaMobile className="inline mr-2 text-indigo-400" />;
//     if (text.includes("Data & AI")) return <FaDatabase className="inline mr-2 text-orange-400" />;
//     if (text.includes("Cross-Tech")) return <FaGlobe className="inline mr-2 text-teal-400" />;
//     if (text.includes("Nominated")) return <FaAward className="inline mr-2 text-yellow-500" />;
//     if (text.includes("Selected")) return <FaGraduationCap className="inline mr-2 text-blue-500" />;
//     return null;
//   };

//   return (
//     <section id="about" className="border-b border-neutral-800 pb-12 bg-gradient-to-br from-neutral-900 to-neutral-950">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <h1 className="my-20 text-center text-4xl">
//           About <span className="text-neutral-500">Me</span>
//         </h1>
        
//         <div className="flex flex-row items-stretch gap-8">
//           {/* Image Section (Left) */}
//           <div className="w-full lg:w-1/2 lg:p-8">
//             <div className="flex justify-center">
//               <img
//                 className="rounded-2xl"
//                 src={AboutImage}
//                 alt="A personal photo or representation"
//               />
//             </div>
//           </div>

//           {/* Text Section (Right) */}
//           <div className="w-3/5">
//             <div className="space-y-8">
//               {ABOUT_TEXT.split("\n\n").map((paragraph, index) => {
//                 const lines = paragraph.split("\n");
//                 const titleLine = lines[0];
//                 const titleMatch = titleLine.match(/[^👩‍💻📱🎯🚀\s].+/);
//                 const title = titleMatch ? titleMatch[0] : "";

//                 return (
//                   <div key={index} className="group">
//                     <div className="bg-neutral-800/50 rounded-xl p-6 hover:bg-neutral-800/70 transition-all duration-300 border border-neutral-700/50 hover:border-neutral-600/50">
//                       <h2 className="text-2xl font-bold text-neutral-200 mb-4 flex items-center">
//                         {getIcon(title)}
//                         {title}
//                       </h2>
                      
//                       <div className="space-y-3">
//                         {lines.slice(1).map((line, lineIndex) => {
//                           const trimmedLine = line.trim();
//                           if (!trimmedLine) return null;

//                           if (trimmedLine.startsWith("-") || trimmedLine.endsWith(".")) {
//                             const content = trimmedLine.startsWith("-") 
//                               ? trimmedLine.slice(1).trim() 
//                               : trimmedLine;

//                             const parts = content.split(":");
//                             if (parts.length > 1) {
//                               return (
//                                 <div key={lineIndex} className="flex items-start space-x-3">
//                                   <span className="text-lg mt-1 text-purple-400">
//                                     {getSubIcon(content)}
//                                   </span>
//                                   <p className="text-neutral-300 leading-relaxed">
//                                     <strong className="font-semibold text-neutral-200">
//                                       {parts[0]}:
//                                     </strong>{" "}
//                                     {parts.slice(1).join(":")}
//                                   </p>
//                                 </div>
//                               );
//                             }

//                             return (
//                               <div key={lineIndex} className="flex items-start space-x-3">
//                                 <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
//                                 <p className="text-neutral-300 leading-relaxed">
//                                   {content}
//                                 </p>
//                               </div>
//                             );
//                           }

//                           return (
//                             <p key={lineIndex} className="text-neutral-300 leading-relaxed text-justify">
//                               {trimmedLine}
//                             </p>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Skills Tags */}
//             <div className="mt-8 p-6 bg-neutral-800/30 rounded-xl border border-neutral-700/30">
//               <h3 className="text-lg font-semibold text-neutral-200 mb-4 flex items-center">
//                 <FaCode className="mr-2 text-blue-400" />
//                 Technical Skills
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {["React", "Node.js", "MongoDB", "Flutter", ".NET Core", "Python", "AI/ML", "Big Data", "SQL", "Flask"].map((skill) => (
//                   <span 
//                     key={skill}
//                     className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-neutral-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

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
  FaGraduationCap
} from "react-icons/fa";

const About = () => {
  const getIcon = (title) => {
    switch (title) {
      case "Who I Am": return <FaUser className="inline mr-3 text-purple-400" />;
      case "What I Do": return <FaCode className="inline mr-3 text-blue-400" />;
      case "Achievements & Recognitions": return <FaTrophy className="inline mr-3 text-yellow-400" />;
      case "What I'm Working On": return <FaRocket className="inline mr-3 text-red-400" />;
      default: return <FaUser className="inline mr-3" />;
    }
  };

  const getSubIcon = (text) => {
    if (text.includes("Full-Stack")) return <FaCode className="inline mr-2 text-green-400" />;
    if (text.includes("Mobile")) return <FaMobile className="inline mr-2 text-indigo-400" />;
    if (text.includes("Data & AI")) return <FaDatabase className="inline mr-2 text-orange-400" />;
    if (text.includes("Cross-Tech")) return <FaGlobe className="inline mr-2 text-teal-400" />;
    if (text.includes("Nominated")) return <FaAward className="inline mr-2 text-yellow-500" />;
    if (text.includes("Selected")) return <FaGraduationCap className="inline mr-2 text-blue-500" />;
    return null;
  };

  return (
    <section id="about" className="border-b border-neutral-800 pb-12 bg-gradient-to-br from-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        
        {/* Mobile Version - shown on small screens */}
        <div className="block lg:hidden">
          <div className="flex flex-wrap">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <img
                  className="rounded-2xl"
                  src={AboutImage}
                  alt="A personal photo or representation"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col justify-center mb-4 text-neutral-400">
                {ABOUT_TEXT.split("\n").map((line, index) => {
                  const trimmedLine = line.trim();

                  // Bold specific headings
                  if (
                    ["What I Do", "Who I Am", "What I'm Working On", "Hackathon Adventures"].includes(
                      trimmedLine
                    )
                  ) {
                    return (
                      <h2
                        key={index}
                        className="mb-4 text-xl font-bold text-neutral-400"
                      >
                        {trimmedLine}
                      </h2>
                    );
                  }

                  // Bold parts with a colon (e.g., "Web Development:")
                  const parts = trimmedLine.split(":");
                  if (parts.length > 1) {
                    return (
                      <p key={index} className="mb-4 text-neutral-500">
                        <strong className="font-bold text-neutral-400">
                          {parts[0]}:
                        </strong>{" "}
                        {parts.slice(1).join(":").trim()}
                      </p>
                    );
                  }

                  // Bullet points
                  if (trimmedLine.startsWith("-")) {
                    return (
                      <li
                        key={index}
                        className="ml-4 list-disc text-neutral-300 mb-4"
                      >
                        {trimmedLine.slice(1).trim()}
                      </li>
                    );
                  }

                  // Regular paragraphs
                  if (trimmedLine) {
                    return (
                      <p key={index} className="mb-4 text-neutral-400">
                        {trimmedLine}
                      </p>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version - shown on large screens */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-stretch gap-8">
            {/* Image Section (Left) */}
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <img
                  className="rounded-2xl"
                  src={AboutImage}
                  alt="A personal photo or representation"
                />
              </div>
            </div>

            {/* Text Section (Right) */}
            <div className="w-3/5">
              <div className="space-y-8">
                {ABOUT_TEXT.split("\n\n").map((paragraph, index) => {
                  const lines = paragraph.split("\n");
                  const titleLine = lines[0];
                  const titleMatch = titleLine.match(/[^👩‍💻📱🎯🚀\s].+/);
                  const title = titleMatch ? titleMatch[0] : "";

                  return (
                    <div key={index} className="group">
                      <div className="bg-neutral-800/50 rounded-xl p-6 hover:bg-neutral-800/70 transition-all duration-300 border border-neutral-700/50 hover:border-neutral-600/50">
                        <h2 className="text-2xl font-bold text-neutral-200 mb-4 flex items-center">
                          {getIcon(title)}
                          {title}
                        </h2>
                        
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
                                  <div key={lineIndex} className="flex items-start space-x-3">
                                    <span className="text-lg mt-1 text-purple-400">
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
                                <div key={lineIndex} className="flex items-start space-x-3">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <p className="text-neutral-300 leading-relaxed">
                                    {content}
                                  </p>
                                </div>
                              );
                            }

                            return (
                              <p key={lineIndex} className="text-neutral-300 leading-relaxed text-justify">
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

              {/* Skills Tags - Desktop only */}
              <div className="mt-8 p-6 bg-neutral-800/30 rounded-xl border border-neutral-700/30">
                <h3 className="text-lg font-semibold text-neutral-200 mb-4 flex items-center">
                  <FaCode className="mr-2 text-blue-400" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Flutter", ".NET Core", "Python", "AI/ML", "Big Data", "SQL", "Flask"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-neutral-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors"
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
